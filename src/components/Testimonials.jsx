import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef(null);
  const cardContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered card entrance on scroll
      gsap.fromTo('.testimonial-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardContainerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const reviews = [
    {
      id: 1,
      name: 'Miguel Rivera',
      text: "Petualangan susur Goa Ngerong sangat luar biasa! Airnya begitu jernih dan kami bisa melihat ikan-ikan berenang langsung di bawah perahu karet. Pemandu lokal sangat membantu dan profesional.",
      stars: 5
    },
    {
      id: 2,
      name: 'Larissa Charter',
      text: "Menyusuri air di dalam goa merupakan pengalaman yang menantang adrenalin sekaligus menenangkan. Formasi stalaktitnya indah sekali. Sangat direkomendasikan untuk dikunjungi!",
      stars: 5
    },
    {
      id: 3,
      name: 'Carey Larson',
      text: "Tempat wisata yang penuh edukasi cerita rakyat dan keindahan alam yang masih sangat asri. Pengalaman menyusuri goa dengan ban karet ini tidak akan pernah terlupakan.",
      stars: 5
    }
  ];

  return (
    <section ref={sectionRef} className="section testimonials-section">
      <div className="testimonials-bg"></div>
      <div className="testimonials-overlay"></div>

      <div className="container testimonials-content">
        <div className="text-center">
          <div className="pill-header-blue">
            INI KATA MEREKA TENTANG GOA NGERONG
          </div>
        </div>

        <div ref={cardContainerRef} className="testimonials-grid">
          {reviews.map((review) => (
            <div key={review.id} className="testimonial-card">
              <div className="stars">
                {Array.from({ length: review.stars }).map((_, i) => (
                  <span key={i} className="star-icon">★</span>
                ))}
              </div>
              <p className="testimonial-text">
                "{review.text}"
              </p>
              <h4 className="testimonial-name">
                {review.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
