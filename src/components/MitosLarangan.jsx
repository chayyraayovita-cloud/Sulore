import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function MitosLarangan() {
  const sectionRef = useRef(null);
  const mythBoxRef = useRef(null);
  const rulesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll animations
      gsap.fromTo('.myth-animate',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: mythBoxRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      gsap.fromTo('.rule-animate',
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: rulesRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section section-bg-dark mitos-larangan-section">
      <div className="container">
        
        {/* Myths Layout: Image and Teal Box */}
        <div ref={mythBoxRef} className="myth-container">
          <div className="myth-image-wrap myth-animate">
            <img 
              src="/explore_mitos.jpg" 
              alt="Kolam Ikan Ngerong" 
              className="myth-image"
            />
          </div>
          
          <div className="myth-text-box myth-animate">
            <div className="pill-header">
              MITOS DAN LARANGAN
            </div>
            <p className="myth-paragraph">
              Terdapat beberapa <span className="highlight-orange">mitos</span> yang tumbuh beriringan dengan sejarah Goa Ngerong. Di antaranya adalah Kutukan Senopati dan Bidadari, Mitos Bulus Putih Raksasa, Asal-usul Sumber Air Raden Arya, Tempat Menghilangnya Mbah Kumbang Jaya, hingga Tradisi Manganan Ngerong. Keberadaan mitos-mitos ini telah menjadi bagian dari daya tarik budaya dan kearifan lokal Kabupaten Tuban. Sobat dapat membaca kisah lengkapnya di Katalog Folklore yang telah disediakan!
            </p>
          </div>
        </div>

        {/* Traditional Rules List */}
        <div ref={rulesRef} className="rules-container">
          <p className="rules-heading rule-animate">
            <span className="highlight-orange">Larangan atau pantangan adat</span> berfungsi sebagai pembatas antara perilaku manusia dan aktivitas alam agar keseimbangan ekosistem dan moral tetap terjaga. Berikut hal-hal yang wajib Sobat patuhi saat berkunjung ke area Wisata Susur Goa Ngerong :
          </p>
          
          <ul className="rules-list">
            <li className="rule-animate">
              Dilarang menangkap atau membawa pulang hewan apa pun yang ada di area Wisata Susur Goa Ngerong.
            </li>
            <li className="rule-animate">
              Dilarang mengonsumsi ikan yang ada di sungai. Hal ini disebabkan karena ikan-ikan tersebut hidup dengan memakan kotoran kelelawar, sehingga kandungan amonia alaminya sangat tinggi dan berbahaya bagi kesehatan.
            </li>
            <li className="rule-animate">
              Dilarang keras berkata kotor, berteriak tidak sopan, atau melakukan tindakan asusila di dalam dan sekitar area goa.
            </li>
            <li className="rule-animate">
              Dilarang membuang sampah atau sisa makanan ke dalam sungai dan area wisata demi menjaga kualitas air serta kelestarian habitat satwa.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
