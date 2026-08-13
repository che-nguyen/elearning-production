/* ===== shared logic for all pages ===== */

/* count-up (hub) */
function countUp(id,to){var el=document.getElementById(id);if(!el)return;var s=Date.now();(function t(){var p=Math.min((Date.now()-s)/1200,1);el.textContent=Math.round(to*p*(2-p));if(p<1)requestAnimationFrame(t);else el.textContent=to;})();}

/* before / after flip */
function flip(btn,state){
  var card=btn.closest('[data-card]');
  card.querySelectorAll('.toggle button').forEach(function(b){b.classList.remove('on');});
  btn.classList.add('on');
  card.querySelectorAll('.state-before').forEach(function(e){e.classList.toggle('hidden',state!=='before');});
  card.querySelectorAll('.state-after').forEach(function(e){e.classList.toggle('hidden',state!=='after');});
  var m=card.querySelector('.media');
  if(m){m.classList.toggle('after-bg',state==='after');loadMedia(m,state);}
}

/* language toggle (persists across pages via localStorage) */
function setLang(l,btn){
  if(btn){document.querySelectorAll('.lang button').forEach(function(b){b.classList.remove('on');});btn.classList.add('on');}
  document.querySelectorAll('[data-en]').forEach(function(e){
    var v=l==='vi'?e.getAttribute('data-vi'):e.getAttribute('data-en');
    if(v!==null)e.innerHTML=v;
  });
  document.documentElement.lang=l;
  try{localStorage.setItem('lang',l);}catch(e){}
}
function applyStoredLang(){
  var l='en';try{l=localStorage.getItem('lang')||'en';}catch(e){}
  document.querySelectorAll('.lang button').forEach(function(b){
    b.classList.toggle('on',(b.textContent.trim().toLowerCase().indexOf(l==='vi'?'vie':'en')===0));
  });
  if(l==='vi')setLang('vi',null);
}

/* tool-logo chips: official PNG at assets/logos/<slug>.png, else colored initial */
function buildChip(el){
  var name=el.getAttribute('data-name'),desc=el.getAttribute('data-desc'),
      color=el.getAttribute('data-color')||'#242f52',slug=el.getAttribute('data-tool');
  var init=name.replace(/[^A-Za-z0-9]/g,'').charAt(0).toUpperCase();
  el.innerHTML='<span class="logo">'+
    '<img src="assets/logos/'+slug+'.png" alt="'+name+'" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">'+
    '<span class="init" style="display:none;background:'+color+'">'+init+'</span></span>'+
    '<span><span class="cn">'+name+'</span><span class="cd">'+desc+'</span></span>';
}

/* logo-only tool icon (index step cards): official PNG at assets/logos/<slug>.png, else colored initial */
function buildIcon(el){
  var name=el.getAttribute('data-name')||'',color=el.getAttribute('data-color')||'#242f52',slug=el.getAttribute('data-tool');
  var init=name.replace(/[^A-Za-z0-9]/g,'').charAt(0).toUpperCase();
  el.title=name;
  el.innerHTML='<img src="assets/logos/'+slug+'.png" alt="'+name+'" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">'+
    '<span class="init" style="display:none;background:'+color+'">'+init+'</span>';
}

/* media auto-loader: img / gif / video / audio, any extension */
var MEDIA_EXT=['mp4','webm','gif','png','jpg','jpeg','mp3','wav'];
var mediaCache={};
function renderMedia(box,url,ext){
  var el;
  if(['mp4','webm'].indexOf(ext)>=0){el=document.createElement('video');el.src=url;el.autoplay=true;el.loop=true;el.muted=true;el.playsInline=true;el.controls=true;}
  else if(['mp3','wav'].indexOf(ext)>=0){el=document.createElement('audio');el.src=url;el.controls=true;}
  else{el=document.createElement('img');el.src=url;el.alt='';}
  box.innerHTML='';box.appendChild(el);
}
function loadMedia(box,state){
  if(!box||!box.dataset.media)return;
  var base=box.dataset.media+'-'+state,key=base;
  if(mediaCache[key]){renderMedia(box,mediaCache[key].url,mediaCache[key].ext);return;}
  var i=0;
  (function tryNext(){
    if(i>=MEDIA_EXT.length)return; /* keep placeholder */
    var ext=MEDIA_EXT[i++],url=base+'.'+ext;
    fetch(url,{method:'HEAD'}).then(function(r){
      if(r.ok){mediaCache[key]={url:url,ext:ext};renderMedia(box,url,ext);}
      else tryNext();
    }).catch(tryNext);
  })();
}

/* init */
window.addEventListener('load',function(){
  countUp('c1',114);countUp('c2',74);
  document.querySelectorAll('.chip[data-tool]').forEach(buildChip);
  document.querySelectorAll('.ti[data-tool]').forEach(buildIcon);
  document.querySelectorAll('.media[data-media]').forEach(function(m){loadMedia(m,'after');});
  applyStoredLang();
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)e.target.classList.add('in');});},{threshold:.12});
  document.querySelectorAll('.reveal').forEach(function(e){io.observe(e);});
});
