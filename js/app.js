(()=>{var jt=Object.defineProperty;var B=(e,s,t)=>()=>{if(t)throw t[0];try{return e&&(s=e(e=0)),s}catch(a){throw t=[a],a}};var ce=(e,s)=>{for(var t in s)jt(e,t,{get:s[t],enumerable:!0})};function re(e){let s=document.getElementById("toast");s.textContent=e,s.classList.add("is-on"),clearTimeout(ze),ze=setTimeout(()=>s.classList.remove("is-on"),2600)}function De(e=location.hash){let s=e.replace(/^#/,"")||"/",[t,a=""]=s.split("?"),c=new URLSearchParams(a);return{path:t.replace(/\/+$/,"")||"/",params:c}}var r,K,He,$,M,me,W,ze,E,N=B(()=>{r=e=>String(e??"").replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[s]),K=e=>String(e??"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/(\d)\s*[x×]\s*(\d)/g,"$1x$2").replace(/(\d)\.(\d)/g,"$1,$2"),He=e=>e>=1048576?`${(e/1048576).toFixed(e>10485760?0:1).replace(".",",")} MB`:`${Math.max(1,Math.round(e/1024))} KB`,$=(e,s=document)=>s.querySelector(e),M=(e,s=document)=>[...s.querySelectorAll(e)],me=(e,s=120)=>{let t;return(...a)=>{clearTimeout(t),t=setTimeout(()=>e(...a),s)}},W=e=>e.replace("x"," \xD7 ");E={search:'<svg viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 21 21"/></svg>',arrowR:'<svg viewBox="0 0 24 24"><path d="M4 12h16M14 6l6 6-6 6"/></svg>',arrowL:'<svg viewBox="0 0 24 24"><path d="M20 12H4M10 6l-6 6 6 6"/></svg>',close:'<svg viewBox="0 0 24 24"><path d="M5 5l14 14M19 5 5 19"/></svg>',download:'<svg viewBox="0 0 24 24"><path d="M12 4v12M6 11l6 6 6-6M5 20h14"/></svg>',grid:'<svg viewBox="0 0 24 24"><rect x="4" y="4" width="7" height="7"/><rect x="13" y="4" width="7" height="7"/><rect x="4" y="13" width="7" height="7"/><rect x="13" y="13" width="7" height="7"/></svg>',mosaic:'<svg viewBox="0 0 24 24"><rect x="4" y="4" width="9" height="9"/><rect x="15" y="4" width="5" height="5"/><rect x="15" y="11" width="5" height="9"/><rect x="4" y="15" width="9" height="5"/></svg>',list:'<svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',filter:'<svg viewBox="0 0 24 24"><path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/></svg>',copy:'<svg viewBox="0 0 24 24"><rect x="8" y="8" width="11" height="12"/><path d="M5 16V5h10"/></svg>',expand:'<svg viewBox="0 0 24 24"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>'}});var F,oe,Z,X,he,Ue,O,U,Ee,Ve,J,le,Ge,V=B(()=>{F={bano:"Ba\xF1o",cocina:"Cocina",piscina:"Piscina",escaleras:"Escaleras",fachadas:"Fachadas",jardines:"Jardines","separador-ambientes":"Separador de ambientes",publico:"Espacios p\xFAblicos"},oe=["bano","cocina","piscina","escaleras","fachadas","jardines","separador-ambientes","publico"],Z={interior:"Interior",exterior:"Exterior"},X={suelo:"Suelo",pared:"Pared (revestimiento)"},he={s:{label:"Peque\xF1o",hint:"hasta 15 cm"},m:{label:"Medio",hint:"16\u201345 cm"},l:{label:"Grande",hint:"46\u201390 cm"},xl:{label:"Gran formato",hint:"m\xE1s de 90 cm"}},Ue=["s","m","l","xl"],O={mate:"Mate",brillo:"Brillo",satinado:"Satinado",nacarado:"Esmalte nacarado"},U={R9:{label:"R9",hint:"Clase I"},R10:{label:"R10",hint:"Clase II"},R11:{label:"R11",hint:"Clase III"},R12:{label:"R12",hint:"Clase III"},R13:{label:"R13",hint:"Clase III"},A:{label:"Clase A",hint:"descalzo"},B:{label:"Clase B",hint:"descalzo"},C:{label:"Clase C",hint:"descalzo"}},Ee=["R9","R10","R11","R12","R13","B","C"],Ve={cuore:"CUORE",novedad:"Novedades"},J={blanco:"Blanco",beige:"Beige \xB7 arena",gris:"Gris",oscuro:"Oscuro",tierra:"Tierra \xB7 madera",verde:"Verde",azul:"Azul",acento:"Acento"},le={blanco:"#ECE9E2",beige:"#D6C5A8",gris:"#A7A59F",oscuro:"#3C3C3E",tierra:"#A8663F",verde:"#6F8A66",azul:"#3F6F90",acento:"#C9923A"},Ge=["blanco","beige","gris","oscuro","tierra","verde","azul","acento"]});async function Ye(){let[e,s,t,a,c]=await Promise.all(["collections","variants","projects","resources","home"].map(Mt));Object.assign(f,{collections:e,variants:s,projects:t,resources:a,home:c});for(let n of e)f.collectionById.set(n.id,n),f.variantsByCollection.set(n.id,[]);for(let n of s)f.variantById.set(n.id,n),f.variantsByCollection.get(n.collection)?.push(n);for(let n of t)f.projectById.set(n.id,n);for(let n of e){let i=f.variantsByCollection.get(n.id);n.families=[...new Set(i.map(o=>o.family))],n.slipKeys=n.antislip.map(o=>o.key),n.formatKeys=n.formats.map(o=>o.key),n.search=K([n.name,n.concept,n.efectos.join(" "),n.shapes.join(" "),n.estancias.map(o=>F[o]||o).join(" "),n.location.map(o=>Z[o]).join(" "),n.placement.map(o=>X[o]).join(" "),n.surfaces.map(o=>O[o]).join(" "),n.formatKeys.join(" "),n.slipKeys.join(" "),n.slipKeys.length?"antideslizante antislip":"",i.map(o=>o.name).join(" "),n.pieces.join(" "),n.cuore?"cuore hecho a mano":"",n.novedad?"novedad novedades nuevo":"",Object.entries(Rt).filter(([o])=>n.efectos.concat(n.estancias,n.location).some(u=>K(u).includes(o))).map(([,o])=>o).join(" ")].join(" "))}for(let n of s){let i=f.collectionById.get(n.collection);n.search=K(`${i.search} ${n.name} ${n.family} ${n.finish.join(" ")}`),n.slug=n.id}return s.sort((n,i)=>(i.primary>0)-(n.primary>0)),f}function te(e){let s=e.slipKeys.filter(c=>c.startsWith("R")).map(c=>+c.slice(1));if(!s.length)return e.slipKeys.length?e.slipKeys.map(c=>U[c]?.label||c).join(" \xB7 "):"";let t=Math.min(...s),a=Math.max(...s);return t===a?`R${t}`:`R${t}\u2013R${a}`}function se(e){return e.formats.length?e.formats.length===1?e.formats[0].label.replace(/^[A-ZÁÉÍÓÚ.]+\s+(?=\d)/,"").replace("x"," \xD7 "):`${e.formats.length} formatos`:""}function Ke(e){return f.projects.filter(s=>s.collections.includes(e.id))}var f,Mt,Rt,w,Q,z=B(()=>{N();V();f={collections:[],variants:[],projects:[],resources:null,home:null,collectionById:new Map,variantById:new Map,variantsByCollection:new Map,projectById:new Map},Mt=e=>(window.NATUCER_DATA?.[e]?Promise.resolve(window.NATUCER_DATA[e]):fetch(`data/${e}.json`)).then(s=>{if(!(s instanceof Response))return s;if(!s.ok)throw new Error(`No se pudo cargar data/${e}.json`);return s.json()}),Rt={maderas:"madera wood",piedra:"stone",barro:"clay terracota",exterior:"outdoor",interior:"indoor",piscina:"pool swimming",bano:"bathroom",cocina:"kitchen",escaleras:"steps stairs peldano",fachadas:"facade fachada ventilada",antislip:"antideslizante antiskid resbaladicidad","relieve 3d":"volumen 3d relief"};w=e=>f.collectionById.get(e),Q=e=>f.variantsByCollection.get(e)||[]});function Xe(){try{localStorage.setItem(We,q?"full":"reduce")}catch{}location.reload()}var We,Ze,q,fe=B(()=>{We="natucer-motion",Ze=null;try{Ze=localStorage.getItem(We)}catch{}q=Ze==="reduce";document.documentElement.dataset.motion=q?"reduce":"full"});function de(){let e=o=>new Set(f.collections.flatMap(o)),s=[...e(o=>o.efectos)].sort(),t=[...e(o=>o.shapes)].sort((o,u)=>(o==="Rectangular")-(u==="Rectangular")||o.localeCompare(u)),a=oe.filter(o=>e(u=>u.estancias).has(o)),c=Ee.filter(o=>e(u=>u.slipKeys).has(o)),n=["mate","brillo","satinado","nacarado"].filter(o=>e(u=>u.surfaces).has(o)),i=Ge.filter(o=>f.variants.some(u=>u.family===o));return[{id:"estancia",label:"Espacio",open:!0,get:o=>o.estancias,options:a.map(o=>({v:o,label:F[o]}))},{id:"location",label:"Interior \xB7 exterior",open:!0,get:o=>o.location,options:Object.entries(Z).map(([o,u])=>({v:o,label:u}))},{id:"placement",label:"Suelo \xB7 pared",get:o=>o.placement,options:Object.entries(X).map(([o,u])=>({v:o,label:u}))},{id:"efecto",label:"Efecto",open:!0,get:o=>o.efectos,options:s.map(o=>({v:o,label:o}))},{id:"shape",label:"Forma",get:o=>o.shapes,options:t.map(o=>({v:o,label:o}))},{id:"size",label:"Tama\xF1o de pieza",get:o=>o.sizeClasses,options:Ue.map(o=>({v:o,label:he[o].label,hint:he[o].hint}))},{id:"format",label:"Medida exacta (cm)",collapsedAfter:8,get:o=>o.formatKeys,options:Qe().map(o=>({v:o,label:W(o)}))},{id:"color",label:"Color",kind:"color",get:o=>o.families,getVariant:o=>[o.family],options:i.map(o=>({v:o,label:J[o]}))},{id:"surface",label:"Superficie",get:o=>o.surfaces,options:n.map(o=>({v:o,label:O[o]}))},{id:"slip",label:"Antideslizante",get:o=>o.slipKeys,options:c.map(o=>({v:o,label:U[o].label,hint:U[o].hint}))},{id:"line",label:"L\xEDnea",get:o=>[o.cuore&&"cuore",o.novedad&&"novedad"].filter(Boolean),options:Object.entries(Ve).map(([o,u])=>({v:o,label:u}))}]}function et(e,s){let t=Ce();t.q=e.get("q")||"";for(let a of s){let c=e.get(a.id);c&&(t.f[a.id]=new Set(c.split(",").filter(Boolean)))}return["colecciones","colores"].includes(e.get("lens"))&&(t.lens=e.get("lens")),["grid","mosaico","lista"].includes(e.get("view"))&&(t.view=e.get("view")),["az","novedad"].includes(e.get("sort"))&&(t.sort=e.get("sort")),t}function ve(e){let s=new URLSearchParams;e.q&&s.set("q",e.q);for(let[t,a]of Object.entries(e.f))a.size&&s.set(t,[...a].join(","));return e.lens!=="colecciones"&&s.set("lens",e.lens),e.view!=="grid"&&s.set("view",e.view),e.sort!=="az"&&s.set("sort",e.sort),s}function It(e,s){return s?K(s).split(/\s+/).filter(Boolean).every(t=>e.includes(t)):!0}function st(e,s,t){return t==="colores"?e.kind==="color"?e.getVariant(s):e.get(w(s.collection)):e.get(s)}function Je(e,s,t){let a=t.f[e.id];return!a||!a.size?!0:st(e,s,t.lens).some(n=>a.has(n))}function be(e,s){let t=e.lens==="colores"?f.variants:f.collections,a=t.filter(o=>It(o.search,e.q)),c=a.filter(o=>s.every(u=>Je(u,o,e))),n={};for(let o of s){let u=a.filter(b=>s.every(y=>y.id===o.id||Je(y,b,e))),h=new Map;for(let b of u)for(let y of new Set(st(o,b,e.lens)))h.set(y,(h.get(y)||0)+1);n[o.id]=h}let i=[...c];if(e.sort==="novedad"){let o=u=>{let h=e.lens==="colores"?w(u.collection):u;return(h.novedad?0:2)+(h.cuore?0:1)};i.sort((u,h)=>o(u)-o(h)||(u.name||"").localeCompare(h.name||""))}else e.lens==="colecciones"?i.sort((o,u)=>o.name.localeCompare(u.name)):i.sort((o,u)=>(u.primary>0)-(o.primary>0)||w(o.collection).name.localeCompare(w(u.collection).name));return{items:i,counts:n,total:t.length}}function Tt(){let e=[],s=new Set,t=a=>{let c=a.type+a.key;s.has(c)||(s.add(c),a.n=K(a.label),e.push(a))};for(let a of f.collections)t({type:"Colecciones",key:a.id,label:a.name,sub:a.efectos[0]||a.shapes[0],coll:a.id,rank:0});for(let a of f.variants)t({type:"Colores",key:a.id,label:`${w(a.collection).name} ${a.name}`,short:a.name,sub:"variante",variant:a.id,hex:a.hex,rank:1});for(let a of Qe())t({type:"Formatos",key:a,label:W(a),filter:["format",a],sub:"cm",rank:2});for(let[a,c]of Object.entries(F))t({type:"Aplicaciones",key:a,label:c,filter:["estancia",a],rank:3});for(let a of new Set(f.collections.flatMap(c=>c.efectos)))t({type:"Efectos",key:a,label:a,filter:["efecto",a],rank:3});for(let a of Ee)t({type:"Antideslizante",key:a,label:U[a].label,filter:["slip",a],sub:U[a].hint,rank:4});for(let[a,c]of Object.entries(O))t({type:"Superficie",key:a,label:c,filter:["surface",a],rank:4});for(let[a,c]of Object.entries(J))t({type:"Color",key:a,label:c,filter:["color",a],hex:le[a],rank:4});return t({type:"L\xEDnea",key:"cuore",label:"CUORE",filter:["line","cuore"],sub:"hecho a mano",rank:3}),t({type:"L\xEDnea",key:"novedad",label:"Novedades",filter:["line","novedad"],rank:3}),e}function at(e,s=10){Le||(Le=Tt());let t=K(e).trim();if(!t)return[];let a=t.split(/\s+/),c=[];for(let n of Le){let i=n.n;if(!a.every(u=>i.includes(u)))continue;let o=i.startsWith(t)||i.split(/\s+/).some(u=>u.startsWith(a[0]));c.push({e:n,score:(o?0:10)+n.rank})}return c.sort((n,i)=>n.score-i.score||n.e.label.localeCompare(i.e.label)),c.slice(0,s).map(n=>n.e)}var Qe,Ce,tt,Le,R,ge=B(()=>{z();N();V();Qe=()=>{let e=new Map;for(let s of f.collections)for(let t of s.formats)t.dims&&e.set(t.key,Math.max(...t.dims)*1e3+Math.min(...t.dims));return[...e.entries()].sort((s,t)=>s[1]-t[1]).map(([s])=>s)};Ce=()=>({q:"",f:{},lens:"colecciones",view:"grid",sort:"az"});tt=e=>Object.values(e.f).reduce((s,t)=>s+t.size,0);R=(e={},s={})=>{let t=new URLSearchParams;for(let[c,n]of Object.entries(e))t.set(c,Array.isArray(n)?n.join(","):n);for(let[c,n]of Object.entries(s))t.set(c,n);let a=t.toString();return`#/productos${a?`?${a}`:""}`}});function $e(e){let s=[];return e.cuore&&s.push('<span class="tag tag--cuore">CUORE</span>'),e.novedad&&s.push('<span class="tag tag--new">Novedad</span>'),s.length?`<div class="tags">${s.join("")}</div>`:""}function Ae(e,s=8){let t=e.slice(0,s),a=e.length-t.length;return`<span class="swatches" aria-hidden="true">${t.map(c=>`<i class="swatch" style="background:${c.hex}" title="${r(c.name)}"></i>`).join("")}</span>${a>0?`<span class="small">+${a}</span>`:""}`}function _e(e){let s=f.variantsByCollection.get(e.id),t=e.environments[1]&&e.environments[1].src!==e.cover?e.environments[1].src:"",a=te(e),c=[e.efectos[0]||e.shapes[0],se(e),a&&`Antideslizante ${a}`].filter(Boolean);return`
  <a class="ccard ${t?"has-alt":""}" href="#/coleccion/${e.id}" data-card="${e.id}">
    <div class="ccard__media">
      ${L(e.cover,e.name)}${t?L(t,""):""}
    </div>
    <div class="ccard__body">
      <h3 class="ccard__name">${r(e.name)}${e.novedad?'<span class="tag tag--new">Novedad</span>':""}${e.cuore?'<span class="tag tag--cuore">CUORE</span>':""}</h3>
      <div class="ccard__meta">${c.map((n,i)=>`${i?"<i>\xB7</i>":""}<span>${r(n)}</span>`).join("")}</div>
      <div class="ccard__facts">${Ae(s)}<span class="small">${s.length} ${s.length===1?"color":"colores"}</span></div>
    </div>
  </a>`}function ot(e){let s=w(e.collection),t=e.primary>0?e.images[0].src:null;return`
  <a class="vcard" href="#/producto/${e.id}">
    <div class="vcard__media">
      ${t?L(t,`${s.name} ${e.name}`):`<div class="vcard__flat" style="background:${e.hex}"><span>Muestra de color</span></div>`}
    </div>
    <div class="vcard__body">
      <h3 class="vcard__name"><i class="swatch" style="background:${e.hex}"></i>${r(e.name)}</h3>
      <div class="vcard__sub">${r(s.name)} \xB7 ${r(se(s))}${e.finish.length?` \xB7 ${e.finish.map(a=>a==="antislip"?"Antislip":"Relieve").join(" ")}`:""}</div>
    </div>
  </a>`}function it(e,s,t){let a=t%7===0||t%7===4,c=t%7===2;if(s==="colores"){let n=w(e.collection),i=e.primary>0?e.images[0].src:n.cover;return`<a class="tile ${a?"tile--w":""} ${c?"tile--t":""}" href="#/producto/${e.id}">${L(i,`${n.name} ${e.name}`)}<span class="tile__cap"><b>${r(e.name)}</b><small>${r(n.name)}</small></span></a>`}return`<a class="tile ${a?"tile--w":""} ${c?"tile--t":""}" href="#/coleccion/${e.id}">${L(e.cover,e.name)}<span class="tile__cap"><b>${r(e.name)}</b><small>${r(e.efectos[0]||e.shapes[0])}</small></span></a>`}function ee(e,{cover:s=null}={}){return`
  <div class="doc">
    <div class="doc__ico" aria-hidden="true">${s||e.cover?`<img src="${r(s||e.cover)}" alt="" loading="lazy">`:""}<span>PDF</span></div>
    <div>
      <div class="doc__title">${r(e.title)}</div>
      <div class="doc__meta">${r(e.kind)}${e.note?` \xB7 ${r(e.note)}`:""}${e.local?"":" \xB7 se abre desde natucer.es"}</div>
    </div>
    <div class="doc__size num">${He(e.bytes)}</div>
    <a class="btn btn--sm" href="${r(e.href)}" target="_blank" rel="noopener" ${e.local?"download":""}>${E.download}Descargar</a>
  </div>`}function Ft(e,s,t){let a=e.toUpperCase();if(a.startsWith("HEX")){let c=s/4;return`<polygon class="shape" points="${c},0 ${s-c},0 ${s},${t/2} ${s-c},${t} ${c},${t} 0,${t/2}"/>`}if(a.startsWith("STAR")){let c=s/2,n=s/2,i=n*.42;return`<polygon class="shape" points="${Array.from({length:8},(u,h)=>{let b=Math.PI/4*h-Math.PI/2,y=h%2?i:n;return`${(c+y*Math.cos(b)).toFixed(1)},${(t/2+y*Math.sin(b)*(t/s)).toFixed(1)}`}).join(" ")}"/>`}return`<rect class="shape" x="0" y="0" width="${s}" height="${t}"/>`}function pe(e,{active:s=null,maxPx:t=240}={}){let a=e.formats.filter(i=>i.dims);if(!a.length)return'<p class="small">Formato bajo consulta.</p>';let c=Math.max(...a.map(i=>Math.max(...i.dims))),n=t/c;return`<div class="fscale" role="list">${a.map(i=>{let[o,u]=i.dims,h=Math.max(14,o*n),b=Math.max(14,u*n),y=i.label.replace(/^[A-ZÁÉÍÓÚ.]+\s+(?=\d)/,""),_=i.label.replace(/\s*\d.*$/,"").trim();return`<div class="fscale__item ${s===i.key?"is-on":""}" role="listitem" data-format="${r(i.key)}">
      <svg width="${h.toFixed(0)}" height="${b.toFixed(0)}" viewBox="0 0 ${h.toFixed(1)} ${b.toFixed(1)}" aria-hidden="true">${Ft(i.label,h,b)}</svg>
      <div class="fscale__lbl"><b>${r(W(y.split("/")[0].replace(/\s+/g,"")))}${_?` <span>${r(_)}</span>`:""}</b>${i.imperial?`<span>${r(i.imperial.replace(/"/g,"\u2033"))}</span>`:""}</div>
    </div>`}).join("")}</div>`}function ye(e){return e.antislip.length?e.antislip.map(s=>{let t=U[s.key];return`<span class="slip" title="${r(s.label)}"><b>${r(t?.label||s.key)}</b><span>${r(t?.hint||"")}</span></span>`}).join(" "):e.placement.includes("suelo")?'<span class="small">Sin clasificaci\xF3n publicada</span>':""}function G(e,s=0){if(!e.length)return;let t=document.getElementById("overlay-root"),a=s,c=document.activeElement;T=document.createElement("div"),T.className="lightbox is-open",T.setAttribute("role","dialog"),T.setAttribute("aria-modal","true"),T.setAttribute("aria-label","Galer\xEDa"),T.innerHTML=`
    <div class="lightbox__top"><span class="num" data-lb-count></span><button class="icon-btn" data-lb-close aria-label="Cerrar">${E.close}</button></div>
    <div class="lightbox__stage"><button class="icon-btn lightbox__nav lightbox__nav--prev" data-lb-prev aria-label="Anterior">${E.arrowL}</button><img alt="" data-lb-img><button class="icon-btn lightbox__nav lightbox__nav--next" data-lb-next aria-label="Siguiente">${E.arrowR}</button></div>
    <div class="lightbox__cap" data-lb-cap></div>`,t.appendChild(T),document.body.style.overflow="hidden";let n=()=>{let h=e[a];T.querySelector("[data-lb-img]").src=h.src,T.querySelector("[data-lb-img]").alt=h.title||h.caption||"",T.querySelector("[data-lb-count]").textContent=`${a+1} / ${e.length}`,T.querySelector("[data-lb-cap]").innerHTML=`${h.title?`<b>${r(h.title)}</b>`:""}${r(h.caption||"")}`,T.querySelector("[data-lb-prev]").disabled=a===0,T.querySelector("[data-lb-next]").disabled=a===e.length-1,T.querySelector("[data-lb-prev]").hidden=T.querySelector("[data-lb-next]").hidden=e.length<2},i=()=>{T.remove(),document.body.style.overflow="",document.removeEventListener("keydown",u),c?.focus?.()},o=h=>{a=Math.min(e.length-1,Math.max(0,a+h)),n()},u=h=>{h.key==="Escape"?i():h.key==="ArrowRight"?o(1):h.key==="ArrowLeft"&&o(-1)};T.addEventListener("click",h=>{h.target.closest("[data-lb-close]")?i():h.target.closest("[data-lb-prev]")?o(-1):h.target.closest("[data-lb-next]")?o(1):h.target.classList.contains("lightbox__stage")&&i()}),document.addEventListener("keydown",u),n(),T.querySelector("[data-lb-close]").focus()}var L,T,ae=B(()=>{N();z();V();L=(e,s="",t="",a="")=>`<img ${t?`class="${t}" `:""}src="${r(e)}" alt="${r(s)}" loading="lazy" decoding="async" ${a}>`});function Pt(){let e=nt(a=>a.estancias),s=nt(a=>a.efectos),t=(a,c,n)=>`<li><a href="${a}">${r(c)}${n!=null?`<span>${n}</span>`:""}</a></li>`;return`
  <div class="menu__sub" id="menu-sub-productos" hidden>
    <a class="menu__all" href="#/productos">Ver todo el cat\xE1logo</a>
    <h3>Por espacio</h3><ul>${oe.filter(a=>e.has(a)).map(a=>t(R({estancia:a}),F[a],e.get(a))).join("")}</ul>
    <h3>Por efecto</h3><ul>${[...s.keys()].sort().map(a=>t(R({efecto:a}),a,s.get(a))).join("")}</ul>
    <h3>Por necesidad</h3><ul>
      ${t(R({location:"exterior",slip:"R11,R12,R13"}),"Exterior antideslizante")}
      ${t(R({size:"l,xl"}),"Gran formato")}
      ${t(R({estancia:"piscina",slip:"R9,R10,R11,R12,R13,C"}),"Piscina y bordes")}
      ${t(R({},{lens:"colores"}),"Explorar por color")}
      ${t(R({line:"novedad"}),"Novedades")}
      ${t(R({line:"cuore"}),"CUORE \xB7 hecho a mano")}
    </ul>
  </div>`}function rt(){let e=document.getElementById("site-header");e.innerHTML=`
  <header class="site-header" data-header>
    <button class="hamb" data-burger aria-label="Men\xFA" aria-expanded="false" aria-controls="menu-panel"><span></span><span></span></button>
    <a class="brand" href="#/" aria-label="Natucer \xB7 inicio"><img src="${f.home.brand.logo}" alt="Natucer Cer\xE1mica Natural" width="108" height="21"></a>
    <div class="hdr-right">
      <button class="hdr-search" data-open-search aria-label="Buscar"><span>Buscar</span></button>
      <nav class="hdr-links" aria-label="Accesos r\xE1pidos">
        <a href="#/recursos">Recursos</a>
        <a href="#/productos?line=novedad">Novedades</a>
        <a href="#" data-stub>Contacto</a>
      </nav>
    </div>
  </header>
  <div class="menu-scrim" data-menu-scrim></div>
  <nav class="menu" id="menu-panel" data-menu aria-label="Men\xFA principal" aria-hidden="true">
    <ul class="menu__main">
      ${qt.map(o=>`<li>${o.sub?`<button class="nav__link" data-nav="${o.id}" aria-expanded="false" aria-controls="menu-sub-productos" data-toggle-sub>${o.label}</button>${Pt()}`:`<a class="nav__link" data-nav="${o.id}" href="${o.href||"#"}" ${o.stub?"data-stub":""}>${o.label}</a>`}</li>`).join("")}
    </ul>
    <div class="menu__foot"><span>ES</span> <button data-stub>EN</button><button class="menu__motion" data-motion-toggle aria-pressed="${!q}">Animaciones: ${q?"no":"s\xED"}</button><span class="small">Mockup \xB7 no es la web definitiva</span></div>
  </nav>`;let s=$("[data-header]",e),t=$("[data-menu]",e),a=$("[data-burger]",e),c=$("[data-menu-scrim]",e),n=o=>{t.classList.toggle("is-open",o),c.classList.toggle("is-open",o),t.setAttribute("aria-hidden",String(!o)),a.setAttribute("aria-expanded",String(o)),document.body.classList.toggle("menu-open",o),document.body.style.overflow=o?"hidden":"",o&&$(".nav__link",t).focus({preventScroll:!0})};a.addEventListener("click",()=>n(!t.classList.contains("is-open"))),c.addEventListener("click",()=>n(!1)),t.addEventListener("click",o=>{let u=o.target.closest("[data-toggle-sub]");if(u){let h=$("#menu-sub-productos",t),b=h.hidden;h.hidden=!b,u.setAttribute("aria-expanded",String(b));return}o.target.closest('a[href^="#/"]')&&n(!1)}),window.addEventListener("hashchange",()=>n(!1)),document.addEventListener("keydown",o=>{o.key==="Escape"&&t.classList.contains("is-open")&&(n(!1),a.focus())});let i=()=>{let o=document.body.classList.contains("is-home");s.classList.toggle("is-solid",!o||scrollY>innerHeight-90||document.body.classList.contains("menu-open"))};window.addEventListener("scroll",i,{passive:!0}),window.addEventListener("hashchange",()=>requestAnimationFrame(i)),window.addEventListener("resize",i),window.__headerSolid=i,i(),$("[data-open-search]",e).addEventListener("click",ct),document.addEventListener("keydown",o=>{o.key==="/"&&!/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)&&!document.querySelector(".lightbox.is-open")&&(o.preventDefault(),ct())}),document.addEventListener("click",o=>{if(o.target.closest("[data-motion-toggle]")){Xe();return}o.target.closest("[data-stub]")&&(o.preventDefault(),re("Fuera del alcance de este mockup"))})}function lt(e){let s=e.startsWith("/recursos")?"recursos":e.startsWith("/productos")||e.startsWith("/coleccion")||e.startsWith("/producto")?"productos":"";M(".nav__link").forEach(t=>t.classList.toggle("is-current",t.dataset.nav===s)),document.body.classList.toggle("is-home",e==="/"),window.__headerSolid?.()}function dt(){let e=f.home.brand;document.getElementById("site-footer").innerHTML=`
  <footer class="site-footer">
    <div class="wrap">
      <div class="footer__top">
        <div class="footer__brand"><img src="${e.logo}" alt="Natucer" width="130" height="25"><p>Fabricante de gres porcel\xE1nico extruido. Pavimentos, revestimientos, piscinas, pelda\xF1os y fachadas ventiladas.</p></div>
        <div><h4>Producto</h4><ul><li><a href="#/productos">Cat\xE1logo</a></li><li><a href="${R({},{lens:"colores"})}">Por color</a></li><li><a href="${R({line:"cuore"})}">CUORE</a></li><li><a href="${R({line:"novedad"})}">Novedades</a></li></ul></div>
        <div><h4>Profesionales</h4><ul><li><a href="#/recursos">Cat\xE1logos y fichas</a></li><li><a href="#/recursos?t=guias">Gu\xEDas e instalaci\xF3n</a></li><li><a href="#/?s=soluciones">Soluciones</a></li><li><a href="#/?s=proyectos">Proyectos</a></li></ul></div>
        <div><h4>Natucer</h4><ul><li><a href="#" data-stub>Empresa</a></li><li><a href="#" data-stub>Contacto</a></li><li><a href="#" data-stub>Newsletter</a></li><li><a href="#" data-stub>Aviso legal</a></li></ul></div>
      </div>
      <div class="footer__bottom"><span>\xA9 Natucer \xB7 Mockup de direcci\xF3n de dise\xF1o</span><img src="${e.pamesa}" alt="Pamesa Grupo Empresarial"></div>
      <p class="footer__note">Prototipo interno. Textos, im\xE1genes y documentos proceden de natucer.es (carpeta Sources). Tipograf\xEDa, jerarqu\xEDa y piezas de interfaz son propuestas provisionales y no constituyen identidad oficial.</p>
    </div>
  </footer>`}function Ot(e,s){if(!s.length)return`<div class="suggest__empty">Sin coincidencias para \xAB${r(e)}\xBB. Prueba con un color, un formato (60x120) o un espacio.</div>`;let t=i=>{let o=i.toLowerCase().indexOf(e.trim().toLowerCase());return o<0?r(i):`${r(i.slice(0,o))}<mark>${r(i.slice(o,o+e.trim().length))}</mark>${r(i.slice(o+e.trim().length))}`},a="",c="",n=0;for(let i of s){i.type!==c&&(c=i.type,a+=`<div class="suggest__group">${c}</div>`);let o=i.coll?w(i.coll):i.variant?w(f.variantById.get(i.variant).collection):null,u=i.coll?L(o.cover,"","thumb"):i.hex?`<i class="swatch" style="background:${i.hex};width:20px;height:20px"></i>`:"";a+=`<button type="button" role="option" data-idx="${n++}" data-key="${r(i.type+"|"+i.key)}">${u}<span>${t(i.label)}</span>${i.sub?`<small>${r(i.sub)}</small>`:""}</button>`}return a}function ke(e,s){return e.coll?`#/coleccion/${e.coll}`:e.variant?`#/producto/${e.variant}`:R({[e.filter[0]]:e.filter[1]})}function Se(e,s,t,{onEnter:a}={}){let c=[],n=-1,i=()=>{let u=e.value;c=at(u),s.hidden=!u.trim(),s.innerHTML=u.trim()?Ot(u,c):"",n=-1,e.setAttribute("aria-expanded",String(!s.hidden))},o=()=>M("[role=option]",s).forEach((u,h)=>{u.setAttribute("aria-selected",String(h===n)),h===n&&u.scrollIntoView({block:"nearest"})});return e.addEventListener("input",me(i,60)),e.addEventListener("keydown",u=>{u.key==="ArrowDown"&&c.length?(u.preventDefault(),n=Math.min(c.length-1,n+1),o()):u.key==="ArrowUp"&&c.length?(u.preventDefault(),n=Math.max(-1,n-1),o()):u.key==="Enter"?(u.preventDefault(),n>=0?t(c[n]):a?.(e.value)):u.key==="Escape"&&!s.hidden&&(s.hidden=!0)}),s.addEventListener("mousedown",u=>u.preventDefault()),s.addEventListener("click",u=>{let h=u.target.closest("[role=option]");h&&t(c[+h.dataset.idx])}),{render:i,hide:()=>{s.hidden=!0}}}function ct(){if(H)return;let e=document.getElementById("overlay-root");H=document.createElement("div"),H.className="overlay is-open",H.innerHTML=`
    <div class="overlay__scrim" data-close></div>
    <div class="search-panel" role="dialog" aria-modal="true" aria-label="Buscar">
      <div class="searchbox">
        <div class="searchbox__field">${E.search}<input type="search" role="combobox" aria-expanded="false" aria-controls="gs-box" placeholder="Colecci\xF3n, color, formato, aplicaci\xF3n\u2026" autocomplete="off" spellcheck="false"><button class="searchbox__clear" data-close>Cerrar</button></div>
      </div>
      <div class="suggest" id="gs-box" role="listbox" hidden style="border:0"></div>
      <div class="small" style="padding-top:18px" data-hint>Prueba: <a href="${R({},{q:"sherwood"})}" data-close style="text-decoration:underline">sherwood</a> \xB7 <a href="${R({},{q:"60x120"})}" data-close style="text-decoration:underline">60x120</a> \xB7 <a href="${R({slip:"R11"})}" data-close style="text-decoration:underline">R11</a> \xB7 <a href="${R({estancia:"piscina"})}" data-close style="text-decoration:underline">piscina</a> \xB7 <a href="${R({},{q:"azul"})}" data-close style="text-decoration:underline">azul</a></div>
    </div>`,e.appendChild(H),document.body.style.overflow="hidden";let s=$("input",H),t=()=>{H?.remove(),H=null,document.body.style.overflow="",document.removeEventListener("keydown",a)},a=c=>{c.key==="Escape"&&t()};document.addEventListener("keydown",a),H.addEventListener("click",c=>{c.target.closest("[data-close]")&&t()}),Se(s,$("#gs-box",H),c=>{t(),location.hash=ke(c)},{onEnter:c=>{t(),location.hash=R({},c.trim()?{q:c.trim()}:{})}}),s.focus()}var qt,nt,H,je=B(()=>{N();z();fe();ge();V();ae();qt=[{id:"productos",label:"Productos",href:"#/productos",sub:!0},{id:"soluciones",label:"Soluciones",href:"#/?s=soluciones"},{id:"proyectos",label:"Proyectos",href:"#/?s=proyectos"},{id:"recursos",label:"Recursos",href:"#/recursos"},{id:"empresa",label:"Empresa",stub:!0}],nt=e=>{let s=new Map;for(let t of f.collections)for(let a of new Set(e(t)))s.set(a,(s.get(a)||0)+1);return s}});var bt={};ce(bt,{allDocs:()=>vt,render:()=>cs,title:()=>Ut});function Gt(e){for(let t of Vt[e]||[]){let a=w(t)?.environments.find(c=>c.rooms.includes(e));if(a)return{src:a.src,coll:t}}let s=f.collections.find(t=>t.estancias.includes(e));return{src:s.cover,coll:s.id}}function Yt(){let e=f.home.hero;return`
  <section class="hero" data-hero aria-roledescription="carrusel" aria-label="Colecciones destacadas">
    <div class="hero__stage">
      ${e.map((s,t)=>`
      <figure class="hero__slide ${t===0?"is-active":""}" data-slide="${t}" aria-hidden="${t!==0}">
        <picture>
          <source media="(max-width: 760px)" srcset="${s.imageMobile}">
          <img src="${s.image}" alt="${r(w(s.collection).name)}" style="object-position:${s.position}" ${t?'loading="lazy"':'fetchpriority="high"'} decoding="async">
        </picture>
      </figure>`).join("")}
    </div>
    <h1 class="hero__mark"><span class="sr-only">Natucer \xB7 cer\xE1mica natural</span><span class="hero__mask" aria-hidden="true"><img src="${f.home.brand.logo}" alt=""></span></h1>
    <div class="hero__text">
      <p class="hero__claim">Cer\xE1mica extruida para espacios que duran</p>
      <p class="lead">Pavimentos y revestimientos de gres porcel\xE1nico extruido para arquitectura, interiorismo, piscinas y fachadas.</p>
      <div class="hero__actions">
        <a class="tlink" href="#/productos">Explorar producto</a>
        <a class="tlink" href="#/recursos">Cat\xE1logos y fichas</a>
      </div>
    </div>
    <div class="hero__label">
      <button class="icon-btn" data-hero-prev aria-label="Anterior">${E.arrowL}</button>
      <div class="hero__bars">${e.map(s=>`<button class="hero__bar" aria-label="Ir a ${r(w(s.collection).name)}"><b></b></button>`).join("")}</div>
      <div class="hero__info" aria-live="polite"></div>
      <button class="icon-btn" data-hero-next aria-label="Siguiente">${E.arrowR}</button>
    </div>
  </section>`}function Kt(e){let s=$("[data-hero]",e),t=M(".hero__slide",e),a=M(".hero__bar",e),c=$(".hero__info",e),n=6e3,i=0,o=!1,u=0,h=!1,b=!1,y=0,_=performance.now(),S=()=>a.forEach((l,p)=>{l.firstElementChild.style.width=p<i?"100%":p===i?q?"100%":`${Math.min(100,u/n*100)}%`:"0%"}),I=()=>{let l=w(f.home.hero[i].collection);c.innerHTML=`<span class="num">${String(i+1).padStart(2,"0")} / ${String(t.length).padStart(2,"0")}</span><a class="hero__name" href="#/coleccion/${l.id}">${r(l.name)}</a>`,a.forEach((p,m)=>p.classList.toggle("is-cur",m===i)),S()},k=(l,p)=>{let m=(l+t.length)%t.length;if(m===i||o)return;o=!0,u=0;let d=t[i],g=t[m];s.dataset.dir=p>0?"next":"prev",g.classList.add("is-enter"),g.offsetWidth,d.classList.remove("is-active"),d.classList.add("is-leaving"),g.classList.remove("is-enter"),g.classList.add("is-active"),t.forEach((C,x)=>C.setAttribute("aria-hidden",String(x!==m))),i=m,I(),setTimeout(()=>{d.classList.remove("is-leaving"),o=!1},1250)},P=l=>{if(!s.isConnected)return;let p=Math.min(100,l-_);_=l;let m=scrollY<innerHeight*.85&&!document.hidden;!q&&m&&!h&&!b&&(u+=p,u>=n&&k(i+1,1)),S(),y=requestAnimationFrame(P)};$("[data-hero-prev]",e).addEventListener("click",()=>k(i-1,-1)),$("[data-hero-next]",e).addEventListener("click",()=>k(i+1,1)),a.forEach((l,p)=>l.addEventListener("click",()=>k(p,p>i?1:-1))),s.addEventListener("pointerdown",l=>{l.target.closest("a,button")||(h=!0,s.classList.add("is-held"))});let j=()=>{h=!1,s.classList.remove("is-held")};addEventListener("pointerup",j),addEventListener("pointercancel",j),$(".hero__label",e).addEventListener("pointerenter",()=>{b=!0}),$(".hero__label",e).addEventListener("pointerleave",()=>{b=!1});let v=0;return s.addEventListener("touchstart",l=>{v=l.touches[0].clientX},{passive:!0}),s.addEventListener("touchend",l=>{let p=l.changedTouches[0].clientX-v;Math.abs(p)>50&&k(i+(p<0?1:-1),p<0?1:-1)}),I(),y=requestAnimationFrame(P),()=>{cancelAnimationFrame(y),removeEventListener("pointerup",j),removeEventListener("pointercancel",j)}}function Wt(){let e=de(),s=a=>e.find(c=>c.id===a),t=(a,c)=>c.map(n=>`<button class="chip" data-g="${a}" data-v="${r(n.v)}" aria-pressed="false">${r(n.label)}</button>`).join("");return`
  <section class="strip" aria-label="Encuentra tu pieza">
    <div class="wrap strip__grid">
      <div class="strip__intro"><p class="eyebrow">Encuentra tu pieza</p><p class="h3">\xBFQu\xE9 necesitas?</p></div>
      <div class="strip__rows">
        <div class="strip__row"><span class="strip__lbl">Espacio</span><div class="strip__chips">${t("estancia",s("estancia").options.filter(a=>["bano","cocina","piscina","escaleras","fachadas","publico"].includes(a.v)))}${t("location",s("location").options)}</div></div>
        <div class="strip__row"><span class="strip__lbl">Efecto</span><div class="strip__chips">${t("efecto",s("efecto").options)}</div></div>
        <div class="strip__row"><span class="strip__lbl">Tama\xF1o</span><div class="strip__chips">${t("size",s("size").options.map(a=>({v:a.v,label:`${a.label} \xB7 ${a.hint}`})))}</div></div>
      </div>
      <div class="strip__go"><a class="btn btn--solid" data-strip-go href="#/productos"><span data-strip-n>${f.collections.length}</span>&nbsp;colecciones \u2192</a><button class="small strip__reset" data-strip-reset hidden>Borrar selecci\xF3n</button></div>
    </div>
  </section>`}function Zt(e){let s=de(),t=Ce(),a=$("[data-strip-go]",e),c=$("[data-strip-n]",e),n=$("[data-strip-reset]",e),i=()=>{let u=be(t,s);c.textContent=u.items.length;let h=ve(t).toString();a.setAttribute("href",`#/productos${h?`?${h}`:""}`),n.hidden=!Object.values(t.f).some(b=>b.size);for(let b of M(".strip .chip",e)){let y=!!t.f[b.dataset.g]?.has(b.dataset.v);b.setAttribute("aria-pressed",String(y));let _=u.counts[b.dataset.g]?.get(b.dataset.v)||0;b.style.opacity=!y&&_===0?"0.38":""}},o=u=>{var b,y;let h=u.target.closest(".strip .chip");if(h){let _=(b=t.f)[y=h.dataset.g]||(b[y]=new Set);_.has(h.dataset.v)?_.delete(h.dataset.v):_.add(h.dataset.v),i()}else u.target.closest("[data-strip-reset]")&&(t.f={},i())};return e.addEventListener("click",o),i(),()=>e.removeEventListener("click",o)}function Xt(){let e=f.collections.map(s=>`<a href="#/coleccion/${s.id}" tabindex="-1">${r(s.name)}</a>`).join("");return`<section class="marquee" aria-label="Colecciones del cat\xE1logo"><p class="marquee__label"><span>El cat\xE1logo \xB7 ${f.collections.length} colecciones en este mockup</span><a class="tlink" href="#/productos">Ver todas</a></p><div class="marquee__track">${e}${e}</div></section>`}function Jt(){let e=f.collections.filter(s=>s.novedad);return`
  <section class="section" id="novedades">
    <div class="wrap">
      <div class="section-head"><div><p class="eyebrow">Novedades \xB7 ${e.length} colecciones nuevas</p><h2 class="h2">Lo \xFAltimo en el cat\xE1logo</h2></div>
        <div class="rail__ctrl"><a class="tlink" href="#/productos?line=novedad">Ver todas las novedades</a><button class="icon-btn" data-rail-prev aria-label="Anterior">${E.arrowL}</button><button class="icon-btn" data-rail-next aria-label="Siguiente">${E.arrowR}</button></div></div>
    </div>
    <div class="rail" data-rail tabindex="0" aria-label="Colecciones nuevas: se desplaza solo, pasa el rat\xF3n para detenerlo">
      ${e.map(s=>`
      <a class="rail__card" href="#/coleccion/${s.id}" draggable="false">
        <div class="rail__media">${L(s.heroMobile||s.cover,s.name)}<span class="rail__new">Novedad</span></div>
        <div class="rail__body"><span class="eyebrow">${r([s.efectos[0]||s.shapes[0],s.cuore?"CUORE":""].filter(Boolean).join(" \xB7 "))}</span><h3 class="h3">${r(s.name)}</h3><span class="small">${r(se(s))} \xB7 ${Q(s.id).length} colores</span></div>
      </a>`).join("")}
    </div>
    <div class="wrap rail__foot"><div class="rail__prog" aria-hidden="true"><i></i></div><span class="small">Desliza o arrastra para ver m\xE1s \u2192</span></div>
  </section>`}function Qt(e){let s=$("[data-rail]",e),t=$(".rail__prog i",e),a=[...s.children];a.forEach(l=>{let p=l.cloneNode(!0);p.setAttribute("aria-hidden","true"),p.tabIndex=-1,s.appendChild(p)});let c=38,n=0,i=0,o=!1,u=0,h=performance.now(),b=0,y=!0,_=()=>{n=s.children[a.length].offsetLeft-s.children[0].offsetLeft},S=new IntersectionObserver(([l])=>{y=l.isIntersecting},{threshold:.15});S.observe(s);let I=l=>{if(!s.isConnected)return;let p=Math.min(64,l-h);h=l,n||(_(),i=n,s.scrollLeft=i),o||l<u?i=s.scrollLeft:(Math.abs(s.scrollLeft-i)>2&&(i=s.scrollLeft),!q&&y&&(i+=c*p/1e3));let m=i>=n*2-s.clientWidth?i-n:i<=1?i+n:i;m!==i?(i=m,s.scrollLeft=i):!o&&l>=u&&Math.abs(s.scrollLeft-i)>.5&&(s.scrollLeft=i),t.style.transform=`scaleX(${(((i-n)%n+n)%n/n).toFixed(4)})`,b=requestAnimationFrame(I)};b=requestAnimationFrame(I);let k=()=>s.clientWidth*.6,P=l=>{u=performance.now()+2500,s.scrollBy({left:l,behavior:"smooth"})};$("[data-rail-prev]",e).addEventListener("click",()=>P(-k())),$("[data-rail-next]",e).addEventListener("click",()=>P(k())),s.addEventListener("pointerenter",l=>{l.pointerType==="mouse"&&(o=!0)}),s.addEventListener("pointerleave",()=>{o=!1}),s.addEventListener("focusin",()=>{o=!0}),s.addEventListener("focusout",()=>{o=!1}),s.addEventListener("wheel",()=>{u=performance.now()+2500},{passive:!0}),s.addEventListener("touchstart",()=>{u=performance.now()+4e3},{passive:!0});let j=null,v=!1;return s.addEventListener("pointerdown",l=>{l.pointerType!=="mouse"||l.button||(j={x:l.clientX,left:s.scrollLeft},v=!1)}),addEventListener("pointermove",l=>{if(!j)return;let p=l.clientX-j.x;Math.abs(p)>5&&(v=!0),v&&(s.scrollLeft=j.left-p,s.classList.add("is-drag"))}),addEventListener("pointerup",()=>{j=null,s.classList.remove("is-drag")}),s.addEventListener("click",l=>{v&&(l.preventDefault(),l.stopPropagation(),v=!1)},!0),addEventListener("resize",_),()=>{cancelAnimationFrame(b),S.disconnect(),removeEventListener("resize",_)}}function es(){let e=new Map;for(let a of f.collections)for(let c of a.estancias)e.set(c,(e.get(c)||0)+1);let t=oe.filter(a=>e.has(a)).map(a=>({k:a,...Gt(a)}));return`
  <section class="section section--tight rule" id="espacios">
    <div class="wrap spaces">
      <div class="spaces__head"><p class="eyebrow">Por aplicaci\xF3n</p><h2 class="h2">Empieza por el espacio</h2><p class="lead">Cada espacio abre el cat\xE1logo ya filtrado, con las colecciones que lo cubren.</p></div>
      <ul class="spaces__list" data-spaces>
        ${t.map((a,c)=>`<li><a href="#/productos?estancia=${a.k}" data-space="${c}" class="${c===0?"is-on":""}"><span class="spaces__name">${r(F[a.k])}</span><span class="spaces__n num">${e.get(a.k)} <small>${e.get(a.k)===1?"colecci\xF3n":"colecciones"}</small></span></a></li>`).join("")}
      </ul>
      <div class="spaces__preview" aria-hidden="true">
        ${t.map((a,c)=>`<figure class="${c===0?"is-on":""}" data-preview="${c}">${L(a.src,"")}<figcaption>${r(w(a.coll).name)}</figcaption></figure>`).join("")}
      </div>
    </div>
  </section>`}function ts(e){let s=M("[data-space]",e),t=M("[data-preview]",e),a=c=>{s.forEach((n,i)=>n.classList.toggle("is-on",c===i)),t.forEach((n,i)=>n.classList.toggle("is-on",c===i))};s.forEach((c,n)=>{c.addEventListener("mouseenter",()=>a(n)),c.addEventListener("focus",()=>a(n))})}function ss(){let e=f.home.brand,s=w("squama").layouts.find(t=>t.cover);return`
  <section class="cuore" id="cuore">
    <div class="wrap cuore__grid">
      <div class="cuore__text">
        <img class="cuore__logo" src="${e.logoCuore}" alt="CUORE by Natucer" width="120" height="48">
        <h2 class="h1">Piezas \xFAnicas, <span class="serif-i">hechas con las manos</span></h2>
        <p class="lead">Piezas que adquieren su car\xE1cter por las irregularidades propias de lo hecho a mano. Creatividad y arte hechos cer\xE1mica: obras que experimentan con los sentidos.</p>
        <div class="cuore__actions"><a class="btn btn--light" href="#/productos?line=cuore">Explorar CUORE</a><span class="small">${f.collections.filter(t=>t.cuore).length} colecciones CUORE en este mockup</span></div>
      </div>
      <div class="cuore__imgs">
        <a href="#/coleccion/squama" class="cuore__a">${L(s.src,"Squama")}<span>Squama</span></a>
        <a href="#/coleccion/tectonic" class="cuore__b">${L(w("tectonic").heroMobile,"Tectonic")}<span>Tectonic</span></a>
        <a href="#/coleccion/arco" class="cuore__c">${L(w("arco").environments[2].src,"Arco")}<span>Arco</span></a>
      </div>
    </div>
  </section>`}function as(){let e=new Map(f.resources.catalogs.concat(f.resources.technical).map(s=>[s.id,s]));return`
  <section class="section" id="soluciones">
    <div class="wrap">
      <div class="section-head"><div><p class="eyebrow">Soluciones cer\xE1micas</p><h2 class="h2">Sistemas, no solo piezas</h2></div><p class="lead" style="max-width:44ch">Fachadas ventiladas, pavimento t\xE9cnico, piscinas, escaleras y porcel\xE1nico iluminado, con su propia documentaci\xF3n.</p></div>
      <div class="solutions">
        ${f.resources.solutions.map(s=>{let t=s.doc&&e.get(s.doc);return`<article class="sol"><div class="sol__media">${L(s.image,s.title)}</div><div class="sol__body"><p class="eyebrow">${r(s.subtitle)}</p><h3 class="h3">${r(s.title)}</h3><p>${r(s.text)}</p>${t?`<a class="link-arrow" href="${r(t.href)}" target="_blank" rel="noopener">${r(t.kind)} \xB7 PDF</a>`:'<a class="link-arrow" href="#" data-stub>M\xE1s informaci\xF3n</a>'}</div></article>`}).join("")}
      </div>
    </div>
  </section>`}function os(){return`
  <section class="section rule" id="proyectos">
    <div class="wrap">
      <div class="section-head"><div><p class="eyebrow">Arquitectura e interiores</p><h2 class="h2">Proyectos que ya existen</h2></div><a class="link-arrow" href="#" data-stub>Ver todos los proyectos</a></div>
      <div class="projects">
        ${f.projects.filter(s=>s.featured).map((s,t)=>`
        <article class="proj proj--${t}">
          <button class="proj__media" data-project="${s.id}" aria-label="Ver im\xE1genes de ${r(s.title)}">${L(s.images[0],s.title)}<span class="proj__count">${s.images.length} im\xE1genes</span></button>
          <div class="proj__body"><p class="eyebrow">${r(s.category.replaceAll("-"," "))}</p><h3 class="h3">${r(s.title)}</h3><p>${r(s.summary)}</p>${s.collections[0]?`<a class="link-arrow" href="#/coleccion/${s.collections[0]}">${r(w(s.collections[0]).name)}</a>`:""}</div>
        </article>`).join("")}
      </div>
    </div>
  </section>`}function is(){return`
  <section class="section resources-band" id="recursos-home">
    <div class="wrap res">
      <div class="res__intro">
        <p class="eyebrow">Recursos para profesionales</p>
        <h2 class="h2">La documentaci\xF3n forma parte del producto</h2>
        <p class="lead">Fichas t\xE9cnicas por colecci\xF3n, cat\xE1logos, gu\xEDas de tendencias y recomendaciones de instalaci\xF3n, en un \xFAnico buscador.</p>
        <ul class="res__stats"><li><b class="num">${f.collections.reduce((s,t)=>s+t.documents.length,0)}</b> fichas t\xE9cnicas</li><li><b class="num">${f.resources.catalogs.length}</b> cat\xE1logos y folletos</li><li><b class="num">${f.resources.technical.length}</b> gu\xEDas t\xE9cnicas</li></ul>
        <a class="btn" href="#/recursos">Abrir recursos</a>
      </div>
      <div class="res__live">
        <label class="small" for="res-q">Busca una ficha o cat\xE1logo</label>
        <input id="res-q" class="res__input" type="search" placeholder="Ej. Sherwood, CUORE, fachadas\u2026" autocomplete="off">
        <div class="docs" data-res-list></div>
      </div>
    </div>
  </section>`}function vt(){return[...f.collections.flatMap(s=>s.documents.map(t=>({...t,cover:s.cover,note:"Ficha de colecci\xF3n",_s:`${s.name} ${s.efectos.join(" ")}`}))),...f.resources.catalogs.map(s=>({...s,_s:s.title})),...f.resources.technical.map(s=>({...s,_s:s.title}))]}function ns(e){let s=vt(),t=$("[data-res-list]",e),a=$("#res-q",e),c=()=>{let n=a.value.trim().toLowerCase(),i=(n?s.filter(o=>`${o.title} ${o._s} ${o.kind}`.toLowerCase().includes(n)):[s.find(o=>o.title.includes("Sherwood")),...f.resources.catalogs.slice(0,2),s.find(o=>o.kind==="Instalaci\xF3n")]).filter(Boolean).slice(0,4);t.innerHTML=i.length?i.map(o=>ee(o)).join(""):'<p class="small" style="padding:18px 0">Sin resultados.</p>'};a.addEventListener("input",c),c()}function cs(e){e.innerHTML=`${Yt()}${Wt()}
  <section class="intro wrap">
    <p class="eyebrow">El cat\xE1logo, replanteado</p>
    <p class="intro__text" data-scrub>Una colecci\xF3n no es una p\xE1gina: es un conjunto de ambientes, colores, formatos, piezas y documentos que se pueden recorrer, filtrar y descargar.</p>
    <ul class="intro__stats"><li><b class="num" data-count>124</b> colecciones en natucer.es</li><li><b class="num" data-count>305</b> proyectos publicados</li><li><b class="num" data-count>11</b> soluciones cer\xE1micas</li></ul>
  </section>
  ${Xt()}${Jt()}${es()}${ss()}${as()}${os()}${is()}`;let s=Kt(e),t=Qt(e);ts(e),ns(e);let a=Zt(e),c=n=>{let i=n.target.closest("[data-project]");if(!i)return;let o=f.projectById.get(i.dataset.project);G(o.images.map(u=>({src:u,title:o.title,caption:[o.summary,o.credits].filter(Boolean).join(" \u2014 ")})),0)};return e.addEventListener("click",c),{destroy(){e.removeEventListener("click",c),a(),s(),t()}}}var Ut,Vt,gt=B(()=>{N();z();ge();V();ae();fe();Ut=()=>"",Vt={bano:["squama","arco","tectonic"],cocina:["lineage","squama"],piscina:["arties","pirineos","heritage-clay"],escaleras:["sherwood","cerler","lands"],fachadas:["bamboo"],jardines:["bamboo"],publico:["heritage-clay","lands","boston"],"separador-ambientes":["bamboo"]}});var _t={};ce(_t,{render:()=>ls,title:()=>rs});function ls(e,{params:s}){let t=de(),a=et(s,t),c=new Set(t.filter(l=>l.open).map(l=>l.id)),n=new Set;t.forEach(l=>{a.f[l.id]?.size&&c.add(l.id)}),e.innerHTML=`
  <div class="finder">
    <header class="wrap finder__head">
      <div class="finder__titlerow"><h1 class="h1">Productos</h1></div>
      <div class="catbar" role="group" aria-label="Espacio" data-catbar></div>
      <div class="searchbox" data-searchbox>
        <div class="searchbox__field">${E.search}
          <input type="search" role="combobox" aria-expanded="false" aria-controls="f-suggest" aria-label="Buscar producto" placeholder="Colecci\xF3n, color, formato, R11\u2026" autocomplete="off" spellcheck="false" value="${r(a.q)}">
          <button class="searchbox__clear" data-clear-q hidden>Borrar</button></div>
        <div class="suggest" id="f-suggest" role="listbox" hidden></div>
      </div>
      <div class="shortcuts"><span class="eyebrow">Atajos</span>${Pe.map((l,p)=>`<button class="chip chip--sm" data-shortcut="${p}" aria-pressed="false">${r(l.label)}</button>`).join("")}</div>
    </header>

    <div class="wrap finder__body">
      <aside class="filters" data-filters aria-label="Filtros">
        <div class="filters__top"><b>Filtros</b><button class="icon-btn" data-close-filters aria-label="Cerrar filtros">${E.close}</button></div>
        <div class="filters__scroll" data-groups></div>
        <div class="filters__bottom"><button class="btn btn--solid" data-close-filters style="width:100%">Ver <span data-n-res></span> resultados</button></div>
      </aside>
      <section class="results" aria-label="Resultados">
        <div class="toolbar" data-toolbar></div>
        <div class="active" data-active></div>
        <div data-results></div>
      </section>
    </div>
    <button class="filters-fab" data-open-filters>${E.filter}<span>Filtros</span><b data-fab-n></b></button>
    <div class="vista" role="group" aria-label="Vista" data-viewseg></div>
    <div class="filters-scrim" data-close-filters></div>
  </div>`;let i={groups:$("[data-groups]",e),toolbar:$("[data-toolbar]",e),active:$("[data-active]",e),results:$("[data-results]",e),input:$("[data-searchbox] input",e),clear:$("[data-clear-q]",e),filters:$("[data-filters]",e)},o=()=>{let l=ve(a).toString();history.replaceState(null,"",`#/productos${l?`?${l}`:""}`)},u=l=>t.map(p=>{let m=a.f[p.id]||new Set,d=p.options.filter(x=>m.has(x.v)||(l[p.id].get(x.v)||0)>0||p.id!=="format"),g=p.collapsedAfter&&!n.has(p.id)?p.collapsedAfter:1/0,C=d.filter((x,D)=>D<g||m.has(x.v));return`
    <details class="fgroup" data-group="${p.id}" ${c.has(p.id)?"open":""}>
      <summary><span>${r(p.label)}</span>${m.size?`<b class="fgroup__n">${m.size}</b>`:""}</summary>
      <div class="fgroup__opts ${p.kind==="color"?"is-color":""}">
        ${C.map(x=>{let D=l[p.id].get(x.v)||0,Y=m.has(x.v),A=!Y&&D===0;return`<label class="opt ${A?"is-dim":""}"><input type="checkbox" data-g="${p.id}" data-v="${r(x.v)}" ${Y?"checked":""} ${A?"disabled":""}>
            <span class="opt__box">${p.kind==="color"?`<i class="swatch" style="background:${le[x.v]}"></i>`:""}</span>
            <span class="opt__lbl">${r(x.label)}${x.hint?` <em>${r(x.hint)}</em>`:""}</span><span class="opt__n num">${D}</span></label>`}).join("")}
        ${p.collapsedAfter&&d.length>p.collapsedAfter?`<button class="more" data-more="${p.id}">${n.has(p.id)?"Ver menos":`Ver todas (${d.length})`}</button>`:""}
      </div>
    </details>`}).join(""),h=(l,p)=>{let m=l.options.find(d=>d.v===p);return m?m.label:p},b=l=>l.length?a.view==="lista"?y(l):a.view==="mosaico"?`<div class="rmosaic">${l.map((p,m)=>it(p,a.lens,m)).join("")}</div>`:`<div class="rgrid">${l.map(p=>a.lens==="colores"?ot(p):_e(p)).join("")}</div>`:'<div class="empty"><p class="h3">Ninguna pieza cumple todos los criterios</p><p class="lead">Prueba a quitar alg\xFAn filtro o a cambiar a la vista de colores. Las opciones atenuadas en el panel no tienen resultados con tu selecci\xF3n actual.</p><button class="btn" data-reset>Borrar filtros</button></div>';function y(l){let p=m=>m.documents[0];return a.lens==="colores"?`<div class="tbl-wrap"><table class="tbl"><thead><tr><th></th><th>Variante</th><th>Colecci\xF3n</th><th>Formatos</th><th>Antideslizante</th><th>Ficha</th></tr></thead><tbody>
      ${l.map(m=>{let d=w(m.collection),g=p(d);return`<tr data-href="#/producto/${m.id}">
        <td class="tbl__thumb">${m.primary?L(m.images[0].src,""):`<i class="tbl__flat" style="background:${m.hex}"></i>`}</td>
        <td><a href="#/producto/${m.id}" class="tbl__name">${r(m.name)}</a><span class="small">${r(m.family)}${m.finish.length?" \xB7 "+m.finish.join(", "):""}</span></td>
        <td><a href="#/coleccion/${d.id}">${r(d.name)}</a></td>
        <td>${d.formats.map(C=>`<span class="mini">${r(W(C.key))}</span>`).join("")}</td>
        <td>${r(te(d)||"\u2014")}</td>
        <td>${g?`<a class="btn btn--sm" href="${r(g.href)}" target="_blank" rel="noopener" ${g.local?"download":""}>${E.download}PDF</a>`:"\u2014"}</td></tr>`}).join("")}
      </tbody></table></div>`:`<div class="tbl-wrap"><table class="tbl"><thead><tr><th></th><th>Colecci\xF3n</th><th>Efecto</th><th>Formatos</th><th>Superficie</th><th>Antideslizante</th><th>Colores</th><th>Ficha</th></tr></thead><tbody>
      ${l.map(m=>{let d=p(m);return`<tr data-href="#/coleccion/${m.id}">
        <td class="tbl__thumb">${L(m.cover,"")}</td>
        <td><a href="#/coleccion/${m.id}" class="tbl__name">${r(m.name)}</a><span class="small">${[m.cuore&&"CUORE",m.novedad&&"Novedad"].filter(Boolean).join(" \xB7 ")}</span></td>
        <td>${r(m.efectos.concat(m.shapes.filter(g=>g!=="Rectangular")).join(", ")||"\u2014")}</td>
        <td>${m.formats.slice(0,4).map(g=>`<span class="mini">${r(W(g.key))}</span>`).join("")}${m.formats.length>4?`<span class="small">+${m.formats.length-4}</span>`:""}</td>
        <td>${r(m.surfaces.map(g=>O[g]).join(", ")||"\u2014")}</td>
        <td>${r(te(m)||"\u2014")}</td>
        <td>${Ae(Q(m.id),6)}</td>
        <td>${d?`<a class="btn btn--sm" href="${r(d.href)}" target="_blank" rel="noopener" ${d.local?"download":""}>${E.download}PDF</a>`:"\u2014"}</td></tr>`}).join("")}
      </tbody></table></div>`}function _({keepFocus:l=!0}={}){let p=l&&document.activeElement?.dataset?.g?`[data-g="${document.activeElement.dataset.g}"][data-v="${CSS.escape(document.activeElement.dataset.v)}"]`:null,m=be(a,t),d=tt(a)+(a.q?1:0);i.groups.innerHTML=u(m.counts),p&&$(p,i.groups)?.focus({preventScroll:!0});let g=a.lens==="colores"?["variante","variantes"]:["colecci\xF3n","colecciones"];i.toolbar.innerHTML=`
      <div class="toolbar__count" aria-live="polite"><b class="num">${m.items.length}</b> ${m.items.length===1?g[0]:g[1]}<span class="small"> de ${m.total}</span></div>
      <div class="toolbar__ctrl">
        <button class="tbtn" data-open-filters>Filtrar <b data-fab-n></b></button>
        <div class="seg" role="group" aria-label="Qu\xE9 mostrar"><button data-lens="colecciones" aria-pressed="${a.lens==="colecciones"}">Colecciones</button><button data-lens="colores" aria-pressed="${a.lens==="colores"}">Colores</button></div>
                <label class="sort"><span class="sr-only">Ordenar</span><select data-sort><option value="az" ${a.sort==="az"?"selected":""}>A\u2013Z</option><option value="novedad" ${a.sort==="novedad"?"selected":""}>Novedades primero</option></select></label>
      </div>`;let C=[["grid","2"],["mosaico","4"],["lista","Lista"]];$("[data-viewseg]",e).innerHTML=`<span>Vista</span><div>${C.map(([A,ne])=>`<button data-view="${A}" aria-pressed="${a.view===A}" aria-label="${A==="grid"?"2 columnas":A==="mosaico"?"4 columnas":"Lista t\xE9cnica"}">${ne}</button>`).join("")}</div>`;let x=t.find(A=>A.id==="estancia"),D=a.f.estancia;$("[data-catbar]",e).innerHTML=`<button data-cat="" aria-pressed="${!D}">Todos</button>${x.options.map(A=>`<button data-cat="${A.v}" aria-pressed="${!!D?.has(A.v)}">${r(A.label)}</button>`).join("")}`;let Y=[];a.q&&Y.push(`<button class="chip chip--sm is-on" data-rm-q>\xAB${r(a.q)}\xBB <span class="x">\xD7</span></button>`);for(let A of t)for(let ne of a.f[A.id]||[])Y.push(`<button class="chip chip--sm is-on" data-rm="${A.id}|${r(ne)}">${A.id==="color"?`<i class="swatch" style="background:${le[ne]}"></i>`:""}${r(h(A,ne))} <span class="x">\xD7</span></button>`);i.active.innerHTML=Y.length?`${Y.join("")}<button class="clear-all" data-reset>Borrar todo</button>`:"",i.active.hidden=!Y.length,i.results.innerHTML=b(m.items),M("[data-shortcut]",e).forEach(A=>A.setAttribute("aria-pressed",String($t(a,Pe[+A.dataset.shortcut].f)&&!a.q))),$("[data-n-res]",e).textContent=m.items.length,M("[data-fab-n]",e).forEach(A=>{A.textContent=d||"",A.hidden=!d}),i.clear.hidden=!i.input.value,o()}let S=(l,p,m)=>{var g;let d=(g=a.f)[l]||(g[l]=new Set);m?d.add(p):d.delete(p),d.size||delete a.f[l]},I=l=>{let p=l.target.closest("input[data-g]");if(p){S(p.dataset.g,p.dataset.v,p.checked),_();return}l.target.matches("[data-sort]")&&(a.sort=l.target.value,_())},k=l=>{let p=l.target.closest?.("details[data-group]");p&&(p.open?c.add(p.dataset.group):c.delete(p.dataset.group))},P=l=>{let p=l.target,m;if(m=p.closest("[data-lens]"))a.lens=m.dataset.lens,_();else if(m=p.closest("[data-view]"))a.view=m.dataset.view,_();else if(m=p.closest("[data-cat]"))delete a.f.estancia,m.dataset.cat&&(a.f.estancia=new Set([m.dataset.cat])),_();else if(m=p.closest("[data-rm]")){let[d,g]=m.dataset.rm.split("|");S(d,g,!1),_()}else if(p.closest("[data-rm-q]"))a.q="",i.input.value="",_();else if(p.closest("[data-reset]"))a.f={},a.q="",i.input.value="",_();else if(p.closest("[data-clear-q]"))a.q="",i.input.value="",i.input.focus(),j.hide(),_();else if(m=p.closest("[data-more]")){let d=m.dataset.more;n.has(d)?n.delete(d):n.add(d),_({keepFocus:!1})}else if(m=p.closest("[data-shortcut]")){let d=Pe[+m.dataset.shortcut],g=$t(a,d.f)&&!a.q;if(a.f={},a.q="",i.input.value="",!g)for(let[C,x]of Object.entries(d.f))a.f[C]=new Set(x),c.add(C);_()}else p.closest("[data-open-filters]")?document.body.classList.add("filters-open"):p.closest("[data-close-filters]")?document.body.classList.remove("filters-open"):(m=p.closest("tr[data-href]"))&&!p.closest("a, button")&&(location.hash=m.dataset.href)};e.addEventListener("change",I),e.addEventListener("toggle",k,!0),e.addEventListener("click",P);let j=Se(i.input,$("#f-suggest",e),l=>{l.filter?(S(l.filter[0],l.filter[1],!0),c.add(l.filter[0]),a.q="",i.input.value="",j.hide(),_()):location.hash=ke(l,a)},{onEnter:l=>{a.q=l.trim(),j.hide(),_()}}),v=me(()=>{a.q=i.input.value.trim(),_()},160);return i.input.addEventListener("input",v),i.input.addEventListener("blur",()=>setTimeout(()=>j.hide(),120)),_({keepFocus:!1}),s.size&&!history.state?.noScroll&&requestAnimationFrame(()=>$(".finder__body",e).scrollIntoView({block:"start"})),{destroy(){e.removeEventListener("change",I),e.removeEventListener("toggle",k,!0),e.removeEventListener("click",P),document.body.classList.remove("filters-open")}}}var rs,Pe,$t,yt=B(()=>{N();z();ge();V();ae();je();rs=()=>"Producto",Pe=[{label:"Exterior antideslizante",f:{location:["exterior"],slip:["R11","R12","R13"]}},{label:"Piscina",f:{estancia:["piscina"]}},{label:"Gran formato",f:{size:["l","xl"]}},{label:"Revestimiento de ba\xF1o",f:{estancia:["bano"],placement:["pared"]}},{label:"Efecto madera",f:{efecto:["Madera"]}},{label:"Relieve 3D",f:{efecto:["Relieve 3D"]}},{label:"CUORE \xB7 hecho a mano",f:{line:["cuore"]}}],$t=(e,s)=>{let t=Object.keys(s);return Object.entries(e.f).filter(([,c])=>c.size).length===t.length&&t.every(c=>e.f[c]?.size===s[c].length&&s[c].every(n=>e.f[c].has(n)))}});var wt={};ce(wt,{groupPieces:()=>we,relatedDocs:()=>xe,render:()=>fs,title:()=>ds});function we(e){let s=[["Pelda\xF1os y escaleras",/PELDA|ZANQU|REMATE|FRONTAL|PASAMANOS|BLOCK|ÁNGULO|ANGULO/],["Piscina",/PISCINA|VIERTEAGUAS/],["Z\xF3calos",/Z[ÓO]CALO/]],t=new Map(s.map(([a])=>[a,[]]).concat([["Otras piezas",[]]]));for(let a of e){if(/BAJO PEDIDO/.test(a)&&a.length<14){t.get("Otras piezas").push(a);continue}let c=/PISCINA|VIERTEAGUAS/.test(a)?s[1]:s.find(([,n])=>n.test(a));t.get(c?c[0]:"Otras piezas").push(a)}return[...t].filter(([,a])=>a.length)}function xe(e){let s=f.resources,t=[...e.documents.map(i=>({...i,cover:e.cover,note:`Colecci\xF3n ${e.name}`}))],a=i=>s.catalogs.find(o=>i.test(o.title)),c=a(/general/i);c&&t.push(c),e.cuore&&t.push(a(/CUORE/i)),(e.estancias.includes("fachadas")||e.efectos.includes("Celos\xEDa"))&&t.push(a(/fachadas/i)),e.estancias.includes("piscina")&&t.push(a(/pool/i)),t.push(s.technical.find(i=>i.kind==="Instalaci\xF3n"));let n=e.placement.includes("pared")?/Revestimiento/:e.estancias.includes("piscina")?/Piscinas/:/in-out/;return t.push(s.technical.find(i=>n.test(i.title))),t.filter(Boolean)}function us(e){let s=t=>t.efectos.filter(a=>e.efectos.includes(a)).length*3+t.estancias.filter(a=>e.estancias.includes(a)).length+(t.cuore===e.cuore?1:0)+t.shapes.filter(a=>e.shapes.includes(a)).length*2;return f.collections.filter(t=>t.id!==e.id).sort((t,a)=>s(a)-s(t)).slice(0,3)}function ms(e){if(e===1)return[[12,1]];if(e===2)return[[6,1],[6,1]];if(e===4)return[[6,1],[6,1],[6,1],[6,1]];let s=[[7,2],[5,1],[5,1]].slice(0,e),t=e-s.length;for(;t>0;)if(t===4||t===2){for(let a=0;a<t;a++)s.push([6,1]);t=0}else if(t===1)s.push([12,1]),t=0;else{for(let a=0;a<3;a++)s.push([4,1]);t-=3}return s}function hs(e){return`
  <div class="switcher" data-switcher>
    <button class="switcher__btn" aria-haspopup="listbox" aria-expanded="false"><span class="small">Colecci\xF3n</span><b>${r(e.name)}</b><i class="caret"></i></button>
    <ul class="switcher__list" role="listbox" hidden>
      ${f.collections.map(s=>`<li><a role="option" href="#/coleccion/${s.id}" ${s.id===e.id?'aria-selected="true"':""}>${L(s.cover,"")}<span>${r(s.name)}</span><small>${r(s.efectos[0]||s.shapes[0])}</small></a></li>`).join("")}
    </ul>
  </div>`}function fs(e,{args:[s]}){let t=w(s);if(!t){e.innerHTML='<div class="wrap section"><h1 class="h1">Colecci\xF3n no encontrada</h1><a class="link-arrow" href="#/productos">Volver al cat\xE1logo</a></div>';return}let a=Q(t.id),c=Ke(t),n=xe(t),i=we(t.pieces),o=t.layouts,u=[["ambientes","Ambientes",t.environments.length>0],["colores","Colores",a.length>0],["formatos","Formatos",t.formats.length>0],["composiciones","Composiciones",o.length>0],["tecnica","T\xE9cnica",!0],["proyectos","Proyectos",c.length>0],["documentos","Documentos",!0]].filter(d=>d[2]),h=(d,g)=>g?`<div><dt>${d}</dt><dd>${g}</dd></div>`:"",b=d=>`<div class="chips">${d.join("")}</div>`;e.innerHTML=`
  <article class="collection">
    <div class="wrap crumbs-row"><nav class="crumbs" aria-label="Migas"><a href="#/productos">Productos</a><span aria-hidden="true">/</span><span aria-current="page">${r(t.name)}</span></nav>${hs(t)}</div>

    <header class="chero">
      <div class="chero__text">
        ${$e(t)}
        <h1 class="display">${r(t.name)}</h1>
        <p class="lead">${r(t.concept)}</p>
        <dl class="facts">
          ${t.efectos.length||t.shapes.length?`<div><dt>Efecto \xB7 forma</dt><dd>${r(t.efectos.concat(t.shapes).join(" \xB7 "))}</dd></div>`:""}
          <div><dt>Formatos</dt><dd>${r(se(t))}</dd></div>
          ${t.surfaces.length?`<div><dt>Superficie</dt><dd>${r(t.surfaces.map(d=>O[d]).join(" \xB7 "))}</dd></div>`:""}
          ${t.antislip.length?`<div><dt>Antideslizante</dt><dd>${r(te(t))}</dd></div>`:""}
          <div><dt>Colores</dt><dd>${a.length}</dd></div>
        </dl>
        <div class="chero__actions">
          ${t.documents[0]?`<a class="btn btn--solid" href="${r(t.documents[0].href)}" target="_blank" rel="noopener" ${t.documents[0].local?"download":""}>${E.download}Ficha t\xE9cnica PDF</a>`:""}
          <button class="btn" data-present>${E.expand}Pase de im\xE1genes</button>
        </div>
      </div>
      <div class="chero__media">
        <picture><source media="(max-width: 760px)" srcset="${r(t.heroMobile||t.hero)}"><img src="${r(t.hero)}" alt="${r(t.name)}" fetchpriority="high"></picture>
      </div>
    </header>

    <nav class="subnav" aria-label="En esta colecci\xF3n"><div class="wrap subnav__in">${u.map(([d,g])=>`<a href="#" data-spy="${d}">${r(g)}</a>`).join("")}</div></nav>

    ${t.environments.length?`
    <section class="section csec" id="ambientes" data-sec>
      <div class="wrap"><div class="csec__head"><h2 class="h2">Ambientes</h2><p class="small">${t.environments.length} fotograf\xEDas \xB7 pulsa para ampliar</p></div>
        <div class="gallery">${t.environments.map((d,g)=>{let[C,x]=ms(t.environments.length)[g];return`<button class="gallery__item" style="--cs:${C};--rs:${x}" data-env="${g}" aria-label="Ampliar: ${r(d.label)}">${L(d.src,d.label)}<span class="gallery__cap">${r(d.label)}</span></button>`}).join("")}</div>
      </div>
    </section>`:""}

    <section class="section csec rule" id="colores" data-sec>
      <div class="wrap"><div class="csec__head"><h2 class="h2">Colores</h2><p class="small">${a.length} \xB7 cada color abre su ficha de variante</p></div>
        <div class="colors">${a.map(d=>`
          <a class="color" href="#/producto/${d.id}">
            <div class="color__media">${d.primary?L(d.images[0].src,`${t.name} ${d.name}`):`<div class="color__flat" style="background:${d.hex}"></div>`}<i class="swatch color__dot" style="background:${d.hex}"></i></div>
            <div class="color__name">${r(d.name)}</div><div class="small">${r([J[d.family],...d.finish.map(g=>g==="antislip"?"Antislip":"Relieve")].join(" \xB7 "))}</div>
          </a>`).join("")}</div>
      </div>
    </section>

    ${t.formats.length?`
    <section class="section csec rule" id="formatos" data-sec>
      <div class="wrap cgrid">
        <div><h2 class="h2">Formatos<br>y piezas</h2><p class="small" style="margin-top:14px">Proporciones a escala entre s\xED.${t.surfaces.length?` Superficie ${t.surfaces.map(d=>O[d].toLowerCase()).join(" y ")}.`:""}</p></div>
        <div>
          ${pe(t)}
          ${i.length?`<div class="pieces">${i.map(([d,g])=>`<div class="pieces__g"><h3 class="eyebrow">${r(d)} <span>${g.length}</span></h3><div class="tags">${g.map(C=>`<span class="piece">${r(ps(C))}</span>`).join("")}</div></div>`).join("")}</div>`:""}
        </div>
      </div>
    </section>`:""}

    ${o.length?`
    <section class="section csec rule" id="composiciones" data-sec>
      <div class="wrap"><div class="csec__head"><h2 class="h2">Composiciones y despieces</h2><p class="small">L\xE1minas de composici\xF3n para prescriptores y colocadores</p></div>
        <div class="layouts">
          <div class="layouts__main"><button class="layouts__big" data-layout-open aria-label="Ampliar l\xE1mina"><img data-layout-img src="${r(o[0].src)}" alt="${r(o[0].caption)}"></button></div>
          <div class="layouts__thumbs" role="tablist">${o.map((d,g)=>`<button role="tab" aria-selected="${g===0}" data-layout="${g}" aria-label="L\xE1mina ${g+1}">${L(d.src,"")}<span>${d.cover?"Presentaci\xF3n":`Despiece ${g+(o[0].cover?0:1)}`}</span></button>`).join("")}</div>
        </div>
      </div>
    </section>`:""}

    <section class="section csec rule" id="tecnica" data-sec>
      <div class="wrap cgrid">
        <div><h2 class="h2">Informaci\xF3n t\xE9cnica</h2></div>
        <div class="tech">
          <dl class="specs">
            ${h("Material",r(t.material||"Gres porcel\xE1nico extruido"))}
            ${h("Efecto",r(t.efectos.join(" \xB7 ")))}
            ${h("Forma",r(t.shapes.join(" \xB7 ")))}
            ${h("Formatos",b(t.formats.map(d=>`<span class="chip chip--sm" style="cursor:default">${r(d.label)}${d.imperial?` <span class="small">${r(d.imperial)}</span>`:""}</span>`)))}
            ${h("Superficie",r(t.surfaces.map(d=>O[d]).join(" \xB7 ")))}
            ${h("Uso",r([...t.location.map(d=>Z[d]),...t.placement.map(d=>X[d])].join(" \xB7 ")))}
            ${h("Espacios",b(t.estancias.filter(d=>F[d]).map(d=>`<a class="chip chip--sm" href="#/productos?estancia=${d}">${r(F[d]||d)}</a>`)))}
            ${h("Antideslizante",ye(t))}
          </dl>
          ${t.specs.length?`<ul class="ticks">${t.specs.map(d=>`<li>${r(d.label)}</li>`).join("")}</ul>`:""}
          <p class="small tech__note">Datos tomados de la web actual. Clases R9\u2013R13 seg\xFAn UNE-EN 16165 (anexos B y C) y clases A\u2013C seg\xFAn el anexo A, tal y como figuran en los iconos publicados en natucer.es.</p>
        </div>
      </div>
    </section>

    ${c.length?`
    <section class="section csec rule" id="proyectos" data-sec>
      <div class="wrap"><div class="csec__head"><h2 class="h2">Proyectos con ${r(t.name)}</h2><p class="small">${c.length} de natucer.es</p></div>
        <div class="cprojects">${c.slice(0,6).map(d=>`
          <button class="cproj" data-project="${d.id}">
            <span class="cproj__media">${L(d.images[0],d.title)}</span><span class="eyebrow">${r(d.category.replaceAll("-"," "))}</span><span class="cproj__t">${r(d.title)}</span>
          </button>`).join("")}</div>
      </div>
    </section>`:""}

    <section class="section csec rule" id="documentos" data-sec>
      <div class="wrap cgrid">
        <div><h2 class="h2">Documentaci\xF3n<br>y descargas</h2><p class="small" style="margin-top:14px">Todo lo necesario para prescribir y colocar, sin salir de la colecci\xF3n.</p><a class="link-arrow" style="margin-top:18px" href="#/recursos">Todos los recursos</a></div>
        <div class="docs">${n.map(d=>ee(d)).join("")}</div>
      </div>
    </section>

    <section class="section rule">
      <div class="wrap"><div class="csec__head"><h2 class="h2">Otras colecciones</h2><a class="link-arrow" href="#/productos">Volver al cat\xE1logo</a></div>
        <div class="related">${us(t).map(_e).join("")}</div></div>
    </section>
  </article>`;let y=[...t.environments.map(d=>({src:d.src,title:t.name,caption:d.caption})),...o.map(d=>({src:d.src,title:t.name,caption:d.caption}))],_=$("[data-switcher]",e),S=$(".switcher__btn",_),I=$(".switcher__list",_),k=d=>{I.hidden=!d,S.setAttribute("aria-expanded",String(d))};S.addEventListener("click",()=>k(I.hidden));let P=d=>{_.contains(d.target)||k(!1)},j=d=>{d.key==="Escape"&&k(!1)};document.addEventListener("click",P),document.addEventListener("keydown",j);let v=0,l=d=>{let g=d.target,C;if(C=g.closest("[data-env]"))G(y,+C.dataset.env);else if(g.closest("[data-present]"))G(y,0);else if(C=g.closest("[data-layout]"))v=+C.dataset.layout,$("[data-layout-img]",e).src=o[v].src,M("[data-layout]",e).forEach(x=>x.setAttribute("aria-selected",String(x===C)));else if(g.closest("[data-layout-open]"))G(y,t.environments.length+v);else if(C=g.closest("[data-project]")){let x=f.projectById.get(C.dataset.project);G(x.images.map(D=>({src:D,title:x.title,caption:[x.summary,x.credits].filter(Boolean).join(" \u2014 ")})),0)}else(C=g.closest("[data-spy]"))&&(d.preventDefault(),document.getElementById(C.dataset.spy)?.scrollIntoView({behavior:"smooth",block:"start"}))};e.addEventListener("click",l);let p=M("[data-spy]",e),m=new IntersectionObserver(d=>{for(let g of d)g.isIntersecting&&p.forEach(C=>C.classList.toggle("is-on",C.dataset.spy===g.target.id))},{rootMargin:"-40% 0px -55% 0px"});return M("[data-sec]",e).forEach(d=>m.observe(d)),{destroy(){m.disconnect(),e.removeEventListener("click",l),document.removeEventListener("click",P),document.removeEventListener("keydown",j)}}}var ds,ps,Oe=B(()=>{N();z();V();ae();ds=([e])=>w(e)?.name,ps=e=>e.charAt(0)+e.slice(1).toLowerCase()});var Et={};ce(Et,{render:()=>gs,title:()=>vs});function xt(e,s,t){return`${`${e.name} ${s.name}${s.finish.includes("antislip")?" Antislip":""}`.toUpperCase()} ${t.label.replace(/^[A-ZÁÉÍÓÚ.]+\s+(?=\d)/,"")}${t.imperial?` \xB7 ${t.imperial}`:""}`.replaceAll('"',"\u2033")}function gs(e,{args:[s]}){let t=f.variantById.get(s);if(!t){e.innerHTML='<div class="wrap section"><h1 class="h1">Producto no encontrado</h1><a class="link-arrow" href="#/productos">Volver al cat\xE1logo</a></div>';return}let a=w(t.collection),c=Q(a.id),n=c.findIndex(v=>v.id===t.id),i=c[(n-1+c.length)%c.length],o=c[(n+1)%c.length],u=t.images.map(v=>({src:v.src,caption:v.caption})),h=t.primary>0,b=u.length?u:[],y=xe(a),_=we(a.pieces),S=0,I=0,k=(v,l)=>l?`<div><dt>${v}</dt><dd>${l}</dd></div>`:"";e.innerHTML=`
  <article class="product">
    <div class="wrap crumbs-row"><nav class="crumbs" aria-label="Migas"><a href="#/productos">Productos</a><span aria-hidden="true">/</span><a href="#/coleccion/${a.id}">${r(a.name)}</a><span aria-hidden="true">/</span><span aria-current="page">${r(t.name)}</span></nav>
      <div class="pnav"><a class="icon-btn" href="#/producto/${i.id}" aria-label="Color anterior: ${r(i.name)}" title="${r(i.name)}">${E.arrowL}</a><span class="small num">${n+1} / ${c.length}</span><a class="icon-btn" href="#/producto/${o.id}" aria-label="Color siguiente: ${r(o.name)}" title="${r(o.name)}">${E.arrowR}</a></div></div>

    <div class="wrap pgrid">
      <div class="pgallery">
        <button class="pgallery__main" data-open aria-label="Ampliar imagen">
          ${b.length?`<img data-main src="${r(b[0].src)}" alt="${r(a.name)} ${r(t.name)}">`:`<div class="pflat" style="background:${t.hex}"><span>Muestra de color provisional</span></div>`}
        </button>
        ${b.length&&!h?'<p class="small pgallery__note">Este color aparece en la fotograf\xEDa junto a otros tonos de la colecci\xF3n.</p>':""}
        ${b.length?"":'<p class="small pgallery__note">La fotograf\xEDa de este color no est\xE1 en Sources: es un dato que el futuro PIM deber\xEDa aportar por variante.</p>'}
        ${b.length?`<div class="pgallery__bar"><span class="small" data-cap>${r(b[0].caption||"")}</span><a class="btn btn--sm" data-dl href="${r(b[0].src)}" download>${E.download}Imagen JPG</a></div>`:""}
        ${b.length>1?`<div class="pthumbs">${b.map((v,l)=>`<button data-thumb="${l}" aria-pressed="${l===0}" aria-label="Imagen ${l+1}">${L(v.src,"")}</button>`).join("")}</div>`:""}
      </div>

      <div class="pinfo">
        <a class="eyebrow ul" href="#/coleccion/${a.id}">${r(a.name)} \xB7 ver colecci\xF3n</a>
        <h1 class="h1">${r(t.name)}</h1>
        <div class="pinfo__color"><i class="swatch" style="background:${t.hex};width:22px;height:22px"></i><span>${r(J[t.family])}${t.finish.length?` \xB7 ${t.finish.map(bs).join(" \xB7 ")}`:""}</span>${$e(a)}</div>

        <div class="pblock">
          <h2 class="eyebrow">Formato</h2>
          <div class="tags" role="group" aria-label="Formato">${a.formats.map((v,l)=>`<button class="chip chip--sm" data-fmt="${l}" aria-pressed="${l===0}">${r(v.label)}${v.imperial?` <span class="small">${r(v.imperial)}</span>`:""}</button>`).join("")}</div>
          <div data-scale>${pe(a,{active:a.formats[0]?.key,maxPx:150})}</div>
        </div>

        <div class="pblock refbox">
          <h2 class="eyebrow">Referencia</h2>
          <div class="refbox__row"><code data-ref>${r(a.formats[0]?xt(a,t,a.formats[0]):`${a.name} ${t.name}`.toUpperCase())}</code><button class="btn btn--sm" data-copy>${E.copy}Copiar</button></div>
        </div>

        <dl class="specs">
          ${k("Colecci\xF3n",`<a href="#/coleccion/${a.id}" class="ul">${r(a.name)}</a>`)}
          ${k("Efecto \xB7 forma",r(a.efectos.concat(a.shapes).join(" \xB7 ")))}
          ${k("Superficie",r(a.surfaces.map(v=>O[v]).join(" \xB7 ")))}
          ${k("Uso",r([...a.location.map(v=>Z[v]),...a.placement.map(v=>X[v])].join(" \xB7 ")))}
          ${k("Espacios",`<div class="chips">${a.estancias.filter(v=>F[v]).map(v=>`<a class="chip chip--sm" href="#/productos?estancia=${v}">${r(F[v]||v)}</a>`).join("")}</div>`)}
          ${k("Antideslizante",ye(a))}
          ${k("Material",r(a.material||"Gres porcel\xE1nico extruido"))}
        </dl>
      </div>
    </div>

    <section class="section csec rule">
      <div class="wrap cgrid">
        <div><h2 class="h2">Documentaci\xF3n<br>y recursos</h2><p class="small" style="margin-top:14px">Los documentos son de la colecci\xF3n ${r(a.name)}: Natucer no publica ficha por color.</p></div>
        <div>
          <div class="docs">${y.map(v=>ee(v)).join("")}</div>
          ${a.layouts.length?`<h3 class="eyebrow" style="margin:32px 0 12px">Despieces y composiciones (JPG)</h3><div class="dl-thumbs">${a.layouts.map((v,l)=>`<a href="${r(v.src)}" download class="dl-thumb">${L(v.src,"")}<span>${v.cover?"Presentaci\xF3n":`Despiece ${l+(a.layouts[0].cover?0:1)}`}</span></a>`).join("")}</div>`:""}
        </div>
      </div>
    </section>

    <section class="section csec rule">
      <div class="wrap"><div class="csec__head"><h2 class="h2">Otros colores de ${r(a.name)}</h2><a class="link-arrow" href="#/coleccion/${a.id}">Ver colecci\xF3n completa</a></div>
        <div class="colors colors--sm">${c.filter(v=>v.id!==t.id).map(v=>`
          <a class="color" href="#/producto/${v.id}"><div class="color__media">${v.primary?L(v.images[0].src,`${a.name} ${v.name}`):`<div class="color__flat" style="background:${v.hex}"></div>`}<i class="swatch color__dot" style="background:${v.hex}"></i></div><div class="color__name">${r(v.name)}</div></a>`).join("")}</div>
        ${_.length?`<div class="pieces" style="margin-top:56px"><h3 class="h3" style="margin-bottom:18px">Piezas especiales de la colecci\xF3n</h3>${_.map(([v,l])=>`<div class="pieces__g"><h4 class="eyebrow">${r(v)} <span>${l.length}</span></h4><div class="tags">${l.map(p=>`<span class="piece">${r(p.charAt(0)+p.slice(1).toLowerCase())}</span>`).join("")}</div></div>`).join("")}</div>`:""}
      </div>
    </section>
  </article>`;let P=v=>{I=v;let l=b[v];$("[data-main]",e).src=l.src,$("[data-cap]",e).textContent=l.caption||"",$("[data-dl]",e).href=l.src,M("[data-thumb]",e).forEach(p=>p.setAttribute("aria-pressed",String(+p.dataset.thumb===v)))},j=v=>{let l=v.target,p;if(p=l.closest("[data-thumb]"))P(+p.dataset.thumb);else if(l.closest("[data-open]")&&b.length)G(b.map(m=>({src:m.src,title:`${a.name} ${t.name}`,caption:m.caption})),I);else if(p=l.closest("[data-fmt]"))S=+p.dataset.fmt,M("[data-fmt]",e).forEach(m=>m.setAttribute("aria-pressed",String(m===p))),$("[data-scale]",e).innerHTML=pe(a,{active:a.formats[S].key,maxPx:150}),$("[data-ref]",e).textContent=xt(a,t,a.formats[S]);else if(l.closest("[data-copy]")){let m=$("[data-ref]",e).textContent;(navigator.clipboard?.writeText(m)||Promise.reject()).then(()=>re("Referencia copiada"),()=>re(m))}};return e.addEventListener("click",j),{destroy(){e.removeEventListener("click",j)}}}var vs,bs,Lt=B(()=>{N();z();V();ae();Oe();vs=([e])=>{let s=f.variantById.get(e);return s?`${w(s.collection).name} ${s.name}`:""},bs=e=>e==="antislip"?"Antislip":"Relieve"});var Ct={};ce(Ct,{render:()=>ys,title:()=>$s});function _s(){let e=f.collections.flatMap(s=>s.documents.map(t=>({...t,cover:s.cover,note:s.efectos[0]||"",_t:"fichas",_s:`${s.name} ${s.efectos.join(" ")} ${s.estancias.join(" ")}`})));return[...f.resources.catalogs.map(s=>({...s,_t:"catalogos",_s:s.title})),...e,...f.resources.technical.map(s=>({...s,_t:"guias",_s:s.title}))]}function ys(e,{params:s}){let t=_s(),a=Be.some(([h])=>h===s.get("t"))?s.get("t"):"todo",c="";e.innerHTML=`
  <div class="wrap res-page">
    <header class="res-page__head">
      <p class="eyebrow">Recursos para profesionales</p>
      <h1 class="h1">Cat\xE1logos, fichas <span class="serif-i">y gu\xEDas t\xE9cnicas</span></h1>
      <p class="lead">Un \xFAnico lugar para localizar documentaci\xF3n: por colecci\xF3n, por tipo o por palabra. Cada colecci\xF3n enlaza adem\xE1s sus propios documentos.</p>
      <div class="searchbox"><div class="searchbox__field">${E.search}<input type="search" data-q placeholder="Colecci\xF3n, cat\xE1logo o gu\xEDa\u2026" aria-label="Buscar documentos" autocomplete="off"></div></div>
      <div class="seg" role="tablist" aria-label="Tipo de documento">${Be.map(([h,b])=>`<button data-tab="${h}" aria-pressed="${h===a}">${b}</button>`).join("")}</div>
    </header>
    <div data-list></div>
    <p class="small" style="padding:28px 0 80px">Los documentos ligeros se incluyen en el mockup; los pesados se abren desde natucer.es. La ficha t\xE9cnica es \xFAnica por colecci\xF3n: la web actual no publica una por color.</p>
  </div>`;let n=$("[data-list]",e),i=()=>{let h=c.toLowerCase(),b=t.filter(_=>(a==="todo"||_._t===a)&&(!h||`${_.title} ${_._s} ${_.kind}`.toLowerCase().includes(h))),y=Be.slice(1).map(([_,S])=>[S,b.filter(I=>I._t===_)]).filter(([,_])=>_.length);n.innerHTML=b.length?y.map(([_,S])=>`<section class="res-group"><h2 class="eyebrow">${r(_)} <span class="num">${S.length}</span></h2><div class="docs">${S.map(I=>ee(I)).join("")}</div></section>`).join(""):'<p class="lead" style="padding:48px 0">Sin resultados. Prueba con el nombre de una colecci\xF3n.</p>'},o=h=>{let b=h.target.closest("[data-tab]");b&&(a=b.dataset.tab,M("[data-tab]",e).forEach(y=>y.setAttribute("aria-pressed",String(y===b))),i())},u=h=>{h.target.matches("[data-q]")&&(c=h.target.value.trim(),i())};return e.addEventListener("click",o),e.addEventListener("input",u),i(),{destroy(){e.removeEventListener("click",o),e.removeEventListener("input",u)}}}var $s,Be,At=B(()=>{N();z();ae();$s=()=>"Recursos",Be=[["todo","Todo"],["catalogos","Cat\xE1logos y folletos"],["fichas","Fichas t\xE9cnicas"],["guias","Gu\xEDas e instalaci\xF3n"]]});z();N();je();fe();var Bt=[".section-head",".intro .eyebrow",".rail__card",".spaces__head",".spaces__list li",".cuore__text > *",".sol",".proj__body",".res__intro > *",".finder__head > *",".res-page__head > *",".csec__head",".cgrid > div:first-child",".docs .doc",".ccard__body",".vcard__body",".color__name",".strip__grid",".chero__text > *",".pinfo > *",".intro__stats li",".menu__sub"].join(","),Nt=[".ccard__media",".vcard__media",".rail__media",".sol__media",".proj__media",".color__media",".cproj__media",".cuore__imgs a",".gallery__item",".rmosaic .tile",".pgallery__main",".spaces__preview"].join(","),zt=".chero__media img, .cuore__imgs img",Ie=new Set,Te=new Set,pt=new WeakSet,ue=new Set,Fe=new IntersectionObserver(e=>{for(let s of e)!s.isIntersecting&&s.boundingClientRect.top>0||(s.target.classList.add("fx-in"),Fe.unobserve(s.target))},{threshold:.1,rootMargin:"0px 0px -5% 0px"}),qe=new IntersectionObserver(e=>{for(let s of e){if(!s.isIntersecting&&s.boundingClientRect.top>0)continue;qe.unobserve(s.target);let t=s.target,a=+t.dataset.to;if(!s.isIntersecting){t.textContent=a;continue}let c=performance.now(),n=i=>{let o=Math.min(1,(i-c)/2400);t.textContent=Math.round(a*(1-Math.pow(1-o,3))),o<1&&requestAnimationFrame(n)};requestAnimationFrame(n)}},{threshold:.6});function ut(e,s){if(e.dataset.fx)return;e.dataset.fx="1",e.classList.add(s);let t=[...e.parentElement.children].indexOf(e);e.style.setProperty("--d",`${Math.min(t%6,5)*70}ms`),Fe.observe(e),ue.add(e)}function Ht(e){let s=e.textContent.trim().split(/\s+/);e.setAttribute("aria-label",e.textContent.trim()),e.innerHTML=s.map(t=>`<span class="w" aria-hidden="true">${t}</span>`).join(" "),e._words=[...e.querySelectorAll(".w")],Ie.add(e)}function mt(e){if(e.nodeType!==1)return;let s=(t,a)=>{e.matches?.(t)&&a(e),e.querySelectorAll(t).forEach(a)};s("[data-scrub]",t=>{t._words||Ht(t)}),s("[data-count]",t=>{pt.has(t)||(pt.add(t),t.dataset.to=t.textContent.replace(/\D/g,""),q||(t.textContent="0",qe.observe(t),ue.add(t)))}),s(zt,t=>Te.add(t)),!q&&(s(Bt,t=>ut(t,"fx")),s(Nt,t=>ut(t,"fx-media")))}var Me=!1;function Re(){Me||(Me=!0,requestAnimationFrame(()=>{Me=!1;let e=innerHeight;for(let t of Ie){if(!t.isConnected){Ie.delete(t);continue}let a=t.getBoundingClientRect(),c=Math.min(1,Math.max(0,(e*.88-a.top)/(a.height+e*.3))),n=t._words.length;t._words.forEach((i,o)=>i.classList.toggle("on",o<c*n*1.15))}for(let t of ue){if(!t.isConnected){ue.delete(t);continue}t.getBoundingClientRect().bottom<0&&(ue.delete(t),t.dataset.count!==void 0?(qe.unobserve(t),t.textContent=t.dataset.to):(Fe.unobserve(t),t.classList.add("fx-in")))}if(q)return;for(let t of Te){if(!t.isConnected){Te.delete(t);continue}let a=t.parentElement.getBoundingClientRect();if(a.bottom<-100||a.top>e+100)continue;let c=(a.top+a.height/2-e/2)/e;t.style.setProperty("--py",`${(-c*7).toFixed(2)}%`)}let s=document.querySelector("[data-hero]");s&&s.style.setProperty("--p",Math.min(1,scrollY/e).toFixed(3))}))}function Dt(){if(q||!matchMedia("(hover: hover) and (pointer: fine)").matches)return;let e=document.createElement("div");e.className="cursor",document.body.appendChild(e);let s=-100,t=-100,a=-100,c=-100,n=()=>{s+=(a-s)*.18,t+=(c-t)*.18,e.style.transform=`translate3d(${s}px,${t}px,0)`,requestAnimationFrame(n)};requestAnimationFrame(n),addEventListener("mousemove",i=>{a=i.clientX,c=i.clientY,e.classList.add("is-on")},{passive:!0}),document.addEventListener("mouseleave",()=>e.classList.remove("is-on")),document.addEventListener("mouseover",i=>{let o=i.target.closest(".ccard, .tile, .rail__card, .gallery__item, .proj__media, .cproj, .vcard, .sol, .color, .cuore__imgs a, .pgallery__main");e.classList.toggle("is-big",!!o),e.dataset.label=o&&o.closest("[data-rail]")?"Arrastra":""})}function ht(e){mt(e),new MutationObserver(s=>{for(let t of s)t.addedNodes.forEach(mt)}).observe(e,{childList:!0,subtree:!0}),addEventListener("scroll",Re,{passive:!0}),addEventListener("resize",Re),Dt(),Re()}var ft=q;var ws=[{re:/^\/$/,view:()=>Promise.resolve().then(()=>(gt(),bt))},{re:/^\/productos$/,view:()=>Promise.resolve().then(()=>(yt(),_t))},{re:/^\/coleccion\/([\w-]+)$/,view:()=>Promise.resolve().then(()=>(Oe(),wt))},{re:/^\/producto\/([\w-]+)$/,view:()=>Promise.resolve().then(()=>(Lt(),Et))},{re:/^\/recursos$/,view:()=>Promise.resolve().then(()=>(At(),Ct))}],ie=document.getElementById("main"),Ne=null,kt=null;async function St(){let{path:e,params:s}=De(),t,a=ws.find(o=>t=e.match(o.re));if(lt(e),Ne?.destroy?.(),Ne=null,!a){ie.innerHTML='<div class="wrap section"><p class="eyebrow">404</p><h1 class="h1" style="margin:12px 0 24px">Esta p\xE1gina no existe en el mockup</h1><a class="link-arrow" href="#/">Volver al inicio</a></div>';return}let c=await a.view(),n=kt===e;kt=e,Ne=await c.render(ie,{params:s,args:t.slice(1),samePage:n})||null,ft||ie.animate([{opacity:0},{opacity:1}],{duration:500,easing:"ease-out"}),document.title=`${c.title?.(t.slice(1))?c.title(t.slice(1))+" \xB7 ":""}Natucer \xB7 Mockup`;let i=s.get("s");i?document.getElementById(i)?.scrollIntoView({behavior:"smooth",block:"start"}):n||(window.scrollTo(0,0),ie.focus({preventScroll:!0}))}(async function(){try{await Ye()}catch(s){ie.innerHTML=`<div class="wrap section"><h1 class="h2">No se pudieron cargar los datos</h1><p class="lead" style="margin-top:16px">Este prototipo debe abrirse desde un servidor local (no con doble clic en index.html). Ejecuta <code>node serve.mjs</code> o <code>python -m http.server</code> dentro de la carpeta mockup.</p><p class="small" style="margin-top:12px">${s.message}</p></div>`;return}rt(),dt(),ht(ie),window.addEventListener("hashchange",St),St()})();})();
