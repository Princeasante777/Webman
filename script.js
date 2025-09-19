// Hero background swap
const hero = document.querySelector('.hero-bg');
const images = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1500&q=60',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1500&q=60',
  'https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=1500&q=60',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1500&q=60'
];
let idx = 0;
function swapBg(){ 
  idx = (idx + 1) % images.length; 
  hero.style.backgroundImage = `url('${images[idx]}')`; 
}
swapBg();
setInterval(swapBg, 5000);

// Counter animation
const countEl = document.getElementById('userCount');
let started = false;
function animateCount(){
  if (started) return; started = true;
  const target = 200;
  let current = 0;
  const step = Math.ceil(target / 400);
  const iv = setInterval(()=>{
    current += step;
    if (current >= target) { current = target; clearInterval(iv); }
    countEl.textContent = current + '+';
  }, 25);
}

// Intersection Observer for animations
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if (e.isIntersecting){
      if (e.target.id === 'userCount') animateCount();
      e.target.classList.add('in-view');
    }
  });
}, {threshold: 0.2});

document.querySelectorAll('.fade-up, #userCount').forEach(el=>obs.observe(el));

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if (href.length > 1){ 
      e.preventDefault(); 
      document.querySelector(href).scrollIntoView({behavior:'smooth'}); 
    }
  });
});

// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMobile = document.getElementById('closeMobile');
if(menuBtn){ menuBtn.addEventListener('click', ()=> mobileMenu.classList.remove('hidden')) }
if(closeMobile){ closeMobile.addEventListener('click', ()=> mobileMenu.classList.add('hidden')) }

// Set footer year
document.getElementById('year').textContent = new Date().getFullYear();
