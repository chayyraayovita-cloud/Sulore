import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function EducationEnvironment() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll animations
      gsap.fromTo('.edu-animate-fade',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
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

  const eduItems = [
    {
      id: 1,
      title: 'Edukasi Kualitas Air',
      description: 'Mengajak wisatawan memahami pentingnya menjaga kejernihan sungai dari pencemaran sampah serta mengenali kandungan amonia alami dari kotoran kelelawar (guano).'
    },
    {
      id: 2,
      title: 'Konservasi Berkelanjutan',
      description: 'Edukasi nyata mengenai pentingnya menjaga keseimbangan ekosistem demi menjamin pasokan mata air bersih untuk kehidupan masyarakat Desa Rengel.'
    },
    {
      id: 3,
      title: 'Laboratorium Fauna Alami',
      description: 'Ruang belajar terbuka untuk mengamati langsung segala jenis dan spesies hewan yang hidup di area Goa Ngerong dan sekitarnya.'
    }
  ];

  return (
    <section ref={sectionRef} className="section section-bg-dark education-section">
      <div className="container" ref={containerRef}>
        
        {/* Header */}
        <div className="text-center edu-animate-fade">
          <div className="pill-header">
            EDUCATION AND ENVIRONMENT
          </div>
        </div>

        {/* Top Banner */}
        <div className="edu-banner-teal edu-animate-fade">
          <p>
            Goa Ngerong bukan sekadar tempat rekreasi, melainkan kawasan wisata edukasi dan konservasi lingkungan berbasis komunitas di Kabupaten Tuban. Kami berkomitmen menjaga kelestarian ekosistem sungai bawah tanah melalui perpaduan sains dan kearifan lokal.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="edu-cards-grid">
          {eduItems.map((item) => (
            <div key={item.id} className="edu-card edu-animate-fade">
              <h3 className="edu-card-title">{item.title}</h3>
              <p className="edu-card-desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="edu-banner-teal bottom-banner edu-animate-fade">
          <p>
            Ayo Berkontribusi! Dengan tidak membuang sampah makanan ke sungai dan mematuhi larangan adat, Sobat telah ikut serta menyelamatkan keanekaragaman hayati di Goa Ngerong.
          </p>
        </div>

      </div>
    </section>
  );
}
