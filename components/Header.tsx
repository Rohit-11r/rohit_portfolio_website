import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#services', label: 'Services' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const handleScroll = () => {
    let current = '#home';
    const sections = navLinks.map(link => document.querySelector(link.href) as HTMLElement).filter(s => s);
    const headerOffset = 150; // Offset to trigger active state earlier

    for (const section of sections) {
        const sectionTop = section.offsetTop - headerOffset;
        if (window.scrollY >= sectionTop) {
            current = `#${section.id}`;
        }
    }
    setActiveLink(current);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on mount to set initial active link
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
      setIsOpen(false);
  }

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    if (!href || !href.startsWith('#')) return;

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        const headerOffset = 100; // Account for fixed header (h-24 is 96px)
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        setActiveLink(href);
        if (isOpen) {
          closeMenu();
        }
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full pt-4 z-50 px-4">
        <header className={`w-full max-w-7xl mx-auto transition-all duration-300 bg-header-bg/80 backdrop-blur-md shadow-lg ${isOpen ? 'rounded-3xl' : 'rounded-full'}`}>
            <div className="flex items-center justify-between h-16 sm:h-20 px-4 sm:px-8">
            {/* Logo */}
            <a href="#home" onClick={handleLinkClick} className="flex items-center space-x-3">
                <div className="bg-accent h-10 w-10 rounded-full flex items-center justify-center text-primary-text font-bold text-2xl">R</div>
                <span className="text-xl font-bold text-white">Rohit P.</span>
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
                {navLinks.map((link) => (
                <a 
                    key={link.href} 
                    href={link.href} 
                    className={`px-4 py-2 text-sm font-medium transition-colors relative ${activeLink === link.href ? 'text-accent' : 'text-gray-300 hover:text-white'}`}
                    onClick={handleLinkClick}
                >
                    {link.label}
                    {activeLink === link.href && (
                        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-6 h-0.5 bg-accent rounded-full"></span>
                    )}
                </a>
                ))}
            </nav>

            {/* Contact Button */}
            <a href="#contact" onClick={handleLinkClick} className="hidden lg:block bg-white text-primary-text font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition-all shadow-sm border border-gray-300">
                Contact Me
            </a>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
            </div>

            {/* Mobile Menu Content */}
            <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="flex flex-col items-center space-y-2 px-4 pb-6 pt-2 border-t border-gray-700">
                    {navLinks.map((link) => (
                        <a 
                            key={link.href} 
                            href={link.href} 
                            onClick={handleLinkClick} 
                            className={`block w-full text-center py-2 rounded-md ${activeLink === link.href ? 'text-accent' : 'text-gray-300'} `}>
                            {link.label}
                        </a>
                    ))}
                    <a 
                        href="#contact" 
                        onClick={handleLinkClick} 
                        className="mt-4 bg-white text-primary-text font-semibold py-2 px-6 rounded-full w-auto">
                        Contact Me
                    </a>
                </div>
            </div>
        </header>
    </div>
  );
};

export default Header;