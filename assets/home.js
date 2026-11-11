/* Parcours A1 — home-v0.1-rc1 · entrega v0.22.
 * Apenas seleção de unidades e navegação. Não lê ou grava respostas,
 * não calcula progresso, não requisita rede e não altera o áudio.
 * Carregar antes de unidade10.js e app.js (defer, ou inline ao final do body).
 */
(() => {
  'use strict';
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));
  const home = $('#inicio');
  if (!home) return;
  const heading = $('#home-title');
  const unitNav = $('[data-course-unit-nav]');
  const homeNav = $('[data-course-home-nav]');
  const action = $('.header-action');
  const footer = $('.site-footer .page-wrap span');
  const originalFooter = footer?.textContent || '';
  let active = false;
  const homeRoutes = new Set(['', 'inicio', 'home-units', 'home-study']);

  function routeId() {
    try { return decodeURIComponent(location.hash.slice(1)); }
    catch { return ''; }
  }
  const isRoute = () => homeRoutes.has(routeId());
  function closePanels() {
    const dialog = $('#resource-dialog');
    if (dialog?.open) dialog.close();
    document.body.classList.remove('is-sheet-open');
  }
  function show(focus = true) {
    document.dispatchEvent(new Event('parcours:speech-stop'));
    closePanels();
    active = true;
    // Existing sections are only hidden; answers and DOM nodes are kept intact.
    $$('#main-content > .app-view').forEach(view => {
      const visible = view === home;
      view.hidden = !visible;
      view.classList.toggle('is-visible', visible);
    });
    document.body.classList.add('course-home-active');
    if (unitNav) unitNav.hidden = true;
    if (homeNav) homeNav.hidden = false;
    if (action) {
      action.removeAttribute('data-view-target');
      action.dataset.courseGo = 'home-units';
      $('span', action).textContent = 'Ver unidades';
      action.setAttribute('aria-label', 'Ver todas as unidades');
    }
    if (footer) footer.textContent = 'Parcours A1 · Seleção de unidades · home-v0.1-rc1';
    document.title = 'Francês A1 — Todas as unidades · Parcours';
    const id = routeId();
    const destination = id === 'home-units' || id === 'home-study' ? document.getElementById(id) : heading;
    homeNav?.querySelectorAll('a').forEach(link => {
      const selected = (id === 'home-study' ? '#home-study' : '#home-units') === link.getAttribute('href');
      link.classList.toggle('is-active', selected);
      if (selected) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    if (destination) {
      if (focus) destination.focus({preventScroll: true});
      if (destination === heading) window.scrollTo({top: 0, behavior: 'instant'});
      else destination.scrollIntoView({block: 'start', behavior: 'instant'});
    }
  }
  function hide() {
    home.hidden = true;
    home.classList.remove('is-visible');
    const wasActive = active;
    active = false;
    document.body.classList.remove('course-home-active');
    if (homeNav) homeNav.hidden = true;
    if (unitNav) unitNav.hidden = false;
    if (action) {
      delete action.dataset.courseGo;
      action.dataset.viewTarget = 'lesson';
    }
    if (footer && wasActive) footer.textContent = originalFooter;
    // The existing U1/U10 router immediately restores the contextual header label.
  }
  window.ParcoursHome = Object.freeze({isRoute, show, hide});

  function navigate(id) {
    closePanels();
    if (location.hash === '#' + id) show();
    else location.hash = id;
  }
  document.addEventListener('click', event => {
    const element = event.target.closest('a, button');
    if (!element) return;
    if (element.hasAttribute('data-course-go')) {
      event.preventDefault();
      event.stopImmediatePropagation();
      navigate(element.dataset.courseGo);
    } else if (element.classList.contains('skip-link') && isRoute()) {
      event.preventDefault();
      event.stopImmediatePropagation();
      heading.focus();
    } else if (element.matches('a[data-course-link]') &&
               !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey &&
               event.button === 0 && element.getAttribute('href') === location.hash && isRoute()) {
      // Native links handle all other navigation, including back/forward and new tabs.
      event.preventDefault();
      event.stopImmediatePropagation();
      show();
    }
  }, true);
})();
