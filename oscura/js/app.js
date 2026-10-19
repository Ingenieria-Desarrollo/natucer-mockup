(()=>{var Rt=Object.defineProperty;var B=(e,s,t)=>()=>{if(t)throw t[0];try{return e&&(s=e(e=0)),s}catch(a){throw t=[a],a}};var ce=(e,s)=>{for(var t in s)Rt(e,t,{get:s[t],enumerable:!0})};function re(e){let s=document.getElementById("toast");s.textContent=e,s.classList.add("is-on"),clearTimeout(He),He=setTimeout(()=>s.classList.remove("is-on"),2600)}function Ue(e=location.hash){let s=e.replace(/^#/,"")||"/",[t,a=""]=s.split("?"),n=new URLSearchParams(a);return{path:t.replace(/\/+$/,"")||"/",params:n}}var r,W,De,$,S,me,Z,He,L,z=B(()=>{r=e=>String(e??"").replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[s]),W=e=>String(e??"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/(\d)\s*[x×]\s*(\d)/g,"$1x$2").replace(/(\d)\.(\d)/g,"$1,$2"),De=e=>e>=1048576?`${(e/1048576).toFixed(e>10485760?0:1).replace(".",",")} MB`:`${Math.max(1,Math.round(e/1024))} KB`,$=(e,s=document)=>s.querySelector(e),S=(e,s=document)=>[...s.querySelectorAll(e)],me=(e,s=120)=>{let t;return(...a)=>{clearTimeout(t),t=setTimeout(()=>e(...a),s)}},Z=e=>e.replace("x"," \xD7 ");L={search:'<svg viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 21 21"/></svg>',arrowR:'<svg viewBox="0 0 24 24"><path d="M4 12h16M14 6l6 6-6 6"/></svg>',arrowL:'<svg viewBox="0 0 24 24"><path d="M20 12H4M10 6l-6 6 6 6"/></svg>',close:'<svg viewBox="0 0 24 24"><path d="M5 5l14 14M19 5 5 19"/></svg>',download:'<svg viewBox="0 0 24 24"><path d="M12 4v12M6 11l6 6 6-6M5 20h14"/></svg>',grid:'<svg viewBox="0 0 24 24"><rect x="4" y="4" width="7" height="7"/><rect x="13" y="4" width="7" height="7"/><rect x="4" y="13" width="7" height="7"/><rect x="13" y="13" width="7" height="7"/></svg>',mosaic:'<svg viewBox="0 0 24 24"><rect x="4" y="4" width="9" height="9"/><rect x="15" y="4" width="5" height="5"/><rect x="15" y="11" width="5" height="9"/><rect x="4" y="15" width="9" height="5"/></svg>',list:'<svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',filter:'<svg viewBox="0 0 24 24"><path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/></svg>',copy:'<svg viewBox="0 0 24 24"><rect x="8" y="8" width="11" height="12"/><path d="M5 16V5h10"/></svg>',expand:'<svg viewBox="0 0 24 24"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>'}});var F,oe,X,J,he,Ve,O,V,Le,Ge,Q,le,Ye,G=B(()=>{F={bano:"Ba\xF1o",cocina:"Cocina",piscina:"Piscina",escaleras:"Escaleras",fachadas:"Fachadas",jardines:"Jardines","separador-ambientes":"Separador de ambientes",publico:"Espacios p\xFAblicos"},oe=["bano","cocina","piscina","escaleras","fachadas","jardines","separador-ambientes","publico"],X={interior:"Interior",exterior:"Exterior"},J={suelo:"Suelo",pared:"Pared (revestimiento)"},he={s:{label:"Peque\xF1o",hint:"hasta 15 cm"},m:{label:"Medio",hint:"16\u201345 cm"},l:{label:"Grande",hint:"46\u201390 cm"},xl:{label:"Gran formato",hint:"m\xE1s de 90 cm"}},Ve=["s","m","l","xl"],O={mate:"Mate",brillo:"Brillo",satinado:"Satinado",nacarado:"Esmalte nacarado"},V={R9:{label:"R9",hint:"Clase I"},R10:{label:"R10",hint:"Clase II"},R11:{label:"R11",hint:"Clase III"},R12:{label:"R12",hint:"Clase III"},R13:{label:"R13",hint:"Clase III"},A:{label:"Clase A",hint:"descalzo"},B:{label:"Clase B",hint:"descalzo"},C:{label:"Clase C",hint:"descalzo"}},Le=["R9","R10","R11","R12","R13","B","C"],Ge={cuore:"CUORE",novedad:"Novedades"},Q={blanco:"Blanco",beige:"Beige \xB7 arena",gris:"Gris",oscuro:"Oscuro",tierra:"Tierra \xB7 madera",verde:"Verde",azul:"Azul",acento:"Acento"},le={blanco:"#ECE9E2",beige:"#D6C5A8",gris:"#A7A59F",oscuro:"#3C3C3E",tierra:"#A8663F",verde:"#6F8A66",azul:"#3F6F90",acento:"#C9923A"},Ye=["blanco","beige","gris","oscuro","tierra","verde","azul","acento"]});async function We(){let[e,s,t,a,n]=await Promise.all(["collections","variants","projects","resources","home"].map(It));Object.assign(b,{collections:e,variants:s,projects:t,resources:a,home:n});for(let i of e)b.collectionById.set(i.id,i),b.variantsByCollection.set(i.id,[]);for(let i of s)b.variantById.set(i.id,i),b.variantsByCollection.get(i.collection)?.push(i);for(let i of t)b.projectById.set(i.id,i);for(let i of e){let c=b.variantsByCollection.get(i.id);i.families=[...new Set(c.map(o=>o.family))],i.slipKeys=i.antislip.map(o=>o.key),i.formatKeys=i.formats.map(o=>o.key),i.search=W([i.name,i.concept,i.efectos.join(" "),i.shapes.join(" "),i.estancias.map(o=>F[o]||o).join(" "),i.location.map(o=>X[o]).join(" "),i.placement.map(o=>J[o]).join(" "),i.surfaces.map(o=>O[o]).join(" "),i.formatKeys.join(" "),i.slipKeys.join(" "),i.slipKeys.length?"antideslizante antislip":"",c.map(o=>o.name).join(" "),i.pieces.join(" "),i.cuore?"cuore hecho a mano":"",i.novedad?"novedad novedades nuevo":"",Object.entries(Tt).filter(([o])=>i.efectos.concat(i.estancias,i.location).some(d=>W(d).includes(o))).map(([,o])=>o).join(" ")].join(" "))}for(let i of s){let c=b.collectionById.get(i.collection);i.search=W(`${c.search} ${i.name} ${i.family} ${i.finish.join(" ")}`),i.slug=i.id}return s.sort((i,c)=>(c.primary>0)-(i.primary>0)),b}function se(e){let s=e.slipKeys.filter(n=>n.startsWith("R")).map(n=>+n.slice(1));if(!s.length)return e.slipKeys.length?e.slipKeys.map(n=>V[n]?.label||n).join(" \xB7 "):"";let t=Math.min(...s),a=Math.max(...s);return t===a?`R${t}`:`R${t}\u2013R${a}`}function ee(e){return e.formats.length?e.formats.length===1?e.formats[0].label.replace(/^[A-ZÁÉÍÓÚ.]+\s+(?=\d)/,"").replace("x"," \xD7 "):`${e.formats.length} formatos`:""}function Ze(e){return b.projects.filter(s=>s.collections.includes(e.id))}var b,Ke,fe,It,Tt,E,Y,D=B(()=>{z();G();b={collections:[],variants:[],projects:[],resources:null,home:null,collectionById:new Map,variantById:new Map,variantsByCollection:new Map,projectById:new Map},Ke=window.NATUCER_BASE||"",fe=e=>typeof e=="string"?e.startsWith("assets/")?Ke+e:e:Array.isArray(e)?e.map(fe):e&&typeof e=="object"?Object.fromEntries(Object.entries(e).map(([s,t])=>[s,fe(t)])):e,It=e=>(window.NATUCER_DATA?.[e]?Promise.resolve(window.NATUCER_DATA[e]):fetch(`${Ke}data/${e}.json`)).then(s=>{if(!(s instanceof Response))return fe(s);if(!s.ok)throw new Error(`No se pudo cargar data/${e}.json`);return s.json().then(fe)}),Tt={maderas:"madera wood",piedra:"stone",barro:"clay terracota",exterior:"outdoor",interior:"indoor",piscina:"pool swimming",bano:"bathroom",cocina:"kitchen",escaleras:"steps stairs peldano",fachadas:"facade fachada ventilada",antislip:"antideslizante antiskid resbaladicidad","relieve 3d":"volumen 3d relief"};E=e=>b.collectionById.get(e),Y=e=>b.variantsByCollection.get(e)||[]});function Qe(){try{localStorage.setItem(Xe,P?"full":"reduce")}catch{}location.reload()}var Xe,Je,P,ve=B(()=>{Xe="natucer-motion",Je=null;try{Je=localStorage.getItem(Xe)}catch{}P=Je==="reduce";document.documentElement.dataset.motion=P?"reduce":"full"});function de(){let e=o=>new Set(b.collections.flatMap(o)),s=[...e(o=>o.efectos)].sort(),t=[...e(o=>o.shapes)].sort((o,d)=>(o==="Rectangular")-(d==="Rectangular")||o.localeCompare(d)),a=oe.filter(o=>e(d=>d.estancias).has(o)),n=Le.filter(o=>e(d=>d.slipKeys).has(o)),i=["mate","brillo","satinado","nacarado"].filter(o=>e(d=>d.surfaces).has(o)),c=Ye.filter(o=>b.variants.some(d=>d.family===o));return[{id:"estancia",label:"Espacio",open:!0,get:o=>o.estancias,options:a.map(o=>({v:o,label:F[o]}))},{id:"location",label:"Interior \xB7 exterior",open:!0,get:o=>o.location,options:Object.entries(X).map(([o,d])=>({v:o,label:d}))},{id:"placement",label:"Suelo \xB7 pared",get:o=>o.placement,options:Object.entries(J).map(([o,d])=>({v:o,label:d}))},{id:"efecto",label:"Efecto",open:!0,get:o=>o.efectos,options:s.map(o=>({v:o,label:o}))},{id:"shape",label:"Forma",get:o=>o.shapes,options:t.map(o=>({v:o,label:o}))},{id:"size",label:"Tama\xF1o de pieza",get:o=>o.sizeClasses,options:Ve.map(o=>({v:o,label:he[o].label,hint:he[o].hint}))},{id:"format",label:"Medida exacta (cm)",collapsedAfter:8,get:o=>o.formatKeys,options:tt().map(o=>({v:o,label:Z(o)}))},{id:"color",label:"Color",kind:"color",get:o=>o.families,getVariant:o=>[o.family],options:c.map(o=>({v:o,label:Q[o]}))},{id:"surface",label:"Superficie",get:o=>o.surfaces,options:i.map(o=>({v:o,label:O[o]}))},{id:"slip",label:"Antideslizante",get:o=>o.slipKeys,options:n.map(o=>({v:o,label:V[o].label,hint:V[o].hint}))},{id:"line",label:"L\xEDnea",get:o=>[o.cuore&&"cuore",o.novedad&&"novedad"].filter(Boolean),options:Object.entries(Ge).map(([o,d])=>({v:o,label:d}))}]}function st(e,s){let t=Ce();t.q=e.get("q")||"";for(let a of s){let n=e.get(a.id);n&&(t.f[a.id]=new Set(n.split(",").filter(Boolean)))}return["colecciones","colores"].includes(e.get("lens"))&&(t.lens=e.get("lens")),["grid","mosaico","lista"].includes(e.get("view"))&&(t.view=e.get("view")),["az","novedad"].includes(e.get("sort"))&&(t.sort=e.get("sort")),t}function be(e){let s=new URLSearchParams;e.q&&s.set("q",e.q);for(let[t,a]of Object.entries(e.f))a.size&&s.set(t,[...a].join(","));return e.lens!=="colecciones"&&s.set("lens",e.lens),e.view!=="grid"&&s.set("view",e.view),e.sort!=="az"&&s.set("sort",e.sort),s}function Ft(e,s){return s?W(s).split(/\s+/).filter(Boolean).every(t=>e.includes(t)):!0}function ot(e,s,t){return t==="colores"?e.kind==="color"?e.getVariant(s):e.get(E(s.collection)):e.get(s)}function et(e,s,t){let a=t.f[e.id];return!a||!a.size?!0:ot(e,s,t.lens).some(i=>a.has(i))}function ge(e,s){let t=e.lens==="colores"?b.variants:b.collections,a=t.filter(o=>Ft(o.search,e.q)),n=a.filter(o=>s.every(d=>et(d,o,e))),i={};for(let o of s){let d=a.filter(g=>s.every(y=>y.id===o.id||et(y,g,e))),u=new Map;for(let g of d)for(let y of new Set(ot(o,g,e.lens)))u.set(y,(u.get(y)||0)+1);i[o.id]=u}let c=[...n];if(e.sort==="novedad"){let o=d=>{let u=e.lens==="colores"?E(d.collection):d;return(u.novedad?0:2)+(u.cuore?0:1)};c.sort((d,u)=>o(d)-o(u)||(d.name||"").localeCompare(u.name||""))}else e.lens==="colecciones"?c.sort((o,d)=>o.name.localeCompare(d.name)):c.sort((o,d)=>(d.primary>0)-(o.primary>0)||E(o.collection).name.localeCompare(E(d.collection).name));return{items:c,counts:i,total:t.length}}function Pt(){let e=[],s=new Set,t=a=>{let n=a.type+a.key;s.has(n)||(s.add(n),a.n=W(a.label),e.push(a))};for(let a of b.collections)t({type:"Colecciones",key:a.id,label:a.name,sub:a.efectos[0]||a.shapes[0],coll:a.id,rank:0});for(let a of b.variants)t({type:"Colores",key:a.id,label:`${E(a.collection).name} ${a.name}`,short:a.name,sub:"variante",variant:a.id,hex:a.hex,rank:1});for(let a of tt())t({type:"Formatos",key:a,label:Z(a),filter:["format",a],sub:"cm",rank:2});for(let[a,n]of Object.entries(F))t({type:"Aplicaciones",key:a,label:n,filter:["estancia",a],rank:3});for(let a of new Set(b.collections.flatMap(n=>n.efectos)))t({type:"Efectos",key:a,label:a,filter:["efecto",a],rank:3});for(let a of Le)t({type:"Antideslizante",key:a,label:V[a].label,filter:["slip",a],sub:V[a].hint,rank:4});for(let[a,n]of Object.entries(O))t({type:"Superficie",key:a,label:n,filter:["surface",a],rank:4});for(let[a,n]of Object.entries(Q))t({type:"Color",key:a,label:n,filter:["color",a],hex:le[a],rank:4});return t({type:"L\xEDnea",key:"cuore",label:"CUORE",filter:["line","cuore"],sub:"hecho a mano",rank:3}),t({type:"L\xEDnea",key:"novedad",label:"Novedades",filter:["line","novedad"],rank:3}),e}function it(e,s=10){Ae||(Ae=Pt());let t=W(e).trim();if(!t)return[];let a=t.split(/\s+/),n=[];for(let i of Ae){let c=i.n;if(!a.every(d=>c.includes(d)))continue;let o=c.startsWith(t)||c.split(/\s+/).some(d=>d.startsWith(a[0]));n.push({e:i,score:(o?0:10)+i.rank})}return n.sort((i,c)=>i.score-c.score||i.e.label.localeCompare(c.e.label)),n.slice(0,s).map(i=>i.e)}var tt,Ce,at,Ae,I,$e=B(()=>{D();z();G();tt=()=>{let e=new Map;for(let s of b.collections)for(let t of s.formats)t.dims&&e.set(t.key,Math.max(...t.dims)*1e3+Math.min(...t.dims));return[...e.entries()].sort((s,t)=>s[1]-t[1]).map(([s])=>s)};Ce=()=>({q:"",f:{},lens:"colecciones",view:"grid",sort:"az"});at=e=>Object.values(e.f).reduce((s,t)=>s+t.size,0);I=(e={},s={})=>{let t=new URLSearchParams;for(let[n,i]of Object.entries(e))t.set(n,Array.isArray(i)?i.join(","):i);for(let[n,i]of Object.entries(s))t.set(n,i);let a=t.toString();return`#/productos${a?`?${a}`:""}`}});function _e(e){let s=[];return e.cuore&&s.push('<span class="tag tag--cuore">CUORE</span>'),e.novedad&&s.push('<span class="tag tag--new">Novedad</span>'),s.length?`<div class="tags">${s.join("")}</div>`:""}function ke(e,s=8){let t=e.slice(0,s),a=e.length-t.length;return`<span class="swatches" aria-hidden="true">${t.map(n=>`<i class="swatch" style="background:${n.hex}" title="${r(n.name)}"></i>`).join("")}</span>${a>0?`<span class="small">+${a}</span>`:""}`}function ye(e){let s=b.variantsByCollection.get(e.id),t=e.environments[1]&&e.environments[1].src!==e.cover?e.environments[1].src:"",a=se(e),n=[e.efectos[0]||e.shapes[0],ee(e),a&&`Antideslizante ${a}`].filter(Boolean);return`
  <a class="ccard ${t?"has-alt":""}" href="#/coleccion/${e.id}" data-card="${e.id}">
    <div class="ccard__media">
      ${A(e.cover,e.name)}${t?A(t,""):""}
    </div>
    <div class="ccard__body">
      <h3 class="ccard__name">${r(e.name)}${e.novedad?'<span class="tag tag--new">Novedad</span>':""}${e.cuore?'<span class="tag tag--cuore">CUORE</span>':""}</h3>
      <div class="ccard__meta">${n.map((i,c)=>`${c?"<i>\xB7</i>":""}<span>${r(i)}</span>`).join("")}</div>
      <div class="ccard__facts">${ke(s)}<span class="small">${s.length} ${s.length===1?"color":"colores"}</span></div>
    </div>
  </a>`}function nt(e){let s=E(e.collection),t=e.primary>0?e.images[0].src:null;return`
  <a class="vcard" href="#/producto/${e.id}">
    <div class="vcard__media">
      ${t?A(t,`${s.name} ${e.name}`):`<div class="vcard__flat" style="background:${e.hex}"><span>Muestra de color</span></div>`}
    </div>
    <div class="vcard__body">
      <h3 class="vcard__name"><i class="swatch" style="background:${e.hex}"></i>${r(e.name)}</h3>
      <div class="vcard__sub">${r(s.name)} \xB7 ${r(ee(s))}${e.finish.length?` \xB7 ${e.finish.map(a=>a==="antislip"?"Antislip":"Relieve").join(" ")}`:""}</div>
    </div>
  </a>`}function ct(e,s,t){let a=t%7===0||t%7===4,n=t%7===2;if(s==="colores"){let i=E(e.collection),c=e.primary>0?e.images[0].src:i.cover;return`<a class="tile ${a?"tile--w":""} ${n?"tile--t":""}" href="#/producto/${e.id}">${A(c,`${i.name} ${e.name}`)}<span class="tile__cap"><b>${r(e.name)}</b><small>${r(i.name)}</small></span></a>`}return`<a class="tile ${a?"tile--w":""} ${n?"tile--t":""}" href="#/coleccion/${e.id}">${A(e.cover,e.name)}<span class="tile__cap"><b>${r(e.name)}</b><small>${r(e.efectos[0]||e.shapes[0])}</small></span></a>`}function te(e,{cover:s=null}={}){return`
  <div class="doc">
    <div class="doc__ico" aria-hidden="true">${s||e.cover?`<img src="${r(s||e.cover)}" alt="" loading="lazy">`:""}<span>PDF</span></div>
    <div>
      <div class="doc__title">${r(e.title)}</div>
      <div class="doc__meta">${r(e.kind)}${e.note?` \xB7 ${r(e.note)}`:""}${e.local?"":" \xB7 se abre desde natucer.es"}</div>
    </div>
    <div class="doc__size num">${De(e.bytes)}</div>
    <a class="btn btn--sm" href="${r(e.href)}" target="_blank" rel="noopener" ${e.local?"download":""}>${L.download}Descargar</a>
  </div>`}function qt(e,s,t){let a=e.toUpperCase();if(a.startsWith("HEX")){let n=s/4;return`<polygon class="shape" points="${n},0 ${s-n},0 ${s},${t/2} ${s-n},${t} ${n},${t} 0,${t/2}"/>`}if(a.startsWith("STAR")){let n=s/2,i=s/2,c=i*.42;return`<polygon class="shape" points="${Array.from({length:8},(d,u)=>{let g=Math.PI/4*u-Math.PI/2,y=u%2?c:i;return`${(n+y*Math.cos(g)).toFixed(1)},${(t/2+y*Math.sin(g)*(t/s)).toFixed(1)}`}).join(" ")}"/>`}return`<rect class="shape" x="0" y="0" width="${s}" height="${t}"/>`}function pe(e,{active:s=null,maxPx:t=240}={}){let a=e.formats.filter(c=>c.dims);if(!a.length)return'<p class="small">Formato bajo consulta.</p>';let n=Math.max(...a.map(c=>Math.max(...c.dims))),i=t/n;return`<div class="fscale" role="list">${a.map(c=>{let[o,d]=c.dims,u=Math.max(14,o*i),g=Math.max(14,d*i),y=c.label.replace(/^[A-ZÁÉÍÓÚ.]+\s+(?=\d)/,""),_=c.label.replace(/\s*\d.*$/,"").trim();return`<div class="fscale__item ${s===c.key?"is-on":""}" role="listitem" data-format="${r(c.key)}">
      <svg width="${u.toFixed(0)}" height="${g.toFixed(0)}" viewBox="0 0 ${u.toFixed(1)} ${g.toFixed(1)}" aria-hidden="true">${qt(c.label,u,g)}</svg>
      <div class="fscale__lbl"><b>${r(Z(y.split("/")[0].replace(/\s+/g,"")))}${_?` <span>${r(_)}</span>`:""}</b>${c.imperial?`<span>${r(c.imperial.replace(/"/g,"\u2033"))}</span>`:""}</div>
    </div>`}).join("")}</div>`}function we(e){return e.antislip.length?e.antislip.map(s=>{let t=V[s.key];return`<span class="slip" title="${r(s.label)}"><b>${r(t?.label||s.key)}</b><span>${r(t?.hint||"")}</span></span>`}).join(" "):e.placement.includes("suelo")?'<span class="small">Sin clasificaci\xF3n publicada</span>':""}function K(e,s=0){if(!e.length)return;let t=document.getElementById("overlay-root"),a=s,n=document.activeElement;T=document.createElement("div"),T.className="lightbox is-open",T.setAttribute("role","dialog"),T.setAttribute("aria-modal","true"),T.setAttribute("aria-label","Galer\xEDa"),T.innerHTML=`
    <div class="lightbox__top"><span class="num" data-lb-count></span><button class="icon-btn" data-lb-close aria-label="Cerrar">${L.close}</button></div>
    <div class="lightbox__stage"><button class="icon-btn lightbox__nav lightbox__nav--prev" data-lb-prev aria-label="Anterior">${L.arrowL}</button><img alt="" data-lb-img><button class="icon-btn lightbox__nav lightbox__nav--next" data-lb-next aria-label="Siguiente">${L.arrowR}</button></div>
    <div class="lightbox__cap" data-lb-cap></div>`,t.appendChild(T),document.body.style.overflow="hidden";let i=()=>{let u=e[a];T.querySelector("[data-lb-img]").src=u.src,T.querySelector("[data-lb-img]").alt=u.title||u.caption||"",T.querySelector("[data-lb-count]").textContent=`${a+1} / ${e.length}`,T.querySelector("[data-lb-cap]").innerHTML=`${u.title?`<b>${r(u.title)}</b>`:""}${r(u.caption||"")}`,T.querySelector("[data-lb-prev]").disabled=a===0,T.querySelector("[data-lb-next]").disabled=a===e.length-1,T.querySelector("[data-lb-prev]").hidden=T.querySelector("[data-lb-next]").hidden=e.length<2},c=()=>{T.remove(),document.body.style.overflow="",document.removeEventListener("keydown",d),n?.focus?.()},o=u=>{a=Math.min(e.length-1,Math.max(0,a+u)),i()},d=u=>{u.key==="Escape"?c():u.key==="ArrowRight"?o(1):u.key==="ArrowLeft"&&o(-1)};T.addEventListener("click",u=>{u.target.closest("[data-lb-close]")?c():u.target.closest("[data-lb-prev]")?o(-1):u.target.closest("[data-lb-next]")?o(1):u.target.classList.contains("lightbox__stage")&&c()}),document.addEventListener("keydown",d),i(),T.querySelector("[data-lb-close]").focus()}var A,T,ae=B(()=>{z();D();G();A=(e,s="",t="",a="")=>`<img ${t?`class="${t}" `:""}src="${r(e)}" alt="${r(s)}" loading="lazy" decoding="async" ${a}>`});function Bt(){let e=rt(a=>a.estancias),s=rt(a=>a.efectos),t=(a,n,i)=>`<li><a href="${a}">${r(n)}${i!=null?`<span>${i}</span>`:""}</a></li>`;return`
  <div class="menu__sub" id="menu-sub-productos" hidden>
    <a class="menu__all" href="#/productos">Ver todo el cat\xE1logo</a>
    <h3>Por espacio</h3><ul>${oe.filter(a=>e.has(a)).map(a=>t(I({estancia:a}),F[a],e.get(a))).join("")}</ul>
    <h3>Por efecto</h3><ul>${[...s.keys()].sort().map(a=>t(I({efecto:a}),a,s.get(a))).join("")}</ul>
    <h3>Por necesidad</h3><ul>
      ${t(I({location:"exterior",slip:"R11,R12,R13"}),"Exterior antideslizante")}
      ${t(I({size:"l,xl"}),"Gran formato")}
      ${t(I({estancia:"piscina",slip:"R9,R10,R11,R12,R13,C"}),"Piscina y bordes")}
      ${t(I({},{lens:"colores"}),"Explorar por color")}
      ${t(I({line:"novedad"}),"Novedades")}
      ${t(I({line:"cuore"}),"CUORE \xB7 hecho a mano")}
    </ul>
  </div>`}function dt(){let e=document.getElementById("site-header");e.innerHTML=`
  <header class="site-header" data-header>
    <button class="menu-btn" data-burger aria-label="Men\xFA" aria-expanded="false" aria-controls="menu-panel"><span class="menu-btn__ico" aria-hidden="true"><i></i><i></i></span><span class="menu-btn__lbl">Men\xFA</span></button>
    <a class="brand" href="#/" aria-label="Natucer \xB7 inicio"><img src="${b.home.brand.logo}" alt="Natucer Cer\xE1mica Natural" width="108" height="21"></a>
    <div class="hdr-right">
      <button class="hdr-ico" data-open-search aria-label="Buscar (atajo /)">${L.search}</button>
      <a class="hdr-pill" href="#/recursos">Cat\xE1logos</a>
    </div>
  </header>
  <div class="menu-scrim" data-menu-scrim></div>
  <nav class="menu" id="menu-panel" data-menu aria-label="Men\xFA principal" aria-hidden="true">
    <ul class="menu__main">
      ${Ot.map(d=>`<li>${d.sub?`<button class="nav__link" data-nav="${d.id}" aria-expanded="false" aria-controls="menu-sub-productos" data-toggle-sub>${d.label}</button>${Bt()}`:`<a class="nav__link" data-nav="${d.id}" href="${d.href||"#"}" ${d.stub?"data-stub":""}>${d.label}</a>`}</li>`).join("")}
    </ul>
    <div class="menu__foot"><span>ES</span> <button data-stub>EN</button><button class="menu__motion" data-motion-toggle aria-pressed="${!P}">Animaciones: ${P?"no":"s\xED"}</button><span class="small">Mockup \xB7 no es la web definitiva</span></div>
  </nav>`;let s=$("[data-header]",e),t=$("[data-menu]",e),a=$("[data-burger]",e),n=$("[data-menu-scrim]",e),i=d=>{t.classList.toggle("is-open",d),n.classList.toggle("is-open",d),t.setAttribute("aria-hidden",String(!d)),a.setAttribute("aria-expanded",String(d)),document.body.classList.toggle("menu-open",d),document.body.style.overflow=d?"hidden":"",d&&$(".nav__link",t).focus({preventScroll:!0})};a.addEventListener("click",()=>i(!t.classList.contains("is-open"))),n.addEventListener("click",()=>i(!1)),t.addEventListener("click",d=>{let u=d.target.closest("[data-toggle-sub]");if(u){let g=$("#menu-sub-productos",t),y=g.hidden;g.hidden=!y,u.setAttribute("aria-expanded",String(y));return}d.target.closest('a[href^="#/"]')&&i(!1)}),window.addEventListener("hashchange",()=>i(!1)),document.addEventListener("keydown",d=>{d.key==="Escape"&&t.classList.contains("is-open")&&(i(!1),a.focus())});let c=scrollY,o=()=>{let d=scrollY,u=document.body.classList.contains("menu-open");s.classList.toggle("is-solid",d>24||u),document.body.classList.toggle("past-hero",d>innerHeight*.72);let g=d>c+4,y=d<c-4;u||d<140||y?s.classList.remove("is-hidden"):g&&s.classList.add("is-hidden"),(g||y)&&(c=d),document.body.classList.toggle("header-hidden",s.classList.contains("is-hidden")),document.documentElement.style.setProperty("--scroll",(d/Math.max(1,document.documentElement.scrollHeight-innerHeight)).toFixed(4))};window.addEventListener("scroll",o,{passive:!0}),window.addEventListener("hashchange",()=>requestAnimationFrame(o)),window.addEventListener("resize",o),window.__headerSolid=o,o(),$("[data-open-search]",e).addEventListener("click",lt),document.addEventListener("keydown",d=>{d.key==="/"&&!/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)&&!document.querySelector(".lightbox.is-open")&&(d.preventDefault(),lt())}),document.addEventListener("click",d=>{if(d.target.closest("[data-motion-toggle]")){Qe();return}d.target.closest("[data-stub]")&&(d.preventDefault(),re("Fuera del alcance de este mockup"))})}function pt(e){let s=e.startsWith("/recursos")?"recursos":e.startsWith("/productos")||e.startsWith("/coleccion")||e.startsWith("/producto")?"productos":"";S(".nav__link").forEach(t=>t.classList.toggle("is-current",t.dataset.nav===s)),document.body.classList.toggle("is-home",e==="/"),window.__headerSolid?.()}function ut(){let e=b.home.brand;document.getElementById("site-footer").innerHTML=`
  <footer class="site-footer">
    <div class="wrap">
      <div class="footer__top">
        <div class="footer__brand"><img src="${e.logo}" alt="Natucer" width="130" height="25"><p>Fabricante de gres porcel\xE1nico extruido. Pavimentos, revestimientos, piscinas, pelda\xF1os y fachadas ventiladas.</p></div>
        <div><h4>Producto</h4><ul><li><a href="#/productos">Cat\xE1logo</a></li><li><a href="${I({},{lens:"colores"})}">Por color</a></li><li><a href="${I({line:"cuore"})}">CUORE</a></li><li><a href="${I({line:"novedad"})}">Novedades</a></li></ul></div>
        <div><h4>Profesionales</h4><ul><li><a href="#/recursos">Cat\xE1logos y fichas</a></li><li><a href="#/recursos?t=guias">Gu\xEDas e instalaci\xF3n</a></li><li><a href="#/?s=soluciones">Soluciones</a></li><li><a href="#/?s=proyectos">Proyectos</a></li></ul></div>
        <div><h4>Natucer</h4><ul><li><a href="#" data-stub>Empresa</a></li><li><a href="#" data-stub>Contacto</a></li><li><a href="#" data-stub>Newsletter</a></li><li><a href="#" data-stub>Aviso legal</a></li></ul></div>
      </div>
      <div class="footer__mark" aria-hidden="true"><img src="${e.logo}" alt=""></div>
      <div class="footer__bottom"><span>\xA9 Natucer \xB7 Mockup de direcci\xF3n de dise\xF1o</span><img src="${e.pamesa}" alt="Pamesa Grupo Empresarial"></div>
      <p class="footer__note">Prototipo interno. Textos, im\xE1genes y documentos proceden de natucer.es (carpeta Sources). Tipograf\xEDa, jerarqu\xEDa y piezas de interfaz son propuestas provisionales y no constituyen identidad oficial.</p>
    </div>
  </footer>`}function Nt(e,s){if(!s.length)return`<div class="suggest__empty">Sin coincidencias para \xAB${r(e)}\xBB. Prueba con un color, un formato (60x120) o un espacio.</div>`;let t=c=>{let o=c.toLowerCase().indexOf(e.trim().toLowerCase());return o<0?r(c):`${r(c.slice(0,o))}<mark>${r(c.slice(o,o+e.trim().length))}</mark>${r(c.slice(o+e.trim().length))}`},a="",n="",i=0;for(let c of s){c.type!==n&&(n=c.type,a+=`<div class="suggest__group">${n}</div>`);let o=c.coll?E(c.coll):c.variant?E(b.variantById.get(c.variant).collection):null,d=c.coll?A(o.cover,"","thumb"):c.hex?`<i class="swatch" style="background:${c.hex};width:20px;height:20px"></i>`:"";a+=`<button type="button" role="option" data-idx="${i++}" data-key="${r(c.type+"|"+c.key)}">${d}<span>${t(c.label)}</span>${c.sub?`<small>${r(c.sub)}</small>`:""}</button>`}return a}function Se(e,s){return e.coll?`#/coleccion/${e.coll}`:e.variant?`#/producto/${e.variant}`:I({[e.filter[0]]:e.filter[1]})}function je(e,s,t,{onEnter:a}={}){let n=[],i=-1,c=()=>{let d=e.value;n=it(d),s.hidden=!d.trim(),s.innerHTML=d.trim()?Nt(d,n):"",i=-1,e.setAttribute("aria-expanded",String(!s.hidden))},o=()=>S("[role=option]",s).forEach((d,u)=>{d.setAttribute("aria-selected",String(u===i)),u===i&&d.scrollIntoView({block:"nearest"})});return e.addEventListener("input",me(c,60)),e.addEventListener("keydown",d=>{d.key==="ArrowDown"&&n.length?(d.preventDefault(),i=Math.min(n.length-1,i+1),o()):d.key==="ArrowUp"&&n.length?(d.preventDefault(),i=Math.max(-1,i-1),o()):d.key==="Enter"?(d.preventDefault(),i>=0?t(n[i]):a?.(e.value)):d.key==="Escape"&&!s.hidden&&(s.hidden=!0)}),s.addEventListener("mousedown",d=>d.preventDefault()),s.addEventListener("click",d=>{let u=d.target.closest("[role=option]");u&&t(n[+u.dataset.idx])}),{render:c,hide:()=>{s.hidden=!0}}}function lt(){if(U)return;let e=document.getElementById("overlay-root");U=document.createElement("div"),U.className="overlay is-open",U.innerHTML=`
    <div class="overlay__scrim" data-close></div>
    <div class="search-panel" role="dialog" aria-modal="true" aria-label="Buscar">
      <div class="searchbox">
        <div class="searchbox__field">${L.search}<input type="search" role="combobox" aria-expanded="false" aria-controls="gs-box" placeholder="Colecci\xF3n, color, formato, aplicaci\xF3n\u2026" autocomplete="off" spellcheck="false"><button class="searchbox__clear" data-close>Cerrar</button></div>
      </div>
      <div class="suggest" id="gs-box" role="listbox" hidden style="border:0"></div>
      <div class="small" style="padding-top:18px" data-hint>Prueba: <a href="${I({},{q:"sherwood"})}" data-close style="text-decoration:underline">sherwood</a> \xB7 <a href="${I({},{q:"60x120"})}" data-close style="text-decoration:underline">60x120</a> \xB7 <a href="${I({slip:"R11"})}" data-close style="text-decoration:underline">R11</a> \xB7 <a href="${I({estancia:"piscina"})}" data-close style="text-decoration:underline">piscina</a> \xB7 <a href="${I({},{q:"azul"})}" data-close style="text-decoration:underline">azul</a></div>
    </div>`,e.appendChild(U),document.body.style.overflow="hidden";let s=$("input",U),t=()=>{U?.remove(),U=null,document.body.style.overflow="",document.removeEventListener("keydown",a)},a=n=>{n.key==="Escape"&&t()};document.addEventListener("keydown",a),U.addEventListener("click",n=>{n.target.closest("[data-close]")&&t()}),je(s,$("#gs-box",U),n=>{t(),location.hash=Se(n)},{onEnter:n=>{t(),location.hash=I({},n.trim()?{q:n.trim()}:{})}}),s.focus()}var Ot,rt,U,Me=B(()=>{z();D();ve();$e();G();ae();Ot=[{id:"productos",label:"Productos",href:"#/productos",sub:!0},{id:"soluciones",label:"Soluciones",href:"#/?s=soluciones"},{id:"proyectos",label:"Proyectos",href:"#/?s=proyectos"},{id:"recursos",label:"Recursos",href:"#/recursos"},{id:"empresa",label:"Empresa",stub:!0}],rt=e=>{let s=new Map;for(let t of b.collections)for(let a of new Set(e(t)))s.set(a,(s.get(a)||0)+1);return s}});var $t={};ce($t,{allDocs:()=>gt,render:()=>ls,title:()=>Gt});function Kt(e){for(let t of Yt[e]||[]){let a=E(t)?.environments.find(n=>n.rooms.includes(e));if(a)return{src:a.src,coll:t}}let s=b.collections.find(t=>t.estancias.includes(e));return{src:s.cover,coll:s.id}}function Wt(){let e=b.home.hero;return`
  <section class="phero" data-hero aria-roledescription="carrusel" aria-label="Colecciones destacadas">
    <div class="phero__stage">
      ${e.map((s,t)=>`
      <figure class="phero__slide ${t===0?"is-active":""}" data-slide="${t}" aria-hidden="${t!==0}">
        <picture>
          <source media="(max-width: 760px)" srcset="${s.imageMobile}">
          <img src="${s.image}" alt="${r(E(s.collection).name)}" style="object-position:${s.position}" ${t?'loading="lazy"':'fetchpriority="high"'} decoding="async">
        </picture>
      </figure>`).join("")}
    </div>
    <div class="phero__shade"></div>
    <h1 class="phero__mark"><span class="sr-only">Natucer \xB7 cer\xE1mica natural</span><span class="phero__mask" aria-hidden="true"><img src="${b.home.brand.logo}" alt=""></span></h1>
    <div class="phero__copy">
      <p class="phero__eyebrow"><span data-hero-n>01</span> \xB7 Colecci\xF3n destacada</p>
      <h2 class="phero__title" data-hero-title aria-live="polite"></h2>
      <p class="phero__sub" data-hero-sub></p>
      <div class="phero__cta">
        <a class="pbtn pbtn--light" data-hero-link href="#/productos">Descubrir colecci\xF3n</a>
        <a class="pbtn pbtn--ghost" href="#/productos">Ver cat\xE1logo</a>
      </div>
    </div>
    <div class="phero__side">
      <button class="phero__arrow" data-hero-prev aria-label="Anterior">${L.arrowL}</button>
      <button class="phero__arrow" data-hero-next aria-label="Siguiente">${L.arrowR}</button>
    </div>
    <div class="phero__bars hero__bars">${e.map(s=>`<button class="hero__bar" aria-label="Ir a ${r(E(s.collection).name)}"><b></b></button>`).join("")}</div>
    <a class="phero__scroll" href="#intro" aria-label="Seguir bajando"><span></span></a>
  </section>`}function Zt(e){let s=$("[data-hero]",e),t=S(".phero__slide",e),a=S(".hero__bar",e),n=$("[data-hero-title]",e),i=$("[data-hero-sub]",e),c=$("[data-hero-link]",e),o=$("[data-hero-n]",e),d=7e3,u=0,g=!1,y=0,_=!1,k=!1,M=0,j=performance.now(),q=()=>a.forEach((l,f)=>{l.firstElementChild.style.width=f<u?"100%":f===u?P?"100%":`${Math.min(100,y/d*100)}%`:"0%"}),R=l=>{let f=E(b.home.hero[u].collection),w=[f.efectos[0]||f.shapes[0],ee(f),`${Y(f.id).length} colores`].filter(Boolean).join("  \xB7  "),x=()=>{n.textContent=f.name,i.textContent=w,c.setAttribute("href",`#/coleccion/${f.id}`),o.textContent=String(u+1).padStart(2,"0"),s.classList.remove("is-swap")};l||P?x():(s.classList.add("is-swap"),setTimeout(x,380)),a.forEach((N,H)=>N.classList.toggle("is-cur",H===u)),q()},v=l=>{let f=(l+t.length)%t.length;f===u||g||(g=!0,y=0,t[u].classList.remove("is-active"),t[f].classList.add("is-active"),t.forEach((w,x)=>w.setAttribute("aria-hidden",String(x!==f))),u=f,R(!1),setTimeout(()=>{g=!1},900))},p=l=>{if(!s.isConnected)return;let f=Math.min(100,l-j);j=l;let w=scrollY<innerHeight*.85&&!document.hidden;!P&&w&&!_&&!k&&(y+=f,y>=d&&v(u+1)),q(),M=requestAnimationFrame(p)};$("[data-hero-prev]",e).addEventListener("click",()=>v(u-1)),$("[data-hero-next]",e).addEventListener("click",()=>v(u+1)),a.forEach((l,f)=>l.addEventListener("click",()=>v(f))),s.addEventListener("pointerdown",l=>{l.target.closest("a,button")||(_=!0,s.classList.add("is-held"))});let m=()=>{_=!1,s.classList.remove("is-held")};addEventListener("pointerup",m),addEventListener("pointercancel",m);for(let l of[".phero__copy",".phero__side",".phero__bars"]){let f=$(l,e);f.addEventListener("pointerenter",()=>{k=!0}),f.addEventListener("pointerleave",()=>{k=!1})}let h=0;return s.addEventListener("touchstart",l=>{h=l.touches[0].clientX},{passive:!0}),s.addEventListener("touchend",l=>{let f=l.changedTouches[0].clientX-h;Math.abs(f)>50&&v(u+(f<0?1:-1))}),$(".phero__scroll",e).addEventListener("click",l=>{l.preventDefault(),$("#intro",e)?.scrollIntoView({behavior:"smooth"})}),R(!0),M=requestAnimationFrame(p),()=>{cancelAnimationFrame(M),removeEventListener("pointerup",m),removeEventListener("pointercancel",m)}}function Xt(){let e=de(),s=a=>e.find(n=>n.id===a),t=(a,n)=>n.map(i=>`<button class="chip" data-g="${a}" data-v="${r(i.v)}" aria-pressed="false">${r(i.label)}</button>`).join("");return`
  <section class="strip" aria-label="Encuentra tu pieza">
    <div class="wrap strip__grid">
      <div class="strip__intro"><p class="eyebrow">Product finder</p><p class="h3">Encuentre su pieza</p><p class="small">Elija espacio, efecto y tama\xF1o: el cat\xE1logo se filtra al instante.</p></div>
      <div class="strip__rows">
        <div class="strip__row"><span class="strip__lbl">Espacio</span><div class="strip__chips">${t("estancia",s("estancia").options.filter(a=>["bano","cocina","piscina","escaleras","fachadas","publico"].includes(a.v)))}${t("location",s("location").options)}</div></div>
        <div class="strip__row"><span class="strip__lbl">Efecto</span><div class="strip__chips">${t("efecto",s("efecto").options)}</div></div>
        <div class="strip__row"><span class="strip__lbl">Tama\xF1o</span><div class="strip__chips">${t("size",s("size").options.map(a=>({v:a.v,label:`${a.label} \xB7 ${a.hint}`})))}</div></div>
      </div>
      <div class="strip__go"><a class="btn btn--solid" data-strip-go href="#/productos"><span data-strip-n>${b.collections.length}</span>&nbsp;colecciones \u2192</a><button class="small strip__reset" data-strip-reset hidden>Borrar selecci\xF3n</button></div>
    </div>
  </section>`}function Jt(e){let s=de(),t=Ce(),a=$("[data-strip-go]",e),n=$("[data-strip-n]",e),i=$("[data-strip-reset]",e),c=()=>{let d=ge(t,s);n.textContent=d.items.length;let u=be(t).toString();a.setAttribute("href",`#/productos${u?`?${u}`:""}`),i.hidden=!Object.values(t.f).some(g=>g.size);for(let g of S(".strip .chip",e)){let y=!!t.f[g.dataset.g]?.has(g.dataset.v);g.setAttribute("aria-pressed",String(y));let _=d.counts[g.dataset.g]?.get(g.dataset.v)||0;g.style.opacity=!y&&_===0?"0.38":""}},o=d=>{var g,y;let u=d.target.closest(".strip .chip");if(u){let _=(g=t.f)[y=u.dataset.g]||(g[y]=new Set);_.has(u.dataset.v)?_.delete(u.dataset.v):_.add(u.dataset.v),c()}else d.target.closest("[data-strip-reset]")&&(t.f={},c())};return e.addEventListener("click",o),c(),()=>e.removeEventListener("click",o)}function Qt(){let e=b.collections.map(s=>`<a href="#/coleccion/${s.id}" tabindex="-1">${r(s.name)}</a>`).join("");return`<section class="marquee" aria-label="Colecciones del cat\xE1logo"><p class="marquee__label"><span>El cat\xE1logo \xB7 ${b.collections.length} colecciones en este mockup</span><a class="tlink" href="#/productos">Ver todas</a></p><div class="marquee__track">${e}${e}</div></section>`}function es(){let e=b.collections.filter(s=>s.novedad);return`
  <section class="section" id="novedades">
    <div class="wrap">
      <div class="section-head"><div><p class="eyebrow">Novedades \xB7 ${e.length} colecciones nuevas</p><h2 class="h2">Lo \xFAltimo en el cat\xE1logo</h2></div>
        <div class="rail__ctrl"><a class="tlink" href="#/productos?line=novedad">Ver todas las novedades</a><button class="icon-btn" data-rail-prev aria-label="Anterior">${L.arrowL}</button><button class="icon-btn" data-rail-next aria-label="Siguiente">${L.arrowR}</button></div></div>
    </div>
    <div class="rail" data-rail tabindex="0" aria-label="Colecciones nuevas: se desplaza solo, pasa el rat\xF3n para detenerlo">
      ${e.map(s=>`
      <a class="rail__card" href="#/coleccion/${s.id}" draggable="false">
        <div class="rail__media">${A(s.heroMobile||s.cover,s.name)}<span class="rail__new">Novedad</span></div>
        <div class="rail__body"><span class="eyebrow">${r([s.efectos[0]||s.shapes[0],s.cuore?"CUORE":""].filter(Boolean).join(" \xB7 "))}</span><h3 class="h3">${r(s.name)}</h3><span class="small">${r(ee(s))} \xB7 ${Y(s.id).length} colores</span></div>
      </a>`).join("")}
    </div>
    <div class="wrap rail__foot"><div class="rail__prog" aria-hidden="true"><i></i></div><span class="small">Desliza o arrastra para ver m\xE1s \u2192</span></div>
  </section>`}function ts(e){let s=$("[data-rail]",e),t=$(".rail__prog i",e),a=[...s.children];a.forEach(p=>{let m=p.cloneNode(!0);m.setAttribute("aria-hidden","true"),m.tabIndex=-1,s.appendChild(m)});let n=38,i=0,c=0,o=!1,d=0,u=performance.now(),g=0,y=!0,_=()=>{i=s.children[a.length].offsetLeft-s.children[0].offsetLeft},k=new IntersectionObserver(([p])=>{y=p.isIntersecting},{threshold:.15});k.observe(s);let M=p=>{if(!s.isConnected)return;let m=Math.min(64,p-u);u=p,i||(_(),c=i,s.scrollLeft=c),o||p<d?c=s.scrollLeft:(Math.abs(s.scrollLeft-c)>2&&(c=s.scrollLeft),!P&&y&&(c+=n*m/1e3));let h=c>=i*2-s.clientWidth?c-i:c<=1?c+i:c;h!==c?(c=h,s.scrollLeft=c):!o&&p>=d&&Math.abs(s.scrollLeft-c)>.5&&(s.scrollLeft=c),t.style.transform=`scaleX(${(((c-i)%i+i)%i/i).toFixed(4)})`,g=requestAnimationFrame(M)};g=requestAnimationFrame(M);let j=()=>s.clientWidth*.6,q=p=>{d=performance.now()+2500,s.scrollBy({left:p,behavior:"smooth"})};$("[data-rail-prev]",e).addEventListener("click",()=>q(-j())),$("[data-rail-next]",e).addEventListener("click",()=>q(j())),s.addEventListener("pointerenter",p=>{p.pointerType==="mouse"&&(o=!0)}),s.addEventListener("pointerleave",()=>{o=!1}),s.addEventListener("focusin",()=>{o=!0}),s.addEventListener("focusout",()=>{o=!1}),s.addEventListener("wheel",()=>{d=performance.now()+2500},{passive:!0}),s.addEventListener("touchstart",()=>{d=performance.now()+4e3},{passive:!0});let R=null,v=!1;return s.addEventListener("pointerdown",p=>{p.pointerType!=="mouse"||p.button||(R={x:p.clientX,left:s.scrollLeft},v=!1)}),addEventListener("pointermove",p=>{if(!R)return;let m=p.clientX-R.x;Math.abs(m)>5&&(v=!0),v&&(s.scrollLeft=R.left-m,s.classList.add("is-drag"))}),addEventListener("pointerup",()=>{R=null,s.classList.remove("is-drag")}),s.addEventListener("click",p=>{v&&(p.preventDefault(),p.stopPropagation(),v=!1)},!0),addEventListener("resize",_),()=>{cancelAnimationFrame(g),k.disconnect(),removeEventListener("resize",_)}}function ss(){let e=new Map;for(let a of b.collections)for(let n of a.estancias)e.set(n,(e.get(n)||0)+1);let t=oe.filter(a=>e.has(a)).map(a=>({k:a,...Kt(a)}));return`
  <section class="section section--tight rule" id="espacios">
    <div class="wrap spaces">
      <div class="spaces__head"><p class="eyebrow">Por aplicaci\xF3n</p><h2 class="h2">Empieza por el espacio</h2><p class="lead">Cada espacio abre el cat\xE1logo ya filtrado, con las colecciones que lo cubren.</p></div>
      <ul class="spaces__list" data-spaces>
        ${t.map((a,n)=>`<li><a href="#/productos?estancia=${a.k}" data-space="${n}" class="${n===0?"is-on":""}"><span class="spaces__name">${r(F[a.k])}</span><span class="spaces__n num">${e.get(a.k)} <small>${e.get(a.k)===1?"colecci\xF3n":"colecciones"}</small></span></a></li>`).join("")}
      </ul>
      <div class="spaces__preview" aria-hidden="true">
        ${t.map((a,n)=>`<figure class="${n===0?"is-on":""}" data-preview="${n}">${A(a.src,"")}<figcaption>${r(E(a.coll).name)}</figcaption></figure>`).join("")}
      </div>
    </div>
  </section>`}function as(e){let s=S("[data-space]",e),t=S("[data-preview]",e),a=n=>{s.forEach((i,c)=>i.classList.toggle("is-on",n===c)),t.forEach((i,c)=>i.classList.toggle("is-on",n===c))};s.forEach((n,i)=>{n.addEventListener("mouseenter",()=>a(i)),n.addEventListener("focus",()=>a(i))})}function os(){let e=b.home.brand,s=E("squama").layouts.find(t=>t.cover);return`
  <section class="cuore" id="cuore">
    <div class="wrap cuore__grid">
      <div class="cuore__text">
        <img class="cuore__logo" src="${e.logoCuore}" alt="CUORE by Natucer" width="120" height="48">
        <h2 class="h1">Piezas \xFAnicas, <span class="serif-i">hechas con las manos</span></h2>
        <p class="lead">Piezas que adquieren su car\xE1cter por las irregularidades propias de lo hecho a mano. Creatividad y arte hechos cer\xE1mica: obras que experimentan con los sentidos.</p>
        <div class="cuore__actions"><a class="btn btn--light" href="#/productos?line=cuore">Explorar CUORE</a><span class="small">${b.collections.filter(t=>t.cuore).length} colecciones CUORE en este mockup</span></div>
      </div>
      <div class="cuore__imgs">
        <a href="#/coleccion/squama" class="cuore__a">${A(s.src,"Squama")}<span>Squama</span></a>
        <a href="#/coleccion/tectonic" class="cuore__b">${A(E("tectonic").heroMobile,"Tectonic")}<span>Tectonic</span></a>
        <a href="#/coleccion/arco" class="cuore__c">${A(E("arco").environments[2].src,"Arco")}<span>Arco</span></a>
      </div>
    </div>
  </section>`}function is(){let e=new Map(b.resources.catalogs.concat(b.resources.technical).map(s=>[s.id,s]));return`
  <section class="section" id="soluciones">
    <div class="wrap">
      <div class="section-head"><div><p class="eyebrow">Soluciones cer\xE1micas</p><h2 class="h2">Sistemas, no solo piezas</h2></div><p class="lead" style="max-width:44ch">Fachadas ventiladas, pavimento t\xE9cnico, piscinas, escaleras y porcel\xE1nico iluminado, con su propia documentaci\xF3n.</p></div>
      <div class="solutions">
        ${b.resources.solutions.map(s=>{let t=s.doc&&e.get(s.doc);return`<article class="sol"><div class="sol__media">${A(s.image,s.title)}</div><div class="sol__body"><p class="eyebrow">${r(s.subtitle)}</p><h3 class="h3">${r(s.title)}</h3><p>${r(s.text)}</p>${t?`<a class="link-arrow" href="${r(t.href)}" target="_blank" rel="noopener">${r(t.kind)} \xB7 PDF</a>`:'<a class="link-arrow" href="#" data-stub>M\xE1s informaci\xF3n</a>'}</div></article>`}).join("")}
      </div>
    </div>
  </section>`}function ns(){return`
  <section class="section rule" id="proyectos">
    <div class="wrap">
      <div class="section-head"><div><p class="eyebrow">Arquitectura e interiores</p><h2 class="h2">Proyectos que ya existen</h2></div><a class="link-arrow" href="#" data-stub>Ver todos los proyectos</a></div>
      <div class="projects">
        ${b.projects.filter(s=>s.featured).map((s,t)=>`
        <article class="proj proj--${t}">
          <button class="proj__media" data-project="${s.id}" aria-label="Ver im\xE1genes de ${r(s.title)}">${A(s.images[0],s.title)}<span class="proj__count">${s.images.length} im\xE1genes</span></button>
          <div class="proj__body"><p class="eyebrow">${r(s.category.replaceAll("-"," "))}</p><h3 class="h3">${r(s.title)}</h3><p>${r(s.summary)}</p>${s.collections[0]?`<a class="link-arrow" href="#/coleccion/${s.collections[0]}">${r(E(s.collections[0]).name)}</a>`:""}</div>
        </article>`).join("")}
      </div>
    </div>
  </section>`}function cs(){return`
  <section class="section resources-band" id="recursos-home">
    <div class="wrap res">
      <div class="res__intro">
        <p class="eyebrow">Recursos para profesionales</p>
        <h2 class="h2">La documentaci\xF3n forma parte del producto</h2>
        <p class="lead">Fichas t\xE9cnicas por colecci\xF3n, cat\xE1logos, gu\xEDas de tendencias y recomendaciones de instalaci\xF3n, en un \xFAnico buscador.</p>
        <ul class="res__stats"><li><b class="num">${b.collections.reduce((s,t)=>s+t.documents.length,0)}</b> fichas t\xE9cnicas</li><li><b class="num">${b.resources.catalogs.length}</b> cat\xE1logos y folletos</li><li><b class="num">${b.resources.technical.length}</b> gu\xEDas t\xE9cnicas</li></ul>
        <a class="btn" href="#/recursos">Abrir recursos</a>
      </div>
      <div class="res__live">
        <label class="small" for="res-q">Busca una ficha o cat\xE1logo</label>
        <input id="res-q" class="res__input" type="search" placeholder="Ej. Sherwood, CUORE, fachadas\u2026" autocomplete="off">
        <div class="docs" data-res-list></div>
      </div>
    </div>
  </section>`}function gt(){return[...b.collections.flatMap(s=>s.documents.map(t=>({...t,cover:s.cover,note:"Ficha de colecci\xF3n",_s:`${s.name} ${s.efectos.join(" ")}`}))),...b.resources.catalogs.map(s=>({...s,_s:s.title})),...b.resources.technical.map(s=>({...s,_s:s.title}))]}function rs(e){let s=gt(),t=$("[data-res-list]",e),a=$("#res-q",e),n=()=>{let i=a.value.trim().toLowerCase(),c=(i?s.filter(o=>`${o.title} ${o._s} ${o.kind}`.toLowerCase().includes(i)):[s.find(o=>o.title.includes("Sherwood")),...b.resources.catalogs.slice(0,2),s.find(o=>o.kind==="Instalaci\xF3n")]).filter(Boolean).slice(0,4);t.innerHTML=c.length?c.map(o=>te(o)).join(""):'<p class="small" style="padding:18px 0">Sin resultados.</p>'};a.addEventListener("input",n),n()}function ls(e){e.innerHTML=`${Wt()}
  <section class="intro wrap" id="intro">
    <p class="eyebrow">Natucer \xB7 cer\xE1mica extruida</p>
    <p class="intro__text" data-scrub>Una colecci\xF3n no es una p\xE1gina: es un conjunto de ambientes, colores, formatos, piezas y documentos que se pueden recorrer, filtrar y descargar.</p>
    <ul class="intro__stats"><li><b class="num" data-count>124</b> colecciones en natucer.es</li><li><b class="num" data-count>305</b> proyectos publicados</li><li><b class="num" data-count>11</b> soluciones cer\xE1micas</li></ul>
  </section>
  ${Xt()}
  ${Qt()}${es()}${ss()}${os()}${is()}${ns()}${cs()}`;let s=Zt(e),t=ts(e);as(e),rs(e);let a=Jt(e),n=i=>{let c=i.target.closest("[data-project]");if(!c)return;let o=b.projectById.get(c.dataset.project);K(o.images.map(d=>({src:d,title:o.title,caption:[o.summary,o.credits].filter(Boolean).join(" \u2014 ")})),0)};return e.addEventListener("click",n),{destroy(){e.removeEventListener("click",n),a(),s(),t()}}}var Gt,Yt,_t=B(()=>{z();D();$e();G();ae();ve();Gt=()=>"",Yt={bano:["squama","arco","tectonic"],cocina:["lineage","squama"],piscina:["arties","pirineos","heritage-clay"],escaleras:["sherwood","cerler","lands"],fachadas:["bamboo"],jardines:["bamboo"],publico:["heritage-clay","lands","boston"],"separador-ambientes":["bamboo"]}});var wt={};ce(wt,{render:()=>ps,title:()=>ds});function ps(e,{params:s}){let t=de(),a=st(s,t),n=new Set(t.filter(p=>p.open).map(p=>p.id)),i=new Set;t.forEach(p=>{a.f[p.id]?.size&&n.add(p.id)}),e.innerHTML=`
  <div class="finder">
    <header class="wrap finder__head">
      <div class="finder__titlerow"><h1 class="h1">Productos</h1></div>
      <div class="catbar" role="group" aria-label="Espacio" data-catbar></div>
      <div class="searchbox" data-searchbox>
        <div class="searchbox__field">${L.search}
          <input type="search" role="combobox" aria-expanded="false" aria-controls="f-suggest" aria-label="Buscar producto" placeholder="Colecci\xF3n, color, formato, R11\u2026" autocomplete="off" spellcheck="false" value="${r(a.q)}">
          <button class="searchbox__clear" data-clear-q hidden>Borrar</button></div>
        <div class="suggest" id="f-suggest" role="listbox" hidden></div>
      </div>
      <div class="shortcuts"><span class="eyebrow">Atajos</span>${Oe.map((p,m)=>`<button class="chip chip--sm" data-shortcut="${m}" aria-pressed="false">${r(p.label)}</button>`).join("")}</div>
    </header>

    <div class="wrap finder__body">
      <aside class="filters" data-filters aria-label="Filtros">
        <div class="filters__top"><b>Filtros</b><button class="icon-btn" data-close-filters aria-label="Cerrar filtros">${L.close}</button></div>
        <div class="filters__scroll" data-groups></div>
        <div class="filters__bottom"><button class="btn btn--solid" data-close-filters style="width:100%">Ver <span data-n-res></span> resultados</button></div>
      </aside>
      <section class="results" aria-label="Resultados">
        <div class="toolbar" data-toolbar></div>
        <div class="active" data-active></div>
        <div data-results></div>
      </section>
    </div>
    <button class="filters-fab" data-open-filters>${L.filter}<span>Filtros</span><b data-fab-n></b></button>
    <div class="vista" role="group" aria-label="Vista" data-viewseg></div>
    <div class="filters-scrim" data-close-filters></div>
  </div>`;let c={groups:$("[data-groups]",e),toolbar:$("[data-toolbar]",e),active:$("[data-active]",e),results:$("[data-results]",e),input:$("[data-searchbox] input",e),clear:$("[data-clear-q]",e),filters:$("[data-filters]",e)},o=()=>{let p=be(a).toString();history.replaceState(null,"",`#/productos${p?`?${p}`:""}`)},d=p=>t.map(m=>{let h=a.f[m.id]||new Set,l=m.options.filter(x=>h.has(x.v)||(p[m.id].get(x.v)||0)>0||m.id!=="format"),f=m.collapsedAfter&&!i.has(m.id)?m.collapsedAfter:1/0,w=l.filter((x,N)=>N<f||h.has(x.v));return`
    <details class="fgroup" data-group="${m.id}" ${n.has(m.id)?"open":""}>
      <summary><span>${r(m.label)}</span>${h.size?`<b class="fgroup__n">${h.size}</b>`:""}</summary>
      <div class="fgroup__opts ${m.kind==="color"?"is-color":""}">
        ${w.map(x=>{let N=p[m.id].get(x.v)||0,H=h.has(x.v),C=!H&&N===0;return`<label class="opt ${C?"is-dim":""}"><input type="checkbox" data-g="${m.id}" data-v="${r(x.v)}" ${H?"checked":""} ${C?"disabled":""}>
            <span class="opt__box">${m.kind==="color"?`<i class="swatch" style="background:${le[x.v]}"></i>`:""}</span>
            <span class="opt__lbl">${r(x.label)}${x.hint?` <em>${r(x.hint)}</em>`:""}</span><span class="opt__n num">${N}</span></label>`}).join("")}
        ${m.collapsedAfter&&l.length>m.collapsedAfter?`<button class="more" data-more="${m.id}">${i.has(m.id)?"Ver menos":`Ver todas (${l.length})`}</button>`:""}
      </div>
    </details>`}).join(""),u=(p,m)=>{let h=p.options.find(l=>l.v===m);return h?h.label:m},g=p=>p.length?a.view==="lista"?y(p):a.view==="mosaico"?`<div class="rmosaic">${p.map((m,h)=>ct(m,a.lens,h)).join("")}</div>`:`<div class="rgrid">${p.map(m=>a.lens==="colores"?nt(m):ye(m)).join("")}</div>`:'<div class="empty"><p class="h3">Ninguna pieza cumple todos los criterios</p><p class="lead">Prueba a quitar alg\xFAn filtro o a cambiar a la vista de colores. Las opciones atenuadas en el panel no tienen resultados con tu selecci\xF3n actual.</p><button class="btn" data-reset>Borrar filtros</button></div>';function y(p){let m=h=>h.documents[0];return a.lens==="colores"?`<div class="tbl-wrap"><table class="tbl"><thead><tr><th></th><th>Variante</th><th>Colecci\xF3n</th><th>Formatos</th><th>Antideslizante</th><th>Ficha</th></tr></thead><tbody>
      ${p.map(h=>{let l=E(h.collection),f=m(l);return`<tr data-href="#/producto/${h.id}">
        <td class="tbl__thumb">${h.primary?A(h.images[0].src,""):`<i class="tbl__flat" style="background:${h.hex}"></i>`}</td>
        <td><a href="#/producto/${h.id}" class="tbl__name">${r(h.name)}</a><span class="small">${r(h.family)}${h.finish.length?" \xB7 "+h.finish.join(", "):""}</span></td>
        <td><a href="#/coleccion/${l.id}">${r(l.name)}</a></td>
        <td>${l.formats.map(w=>`<span class="mini">${r(Z(w.key))}</span>`).join("")}</td>
        <td>${r(se(l)||"\u2014")}</td>
        <td>${f?`<a class="btn btn--sm" href="${r(f.href)}" target="_blank" rel="noopener" ${f.local?"download":""}>${L.download}PDF</a>`:"\u2014"}</td></tr>`}).join("")}
      </tbody></table></div>`:`<div class="tbl-wrap"><table class="tbl"><thead><tr><th></th><th>Colecci\xF3n</th><th>Efecto</th><th>Formatos</th><th>Superficie</th><th>Antideslizante</th><th>Colores</th><th>Ficha</th></tr></thead><tbody>
      ${p.map(h=>{let l=m(h);return`<tr data-href="#/coleccion/${h.id}">
        <td class="tbl__thumb">${A(h.cover,"")}</td>
        <td><a href="#/coleccion/${h.id}" class="tbl__name">${r(h.name)}</a><span class="small">${[h.cuore&&"CUORE",h.novedad&&"Novedad"].filter(Boolean).join(" \xB7 ")}</span></td>
        <td>${r(h.efectos.concat(h.shapes.filter(f=>f!=="Rectangular")).join(", ")||"\u2014")}</td>
        <td>${h.formats.slice(0,4).map(f=>`<span class="mini">${r(Z(f.key))}</span>`).join("")}${h.formats.length>4?`<span class="small">+${h.formats.length-4}</span>`:""}</td>
        <td>${r(h.surfaces.map(f=>O[f]).join(", ")||"\u2014")}</td>
        <td>${r(se(h)||"\u2014")}</td>
        <td>${ke(Y(h.id),6)}</td>
        <td>${l?`<a class="btn btn--sm" href="${r(l.href)}" target="_blank" rel="noopener" ${l.local?"download":""}>${L.download}PDF</a>`:"\u2014"}</td></tr>`}).join("")}
      </tbody></table></div>`}function _({keepFocus:p=!0}={}){let m=p&&document.activeElement?.dataset?.g?`[data-g="${document.activeElement.dataset.g}"][data-v="${CSS.escape(document.activeElement.dataset.v)}"]`:null,h=ge(a,t),l=at(a)+(a.q?1:0);c.groups.innerHTML=d(h.counts),m&&$(m,c.groups)?.focus({preventScroll:!0});let f=a.lens==="colores"?["variante","variantes"]:["colecci\xF3n","colecciones"];c.toolbar.innerHTML=`
      <div class="toolbar__count" aria-live="polite"><b class="num">${h.items.length}</b> ${h.items.length===1?f[0]:f[1]}<span class="small"> de ${h.total}</span></div>
      <div class="toolbar__ctrl">
        <button class="tbtn" data-open-filters>Filtrar <b data-fab-n></b></button>
        <div class="seg" role="group" aria-label="Qu\xE9 mostrar"><button data-lens="colecciones" aria-pressed="${a.lens==="colecciones"}">Colecciones</button><button data-lens="colores" aria-pressed="${a.lens==="colores"}">Colores</button></div>
                <label class="sort"><span class="sr-only">Ordenar</span><select data-sort><option value="az" ${a.sort==="az"?"selected":""}>A\u2013Z</option><option value="novedad" ${a.sort==="novedad"?"selected":""}>Novedades primero</option></select></label>
      </div>`;let w=[["grid","2"],["mosaico","4"],["lista","Lista"]];$("[data-viewseg]",e).innerHTML=`<span>Vista</span><div>${w.map(([C,ne])=>`<button data-view="${C}" aria-pressed="${a.view===C}" aria-label="${C==="grid"?"2 columnas":C==="mosaico"?"4 columnas":"Lista t\xE9cnica"}">${ne}</button>`).join("")}</div>`;let x=t.find(C=>C.id==="estancia"),N=a.f.estancia;$("[data-catbar]",e).innerHTML=`<button data-cat="" aria-pressed="${!N}">Todos</button>${x.options.map(C=>`<button data-cat="${C.v}" aria-pressed="${!!N?.has(C.v)}">${r(C.label)}</button>`).join("")}`;let H=[];a.q&&H.push(`<button class="chip chip--sm is-on" data-rm-q>\xAB${r(a.q)}\xBB <span class="x">\xD7</span></button>`);for(let C of t)for(let ne of a.f[C.id]||[])H.push(`<button class="chip chip--sm is-on" data-rm="${C.id}|${r(ne)}">${C.id==="color"?`<i class="swatch" style="background:${le[ne]}"></i>`:""}${r(u(C,ne))} <span class="x">\xD7</span></button>`);c.active.innerHTML=H.length?`${H.join("")}<button class="clear-all" data-reset>Borrar todo</button>`:"",c.active.hidden=!H.length,c.results.innerHTML=g(h.items),S("[data-shortcut]",e).forEach(C=>C.setAttribute("aria-pressed",String(yt(a,Oe[+C.dataset.shortcut].f)&&!a.q))),$("[data-n-res]",e).textContent=h.items.length,S("[data-fab-n]",e).forEach(C=>{C.textContent=l||"",C.hidden=!l}),c.clear.hidden=!c.input.value,o()}let k=(p,m,h)=>{var f;let l=(f=a.f)[p]||(f[p]=new Set);h?l.add(m):l.delete(m),l.size||delete a.f[p]},M=p=>{let m=p.target.closest("input[data-g]");if(m){k(m.dataset.g,m.dataset.v,m.checked),_();return}p.target.matches("[data-sort]")&&(a.sort=p.target.value,_())},j=p=>{let m=p.target.closest?.("details[data-group]");m&&(m.open?n.add(m.dataset.group):n.delete(m.dataset.group))},q=p=>{let m=p.target,h;if(h=m.closest("[data-lens]"))a.lens=h.dataset.lens,_();else if(h=m.closest("[data-view]"))a.view=h.dataset.view,_();else if(h=m.closest("[data-cat]"))delete a.f.estancia,h.dataset.cat&&(a.f.estancia=new Set([h.dataset.cat])),_();else if(h=m.closest("[data-rm]")){let[l,f]=h.dataset.rm.split("|");k(l,f,!1),_()}else if(m.closest("[data-rm-q]"))a.q="",c.input.value="",_();else if(m.closest("[data-reset]"))a.f={},a.q="",c.input.value="",_();else if(m.closest("[data-clear-q]"))a.q="",c.input.value="",c.input.focus(),R.hide(),_();else if(h=m.closest("[data-more]")){let l=h.dataset.more;i.has(l)?i.delete(l):i.add(l),_({keepFocus:!1})}else if(h=m.closest("[data-shortcut]")){let l=Oe[+h.dataset.shortcut],f=yt(a,l.f)&&!a.q;if(a.f={},a.q="",c.input.value="",!f)for(let[w,x]of Object.entries(l.f))a.f[w]=new Set(x),n.add(w);_()}else m.closest("[data-open-filters]")?document.body.classList.add("filters-open"):m.closest("[data-close-filters]")?document.body.classList.remove("filters-open"):(h=m.closest("tr[data-href]"))&&!m.closest("a, button")&&(location.hash=h.dataset.href)};e.addEventListener("change",M),e.addEventListener("toggle",j,!0),e.addEventListener("click",q);let R=je(c.input,$("#f-suggest",e),p=>{p.filter?(k(p.filter[0],p.filter[1],!0),n.add(p.filter[0]),a.q="",c.input.value="",R.hide(),_()):location.hash=Se(p,a)},{onEnter:p=>{a.q=p.trim(),R.hide(),_()}}),v=me(()=>{a.q=c.input.value.trim(),_()},160);return c.input.addEventListener("input",v),c.input.addEventListener("blur",()=>setTimeout(()=>R.hide(),120)),_({keepFocus:!1}),s.size&&!history.state?.noScroll&&requestAnimationFrame(()=>$(".finder__body",e).scrollIntoView({block:"start"})),{destroy(){e.removeEventListener("change",M),e.removeEventListener("toggle",j,!0),e.removeEventListener("click",q),document.body.classList.remove("filters-open")}}}var ds,Oe,yt,xt=B(()=>{z();D();$e();G();ae();Me();ds=()=>"Producto",Oe=[{label:"Exterior antideslizante",f:{location:["exterior"],slip:["R11","R12","R13"]}},{label:"Piscina",f:{estancia:["piscina"]}},{label:"Gran formato",f:{size:["l","xl"]}},{label:"Revestimiento de ba\xF1o",f:{estancia:["bano"],placement:["pared"]}},{label:"Efecto madera",f:{efecto:["Madera"]}},{label:"Relieve 3D",f:{efecto:["Relieve 3D"]}},{label:"CUORE \xB7 hecho a mano",f:{line:["cuore"]}}],yt=(e,s)=>{let t=Object.keys(s);return Object.entries(e.f).filter(([,n])=>n.size).length===t.length&&t.every(n=>e.f[n]?.size===s[n].length&&s[n].every(i=>e.f[n].has(i)))}});var Et={};ce(Et,{groupPieces:()=>xe,relatedDocs:()=>Ee,render:()=>bs,title:()=>us});function xe(e){let s=[["Pelda\xF1os y escaleras",/PELDA|ZANQU|REMATE|FRONTAL|PASAMANOS|BLOCK|ÁNGULO|ANGULO/],["Piscina",/PISCINA|VIERTEAGUAS/],["Z\xF3calos",/Z[ÓO]CALO/]],t=new Map(s.map(([a])=>[a,[]]).concat([["Otras piezas",[]]]));for(let a of e){if(/BAJO PEDIDO/.test(a)&&a.length<14){t.get("Otras piezas").push(a);continue}let n=/PISCINA|VIERTEAGUAS/.test(a)?s[1]:s.find(([,i])=>i.test(a));t.get(n?n[0]:"Otras piezas").push(a)}return[...t].filter(([,a])=>a.length)}function Ee(e){let s=b.resources,t=[...e.documents.map(c=>({...c,cover:e.cover,note:`Colecci\xF3n ${e.name}`}))],a=c=>s.catalogs.find(o=>c.test(o.title)),n=a(/general/i);n&&t.push(n),e.cuore&&t.push(a(/CUORE/i)),(e.estancias.includes("fachadas")||e.efectos.includes("Celos\xEDa"))&&t.push(a(/fachadas/i)),e.estancias.includes("piscina")&&t.push(a(/pool/i)),t.push(s.technical.find(c=>c.kind==="Instalaci\xF3n"));let i=e.placement.includes("pared")?/Revestimiento/:e.estancias.includes("piscina")?/Piscinas/:/in-out/;return t.push(s.technical.find(c=>i.test(c.title))),t.filter(Boolean)}function hs(e){let s=t=>t.efectos.filter(a=>e.efectos.includes(a)).length*3+t.estancias.filter(a=>e.estancias.includes(a)).length+(t.cuore===e.cuore?1:0)+t.shapes.filter(a=>e.shapes.includes(a)).length*2;return b.collections.filter(t=>t.id!==e.id).sort((t,a)=>s(a)-s(t)).slice(0,3)}function fs(e){if(e===1)return[[12,1]];if(e===2)return[[6,1],[6,1]];if(e===4)return[[6,1],[6,1],[6,1],[6,1]];let s=[[7,2],[5,1],[5,1]].slice(0,e),t=e-s.length;for(;t>0;)if(t===4||t===2){for(let a=0;a<t;a++)s.push([6,1]);t=0}else if(t===1)s.push([12,1]),t=0;else{for(let a=0;a<3;a++)s.push([4,1]);t-=3}return s}function vs(e){return`
  <div class="switcher" data-switcher>
    <button class="switcher__btn" aria-haspopup="listbox" aria-expanded="false"><span class="small">Colecci\xF3n</span><b>${r(e.name)}</b><i class="caret"></i></button>
    <ul class="switcher__list" role="listbox" hidden>
      ${b.collections.map(s=>`<li><a role="option" href="#/coleccion/${s.id}" ${s.id===e.id?'aria-selected="true"':""}>${A(s.cover,"")}<span>${r(s.name)}</span><small>${r(s.efectos[0]||s.shapes[0])}</small></a></li>`).join("")}
    </ul>
  </div>`}function bs(e,{args:[s]}){let t=E(s);if(!t){e.innerHTML='<div class="wrap section"><h1 class="h1">Colecci\xF3n no encontrada</h1><a class="link-arrow" href="#/productos">Volver al cat\xE1logo</a></div>';return}let a=Y(t.id),n=Ze(t),i=Ee(t),c=xe(t.pieces),o=t.layouts,d=[["ambientes","Ambientes",t.environments.length>0],["colores","Colores",a.length>0],["formatos","Formatos",t.formats.length>0],["composiciones","Composiciones",o.length>0],["tecnica","T\xE9cnica",!0],["proyectos","Proyectos",n.length>0],["documentos","Documentos",!0]].filter(l=>l[2]),u=(l,f)=>f?`<div><dt>${l}</dt><dd>${f}</dd></div>`:"",g=l=>`<div class="chips">${l.join("")}</div>`;e.innerHTML=`
  <article class="collection">
    <div class="wrap crumbs-row"><nav class="crumbs" aria-label="Migas"><a href="#/productos">Productos</a><span aria-hidden="true">/</span><span aria-current="page">${r(t.name)}</span></nav>${vs(t)}</div>

    <header class="chero">
      <div class="chero__media">
        <picture><source media="(max-width: 760px)" srcset="${r(t.heroMobile||t.hero)}"><img src="${r(t.hero)}" alt="${r(t.name)}" fetchpriority="high"></picture>
        <div class="chero__over">
          <div class="chero__tags">${_e(t)}</div>
          <h1 class="display">${r(t.name)}</h1>
        </div>
      </div>
      <div class="chero__info wrap">
        <div class="chero__intro">
          <p class="lead">${r(t.concept)}</p>
          <div class="chero__actions">
            ${t.documents[0]?`<a class="btn btn--solid" href="${r(t.documents[0].href)}" target="_blank" rel="noopener" ${t.documents[0].local?"download":""}>${L.download}Ficha t\xE9cnica PDF</a>`:""}
            <button class="btn" data-present>${L.expand}Pase de im\xE1genes</button>
          </div>
        </div>
        <dl class="facts">
          ${t.efectos.length||t.shapes.length?`<div><dt>Efecto \xB7 forma</dt><dd>${r(t.efectos.concat(t.shapes).join(" \xB7 "))}</dd></div>`:""}
          <div><dt>Formatos</dt><dd>${r(ee(t))}</dd></div>
          ${t.surfaces.length?`<div><dt>Superficie</dt><dd>${r(t.surfaces.map(l=>O[l]).join(" \xB7 "))}</dd></div>`:""}
          ${t.antislip.length?`<div><dt>Antideslizante</dt><dd>${r(se(t))}</dd></div>`:""}
          <div><dt>Colores</dt><dd>${a.length}</dd></div>
        </dl>
      </div>
    </header>

    <nav class="subnav" aria-label="En esta colecci\xF3n"><div class="wrap subnav__in">${d.map(([l,f])=>`<a href="#" data-spy="${l}">${r(f)}</a>`).join("")}</div></nav>

    ${t.environments.length?`
    <section class="section csec" id="ambientes" data-sec>
      <div class="wrap"><div class="csec__head"><h2 class="h2">Ambientes</h2><p class="small">${t.environments.length} fotograf\xEDas \xB7 pulsa para ampliar</p></div>
        <div class="gallery">${t.environments.map((l,f)=>{let[w,x]=fs(t.environments.length)[f];return`<button class="gallery__item" style="--cs:${w};--rs:${x}" data-env="${f}" aria-label="Ampliar: ${r(l.label)}">${A(l.src,l.label)}<span class="gallery__cap">${r(l.label)}</span></button>`}).join("")}</div>
      </div>
    </section>`:""}

    <section class="section csec rule" id="colores" data-sec>
      <div class="wrap"><div class="csec__head"><h2 class="h2">Colores</h2><p class="small">${a.length} \xB7 cada color abre su ficha de variante</p></div>
        <div class="colors">${a.map(l=>`
          <a class="color" href="#/producto/${l.id}">
            <div class="color__media">${l.primary?A(l.images[0].src,`${t.name} ${l.name}`):`<div class="color__flat" style="background:${l.hex}"></div>`}<i class="swatch color__dot" style="background:${l.hex}"></i></div>
            <div class="color__name">${r(l.name)}</div><div class="small">${r([Q[l.family],...l.finish.map(f=>f==="antislip"?"Antislip":"Relieve")].join(" \xB7 "))}</div>
          </a>`).join("")}</div>
      </div>
    </section>

    ${t.formats.length?`
    <section class="section csec rule" id="formatos" data-sec>
      <div class="wrap cgrid">
        <div><h2 class="h2">Formatos<br>y piezas</h2><p class="small" style="margin-top:14px">Proporciones a escala entre s\xED.${t.surfaces.length?` Superficie ${t.surfaces.map(l=>O[l].toLowerCase()).join(" y ")}.`:""}</p></div>
        <div>
          ${pe(t)}
          ${c.length?`<div class="pieces">${c.map(([l,f])=>`<div class="pieces__g"><h3 class="eyebrow">${r(l)} <span>${f.length}</span></h3><div class="tags">${f.map(w=>`<span class="piece">${r(ms(w))}</span>`).join("")}</div></div>`).join("")}</div>`:""}
        </div>
      </div>
    </section>`:""}

    ${o.length?`
    <section class="section csec rule" id="composiciones" data-sec>
      <div class="wrap"><div class="csec__head"><h2 class="h2">Composiciones y despieces</h2><p class="small">L\xE1minas de composici\xF3n para prescriptores y colocadores</p></div>
        <div class="layouts">
          <div class="layouts__main"><button class="layouts__big" data-layout-open aria-label="Ampliar l\xE1mina"><img data-layout-img src="${r(o[0].src)}" alt="${r(o[0].caption)}"></button></div>
          <div class="layouts__thumbs" role="tablist">${o.map((l,f)=>`<button role="tab" aria-selected="${f===0}" data-layout="${f}" aria-label="L\xE1mina ${f+1}">${A(l.src,"")}<span>${l.cover?"Presentaci\xF3n":`Despiece ${f+(o[0].cover?0:1)}`}</span></button>`).join("")}</div>
        </div>
      </div>
    </section>`:""}

    <section class="section csec rule" id="tecnica" data-sec>
      <div class="wrap cgrid">
        <div><h2 class="h2">Informaci\xF3n t\xE9cnica</h2></div>
        <div class="tech">
          <dl class="specs">
            ${u("Material",r(t.material||"Gres porcel\xE1nico extruido"))}
            ${u("Efecto",r(t.efectos.join(" \xB7 ")))}
            ${u("Forma",r(t.shapes.join(" \xB7 ")))}
            ${u("Formatos",g(t.formats.map(l=>`<span class="chip chip--sm" style="cursor:default">${r(l.label)}${l.imperial?` <span class="small">${r(l.imperial)}</span>`:""}</span>`)))}
            ${u("Superficie",r(t.surfaces.map(l=>O[l]).join(" \xB7 ")))}
            ${u("Uso",r([...t.location.map(l=>X[l]),...t.placement.map(l=>J[l])].join(" \xB7 ")))}
            ${u("Espacios",g(t.estancias.filter(l=>F[l]).map(l=>`<a class="chip chip--sm" href="#/productos?estancia=${l}">${r(F[l]||l)}</a>`)))}
            ${u("Antideslizante",we(t))}
          </dl>
          ${t.specs.length?`<ul class="ticks">${t.specs.map(l=>`<li>${r(l.label)}</li>`).join("")}</ul>`:""}
          <p class="small tech__note">Datos tomados de la web actual. Clases R9\u2013R13 seg\xFAn UNE-EN 16165 (anexos B y C) y clases A\u2013C seg\xFAn el anexo A, tal y como figuran en los iconos publicados en natucer.es.</p>
        </div>
      </div>
    </section>

    ${n.length?`
    <section class="section csec rule" id="proyectos" data-sec>
      <div class="wrap"><div class="csec__head"><h2 class="h2">Proyectos con ${r(t.name)}</h2><p class="small">${n.length} de natucer.es</p></div>
        <div class="cprojects">${n.slice(0,6).map(l=>`
          <button class="cproj" data-project="${l.id}">
            <span class="cproj__media">${A(l.images[0],l.title)}</span><span class="eyebrow">${r(l.category.replaceAll("-"," "))}</span><span class="cproj__t">${r(l.title)}</span>
          </button>`).join("")}</div>
      </div>
    </section>`:""}

    <section class="section csec rule" id="documentos" data-sec>
      <div class="wrap cgrid">
        <div><h2 class="h2">Documentaci\xF3n<br>y descargas</h2><p class="small" style="margin-top:14px">Todo lo necesario para prescribir y colocar, sin salir de la colecci\xF3n.</p><a class="link-arrow" style="margin-top:18px" href="#/recursos">Todos los recursos</a></div>
        <div class="docs">${i.map(l=>te(l)).join("")}</div>
      </div>
    </section>

    <section class="section rule">
      <div class="wrap"><div class="csec__head"><h2 class="h2">Otras colecciones</h2><a class="link-arrow" href="#/productos">Volver al cat\xE1logo</a></div>
        <div class="related">${hs(t).map(ye).join("")}</div></div>
    </section>
  </article>`;let y=[...t.environments.map(l=>({src:l.src,title:t.name,caption:l.caption})),...o.map(l=>({src:l.src,title:t.name,caption:l.caption}))],_=$("[data-switcher]",e),k=$(".switcher__btn",_),M=$(".switcher__list",_),j=l=>{M.hidden=!l,k.setAttribute("aria-expanded",String(l))};k.addEventListener("click",()=>j(M.hidden));let q=l=>{_.contains(l.target)||j(!1)},R=l=>{l.key==="Escape"&&j(!1)};document.addEventListener("click",q),document.addEventListener("keydown",R);let v=0,p=l=>{let f=l.target,w;if(w=f.closest("[data-env]"))K(y,+w.dataset.env);else if(f.closest("[data-present]"))K(y,0);else if(w=f.closest("[data-layout]"))v=+w.dataset.layout,$("[data-layout-img]",e).src=o[v].src,S("[data-layout]",e).forEach(x=>x.setAttribute("aria-selected",String(x===w)));else if(f.closest("[data-layout-open]"))K(y,t.environments.length+v);else if(w=f.closest("[data-project]")){let x=b.projectById.get(w.dataset.project);K(x.images.map(N=>({src:N,title:x.title,caption:[x.summary,x.credits].filter(Boolean).join(" \u2014 ")})),0)}else(w=f.closest("[data-spy]"))&&(l.preventDefault(),document.getElementById(w.dataset.spy)?.scrollIntoView({behavior:"smooth",block:"start"}))};e.addEventListener("click",p);let m=S("[data-spy]",e),h=new IntersectionObserver(l=>{for(let f of l)f.isIntersecting&&m.forEach(w=>w.classList.toggle("is-on",w.dataset.spy===f.target.id))},{rootMargin:"-40% 0px -55% 0px"});return S("[data-sec]",e).forEach(l=>h.observe(l)),{destroy(){h.disconnect(),e.removeEventListener("click",p),document.removeEventListener("click",q),document.removeEventListener("keydown",R)}}}var us,ms,Be=B(()=>{z();D();G();ae();us=([e])=>E(e)?.name,ms=e=>e.charAt(0)+e.slice(1).toLowerCase()});var At={};ce(At,{render:()=>_s,title:()=>gs});function Lt(e,s,t){return`${`${e.name} ${s.name}${s.finish.includes("antislip")?" Antislip":""}`.toUpperCase()} ${t.label.replace(/^[A-ZÁÉÍÓÚ.]+\s+(?=\d)/,"")}${t.imperial?` \xB7 ${t.imperial}`:""}`.replaceAll('"',"\u2033")}function _s(e,{args:[s]}){let t=b.variantById.get(s);if(!t){e.innerHTML='<div class="wrap section"><h1 class="h1">Producto no encontrado</h1><a class="link-arrow" href="#/productos">Volver al cat\xE1logo</a></div>';return}let a=E(t.collection),n=Y(a.id),i=n.findIndex(v=>v.id===t.id),c=n[(i-1+n.length)%n.length],o=n[(i+1)%n.length],d=t.images.map(v=>({src:v.src,caption:v.caption})),u=t.primary>0,g=d.length?d:[],y=Ee(a),_=xe(a.pieces),k=0,M=0,j=(v,p)=>p?`<div><dt>${v}</dt><dd>${p}</dd></div>`:"";e.innerHTML=`
  <article class="product">
    <div class="wrap crumbs-row"><nav class="crumbs" aria-label="Migas"><a href="#/productos">Productos</a><span aria-hidden="true">/</span><a href="#/coleccion/${a.id}">${r(a.name)}</a><span aria-hidden="true">/</span><span aria-current="page">${r(t.name)}</span></nav>
      <div class="pnav"><a class="icon-btn" href="#/producto/${c.id}" aria-label="Color anterior: ${r(c.name)}" title="${r(c.name)}">${L.arrowL}</a><span class="small num">${i+1} / ${n.length}</span><a class="icon-btn" href="#/producto/${o.id}" aria-label="Color siguiente: ${r(o.name)}" title="${r(o.name)}">${L.arrowR}</a></div></div>

    <div class="wrap pgrid">
      <div class="pgallery">
        <button class="pgallery__main" data-open aria-label="Ampliar imagen">
          ${g.length?`<img data-main src="${r(g[0].src)}" alt="${r(a.name)} ${r(t.name)}">`:`<div class="pflat" style="background:${t.hex}"><span>Muestra de color provisional</span></div>`}
        </button>
        ${g.length&&!u?'<p class="small pgallery__note">Este color aparece en la fotograf\xEDa junto a otros tonos de la colecci\xF3n.</p>':""}
        ${g.length?"":'<p class="small pgallery__note">La fotograf\xEDa de este color no est\xE1 en Sources: es un dato que el futuro PIM deber\xEDa aportar por variante.</p>'}
        ${g.length?`<div class="pgallery__bar"><span class="small" data-cap>${r(g[0].caption||"")}</span><a class="btn btn--sm" data-dl href="${r(g[0].src)}" download>${L.download}Imagen JPG</a></div>`:""}
        ${g.length>1?`<div class="pthumbs">${g.map((v,p)=>`<button data-thumb="${p}" aria-pressed="${p===0}" aria-label="Imagen ${p+1}">${A(v.src,"")}</button>`).join("")}</div>`:""}
      </div>

      <div class="pinfo">
        <a class="eyebrow ul" href="#/coleccion/${a.id}">${r(a.name)} \xB7 ver colecci\xF3n</a>
        <h1 class="h1">${r(t.name)}</h1>
        <div class="pinfo__color"><i class="swatch" style="background:${t.hex};width:22px;height:22px"></i><span>${r(Q[t.family])}${t.finish.length?` \xB7 ${t.finish.map($s).join(" \xB7 ")}`:""}</span>${_e(a)}</div>

        <div class="pblock">
          <h2 class="eyebrow">Formato</h2>
          <div class="tags" role="group" aria-label="Formato">${a.formats.map((v,p)=>`<button class="chip chip--sm" data-fmt="${p}" aria-pressed="${p===0}">${r(v.label)}${v.imperial?` <span class="small">${r(v.imperial)}</span>`:""}</button>`).join("")}</div>
          <div data-scale>${pe(a,{active:a.formats[0]?.key,maxPx:150})}</div>
        </div>

        <div class="pblock refbox">
          <h2 class="eyebrow">Referencia</h2>
          <div class="refbox__row"><code data-ref>${r(a.formats[0]?Lt(a,t,a.formats[0]):`${a.name} ${t.name}`.toUpperCase())}</code><button class="btn btn--sm" data-copy>${L.copy}Copiar</button></div>
        </div>

        <dl class="specs">
          ${j("Colecci\xF3n",`<a href="#/coleccion/${a.id}" class="ul">${r(a.name)}</a>`)}
          ${j("Efecto \xB7 forma",r(a.efectos.concat(a.shapes).join(" \xB7 ")))}
          ${j("Superficie",r(a.surfaces.map(v=>O[v]).join(" \xB7 ")))}
          ${j("Uso",r([...a.location.map(v=>X[v]),...a.placement.map(v=>J[v])].join(" \xB7 ")))}
          ${j("Espacios",`<div class="chips">${a.estancias.filter(v=>F[v]).map(v=>`<a class="chip chip--sm" href="#/productos?estancia=${v}">${r(F[v]||v)}</a>`).join("")}</div>`)}
          ${j("Antideslizante",we(a))}
          ${j("Material",r(a.material||"Gres porcel\xE1nico extruido"))}
        </dl>
      </div>
    </div>

    <section class="section csec rule">
      <div class="wrap cgrid">
        <div><h2 class="h2">Documentaci\xF3n<br>y recursos</h2><p class="small" style="margin-top:14px">Los documentos son de la colecci\xF3n ${r(a.name)}: Natucer no publica ficha por color.</p></div>
        <div>
          <div class="docs">${y.map(v=>te(v)).join("")}</div>
          ${a.layouts.length?`<h3 class="eyebrow" style="margin:32px 0 12px">Despieces y composiciones (JPG)</h3><div class="dl-thumbs">${a.layouts.map((v,p)=>`<a href="${r(v.src)}" download class="dl-thumb">${A(v.src,"")}<span>${v.cover?"Presentaci\xF3n":`Despiece ${p+(a.layouts[0].cover?0:1)}`}</span></a>`).join("")}</div>`:""}
        </div>
      </div>
    </section>

    <section class="section csec rule">
      <div class="wrap"><div class="csec__head"><h2 class="h2">Otros colores de ${r(a.name)}</h2><a class="link-arrow" href="#/coleccion/${a.id}">Ver colecci\xF3n completa</a></div>
        <div class="colors colors--sm">${n.filter(v=>v.id!==t.id).map(v=>`
          <a class="color" href="#/producto/${v.id}"><div class="color__media">${v.primary?A(v.images[0].src,`${a.name} ${v.name}`):`<div class="color__flat" style="background:${v.hex}"></div>`}<i class="swatch color__dot" style="background:${v.hex}"></i></div><div class="color__name">${r(v.name)}</div></a>`).join("")}</div>
        ${_.length?`<div class="pieces" style="margin-top:56px"><h3 class="h3" style="margin-bottom:18px">Piezas especiales de la colecci\xF3n</h3>${_.map(([v,p])=>`<div class="pieces__g"><h4 class="eyebrow">${r(v)} <span>${p.length}</span></h4><div class="tags">${p.map(m=>`<span class="piece">${r(m.charAt(0)+m.slice(1).toLowerCase())}</span>`).join("")}</div></div>`).join("")}</div>`:""}
      </div>
    </section>
  </article>`;let q=v=>{M=v;let p=g[v];$("[data-main]",e).src=p.src,$("[data-cap]",e).textContent=p.caption||"",$("[data-dl]",e).href=p.src,S("[data-thumb]",e).forEach(m=>m.setAttribute("aria-pressed",String(+m.dataset.thumb===v)))},R=v=>{let p=v.target,m;if(m=p.closest("[data-thumb]"))q(+m.dataset.thumb);else if(p.closest("[data-open]")&&g.length)K(g.map(h=>({src:h.src,title:`${a.name} ${t.name}`,caption:h.caption})),M);else if(m=p.closest("[data-fmt]"))k=+m.dataset.fmt,S("[data-fmt]",e).forEach(h=>h.setAttribute("aria-pressed",String(h===m))),$("[data-scale]",e).innerHTML=pe(a,{active:a.formats[k].key,maxPx:150}),$("[data-ref]",e).textContent=Lt(a,t,a.formats[k]);else if(p.closest("[data-copy]")){let h=$("[data-ref]",e).textContent;(navigator.clipboard?.writeText(h)||Promise.reject()).then(()=>re("Referencia copiada"),()=>re(h))}};return e.addEventListener("click",R),{destroy(){e.removeEventListener("click",R)}}}var gs,$s,Ct=B(()=>{z();D();G();ae();Be();gs=([e])=>{let s=b.variantById.get(e);return s?`${E(s.collection).name} ${s.name}`:""},$s=e=>e==="antislip"?"Antislip":"Relieve"});var kt={};ce(kt,{render:()=>xs,title:()=>ys});function ws(){let e=b.collections.flatMap(s=>s.documents.map(t=>({...t,cover:s.cover,note:s.efectos[0]||"",_t:"fichas",_s:`${s.name} ${s.efectos.join(" ")} ${s.estancias.join(" ")}`})));return[...b.resources.catalogs.map(s=>({...s,_t:"catalogos",_s:s.title})),...e,...b.resources.technical.map(s=>({...s,_t:"guias",_s:s.title}))]}function xs(e,{params:s}){let t=ws(),a=Ne.some(([u])=>u===s.get("t"))?s.get("t"):"todo",n="";e.innerHTML=`
  <div class="wrap res-page">
    <header class="res-page__head">
      <p class="eyebrow">Recursos para profesionales</p>
      <h1 class="h1">Cat\xE1logos, fichas <span class="serif-i">y gu\xEDas t\xE9cnicas</span></h1>
      <p class="lead">Un \xFAnico lugar para localizar documentaci\xF3n: por colecci\xF3n, por tipo o por palabra. Cada colecci\xF3n enlaza adem\xE1s sus propios documentos.</p>
      <div class="searchbox"><div class="searchbox__field">${L.search}<input type="search" data-q placeholder="Colecci\xF3n, cat\xE1logo o gu\xEDa\u2026" aria-label="Buscar documentos" autocomplete="off"></div></div>
      <div class="seg" role="tablist" aria-label="Tipo de documento">${Ne.map(([u,g])=>`<button data-tab="${u}" aria-pressed="${u===a}">${g}</button>`).join("")}</div>
    </header>
    <div data-list></div>
    <p class="small" style="padding:28px 0 80px">Los documentos ligeros se incluyen en el mockup; los pesados se abren desde natucer.es. La ficha t\xE9cnica es \xFAnica por colecci\xF3n: la web actual no publica una por color.</p>
  </div>`;let i=$("[data-list]",e),c=()=>{let u=n.toLowerCase(),g=t.filter(_=>(a==="todo"||_._t===a)&&(!u||`${_.title} ${_._s} ${_.kind}`.toLowerCase().includes(u))),y=Ne.slice(1).map(([_,k])=>[k,g.filter(M=>M._t===_)]).filter(([,_])=>_.length);i.innerHTML=g.length?y.map(([_,k])=>`<section class="res-group"><h2 class="eyebrow">${r(_)} <span class="num">${k.length}</span></h2><div class="docs">${k.map(M=>te(M)).join("")}</div></section>`).join(""):'<p class="lead" style="padding:48px 0">Sin resultados. Prueba con el nombre de una colecci\xF3n.</p>'},o=u=>{let g=u.target.closest("[data-tab]");g&&(a=g.dataset.tab,S("[data-tab]",e).forEach(y=>y.setAttribute("aria-pressed",String(y===g))),c())},d=u=>{u.target.matches("[data-q]")&&(n=u.target.value.trim(),c())};return e.addEventListener("click",o),e.addEventListener("input",d),c(),{destroy(){e.removeEventListener("click",o),e.removeEventListener("input",d)}}}var ys,Ne,St=B(()=>{z();D();ae();ys=()=>"Recursos",Ne=[["todo","Todo"],["catalogos","Cat\xE1logos y folletos"],["fichas","Fichas t\xE9cnicas"],["guias","Gu\xEDas e instalaci\xF3n"]]});D();z();Me();ve();var zt=[".section-head",".intro .eyebrow",".rail__card",".spaces__head",".spaces__list li",".cuore__text > *",".sol",".proj__body",".res__intro > *",".finder__head > *",".res-page__head > *",".csec__head",".cgrid > div:first-child",".docs .doc",".ccard__body",".vcard__body",".color__name",".strip__grid",".chero__text > *",".pinfo > *",".intro__stats li",".menu__sub"].join(","),Ht=[".ccard__media",".vcard__media",".rail__media",".sol__media",".proj__media",".color__media",".cproj__media",".cuore__imgs a",".gallery__item",".rmosaic .tile",".pgallery__main",".spaces__preview"].join(","),Dt=".chero__media img, .cuore__imgs img",Te=new Set,Fe=new Set,mt=new WeakSet,ue=new Set,Pe=new IntersectionObserver(e=>{for(let s of e)!s.isIntersecting&&s.boundingClientRect.top>0||(s.target.classList.add("fx-in"),Pe.unobserve(s.target))},{threshold:.1,rootMargin:"0px 0px -5% 0px"}),qe=new IntersectionObserver(e=>{for(let s of e){if(!s.isIntersecting&&s.boundingClientRect.top>0)continue;qe.unobserve(s.target);let t=s.target,a=+t.dataset.to;if(!s.isIntersecting){t.textContent=a;continue}let n=performance.now(),i=c=>{let o=Math.min(1,(c-n)/2400);t.textContent=Math.round(a*(1-Math.pow(1-o,3))),o<1&&requestAnimationFrame(i)};requestAnimationFrame(i)}},{threshold:.6});function ht(e,s){if(e.dataset.fx)return;e.dataset.fx="1",e.classList.add(s);let t=[...e.parentElement.children].indexOf(e);e.style.setProperty("--d",`${Math.min(t%6,5)*70}ms`),Pe.observe(e),ue.add(e)}function Ut(e){let s=e.textContent.trim().split(/\s+/);e.setAttribute("aria-label",e.textContent.trim()),e.innerHTML=s.map(t=>`<span class="w" aria-hidden="true">${t}</span>`).join(" "),e._words=[...e.querySelectorAll(".w")],Te.add(e)}function ft(e){if(e.nodeType!==1)return;let s=(t,a)=>{e.matches?.(t)&&a(e),e.querySelectorAll(t).forEach(a)};s("[data-scrub]",t=>{t._words||Ut(t)}),s("[data-count]",t=>{mt.has(t)||(mt.add(t),t.dataset.to=t.textContent.replace(/\D/g,""),P||(t.textContent="0",qe.observe(t),ue.add(t)))}),s(Dt,t=>Fe.add(t)),!P&&(s(zt,t=>ht(t,"fx")),s(Ht,t=>ht(t,"fx-media")))}var Re=!1;function Ie(){Re||(Re=!0,requestAnimationFrame(()=>{Re=!1;let e=innerHeight;for(let t of Te){if(!t.isConnected){Te.delete(t);continue}let a=t.getBoundingClientRect(),n=Math.min(1,Math.max(0,(e*.88-a.top)/(a.height+e*.3))),i=t._words.length;t._words.forEach((c,o)=>c.classList.toggle("on",o<n*i*1.15))}for(let t of ue){if(!t.isConnected){ue.delete(t);continue}t.getBoundingClientRect().bottom<0&&(ue.delete(t),t.dataset.count!==void 0?(qe.unobserve(t),t.textContent=t.dataset.to):(Pe.unobserve(t),t.classList.add("fx-in")))}if(P)return;for(let t of Fe){if(!t.isConnected){Fe.delete(t);continue}let a=t.parentElement.getBoundingClientRect();if(a.bottom<-100||a.top>e+100)continue;let n=(a.top+a.height/2-e/2)/e;t.style.setProperty("--py",`${(-n*7).toFixed(2)}%`)}let s=document.querySelector("[data-hero]");s&&s.style.setProperty("--p",Math.min(1,scrollY/e).toFixed(3))}))}function Vt(){if(P||!matchMedia("(hover: hover) and (pointer: fine)").matches)return;let e=document.createElement("div");e.className="cursor",document.body.appendChild(e);let s=-100,t=-100,a=-100,n=-100,i=()=>{s+=(a-s)*.18,t+=(n-t)*.18,e.style.transform=`translate3d(${s}px,${t}px,0)`,requestAnimationFrame(i)};requestAnimationFrame(i),addEventListener("mousemove",c=>{a=c.clientX,n=c.clientY,e.classList.add("is-on")},{passive:!0}),document.addEventListener("mouseleave",()=>e.classList.remove("is-on")),document.addEventListener("mouseover",c=>{let o=c.target.closest(".ccard, .tile, .rail__card, .gallery__item, .proj__media, .cproj, .vcard, .sol, .color, .cuore__imgs a, .pgallery__main");e.classList.toggle("is-big",!!o),e.dataset.label=o&&o.closest("[data-rail]")?"Arrastra":""})}function vt(e){ft(e),new MutationObserver(s=>{for(let t of s)t.addedNodes.forEach(ft)}).observe(e,{childList:!0,subtree:!0}),addEventListener("scroll",Ie,{passive:!0}),addEventListener("resize",Ie),Vt(),Ie()}var bt=P;var Es=[{re:/^\/$/,view:()=>Promise.resolve().then(()=>(_t(),$t))},{re:/^\/productos$/,view:()=>Promise.resolve().then(()=>(xt(),wt))},{re:/^\/coleccion\/([\w-]+)$/,view:()=>Promise.resolve().then(()=>(Be(),Et))},{re:/^\/producto\/([\w-]+)$/,view:()=>Promise.resolve().then(()=>(Ct(),At))},{re:/^\/recursos$/,view:()=>Promise.resolve().then(()=>(St(),kt))}],ie=document.getElementById("main"),ze=null,jt=null;async function Mt(){let{path:e,params:s}=Ue(),t,a=Es.find(o=>t=e.match(o.re));if(pt(e),ze?.destroy?.(),ze=null,!a){ie.innerHTML='<div class="wrap section"><p class="eyebrow">404</p><h1 class="h1" style="margin:12px 0 24px">Esta p\xE1gina no existe en el mockup</h1><a class="link-arrow" href="#/">Volver al inicio</a></div>';return}let n=await a.view(),i=jt===e;jt=e,ze=await n.render(ie,{params:s,args:t.slice(1),samePage:i})||null,bt||ie.animate([{opacity:0},{opacity:1}],{duration:500,easing:"ease-out"}),document.title=`${n.title?.(t.slice(1))?n.title(t.slice(1))+" \xB7 ":""}Natucer \xB7 Mockup`;let c=s.get("s");c?document.getElementById(c)?.scrollIntoView({behavior:"smooth",block:"start"}):i||(window.scrollTo(0,0),ie.focus({preventScroll:!0}))}(async function(){try{await We()}catch(s){ie.innerHTML=`<div class="wrap section"><h1 class="h2">No se pudieron cargar los datos</h1><p class="lead" style="margin-top:16px">Este prototipo debe abrirse desde un servidor local (no con doble clic en index.html). Ejecuta <code>node serve.mjs</code> o <code>python -m http.server</code> dentro de la carpeta mockup.</p><p class="small" style="margin-top:12px">${s.message}</p></div>`;return}dt(),ut(),vt(ie),window.addEventListener("hashchange",Mt),Mt()})();})();
