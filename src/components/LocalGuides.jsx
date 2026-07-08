import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function LocalGuides() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance scroll animation
      gsap.fromTo('.guide-card-animate',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const guides = [
    {
      id: 1,
      name: 'SUGENG',
      role: 'PEMANDU PROFESIONAL',
      gradStart: '#0d2869',
      gradEnd: '#0c7e85',
      helmetColor: '#ff8e03',
      vestColor: '#e53e3e',
      faceTone: '#fbd38d'
    },
    {
      id: 2,
      name: 'ARYA BASKORO',
      role: 'PEMANDU PROFESIONAL',
      gradStart: '#1a3c40',
      gradEnd: '#417d7a',
      helmetColor: '#e53e3e',
      vestColor: '#2b6cb0',
      faceTone: '#edcfa9'
    },
    {
      id: 3,
      name: 'MAHENDRA',
      role: 'PEMANDU PROFESIONAL',
      gradStart: '#2d3748',
      gradEnd: '#718096',
      helmetColor: '#0c7e85',
      vestColor: '#ff8e03',
      faceTone: '#fbd38d'
    }
  ];

  return (
    <section ref={sectionRef} className="section section-bg-deep local-guides-section">
      <div className="container" ref={containerRef}>
        <div className="text-center guide-card-animate">
          <div className="pill-header">
            LOCAL GUIDE AND STORY
          </div>
          <p className="guide-intro">
            Wisata Susur Goa Ngerong sepenuhnya dikelola oleh masyarakat Desa Rengel, Tuban, yang terdiri dari pengelola resmi Wisata Goa Ngerong dan didukung penuh oleh komunitas pemuda setempat.
          </p>
          <p className="guide-subtext">
            Setiap langkah petualangan Sobat di dalam goa tidak hanya dijamin oleh standar keselamatan dan kesehatan yang ketat, tetapi juga didukung oleh pendampingan yang profesional, manajemen perjalanan dan acara yang terstruktur, serta kekayaan pengetahuan kearifan lokal (cerita rakyat dan mitos) yang dijaga turun-temurun. Sepanjang perjalanan, Sobat akan mendapatkan informasi cerita rakyat secara langsung dari masing-masing pemandu perahu melalui sesi diskusi yang interaktif.
          </p>
        </div>

        {/* Guides Profiles Grid */}
        <div className="guides-grid">
          {guides.map((guide) => (
            <div key={guide.id} className="guide-card-wrap guide-card-animate">
              <div className="guide-profile-card">
                {/* Custom Vector Guide Avatar */}
                <div className="guide-avatar-container">
                  <svg viewBox="0 0 100 100" className="guide-avatar-svg">
                    <defs>
                      <linearGradient id={`grad-guide-${guide.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={guide.gradStart} />
                        <stop offset="100%" stopColor={guide.gradEnd} />
                      </linearGradient>
                    </defs>
                    <circle cx="50" cy="50" r="48" fill={`url(#grad-guide-${guide.id})`} stroke="#ffb000" strokeWidth="2.5" />
                    
                    {/* Head / Face */}
                    <circle cx="50" cy="48" r="15" fill={guide.faceTone} />
                    
                    {/* Safety Helmet */}
                    <path d="M33 43 C33 22, 67 22, 67 43 Z" fill={guide.helmetColor} />
                    <rect x="42" y="24" width="16" height="5" fill="#4a5568" rx="2" />
                    
                    {/* Headlamp */}
                    <polygon points="50,26 22,80 78,80" fill="#ffd000" opacity="0.18" />
                    <circle cx="50" cy="26" r="4" fill="#ffffff" filter="drop-shadow(0 0 4px #ffd000)" />
                    
                    {/* Body / Jacket */}
                    <path d="M22 83 C22 66, 32 61, 50 61 C 68 61, 78 66, 78 83 Z" fill={guide.vestColor} />
                    {/* Reflective straps */}
                    <line x1="38" y1="61" x2="38" y2="83" stroke="#ffffff" strokeWidth="3" opacity="0.9" />
                    <line x1="62" y1="61" x2="62" y2="83" stroke="#ffffff" strokeWidth="3" opacity="0.9" />
                    <line x1="38" y1="70" x2="62" y2="70" stroke="#ffffff" strokeWidth="2" opacity="0.9" />
                  </svg>
                </div>

                {/* Profile Pill Details */}
                <div className="guide-pill-details">
                  <div className="guide-name">{guide.name}</div>
                  <div className="guide-separator">--</div>
                  <div className="guide-role">{guide.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
