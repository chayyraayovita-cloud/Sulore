import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function TourReservations() {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll animations
      gsap.fromTo(leftColRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      gsap.fromTo(rightColRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section tour-reservations-section">
      <div className="reservations-container">
        
        {/* Left Column: Deep Blue */}
        <div ref={leftColRef} className="reservations-left-col">
          {/* White Arrow Icon */}
          <div className="arrow-icon-wrap">
            <svg viewBox="0 0 24 24" className="plane-arrow-svg">
              <path d="M21 3L3 10.5L10.5 13.5L13.5 21L21 3Z" fill="#ffffff" />
            </svg>
          </div>
          
          <div className="reservations-left-title-box">
            <span>PAKET WISATA</span>
            <span>DAN</span>
            <span>RESERVASI</span>
          </div>
          
          <p className="reservations-left-desc">
            Di sini, Sobat dapat memilih paket wisata dan reservasi sesuai dengan kebutuhan suasana hati, budget dan waktu kunjungan.
          </p>
        </div>

        {/* Right Column: Teal */}
        <div ref={rightColRef} className="reservations-right-col">
          {/* Card with Image */}
          <div className="package-banner-card">
            <img 
              src="/hero_cave.jpg" 
              alt="Susur Goa Ngerong" 
              className="package-banner-img"
            />
            <div className="package-banner-overlay"></div>
            <div className="package-banner-text">
              <div className="package-type-label">SUSUR TIPE</div>
              <div className="package-distance-label">2,5 KM</div>
            </div>
          </div>

          {/* Facilities Details */}
          <div className="package-facilities-wrap">
            <h4 className="facilities-title">FASILITAS SELAMA KEGIATAN SUSUR :</h4>
            <p className="facilities-list-text">
              Konsumsi Makan Malam (1x), Layanan Foto, Dokumentasi dan Storytelling, Perahu Karet, Dayung, Pelampung, Helm, Lampu, Tabung Oksigen, Asuransi, serta Pemandu.
            </p>
          </div>

          {/* CTA Orange Button */}
          <div className="package-cta-wrap">
            <button className="btn-reservasi-orange">
              RESERVASI JELAJAHMU SEKARANG
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
