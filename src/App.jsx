import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AppShowcase from './components/AppShowcase';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import DownloadCTA from './components/DownloadCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <AppShowcase />
      <HowItWorks />
      <About />
      <Services />
      <Testimonials />
      <DownloadCTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
