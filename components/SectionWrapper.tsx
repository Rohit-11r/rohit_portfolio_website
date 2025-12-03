import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface SectionWrapperProps {
  id: string;
  subtitle: string;
  title: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, subtitle, title, children }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id={id} className="py-20 md:py-24 bg-light-bg overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-12">
            <p className={`font-semibold text-accent mb-2 uppercase transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                {subtitle}
            </p>
            <h2 className={`text-3xl md:text-4xl font-bold text-primary-text transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                {title}
            </h2>
            <div className={`mt-4 w-20 h-1 bg-accent mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{transformOrigin: 'center'}}></div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;