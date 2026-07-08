/* ── LENIS SMOOTH SCROLL & GSAP INITIALIZATION ── */
let lenis;

function initSmoothScroll() {
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    // Hook Lenis up to GSAP ScrollTrigger
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time)=>{
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    } else {
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  }
}

/* ── SMOOTH SCROLL TO ANCHOR ── */
function scrollToSection(id) {
  if (lenis) {
    const el = document.getElementById(id);
    if (el) {
      lenis.scrollTo(el, {
        offset: 0,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    }
  } else {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/* ── DYNAMIC DATE (Bahasa Indonesia) ── */
function renderDate() {
  const days   = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
  const months = ['Januari','Februari','Maret','April','Mei','Juni','Juli',
                  'Agustus','September','Oktober','November','Desember'];
  const now    = new Date();
  const str    = `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
  const el     = document.getElementById('realtime-date');
  if (el) el.textContent = str;
}

/* ── FAQ ACCORDION ── */
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-answer');
    if (!q || !a) return;

    q.addEventListener('click', () => {
      const isOpen = a.classList.contains('open');

      // Close all others
      document.querySelectorAll('.faq-answer').forEach(ans => ans.classList.remove('open'));
      document.querySelectorAll('.faq-item').forEach(it => it.classList.remove('active'));

      // Toggle current
      if (!isOpen) {
        a.classList.add('open');
        item.classList.add('active');
      }
      
      // Update Lenis scroll layout
      if (lenis) {
        setTimeout(() => {
          lenis.resize();
        }, 300);
      }
    });
  });
}

/* ── IMAGE ERROR FALLBACK ── */
function initImgFallbacks() {
  document.querySelectorAll('img[data-fallback-bg]').forEach(img => {
    img.addEventListener('error', function () {
      const bg = this.getAttribute('data-fallback-bg') || 'linear-gradient(135deg,#1a2a4a,#2d5070)';
      this.style.background = bg;
      this.style.minHeight  = this.style.height || '200px';
      // hide broken icon
      this.setAttribute('alt','');
      this.style.color = 'transparent';
    });
  });
}

/* ── GSAP HERO ANIMATIONS ── */
function initHeroAnimations() {
  if (typeof gsap !== 'undefined') {
    // Reveal Hero elements on load
    gsap.from('.hero-supertitle', { opacity: 0, y: -20, duration: 0.8, ease: 'power2.out' });
    gsap.from('.hero-title', { opacity: 0, scale: 0.9, duration: 1, delay: 0.2, ease: 'power3.out' });
    gsap.from('.hero-tagline', { opacity: 0, y: 20, duration: 0.8, delay: 0.4, ease: 'power2.out' });
    gsap.from('#btn-jelajahi-hero', { opacity: 0, y: 30, duration: 0.8, delay: 0.6, ease: 'back.out(1.7)' });
    gsap.from('.logo-strip', { opacity: 0, y: -30, duration: 1, delay: 0.5, ease: 'power3.out' });
  }
}

/* ── DYNAMIC INTERSECTION OBSERVER SCROLL REVEAL ── */
function initScrollReveal() {
  const revealTargets = [
    '.intro-text', '.intro-img',
    '.why-title-wrap', '#why-choose .feature-card',
    '#more-features .feature-card',
    '.signage-img',
    '.reviews-top', '.review-card',
    '.realtime-title', '.realtime-date-pill', '.realtime-desc', '.rt-card',
    '.hub-heading', '.hub-sub', '.hub-card-wrap',
    '.paket-title-wrap', '.paket-img-wrap', '.paket-info',
    '.galeri-heading', '.gm-img', '.gg-img',
    '#edukasi .section-title', '.edukasi-intro', '.edu-card',
    '.hewan-header-row', '.hewan-header-sub', '.hewan-grid-6', '.hewan-grid-3', '.hewan-grid-fish',
    '#faq .section-title', '.faq-subtitle', '.faq-item',
    '.footer-grid'
  ];

  // Tambahkan class .reveal-element secara dinamis agar progressive enhancement tetap jalan (aman jika JS mati/error)
  revealTargets.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.classList.add('reveal-element');
    });
  });

  // Opsi deteksi viewport
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px', // Aktif sedikit sebelum elemen masuk penuh ke layar
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, self) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        self.unobserve(entry.target); // Cukup satu kali trigger agar performa stabil
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-element').forEach(el => {
    observer.observe(el);
  });
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initHeroAnimations();
  initScrollReveal();
  renderDate();
  initFAQ();
  initImgFallbacks();
});



