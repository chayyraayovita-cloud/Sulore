import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


export default function Hero() {
  const heroRef = useRef(null);
  const logoPillRef = useRef(null);
  const welcomeRef = useRef(null);
  const titleRef = useRef(null);
  const infoRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // GSAP Entrance Animations
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(logoPillRef.current, 
      { y: -50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, delay: 0.2 }
    );

    tl.fromTo([welcomeRef.current, titleRef.current, infoRef.current],
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2 },
      '-=0.6'
    );

    tl.fromTo(buttonRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' },
      '-=0.4'
    );

    // Parallax background scroll effect
    gsap.to('.hero-bg', {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      },
      yPercent: 30,
      ease: 'none'
    });
  }, []);

  const handleScrollToNext = () => {
    const nextSection = document.getElementById('about-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className="hero-section">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>

      <div className="hero-content container">
        {/* Header Logo Pill */}
        <div ref={logoPillRef} className="header-logo-pill">
          {/* Logo 1: Desa Rengel */}
          <div className="logo-item">
            <svg viewBox="0 0 24 24" className="logo-pin-svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <div className="logo-text text-rengel">
              <span className="logo-title">DESA</span>
              <span className="logo-subtitle">RENGEL</span>
            </div>
          </div>

          <div className="divider"></div>

          {/* Logo 2: Tuban Regency Shield */}
          <div className="logo-item text-center">
            <svg viewBox="0 0 60 70" className="logo-shield-svg">
              <path d="M5 5 C 15 5, 25 2, 30 10 C 35 2, 45 5, 55 5 C 55 25, 55 45, 30 65 C 5 45, 5 25, 5 5 Z" fill="#0d2869" stroke="#ffb000" strokeWidth="2" />
              <path d="M30 10 L30 60" stroke="#ffb000" strokeWidth="1" strokeDasharray="2,2" />
              {/* Star inside shield */}
              <polygon points="30,18 33,25 40,25 35,30 37,37 30,33 23,37 25,30 20,25 27,25" fill="#ffb000" />
              {/* Center shield crest */}
              <path d="M22 35 C22 45, 38 45, 38 35 Z" fill="#0a884a" />
              <circle cx="30" cy="38" r="4" fill="#ff8e03" />
            </svg>
          </div>

          <div className="divider"></div>

          {/* Logo 3: Ayo Ning Tuban */}
          <div className="logo-item">
            <div className="ayo-ning-tuban">
              <span className="logo-ayo">ayo ning</span>
              <span className="logo-tuban">tuban</span>
              <div className="logo-sun-wave">
                <svg viewBox="0 0 30 30" className="logo-wave-svg">
                  <circle cx="15" cy="10" r="6" fill="#ff8e03" />
                  <path d="M2 18 Q 8 14, 15 18 T 28 18" fill="none" stroke="#007e85" strokeWidth="3" strokeLinecap="round" />
                  <path d="M2 23 Q 8 19, 15 23 T 28 23" fill="none" stroke="#2b5ba3" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>

          <div className="divider"></div>

          {/* Logo 4: Bat Logo (Sulore) */}
          <div className="logo-item">
            <div className="logo-sulore-bat">
              <svg viewBox="0 0 50 30" className="logo-bat-svg">
                {/* Bat wings */}
                <path d="M 25 12 C 22 5, 15 2, 5 8 C 8 13, 14 15, 18 13 C 15 17, 10 20, 2 18 C 10 24, 20 20, 25 15 C 30 20, 40 24, 48 18 C 40 20, 35 17, 32 13 C 36 15, 42 13, 45 8 C 35 2, 28 5, 25 12 Z" fill="#1b3aa6" />
                {/* Bat body */}
                <path d="M 25 5 L 23 9 L 27 9 Z" fill="#ff8e03" />
                <ellipse cx="25" cy="11" rx="2.5" ry="4" fill="#1b3aa6" />
              </svg>
              <span className="bat-text">SULORE</span>
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <h3 ref={welcomeRef} className="hero-welcome">
          WELCOME TO OUR WEBSITE
        </h3>

        {/* Large Title */}
        <h1 ref={titleRef} className="hero-title">
          SULORE
        </h1>

        {/* Tagline / Subtitle */}
        <p ref={infoRef} className="hero-subtitle-list">
          • TRAVEL INFORMATION • DESIGN INTERACTIVE • FOLKLORE EDUCATION
        </p>

        {/* Button */}
        <div ref={buttonRef} className="hero-btn-container">
          <button onClick={handleScrollToNext} className="btn-teal hero-cta">
            Jelajahi Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}
