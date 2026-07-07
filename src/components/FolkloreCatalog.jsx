import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function FolkloreCatalog() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance scroll animation
      gsap.fromTo('.folklore-animate',
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

  return (
    <section ref={sectionRef} className="section section-bg-dark folklore-catalog-section">
      <div className="container" ref={containerRef}>
        
        {/* Main Legend Card */}
        <div className="main-folklore-card folklore-animate">
          <div className="main-folklore-header">
            <div className="pill-header">
              KATALOG FOLKLORE
            </div>
            <h2 className="folklore-main-title">LEGENDA KUTUKAN GOA NGERONG</h2>
          </div>
          
          <div className="folklore-split-layout">
            <div className="folklore-story-text">
              <p>
                Alkisah pada zaman dahulu kala, wilayah Rengel dipimpin oleh seorang raja yang sangat sakti mandraguna bernama Raden Arya Bangah dari Kerajaan Gumenggeng. Pada suatu masa, kerajaan tersebut dilanda musibah yang amat hebat berupa kemarau panjang yang tidak kunjung usai selama bertahun-tahun. Hal ini menyebabkan tanah-tanah pertanian retak, tanaman mati, dan seluruh rakyat menderita kelaparan akibat kekeringan parah yang melanda wilayah mereka. Melihat penderitaan rakyatnya yang kian hari kian memrihatinkan, Raden Arya Bangah memutuskan untuk pergi meninggalkan istana demi melakukan laku tirakat dan bertapa di sebuah tempat yang sunyi. Beliau memohon petunjuk serta memohon agar diturunkan sumber air kehidupan kepada para dewa. Berkat keteguhan hatinya, doa sang raja akhirnya dikabulkan. Melalui tusukan pusakanya atau galian kecil di tanah tempatnya bertapa, memancarlah mata air yang sangat deras, yang lambat laun membentuk sebuah lubang besar di dalam tanah yang kini kita kenal sebagai Goa Ngerong.
              </p>
              <p>
                Mata air baru tersebut membawa berkah yang luar biasa bagi seluruh kerajaan. Aliran sungainya mengalir dengan sangat jernih dan tiada henti mengairi sawah-sawah penduduk hingga mengembalikan kemakmuran di sana. Keindahan dan kesucian sumber air baru ini ternyata memikat makhluk-makhluk dari khayangan, hingga konon sekelompok bidadari cantik turun ke bumi untuk mandi dan bercengkerama di dalam ketenangan aliran sungai bawah tanah goa tersebut. Untuk menjaga keamanan para bidadari sekaligus melindungi kesucian tempat bertapa sang raja, Raden Arya Bangah kemudian mengutus para Senopati dan prajurit pilihan dari Kerajaan Gumenggeng untuk berjaga dengan ketat di sekitar mulut goa. Diorama patung yang ada di dalam goa menggambarkan momen krusial ini, di mana sosok tetua atau pemimpin suci sedang memberikan amanat berupa aturan adat yang sangat ketat yang harus dipatuhi oleh para penjaga. <span className="read-more">Baca Selengkapnya...</span>
              </p>
            </div>
            
            <div className="folklore-image-wrapper">
              <img 
                src="/explore_folklore.jpg" 
                alt="Patung Diorama Goa Ngerong" 
                className="folklore-main-img"
              />
            </div>
          </div>
        </div>

        {/* Folklore Grid */}
        <div className="folklore-category-section">
          <div className="text-center folklore-animate">
            <div className="pill-header">
              KATALOG FOLKLORE
            </div>
          </div>

          <div className="folklore-cards-grid">
            <div className="folklore-card folklore-animate">
              <span className="folklore-card-name">FOLKLOR 1</span>
            </div>
            <div className="folklore-card folklore-animate">
              <span className="folklore-card-name">FOLKLOR 2</span>
            </div>
            <div className="folklore-card folklore-animate">
              <span className="folklore-card-name">FOLKLOR 3</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
