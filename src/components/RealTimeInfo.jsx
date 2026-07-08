import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function RealTimeInfo() {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card entrance animation on scroll
      gsap.fromTo('.info-card-wrapper',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const infoItems = [
    {
      id: 1,
      title: 'Kejernihan Air',
      status: 'Jernih',
      description: 'Sobat dapat menikmati pemandangan aliran sungai dengan jelas tanpa terhalang keruh (air berwarna kecoklatan).',
      icon: (
        <svg viewBox="0 0 100 60" className="info-icon-svg">
          {/* Water puddle/ripples */}
          <ellipse cx="50" cy="30" rx="35" ry="12" fill="#c3ebff" opacity="0.7"/>
          <ellipse cx="50" cy="30" rx="25" ry="8" fill="none" stroke="#25b6e6" strokeWidth="2"/>
          <ellipse cx="50" cy="30" rx="15" ry="5" fill="none" stroke="#0e83b3" strokeWidth="1.5"/>
          <path d="M 50 12 C 50 12, 48 20, 50 22 C 52 20, 50 12, 50 12 Z" fill="#25b6e6" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Kederasan Arus',
      status: 'Cukup deras',
      description: 'Permukaan air beriam, aliran mengalir cukup deras. Sobat diharap waspada dan berhati-hati.',
      icon: (
        <svg viewBox="0 0 100 60" className="info-icon-svg">
          {/* Flowing river curves */}
          <path d="M 10 20 Q 25 10, 45 25 T 90 20" fill="none" stroke="#257ae6" strokeWidth="4" strokeLinecap="round" />
          <path d="M 10 32 Q 30 22, 50 37 T 90 32" fill="none" stroke="#1057b5" strokeWidth="4" strokeLinecap="round" />
          <path d="M 10 44 Q 25 34, 45 49 T 90 44" fill="none" stroke="#2c99db" strokeWidth="3" strokeLinecap="round" strokeDasharray="6,4" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Waktu Terbaik Kunjungan',
      status: 'Musim Kemarau',
      description: 'Musim kemarau mempengaruhi status kejernihan air dan kederasan arus yang stabil, Sobat dapat menikmati pengalaman berwisata yang memukau.',
      icon: (
        <svg viewBox="0 0 100 60" className="info-icon-svg">
          {/* Yellow crescent moon */}
          <path d="M 60 12 A 20 20 0 1 0 60 52 A 15 15 0 1 1 60 12 Z" fill="#ffd000" filter="drop-shadow(0 0 4px rgba(255,208,0,0.5))"/>
          {/* Tiny stars */}
          <polygon points="25,15 27,20 32,20 28,23 30,28 25,25 20,28 22,23 18,20 23,20" fill="#ffffff" opacity="0.8"/>
          <polygon points="35,42 36,44 39,44 37,46 38,49 35,47 32,49 33,46 31,44 34,44" fill="#ffffff" opacity="0.6"/>
        </svg>
      )
    },
    {
      id: 4,
      title: 'Kuota Kunjungan Peserta',
      status: 'Masih Tersedia',
      description: 'Sisa kuota hari ini : 5 peserta/perahu (kuota maksimal 7 peserta/perahu).',
      icon: (
        <svg viewBox="0 0 100 60" className="info-icon-svg">
          {/* Yellow/Orange Raft with paddles */}
          <path d="M 20 35 L 80 35 C 85 35, 87 25, 80 25 L 20 25 C 13 25, 15 35, 20 35 Z" fill="#ffa200" stroke="#cc7a00" strokeWidth="2"/>
          {/* Inner ring */}
          <path d="M 25 32 L 75 32" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
          {/* People silhouettes */}
          <circle cx="40" cy="18" r="4" fill="#333"/>
          <path d="M 37 25 L 43 25 L 45 32 L 35 32 Z" fill="#333"/>
          <circle cx="60" cy="18" r="4" fill="#333"/>
          <path d="M 57 25 L 63 25 L 65 32 L 55 32 Z" fill="#333"/>
          {/* Paddles */}
          <line x1="32" y1="20" x2="22" y2="42" stroke="#8c5000" strokeWidth="2" strokeLinecap="round"/>
          <polygon points="20,40 24,44 20,46" fill="#8c5000"/>
          <line x1="68" y1="20" x2="78" y2="42" stroke="#8c5000" strokeWidth="2" strokeLinecap="round"/>
          <polygon points="76,40 80,44 80,46" fill="#8c5000"/>
        </svg>
      )
    }
  ];

  return (
    <section ref={sectionRef} className="section section-bg-dark real-time-section">
      <div className="container">
        <div className="text-center">
          <h2 className="real-time-title">REAL TIME NGERONG INFORMATION</h2>
          <div className="date-pill">
            Sabtu, 20 Juni 2026
          </div>
          <p className="real-time-desc">
            Fitur ini memudahkan Sobat untuk mendapatkan informasi mengenai keadaan alam serta kegiatan Wisata Susur Goa Ngerong sebelum berkunjung yang terus diaudit oleh pengelola secara transparan, fakta dan teraktual.
          </p>
        </div>

        <div ref={cardsContainerRef} className="info-cards-grid">
          {infoItems.map((item) => (
            <div key={item.id} className="info-card-wrapper">
              <div className="info-card">
                <div className="info-icon-container">
                  {item.icon}
                </div>
                <h3 className="info-card-title">{item.title}</h3>
                <div className="info-status-label">Status :</div>
                <div className="info-status-value">{item.status}</div>
              </div>
              <p className="info-card-desc">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
