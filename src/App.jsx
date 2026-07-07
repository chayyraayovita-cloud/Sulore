import SmoothScroll from './components/SmoothScroll';
import Hero from './components/Hero';
import About from './components/About';
import Testimonials from './components/Testimonials';
import RealTimeInfo from './components/RealTimeInfo';
import Explore from './components/Explore';
import MitosLarangan from './components/MitosLarangan';
import LocalGuides from './components/LocalGuides';
import FolkloreCatalog from './components/FolkloreCatalog';
import TourReservations from './components/TourReservations';
import EducationEnvironment from './components/EducationEnvironment';

export default function App() {
  return (
    <SmoothScroll>
      <div className="app-wrapper">
        <Hero />
        <About />
        <Testimonials />
        <RealTimeInfo />
        <Explore />
        <MitosLarangan />
        <LocalGuides />
        <FolkloreCatalog />
        <TourReservations />
        <EducationEnvironment />
        
        {/* Simple Footer */}
        <footer className="footer-section">
          <div className="container footer-content">
            <div className="footer-brand">
              <span className="footer-brand-title">SULORE</span>
              <span className="footer-brand-desc">Goa Ngerong River Tubing Adventure</span>
            </div>
            <div className="footer-divider"></div>
            <div className="footer-meta">
              <p>© {new Date().getFullYear()} Desa Rengel - Tuban, Jawa Timur. All rights reserved.</p>
              <p className="footer-credits">Built with React, GSAP, and Lenis.</p>
            </div>
          </div>
        </footer>
      </div>
    </SmoothScroll>
  );
}
