import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation on scroll
      gsap.fromTo('.about-text-content > *',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      gsap.fromTo(imageRef.current,
        { scale: 0.9, opacity: 0, x: 50 },
        {
          scale: 1,
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about-section" ref={sectionRef} className="section section-bg-deep about-section">
      <div className="container about-grid">
        {/* Left Side: Content */}
        <div ref={textRef} className="about-text-content">
          <div className="pill-header">
            WISATA SUSUR GOA NGERONG
          </div>
          <p className="about-description">
            Petualangan susur air kini hadir di jantung Bumi Wali, menjelajahi eksotisme Goa Ngerong yang telah melegenda. Destinasi ini siap menantang adrenalin Sobat yang ingin suasana berbeda dari wisata "biasa-biasa" saja. Di sepanjang aliran dan gemericik air yang jernih, keindahan batuan alam berpadu sempurna dengan kawanan kelelawar dan berbagai mitos cerita setempat, menjadikan sebuah perjalanan penuh makna di tiap dayungan perahu karet yang maju menjelajahi lebih dalam.
          </p>
          <div className="about-btn-wrap">
            <button className="btn-teal">
              TERTARIK MENCOBA?
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div ref={imageRef} className="about-image-wrapper">
          <img 
            src="/group_cave.jpg" 
            alt="Wisata Goa Ngerong Group" 
            className="about-image" 
          />
        </div>
      </div>
    </section>
  );
}
