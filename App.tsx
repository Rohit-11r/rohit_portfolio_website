import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Typewriter from './components/Typewriter';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import Preloader from './components/Preloader';
import CursorSparkle from './components/CursorSparkle';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Preloader duration

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="bg-light-bg min-h-screen">
      <CursorSparkle />
      <Header />
      <main>
        <Home />
        <About />
        <Education />
        <Experience />
        <Services />
        <Skills />
        <Projects />
        <Typewriter />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;