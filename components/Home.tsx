
import React from 'react';
import { Play, Github, Linkedin } from 'lucide-react';

const SketchyLineSeparator: React.FC = () => (
    <svg 
        width="150" 
        height="15" 
        viewBox="0 0 150 15" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path 
            d="M2 7.5C17.8333 2.16667 41.5 -3.8 55.5 7.5C69.5 18.8 90.5 11.1667 104 7.5C117.5 3.83333 135.833 9.16667 148 12" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
        />
    </svg>
);


const Home: React.FC = () => {
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    if (!href || !href.startsWith('#')) return;

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        const headerOffset = 100; // Account for fixed header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center bg-white pt-48 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <p className="text-accent font-bold mb-2 uppercase">Hello there!</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-primary-text leading-tight">
              I'm Rohit P,
            </h1>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary-text mt-1">
              Code & Concept Developer
            </h2>
            
            <p className="mt-6 text-gray-600 max-w-lg mx-auto lg:mx-0">
              A pragmatic developer who tells stories with code. I'm a 2nd-year BCA student passionate about building clear, usable web products and exploring new technologies. As a 'Code & Concept Developer', I blend curiosity and experimentation to deliver value.
            </p>
            
            <div className="mt-8 flex justify-center lg:justify-start items-center space-x-4">
              <a href="#projects" onClick={handleLinkClick} className="bg-accent text-primary-text font-bold py-3 px-6 rounded-full hover:bg-amber-500 transition-all shadow-lg flex items-center space-x-2">
                <Play size={20} />
                <span>View My Work</span>
              </a>
              <a href="#contact" onClick={handleLinkClick} className="border-2 border-primary-text text-primary-text font-bold py-3 px-6 rounded-full hover:bg-primary-text hover:text-white transition-all shadow-lg flex items-center space-x-2">
                <span>Hire Me</span>
              </a>
            </div>
            <div className="mt-8 flex justify-center lg:justify-start space-x-6">
                <a href="https://github.com/Rohit-11r" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-transform hover:scale-110">
                    <Github size={28} />
                </a>
                <a href="https://linkedin.com/in/rohit-p-603170310" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-transform hover:scale-110">
                    <Linkedin size={28} />
                </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:col-span-2 relative flex justify-center items-center order-first lg:order-last">
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
                {/* Animated sketchy outline */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%+30px)] h-[calc(100%+30px)] md:w-[calc(100%+40px)] md:h-[calc(100%+40px)] text-accent">
                    <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <path
                            d="M 250 80 A 120 120 0 1 1 80 250"
                            stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="animate-rotate-sketch-1"
                        />
                        <path
                            d="M 50 220 A 120 120 0 1 1 220 50"
                            stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="animate-rotate-sketch-2"
                        />
                    </svg>
                </div>
                {/* Profile image */}
                <img
                    src="https://raw.githubusercontent.com/rohitp-dev11/Rohit_Profile/main/WhatsApp%20Image%202025-10-13%20at%2022%2C09%2C09_0442d02e-photoaidcom-cropped.jpg"
                    alt="Rohit P"
                    className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-2xl"
                />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4 text-center">
          <div className="inline-block text-accent">
            <SketchyLineSeparator />
          </div>
      </div>
    </section>
  );
};

export default Home;