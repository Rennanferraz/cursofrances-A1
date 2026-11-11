/* Parcours A1 — Unidade 10 · v0.20. JavaScript nativo, sem rede ou dependências.
 * Integração isolada: os IDs, rascunhos, questões e áudio da Unidade 1 não mudam.
 * Respostas livres não recebem nota. A comparação usa apenas o corrigé fornecido.
 */
window.PARCOURS_U10_PORTABLE = false;
(() => {
  'use strict';
  const $ = (s,r=document)=>r.querySelector(s);
  const $$ = (s,r=document)=>Array.from(r.querySelectorAll(s));
  const source=$('#u10-data');
  if(!source)return;
  let data;
  try{data=JSON.parse(source.textContent);}catch(err){console.error('Unidade 10: dados inválidos.',err);return;}
  const roots=new Map($$('[data-u10-view]').map(el=>[el.dataset.u10View,el]));
  const missions=new Map(data.missions.map(m=>[m.id,m]));
  const questions=new Map(Object.entries(data.groups).flatMap(([n,g])=>g.items.map(q=>[q.id,{...q,exercise:n}])));
  const dirty=new Set(),checked=new Set();
  let active=false,current='overview',lastMission='m01';
  const footerLabel=$('.site-footer .page-wrap span');
  const originalFooter=footerLabel?.textContent;
  const key=id=>`parcours-a1-u10-${id}-v1`;
  const norm=value=>String(value).normalize('NFC').replace(/[’‘`]/g,"'").replace(/\s*'\s*/g,"'").replace(/[.!?]+\s*$/,'').replace(/\s+/g,' ').trim().toLocaleLowerCase('fr');
  const groupNorm=(value,n)=>n==='45'?norm(value).replace(/[–—,;-]/g,' ').replace(/\s+/g,' ').trim():norm(value);
  const frenchRoot=el=>el?.closest('[data-u10-view]')?.dataset.u10View;
  const rootFields=id=>$$('[data-u10-field]',roots.get(id));
  const stop=()=>document.dispatchEvent(new Event('parcours:speech-stop'));
  function setStatus(id,text){const n=$(`[data-u10-status="${id}"]`);if(n)n.textContent=text;}
  function workspace(text){const el=$('[data-u10-workspace-status]');if(el)el.textContent=text;}
  function markDirty(id){if(!missions.has(id))return;dirty.add(id);setStatus(id,'Há alterações não salvas. Salve ou baixe uma cópia antes de sair.');}
  function hash(){try{return decodeURIComponent(location.hash.slice(1));}catch{return '';}}
  const isRoute=()=>/^unidade-10$|^u10-/.test(hash());
  function closeSheet(){const dialog=$('#resource-dialog');if(dialog?.open)dialog.close();}
  function show(focus=true){
    stop();closeSheet();active=true;
    if(footerLabel)footerLabel.textContent='Parcours A1 · Unité 10 · u10-v0.1-rc1';
    const target=document.getElementById(hash());
    const root=target?.closest('[data-u10-view]') || roots.get('overview');
    const next=root.dataset.u10View;const changed=current!==next;current=next;
    if(missions.has(next))lastMission=next;
    $$('#main-content > [data-view]').forEach(el=>{el.hidden=true;el.classList.remove('is-visible');});
    roots.forEach(el=>{el.hidden=el!==root;el.classList.toggle('is-visible',el===root);});
    const header=$('.header-action');
    if(header){const m=missions.get(lastMission);$('span',header).textContent=lastMission.startsWith('m')?'Missão '+Number(lastMission.slice(1)):'Unidade 10';header.setAttribute('aria-label','Abrir '+(m?.short||m?.title||'Unidade 10'));}
    document.title=(missions.get(next)?.title||'Unidade 10 — Le passé')+' · Parcours A1';
    const heading=$('h1',root);let dest=(target&&target!==root)?target:heading;
    if(dest){
      for(let p=dest.parentElement;p&&p!==root;p=p.parentElement)if(p.tagName==='DETAILS')p.open=true;
      if(dest.tagName==='DETAILS')dest.open=true;
      if(!dest.hasAttribute('tabindex'))dest.setAttribute('tabindex','-1');
      if(focus)dest.focus({preventScroll:true});
      if(dest===heading)window.scrollTo({top:0,behavior:'instant'});
      else dest.scrollIntoView({block:'start',behavior:'instant'});
    }
    if(changed&&matchMedia('(max-width:860px)').matches){const list=$('.sidebar-lessons',root),item=$('.sidebar-lessons .is-active',root);if(list&&item)list.scrollLeft+=item.getBoundingClientRect().left-list.getBoundingClientRect().left;}
  }
  function hide(){if(!active)return;stop();closeSheet();active=false;if(footerLabel)footerLabel.textContent=originalFooter;roots.forEach(el=>{el.hidden=true;el.classList.remove('is-visible');});}
  window.ParcoursU10=Object.freeze({isRoute,show,hide});
  function navigate(id){if(location.hash==='#'+id)show();else location.hash=id;}
  // Capture only the original header/skip actions when the U10 route is active.
  document.addEventListener('click',ev=>{
    if(!isRoute())return;
    const target=ev.target.closest('button,a');if(!target)return;
    if(target.classList.contains('skip-link')){
      ev.preventDefault();ev.stopImmediatePropagation();$('h1',roots.get(current))?.focus();return;
    }
    if(!target.closest('.site-header'))return;
    if(target.dataset.viewTarget){ev.preventDefault();ev.stopImmediatePropagation();navigate(target.dataset.viewTarget==='lesson'?'u10-'+lastMission:'unidade-10');}
    else if(target.dataset.openSheet==='library'){
      ev.preventDefault();ev.stopImmediatePropagation();document.dispatchEvent(new CustomEvent('parcours:open-sheet',{detail:{name:'u10-library',opener:target}}));
    }
  },true);
  function getValue(q){const els=$$(`[data-u10-field="${q.id}"]`);return q.options?els.find(el=>el.checked)?.value??'':els[0]?.value??'';}
  function renderQuestion(q,force=false){
    const root=$(`[data-u10-question="${q.id}"]`),feedback=$('#'+q.id+'-feedback');if(!root||!feedback)return;
    root.classList.remove('is-correct','is-incorrect');feedback.textContent='';
    const input=$('input[type=text]',root);input?.removeAttribute('aria-invalid');
    const value=getValue(q);
    if(!checked.has(q.id))return;
    if(!value.trim()){if(force)feedback.textContent='Preencha este item antes de conferir.';return;}
    const correct=q.answers.some(a=>groupNorm(a,q.exercise)===groupNorm(value,q.exercise));
    root.classList.add(correct?'is-correct':'is-incorrect');
    if(!correct&&input)input.setAttribute('aria-invalid','true');
    feedback.textContent=correct?'Corresponde ao corrigé do caderno.':'Confira a forma do corrigé: '+q.answers[0]+'. Acentos fazem parte da resposta. Outras formulações devem ser revistas com o professor.';
  }
  function updateResult(n){const group=data.groups[n];if(!group)return;const found=$(`[data-u10-result="${n}"]`);if(!found)return;
    let filled=0,ok=0,evaluated=0;
    for(const q of group.items){const value=getValue(q);if(value.trim())filled++;if(checked.has(q.id)&&value.trim()){evaluated++;if(q.answers.some(a=>groupNorm(a,n)===groupNorm(value,n)))ok++;}}
    found.textContent=`${filled}/${group.items.length} preenchidos · ${evaluated} conferidos · ${ok} correspondem ao corrigé. Treino, não nota oficial.`;
  }
  function check(n){const g=data.groups[n];if(!g)return;g.items.forEach(q=>{checked.add(q.id);renderQuestion(questions.get(q.id),true);});updateResult(n);markDirty(frenchRoot($(`[data-u10-exercise="${n}"]`)));}
  function reset(n){const g=data.groups[n];if(!g)return;if(!confirm('Apagar somente as respostas fechadas deste exercício?'))return;
    g.items.forEach(q=>{checked.delete(q.id);$$(`[data-u10-field="${q.id}"]`).forEach(el=>el.type==='radio'?el.checked=false:el.value='');renderQuestion(questions.get(q.id));});updateResult(n);markDirty(frenchRoot($(`[data-u10-exercise="${n}"]`)));
  }
  function collect(id){const fields={};rootFields(id).forEach(el=>{
    const name=el.dataset.u10Field;
    if(el.type==='radio'){if(!(name in fields))fields[name]='';if(el.checked)fields[name]=el.value;}
    else fields[name]=el.type==='checkbox'?el.checked:el.value;
  });return {mission:id,fields,checked:[...checked].filter(qid=>$(`[data-u10-question="${qid}"]`)?.closest('[data-u10-view]')?.dataset.u10View===id)};}
  function validate(state){if(!state||!missions.has(state.mission)||!state.fields||typeof state.fields!=='object'||Array.isArray(state.fields))throw new Error('Etapa ou campos inválidos.');
    if(Object.keys(state.fields).length>3000)throw new Error('Excesso de campos.');
    for(const value of Object.values(state.fields))if(typeof value!=='boolean'&&(typeof value!=='string'||value.length>12000))throw new Error('Campo inválido.');
    if(state.checked!==undefined&&(!Array.isArray(state.checked)||state.checked.some(x=>typeof x!=='string')))throw new Error('Verificações inválidas.');
  }
  function apply(state){validate(state);const id=state.mission;
    rootFields(id).forEach(el=>{const v=state.fields[el.dataset.u10Field];if(el.type==='radio')el.checked=v===el.value;else if(el.type==='checkbox')el.checked=v===true;else el.value=typeof v==='string'?v.slice(0,el.maxLength>0?el.maxLength:12000):'';});
    questions.forEach(q=>{if(frenchRoot($(`[data-u10-question="${q.id}"]`))===id){checked.delete(q.id);if((state.checked||[]).includes(q.id))checked.add(q.id);renderQuestion(q);}});
    Object.keys(data.groups).forEach(updateResult);
  }
  function save(id){try{localStorage.setItem(key(id),JSON.stringify({schema:1,unit:'a1-u10',version:data.version,savedAt:new Date().toISOString(),state:collect(id)}));dirty.delete(id);setStatus(id,'Salvo neste navegador. Não enviado ao professor.');return true;}catch{setStatus(id,'O navegador bloqueou o salvamento. Baixe uma cópia para não perder as respostas.');return false;}}
  function download(content,name,type){try{const blob=new Blob([type.startsWith('text/')?'\uFEFF':'',content],{type});const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);workspace('Download solicitado. Confira o arquivo antes de fechar.');}catch{workspace('Não foi possível iniciar o download. Copie suas respostas antes de fechar a página.');}}
  function exportText(ids){const lines=['PARCOURS A1 — UNIDADE 10',new Date().toLocaleString('pt-BR'),'Rascunhos locais; sem envio e sem avaliação automática de produção livre.'];
    ids.forEach(id=>{lines.push('\n'+missions.get(id).title);const state=collect(id),seen=new Set();rootFields(id).forEach(el=>{const k=el.dataset.u10Field;if(seen.has(k))return;seen.add(k);const value=state.fields[k];lines.push('\n'+(el.dataset.u10Label||k),typeof value==='boolean'?(value?'[x]':'[ ]'):value||'[não preenchido]');});});
    download(lines.join('\n'),ids.length===1?`Parcours_A1_U10_${ids[0]}_respostas.txt`:'Parcours_A1_Unidade10_respostas.txt','text/plain;charset=utf-8');
  }
  function clear(id){if(!missions.has(id)||!confirm('Apagar as respostas desta etapa da Unidade 10? A Unidade 1 e as outras etapas serão preservadas.'))return;let removed=true;try{localStorage.removeItem(key(id));}catch{removed=false;}apply({mission:id,fields:{},checked:[]});dirty.delete(id);setStatus(id,removed?'Respostas desta etapa apagadas.':'Página limpa, mas o armazenamento foi bloqueado. Confira o navegador.');}
  function zoom(asset,opener){const a=data.assets[asset];if(!a)return;const host=$('#u10-media-content');host.replaceChildren();const img=document.createElement('img');img.src=a.file.startsWith('data:')?a.file:'assets/unidade10/'+a.file;img.alt=a.alt;img.width=a.width;img.height=a.height;host.append(img);document.dispatchEvent(new CustomEvent('parcours:open-sheet',{detail:{name:'u10-media',opener}}));}
  document.addEventListener('click',ev=>{const el=ev.target.closest('button,a');if(!el)return;
    if(el.dataset.u10Check)check(el.dataset.u10Check);
    else if(el.dataset.u10Reset)reset(el.dataset.u10Reset);
    else if(el.dataset.u10Save){const ids=el.dataset.u10Save==='all'?[...missions.keys()]:[el.dataset.u10Save];const results=ids.map(save);workspace(results.every(Boolean)?'Unidade 10 salva neste navegador.':'Algumas etapas não foram salvas. Baixe a cópia JSON.');}
    else if(el.dataset.u10Export)exportText(el.dataset.u10Export==='all'?[...missions.keys()]:[el.dataset.u10Export]);
    else if(el.dataset.u10Clear)clear(el.dataset.u10Clear);
    else if(el.hasAttribute('data-u10-backup'))download(JSON.stringify({product:'parcours-a1',unit:'a1-u10',schema:1,version:data.version,states:[...missions.keys()].map(collect)},null,2),'Parcours_A1_Unidade10_rascunhos.json','application/json;charset=utf-8');
    else if(el.dataset.u10Zoom)zoom(el.dataset.u10Zoom,el);
    else if(el.hasAttribute('data-u10-dice')){const out=el.parentElement.querySelector('[data-u10-dice-result]');const array=new Uint32Array(1);let value;if(globalThis.crypto?.getRandomValues){crypto.getRandomValues(array);value=array[0]%6+1;}else value=Math.floor(Math.random()*6)+1;if(out)out.textContent='Dado: '+value+'. Aplique as regras do caderno com o professor.';}
  });
  function changed(ev){const el=ev.target;if(!el.matches('[data-u10-field]'))return;markDirty(frenchRoot(el));const q=questions.get(el.dataset.u10Field);if(q){checked.delete(q.id);renderQuestion(q);updateResult(q.exercise);}}
  document.addEventListener('input',changed);document.addEventListener('change',changed);
  $('#u10-import')?.addEventListener('change',async ev=>{const file=ev.target.files?.[0];if(!file)return;
    try{if(file.size>4_000_000)throw new Error('Arquivo maior que 4 MB.');const payload=JSON.parse(await file.text());if(payload.product!=='parcours-a1'||payload.unit!=='a1-u10'||payload.schema!==1||!Array.isArray(payload.states)||!payload.states.length||payload.states.length>missions.size)throw new Error('Use uma cópia exportada da Unidade 10.');
      payload.states.forEach(validate);if(new Set(payload.states.map(s=>s.mission)).size!==payload.states.length)throw new Error('Etapas duplicadas.');
      if(!confirm('Substituir na página as respostas das etapas desta cópia? Faça um backup antes de confirmar.')){workspace('Recuperação cancelada.');return;}
      payload.states.forEach(s=>{apply(s);markDirty(s.mission);});workspace('Respostas recuperadas na página. Use Salvar para mantê-las neste navegador.');
    }catch(err){workspace('Não foi possível recuperar: '+err.message);}finally{ev.target.value='';}
  });
  // localStorage is best-effort; a blocked or corrupt entry never prevents navigation.
  for(const id of missions.keys())try{const raw=localStorage.getItem(key(id));if(raw){const p=JSON.parse(raw);if(p.schema!==1||p.unit!=='a1-u10'||p.state?.mission!==id)throw new Error('Cópia incompatível');apply(p.state);setStatus(id,'Rascunho recuperado deste navegador. Novas alterações precisam ser salvas.');}}catch{setStatus(id,'Rascunho não recuperado. Você ainda pode estudar e baixar uma cópia.');}
  window.addEventListener('beforeunload',ev=>{if(dirty.size){ev.preventDefault();ev.returnValue='';}});
})();
