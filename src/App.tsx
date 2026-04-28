import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollAnimation } from './hooks/useScrollAnimation';

function App() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
