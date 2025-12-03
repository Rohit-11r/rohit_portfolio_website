import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Code, Edit, Monitor, DatabaseZap } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

const servicesData: Service[] = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Creating robust back-ends and dynamic web applications with Python & Django.',
  },
  {
    icon: Monitor,
    title: 'Portfolio Websites',
    description: 'Building beautiful, responsive, and professional portfolio websites to showcase your work.',
  },
  {
    icon: Edit,
    title: 'Technical Writing',
    description: 'Crafting clear, concise, and effective technical documentation and content.',
  },
  {
    icon: DatabaseZap,
    title: 'Data Prototyping',
    description: 'Developing initial models and prototypes to explore data and validate concepts quickly.',
  }
];

const ServiceCard: React.FC<{ service: Service; isVisible: boolean; index: number }> = ({ service, isVisible, index }) => {
    const Icon = service.icon;
    return (
        <div 
          className={`bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-left border border-gray-100 transform hover:-translate-y-2 flex flex-col ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: `${index * 150}ms` }}
        >
            <div className="mb-4">
                <div className="bg-accent/10 p-3 rounded-md inline-block">
                    <Icon className="text-accent" size={28} />
                </div>
            </div>
            <h3 className="text-xl font-semibold text-primary-text mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
            <a href="https://linkedin.com/in/rohit-p-603170310" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-text hover:text-accent transition-colors mt-auto">Learn more →</a>
        </div>
    );
};


const Services: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <SectionWrapper id="services" subtitle="SERVICES" title="Services I Provide">
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} isVisible={isVisible} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Services;