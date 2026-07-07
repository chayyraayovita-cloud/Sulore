import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Explore() {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Explore columns entrance animation on scroll
      gsap.fromTo('.explore-column',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
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

  const exploreItems = [
    {
      id: 1,
      title: 'MITOS & LARANGAN',
      image: '/explore_mitos.jpg',
      alt: 'Mitos dan Larangan Goa Ngerong'
    },
    {
      id: 2,
      title: 'PEMANDU LOKAL & STORY',
      image: '/explore_guides.jpg',
      alt: 'Pemandu Lokal dan Story Goa Ngerong'
    },
    {
      id: 3,
      title: 'KATALOG FOLKLORE',
      image: '/explore_folklore.jpg',
      alt: 'Katalog Folklore Goa Ngerong'
    }
  ];

  return (
    <section ref={sectionRef} className="section section-bg-deep explore-section">
      <div className="container">
        <div className="text-center">
          <div className="pill-header">
            WHAT DO YOU WANT TO EXPLORE?
          </div>
          <p className="section-subtitle">
            Untuk mengetahui informasi lebih lanjut mengenai Wisata Susur Goa Ngerong, Sobat dapat memilih <em>flash card</em> yang telah disediakan di bawah ini.
          </p>
        </div>

        <div ref={cardsContainerRef} className="explore-grid">
          {exploreItems.map((item) => (
            <div key={item.id} className="explore-column">
              <h3 className="explore-card-title">{item.title}</h3>
              <div className="explore-image-card">
                <img 
                  src={item.image} 
                  alt={item.alt} 
                  className="explore-image"
                />
                <div className="explore-image-overlay"></div>
              </div>
              <div className="explore-btn-wrap">
                <button className="btn-teal explore-btn">
                  JELAJAHI
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
