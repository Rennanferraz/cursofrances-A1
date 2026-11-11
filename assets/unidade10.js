/* Parcours A1 — Unidade 10 · guia v0.29.
 * JavaScript nativo. Sem serviços de avaliação, instalação ou envio de respostas.
 * IDs/armazenamento da U1 intactos. Rascunhos U10 antigos são preservados.
 */
window.PARCOURS_U10_PORTABLE = false;
(() => {
  'use strict';
  const $ = (s, r = document) => r?.querySelector(s) || null;
  const $$ = (s, r = document) => Array.from(r?.querySelectorAll(s) || []);
  const source = $('#u10-data');
  if (!source) return;
  let data;
  try { data = JSON.parse(source.textContent); }
  catch (error) { console.error('Unidade 10: dados inválidos.', error); return; }
  if (!Array.isArray(data.missions) || !data.groups) return;
  const roots = new Map($$('[data-u10-view]').map(el => [el.dataset.u10View, el]));
  const missions = new Map(data.missions.map(m => [m.id, m]));
  const questions = new Map(Object.entries(data.groups).flatMap(([n, g]) =>
    g.items.map(q => [q.id, { ...q, exercise: n }])));
  const dirty = new Set(), checked = new Set(), explanations = new Set();
  const legacy = new Map();
  let active = false, current = 'overview', lastMission = 'm01';
  const footer = $('.site-footer .page-wrap span');
  const originalFooter = footer?.textContent;
  const key = id => `parcours-a1-u10-${id}-v1`;
  const norm = value => String(value).normalize('NFC').replace(/[’‘`]/g, "'")
    .replace(/\s*'\s*/g, "'").replace(/[.!?]+\s*$/, '').replace(/\s+/g, ' ')
    .trim().toLocaleLowerCase('fr');
  const groupNorm = (value, n) => n === '45'
    ? norm(value).replace(/[–—,;-]/g, ' ').replace(/\s+/g, ' ').trim() : norm(value);
  const frenchRoot = el => el?.closest('[data-u10-view]')?.dataset.u10View;
  const rootFields = id => $$('[data-u10-field]', roots.get(id));
  const stop = () => document.dispatchEvent(new Event('parcours:speech-stop'));
  function status(id, text) { const el = $(`[data-u10-status="${id}"]`); if (el) el.textContent = text; }
  function workspace(text) { const el = $('[data-u10-workspace-status]'); if (el) el.textContent = text; }
  function markDirty(id) {
    if (!missions.has(id)) return;
    dirty.add(id); status(id, 'Há alterações não salvas. Salve ou baixe uma cópia antes de sair.');
  }
  function hash() { try { return decodeURIComponent(location.hash.slice(1)); } catch { return ''; } }
  const isRoute = () => /^unidade-10$|^u10-/.test(hash());
  function closeSheet() { const dialog = $('#resource-dialog'); if (dialog?.open) dialog.close(); }
  function show(focus = true) {
    stop(); closeSheet(); active = true;
    if (footer) footer.textContent = 'Parcours A1 · Unité 10 · Guia interativo v0.29';
    const target = document.getElementById(hash());
    const root = target?.closest('[data-u10-view]') || roots.get('overview');
    if (!root) return;
    const next = root.dataset.u10View, changed = current !== next; current = next;
    if (missions.has(next)) lastMission = next;
    $$('#main-content > [data-view]').forEach(el => { el.hidden = true; el.classList.remove('is-visible'); });
    roots.forEach(el => { el.hidden = el !== root; el.classList.toggle('is-visible', el === root); });
    const header = $('.header-action');
    if (header) {
      const mission = missions.get(lastMission), label = $('span', header);
      if (label) label.textContent = lastMission.startsWith('m') ? 'Missão ' + Number(lastMission.slice(1)) : 'Unidade 10';
      header.setAttribute('aria-label', 'Abrir ' + (mission?.short || 'Unidade 10'));
    }
    document.title = (missions.get(next)?.title || 'Unidade 10 — Le passé') + ' · Parcours A1';
    const heading = $('h1', root), dest = target && target !== root ? target : heading;
    if (dest) {
      for (let parent = dest.parentElement; parent && parent !== root; parent = parent.parentElement)
        if (parent.tagName === 'DETAILS') parent.open = true;
      if (dest.tagName === 'DETAILS') dest.open = true;
      if (!dest.hasAttribute('tabindex')) dest.setAttribute('tabindex', '-1');
      if (focus) dest.focus({ preventScroll: true });
      if (dest === heading) window.scrollTo({ top: 0, behavior: 'instant' });
      else dest.scrollIntoView({ block: 'start', behavior: 'instant' });
    }
    if (changed && matchMedia('(max-width:860px)').matches) {
      const list = $('.sidebar-lessons', root), item = $('.sidebar-lessons .is-active', root);
      if (list && item) list.scrollLeft += item.getBoundingClientRect().left - list.getBoundingClientRect().left;
    }
  }
  function hide() {
    if (!active) return;
    stop(); closeSheet(); active = false;
    if (footer) footer.textContent = originalFooter;
    roots.forEach(el => { el.hidden = true; el.classList.remove('is-visible'); });
  }
  window.ParcoursU10 = Object.freeze({ isRoute, show, hide });
  function navigate(id) { if (location.hash === '#' + id) show(); else location.hash = id; }
  document.addEventListener('click', ev => {
    if (!isRoute()) return;
    const target = ev.target.closest('button,a'); if (!target) return;
    if (target.classList.contains('skip-link')) {
      ev.preventDefault(); ev.stopImmediatePropagation(); $('h1', roots.get(current))?.focus(); return;
    }
    if (!target.closest('.site-header')) return;
    if (target.dataset.viewTarget) {
      ev.preventDefault(); ev.stopImmediatePropagation();
      navigate(target.dataset.viewTarget === 'lesson' ? 'u10-' + lastMission : 'unidade-10');
    } else if (target.dataset.openSheet === 'library') {
      ev.preventDefault(); ev.stopImmediatePropagation();
      document.dispatchEvent(new CustomEvent('parcours:open-sheet', { detail: { name: 'u10-library', opener: target } }));
    }
  }, true);

  function getValue(q) {
    const els = $$(`[data-u10-field="${q.id}"]`);
    const selected = els.find(el => el.tagName === 'SELECT');
    if (selected) return selected.value;
    return q.options ? els.find(el => el.checked)?.value ?? '' : els[0]?.value ?? '';
  }
  function accepted(q, value) { return q.answers.some(answer => groupNorm(answer, q.exercise) === groupNorm(value, q.exercise)); }
  function renderQuestion(q, force = false) {
    if (!q) return;
    const root = $(`[data-u10-question="${q.id}"]`), feedback = $('#' + q.id + '-feedback');
    if (!root || !feedback) return;
    root.classList.remove('is-correct', 'is-incorrect'); feedback.textContent = '';
    const inputs = $$('input:not([type=hidden]),select', root);
    inputs.forEach(input => input.removeAttribute('aria-invalid'));
    const value = getValue(q);
    const explanation = $('#' + q.id + '-explanation');
    if (explanation) {
      explanation.hidden = !explanations.has(q.exercise);
      explanation.textContent = explanations.has(q.exercise) ? q.explanation || '' : '';
    }
    if (!checked.has(q.id)) return;
    if (!value.trim()) { if (force) feedback.textContent = 'Responda a este item para conferir.'; return; }
    const correct = accepted(q, value);
    root.classList.add(correct ? 'is-correct' : 'is-incorrect');
    if (!correct) inputs.forEach(input => input.setAttribute('aria-invalid', 'true'));
    const hint = typeof q.hint === 'string' ? q.hint.trim() : '';
    const withoutMarks = text => String(text).normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const accents = !correct && !q.options && q.answers.some(answer =>
      withoutMarks(groupNorm(answer, q.exercise)) === withoutMarks(groupNorm(value, q.exercise)));
    feedback.textContent = correct
      ? q.successFeedback || 'Muito bem! Sua resposta está correta.'
      : accents ? 'Revise os acentos e a cedilha da sua resposta e confira novamente.'
      : hint ? 'Vamos revisar? ' + hint + ' Tente novamente.'
      : 'Retome o enunciado e os exemplos desta atividade e tente novamente.';
  }
  function updateResult(n) {
    const group = data.groups[n], el = $(`[data-u10-result="${n}"]`); if (!group || !el) return;
    let filled = 0, evaluated = 0, correct = 0;
    for (const item of group.items) {
      const q = questions.get(item.id), value = getValue(q);
      if (value.trim()) filled++;
      if (checked.has(q.id) && value.trim()) { evaluated++; if (accepted(q, value)) correct++; }
    }
    el.textContent = `${filled}/${group.items.length} preenchidos · ${evaluated} conferidos · ${correct} corretos. ` +
      (evaluated ? (correct === evaluated && filled === group.items.length ? 'Reveja as explicações e continue.' : 'Use as pistas para revisar.') : 'Responda no seu ritmo.');
  }
  function check(n) {
    const group = data.groups[n]; if (!group) return;
    group.items.forEach(item => { checked.add(item.id); renderQuestion(questions.get(item.id), true); });
    updateResult(n); markDirty(frenchRoot($(`[data-u10-exercise="${n}"]`)));
  }
  function reset(n) {
    const group = data.groups[n]; if (!group || !confirm('Apagar somente as respostas objetivas deste exercício? Seus textos livres serão preservados.')) return;
    explanations.delete(n);
    const explanationButton = $(`[data-u10-explain="${n}"]`);
    if (explanationButton) { explanationButton.setAttribute('aria-expanded', 'false'); explanationButton.textContent = 'Ver explicações'; }
    group.items.forEach(item => {
      checked.delete(item.id);
      $$(`[data-u10-field="${item.id}"]`).forEach(el => { if (el.type === 'radio') el.checked = false; else el.value = ''; });
      renderQuestion(questions.get(item.id));
    });
    syncWidgets(); updateResult(n); markDirty(frenchRoot($(`[data-u10-exercise="${n}"]`)));
  }
  function explain(n, button) {
    if (!data.groups[n]) return;
    const visible = !explanations.has(n);
    if (visible) explanations.add(n); else explanations.delete(n);
    button.setAttribute('aria-expanded', String(visible)); button.textContent = visible ? 'Ocultar explicações' : 'Ver explicações';
    data.groups[n].items.forEach(q => renderQuestion(questions.get(q.id)));
  }

  // A reordered list stores the same answer/key that existed before this revision.
  function orderLabels(list) {
    Array.from(list.children).forEach((li, index, all) => {
      $('.u10-order-number', li).textContent = String(index + 1).padStart(2, '0');
      $('[data-order-move="-1"]', li).disabled = index === 0;
      $('[data-order-move="1"]', li).disabled = index === all.length - 1;
    });
  }
  function moveOrder(button) {
    const li = button.closest('[data-order-key]'), list = li?.parentElement; if (!list) return;
    const direction = Number(button.dataset.orderMove);
    const sibling = direction < 0 ? li.previousElementSibling : li.nextElementSibling;
    if (!sibling) return;
    if (direction < 0) list.insertBefore(li, sibling); else list.insertBefore(sibling, li);
    const input = document.getElementById(list.dataset.u10Order);
    input.value = Array.from(list.children).map(el => el.dataset.orderKey).join(' ');
    orderLabels(list);
    // Focus stays on the moved phrase, even when its previous arrow becomes disabled.
    (button.disabled ? $('button:not(:disabled)', li) : button)?.focus({ preventScroll: true });
    const out = $('[data-order-status]', list.parentElement);
    if (out) out.textContent = 'Frase movida para a posição ' + (Array.from(list.children).indexOf(li) + 1) + '.';
    input.dispatchEvent(new Event('input', { bubbles: true }));
  }
  function syncWidgets() {
    $$('[data-u10-order]').forEach(list => {
      const field = document.getElementById(list.dataset.u10Order);
      const desired = field?.value.trim().split(/\s+/).filter(Boolean) || [];
      const cards = new Map(Array.from(list.children).map(li => [li.dataset.orderKey, li]));
      const order = desired.length === cards.size && new Set(desired).size === cards.size && desired.every(k => cards.has(k))
        ? desired : Array.from(cards.keys()).sort();
      order.forEach(k => list.append(cards.get(k))); orderLabels(list);
    });
    $$('[data-classified]').forEach(host => {
      $$('[data-category] ul', host).forEach(list => list.replaceChildren());
      const group = data.groups[host.dataset.classified]; if (!group) return;
      for (const item of group.items) {
        const value = getValue(item), col = $$('[data-category]', host).find(el => el.dataset.category === value);
        if (col) { const li = document.createElement('li'); li.lang = 'fr'; li.textContent = item.prompt; $('ul', col).append(li); }
      }
    });
    $$('[data-u10-legacy]').forEach(el => { el.hidden = !$$('[data-u10-field]', el).some(input => String(input.value || '').trim()); });
    boardRender();
  }

  function collect(id) {
    const fields = Object.assign(Object.create(null), legacy.get(id) || {});
    rootFields(id).forEach(el => {
      const name = el.dataset.u10Field;
      if (el.type === 'radio') { if (!(name in fields)) fields[name] = ''; if (el.checked) fields[name] = el.value; }
      else fields[name] = el.type === 'checkbox' ? el.checked : el.value;
    });
    return { mission: id, fields, checked: [...checked].filter(qid => frenchRoot($(`[data-u10-question="${qid}"]`)) === id) };
  }
  function validate(state) {
    if (!state || !missions.has(state.mission) || !state.fields || typeof state.fields !== 'object' || Array.isArray(state.fields))
      throw new Error('Etapa ou campos inválidos.');
    if (Object.keys(state.fields).length > 3000) throw new Error('Excesso de campos.');
    for (const [name, value] of Object.entries(state.fields)) {
      if (['__proto__', 'constructor', 'prototype'].includes(name) || name.length > 200) throw new Error('Identificador inválido.');
      if (typeof value !== 'boolean' && (typeof value !== 'string' || value.length > 12000)) throw new Error('Campo inválido.');
    }
    if (state.checked !== undefined && (!Array.isArray(state.checked) || state.checked.some(x => typeof x !== 'string')))
      throw new Error('Verificações inválidas.');
  }
  function retainOld(id, fields) {
    const host = $(`[data-u10-older-fields="${id}"]`); if (host) host.replaceChildren();
    const known = new Set(rootFields(id).map(el => el.dataset.u10Field));
    const saved = Object.create(null);
    for (const [name, value] of Object.entries(fields)) if (!known.has(name)) saved[name] = value;
    legacy.set(id, saved);
    const meaningful = Object.entries(saved).filter(([, v]) => v === true || typeof v === 'string' && v.trim());
    if (!host || !meaningful.length) return;
    const details = document.createElement('details'), summary = document.createElement('summary');
    details.className = 'learning-details u10-legacy'; summary.textContent = 'Respostas anteriores preservadas (' + meaningful.length + ')'; details.append(summary);
    const body = document.createElement('div'); body.className = 'details-content';
    const intro = document.createElement('p'); intro.textContent = 'Estes campos mudaram de formato. Suas respostas continuam no salvamento e na cópia JSON; use-as ao preencher a nova atividade.'; body.append(intro);
    meaningful.forEach(([name, value], i) => {
      const wrap = document.createElement('div'); wrap.className = 'u10-field';
      const label = document.createElement('label'), el = document.createElement(typeof value === 'boolean' ? 'input' : 'textarea');
      el.id = 'u10-legacy-' + id + '-' + i; label.htmlFor = el.id; label.textContent = name;
      el.dataset.u10Field = name; el.dataset.u10Label = 'Rascunho anterior: ' + name;
      if (typeof value === 'boolean') { el.type = 'checkbox'; el.checked = value; }
      else { el.value = value; el.rows = 3; el.maxLength = 12000; }
      wrap.append(label, el); body.append(wrap);
    });
    details.append(body); host.append(details);
  }
  function apply(state) {
    validate(state); const id = state.mission;
    // Remove previous compatibility UI before identifying fields in the new layout.
    $(`[data-u10-older-fields="${id}"]`)?.replaceChildren();
    rootFields(id).forEach(el => {
      const value = state.fields[el.dataset.u10Field];
      if (el.type === 'radio') el.checked = value === el.value;
      else if (el.type === 'checkbox') el.checked = value === true;
      else el.value = typeof value === 'string' ? value.slice(0, el.maxLength > 0 ? el.maxLength : 12000) : '';
    });
    retainOld(id, state.fields);
    questions.forEach(q => {
      if (frenchRoot($(`[data-u10-question="${q.id}"]`)) !== id) return;
      checked.delete(q.id); if ((state.checked || []).includes(q.id)) checked.add(q.id); renderQuestion(q);
    });
    Object.keys(data.groups).forEach(updateResult); syncWidgets();
  }
  function save(id) {
    try {
      localStorage.setItem(key(id), JSON.stringify({ schema: 1, unit: 'a1-u10', version: data.version, savedAt: new Date().toISOString(), state: collect(id) }));
      dirty.delete(id); status(id, 'Salvo neste navegador. Não enviado ao professor.'); return true;
    } catch { status(id, 'O navegador bloqueou o salvamento. Baixe uma cópia para não perder as respostas.'); return false; }
  }
  function download(content, name, type) {
    try {
      const blob = new Blob([type.startsWith('text/') ? '\uFEFF' : '', content], { type });
      const url = URL.createObjectURL(blob), a = document.createElement('a'); a.href = url; a.download = name;
      document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 30000);
      workspace('Download solicitado. Confira o arquivo antes de fechar.');
    } catch { workspace('Não foi possível iniciar o download. Copie suas respostas antes de fechar a página.'); }
  }
  function exportText(ids) {
    const lines = ['PARCOURS A1 — UNIDADE 10', new Date().toLocaleString('pt-BR'), 'Rascunhos locais; sem avaliação automática da produção livre.'];
    ids.forEach(id => {
      lines.push('\n' + missions.get(id).title); const state = collect(id), labels = new Map(rootFields(id).map(el => [el.dataset.u10Field, el.dataset.u10Label]));
      for (const [name, value] of Object.entries(state.fields)) {
        if (name === 'u10-memory-state') continue;
        lines.push('\n' + (labels.get(name) || 'Rascunho anterior: ' + name), typeof value === 'boolean' ? value ? '[x]' : '[ ]' : value || '[não preenchido]');
      }
    });
    download(lines.join('\n'), ids.length === 1 ? `Parcours_A1_U10_${ids[0]}_respostas.txt` : 'Parcours_A1_Unidade10_respostas.txt', 'text/plain;charset=utf-8');
  }
  function clear(id) {
    if (!missions.has(id) || !confirm('Apagar as respostas desta etapa? A Unidade 1 e as outras etapas serão preservadas.')) return;
    let removed = true; try { localStorage.removeItem(key(id)); } catch { removed = false; }
    apply({ mission: id, fields: {}, checked: [] }); legacy.delete(id); dirty.delete(id);
    status(id, removed ? 'Respostas desta etapa apagadas.' : 'Página limpa, mas o armazenamento foi bloqueado. Confira o navegador.');
    if (id === 'm03') memoryReset(false);
  }
  function zoom(asset, opener) {
    const item = data.assets[asset], host = $('#u10-media-content'); if (!item || !host) return;
    host.replaceChildren(); const img = document.createElement('img');
    img.src = item.file.startsWith('data:') ? item.file : 'assets/unidade10/' + item.file;
    img.alt = item.alt; img.width = item.width; img.height = item.height; host.append(img);
    document.dispatchEvent(new CustomEvent('parcours:open-sheet', { detail: { name: 'u10-media', opener } }));
  }

  // Learning games: no microphone, no automatic assessment of personal narratives.
  function random(max) {
    if (globalThis.crypto?.getRandomValues) {
      const a = new Uint32Array(1); crypto.getRandomValues(a); return a[0] % max;
    }
    return Math.floor(Math.random() * max);
  }
  function boardPosition() { return Math.max(1, Math.min(24, Number($('#u10-board-position')?.value) || 1)); }
  function boardRender() {
    if (!data.board) return; const position = boardPosition(), root = $('[data-board]'); if (!root) return;
    $$('[data-board-cell]', root).forEach(button => {
      const here = Number(button.dataset.boardCell) === position;
      button.classList.toggle('is-current', here);
      if (here) button.setAttribute('aria-current', 'step'); else button.removeAttribute('aria-current');
    });
    $('[data-board-prompt]', root).textContent = data.board.prompts[position - 1];
    const model = data.board.models[position];
    $('[data-board-model]', root).textContent = model
      ? 'Compare sua resposta: « ' + model + ' ». Verifique o auxiliar, o particípio e o sentido solicitado.'
      : 'Responda à tarefa da casa. Releia as formas verbais e as informações pedidas; em dupla, compare com seu parceiro. Não há uma única resposta para um relato pessoal.';
    $('[data-board-roll]', root).disabled = position === 24;
  }
  function boardSet(position, message) {
    const field = $('#u10-board-position'); if (!field) return;
    field.value = String(position); boardRender(); $('[data-board-status]').textContent = message;
    $('[data-board-help]').open = false;
    // Keep the previous response until the learner chooses to edit it.
    field.dispatchEvent(new Event('input', { bubbles: true }));
  }
  function boardRoll() {
    const roll = random(6) + 1, old = boardPosition(); let next = Math.min(24, old + roll);
    let message = 'Dado: ' + roll + '. Case ' + next + '.';
    if (next === 6) { next = 8; message += ' Bônus: avance duas casas, até a case 8.'; }
    else if (next === 21) { next = 18; message += ' Recue três casas, até a case 18.'; }
    else if (next === 12) message += ' Passe este turno. Na próxima jogada, lance novamente.';
    else if (next === 16) message += ' Bônus: jogue novamente.';
    else if (next === 24) message += ' Você chegou ao final!';
    boardSet(next, message);
  }
  let memoryDeck = [], memoryOpen = [], memoryFound = new Set(), memoryTimer = null;
  function memoryReset(mark = true) {
    if (!data.memory) return;
    if (memoryTimer) clearTimeout(memoryTimer); memoryTimer = null;
    memoryOpen = []; memoryFound = new Set();
    memoryDeck = data.memory.flatMap((pair, id) => pair.map((text, side) => ({ text, id, side })));
    for (let i = memoryDeck.length - 1; i > 0; i--) { const j = random(i + 1); [memoryDeck[i], memoryDeck[j]] = [memoryDeck[j], memoryDeck[i]]; }
    memoryRender(); if (mark) markDirty('m03');
  }
  function memoryRender() {
    const grid = $('[data-memory-grid]'); if (!grid || !data.memory) return;
    const focus = document.activeElement?.dataset.memoryCard;
    grid.replaceChildren();
    memoryDeck.forEach((card, i) => {
      const button = document.createElement('button'), visible = memoryOpen.includes(i) || memoryFound.has(card.id);
      button.type = 'button'; button.dataset.memoryCard = String(i); button.lang = 'fr';
      button.className = 'u10-memory-card' + (memoryFound.has(card.id) ? ' is-matched' : visible ? ' is-open' : '');
      button.textContent = visible ? card.text : String(i + 1).padStart(2, '0');
      button.setAttribute('aria-label', visible ? card.text + (memoryFound.has(card.id) ? ' — paire trouvée' : '') : 'Retourner la carte ' + (i + 1));
      button.setAttribute('aria-pressed', String(visible));
      button.setAttribute('aria-disabled', String(memoryFound.has(card.id))); grid.append(button);
    });
    const out = $('[data-memory-status]');
    out.textContent = memoryFound.size === data.memory.length ? 'Todos os pares encontrados. Use um deles em uma frase.' : `${memoryFound.size}/${data.memory.length} pares encontrados. Escolha duas cartas.`;
    if (focus !== undefined) $(`[data-memory-card="${focus}"]`, grid)?.focus({ preventScroll: true });
  }
  function memoryPick(index) {
    const card = memoryDeck[index]; if (!card || memoryTimer || memoryFound.has(card.id) || memoryOpen.includes(index)) return;
    memoryOpen.push(index); memoryRender();
    if (memoryOpen.length === 2) {
      const [a, b] = memoryOpen.map(i => memoryDeck[i]);
      if (a.id === b.id) { memoryFound.add(a.id); memoryOpen = []; memoryRender(); }
      else {
        $('[data-memory-status]').textContent = 'Essas cartas não formam um par. Observe e tente novamente.';
        memoryTimer = setTimeout(() => { memoryOpen = []; memoryTimer = null; memoryRender(); }, 1600);
      }
    }
  }
  function conductorCheck() {
    const game = data.games?.conductor; if (!game) return;
    game.phrases.forEach((phrase, i) => {
      const field = $(`[data-u10-field="u10-m01-s14-time-${i}"]`), out = $(`[data-conductor-feedback="${i}"]`);
      const rewrite = $(`[data-u10-field="u10-m01-s14-past-${i}"]`);
      if (!field || !out) return;
      field.removeAttribute('aria-invalid'); rewrite?.removeAttribute('aria-invalid');
      if (!field.value) { out.textContent = 'Escolha o tempo da frase.'; return; }
      if (field.value !== game.categories[i]) {
        field.setAttribute('aria-invalid', 'true'); out.textContent = 'Observe a forma verbal: uma ação atual, uma ação terminada ou um plano? Tente novamente.'; return;
      }
      if (rewrite) {
        if (!rewrite.value.trim()) { out.textContent = 'Você identificou o presente. Agora transforme a frase começando por « Hier, … ».'; return; }
        if (norm(rewrite.value) !== norm(game.models[i])) { rewrite.setAttribute('aria-invalid', 'true'); out.textContent = 'O tempo está certo. Na transformação, use « Hier, j’ai » e o particípio em -é.'; return; }
      }
      out.textContent = 'Muito bem! ' + game.categories[i] + (rewrite ? ' — ' + game.models[i] : '.');
    });
  }
  document.addEventListener('click', ev => {
    const el = ev.target.closest('button,a'); if (!el) return;
    if (el.dataset.u10Check) check(el.dataset.u10Check);
    else if (el.dataset.u10Reset) reset(el.dataset.u10Reset);
    else if (el.dataset.u10Explain) explain(el.dataset.u10Explain, el);
    else if (el.hasAttribute('data-order-move')) moveOrder(el);
    else if (el.dataset.u10Save) {
      const ids = el.dataset.u10Save === 'all' ? [...missions.keys()] : [el.dataset.u10Save];
      const results = ids.map(save); workspace(results.every(Boolean) ? 'Unidade 10 salva neste navegador.' : 'Algumas etapas não foram salvas. Baixe a cópia JSON.');
    } else if (el.dataset.u10Export) exportText(el.dataset.u10Export === 'all' ? [...missions.keys()] : [el.dataset.u10Export]);
    else if (el.dataset.u10Clear) clear(el.dataset.u10Clear);
    else if (el.hasAttribute('data-u10-backup')) download(JSON.stringify({ product: 'parcours-a1', unit: 'a1-u10', schema: 1, version: data.version, states: [...missions.keys()].map(collect) }, null, 2), 'Parcours_A1_Unidade10_rascunhos.json', 'application/json;charset=utf-8');
    else if (el.dataset.u10Zoom) zoom(el.dataset.u10Zoom, el);
    else if (el.hasAttribute('data-board-roll')) boardRoll();
    else if (el.hasAttribute('data-board-restart') && confirm('Recomeçar o tabuleiro? O texto da sua resposta será preservado.')) boardSet(1, 'Départ · case 1');
    else if (el.dataset.boardResult) {
      if (el.dataset.boardResult === 'retry') boardSet(Math.max(1, boardPosition() - 1), 'Recuou uma casa. Use a explicação para revisar.');
      else $('[data-board-status]').textContent = 'Revisão registrada nesta rodada. Lance o dado para continuar.';
    } else if (el.dataset.boardCell) {
      const i = Number(el.dataset.boardCell); $('[data-board-status]').textContent = 'Consulta à case ' + i + ': ' + data.board.prompts[i - 1] + ' Seu marcador continua na case ' + boardPosition() + '.';
    } else if (el.hasAttribute('data-conductor-check')) conductorCheck();
    else if (el.hasAttribute('data-memory-card')) memoryPick(Number(el.dataset.memoryCard));
    else if (el.hasAttribute('data-memory-reset')) memoryReset(false);
    else if (el.hasAttribute('data-question-dice')) {
      const words = ['Où ?', 'Quand ?', 'Avec qui ?', 'Qu’est-ce que ?', 'Comment ?', 'Pourquoi ?'];
      const i = random(6); $('[data-question-dice-result]').textContent = `Dado ${i + 1} · ${words[i]} Formule uma pergunta sobre o evento escolhido e prepare uma resposta completa.`;
    }
  });
  function changed(ev) {
    const el = ev.target; if (!el.matches?.('[data-u10-field]')) return;
    markDirty(frenchRoot(el));
    const q = questions.get(el.dataset.u10Field);
    if (q) { checked.delete(q.id); renderQuestion(q); updateResult(q.exercise); }
    if (el.tagName === 'SELECT' || el.type === 'radio') syncWidgets();
  }
  document.addEventListener('input', changed); document.addEventListener('change', changed);
  $('#u10-import')?.addEventListener('change', async ev => {
    const file = ev.target.files?.[0]; if (!file) return;
    try {
      if (file.size > 4_000_000) throw new Error('Arquivo maior que 4 MB.');
      const payload = JSON.parse(await file.text());
      if (payload.product !== 'parcours-a1' || payload.unit !== 'a1-u10' || payload.schema !== 1 || !Array.isArray(payload.states) || !payload.states.length || payload.states.length > missions.size)
        throw new Error('Use uma cópia exportada da Unidade 10.');
      payload.states.forEach(validate);
      if (new Set(payload.states.map(s => s.mission)).size !== payload.states.length) throw new Error('Etapas duplicadas.');
      if (!confirm('Substituir na página as respostas das etapas desta cópia? Faça um backup antes de confirmar.')) { workspace('Recuperação cancelada.'); return; }
      payload.states.forEach(state => { apply(state); markDirty(state.mission); });
      workspace('Respostas recuperadas na página. Use Salvar para mantê-las neste navegador.');
    } catch (error) { workspace('Não foi possível recuperar: ' + error.message); }
    finally { ev.target.value = ''; }
  });
  for (const id of missions.keys()) {
    try {
      const raw = localStorage.getItem(key(id)); if (!raw) continue;
      const payload = JSON.parse(raw);
      if (payload.schema !== 1 || payload.unit !== 'a1-u10' || payload.state?.mission !== id) throw new Error('Cópia incompatível');
      apply(payload.state); status(id, 'Rascunho recuperado deste navegador. Salve as novas alterações.');
    } catch { status(id, 'Rascunho não recuperado. Você ainda pode estudar e baixar uma cópia.'); }
  }
  syncWidgets(); memoryReset(false);
  window.addEventListener('beforeunload', ev => { if (dirty.size) { ev.preventDefault(); ev.returnValue = ''; } });
})();
