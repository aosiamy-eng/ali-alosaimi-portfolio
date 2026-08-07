const langBtn=document.getElementById('langToggle');
const html=document.documentElement;
let lang='ar';
function setLanguage(next){lang=next;const isAr=lang==='ar';html.lang=lang;html.dir=isAr?'rtl':'ltr';document.body.classList.toggle('en',!isAr);document.querySelectorAll('[data-ar][data-en]').forEach(el=>{el.textContent=isAr?el.dataset.ar:el.dataset.en});langBtn.textContent=isAr?'EN':'AR';localStorage.setItem('aliLang',lang)}
langBtn.addEventListener('click',()=>setLanguage(lang==='ar'?'en':'ar'));
const saved=localStorage.getItem('aliLang');if(saved==='en')setLanguage('en');
document.getElementById('year').textContent=new Date().getFullYear();
const menu=document.querySelector('.nav-links'),toggle=document.querySelector('.menu-toggle');toggle.addEventListener('click',()=>{menu.classList.toggle('open');toggle.setAttribute('aria-expanded',menu.classList.contains('open'))});document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
