import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Github, ExternalLink } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

const projectsData: Project[] = [
  {
    title: 'Learnify – Django Course Platform',
    description: 'A comprehensive course-selling platform built with Django. Features user authentication, course management, payment integration, and a responsive UI.',
    tags: ['Django', 'Python', 'Stripe API'],
    imageUrl: 'https://raw.githubusercontent.com/rohitp-dev11/Rohit_Profile/main/learnify.png',
    githubUrl: 'https://github.com/Rohit-11r',
    liveUrl: 'https://github.com/Rohit-11r',
  },
  {
    title: 'Data Insights Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets, built using Python with libraries like Pandas and Plotly.',
    tags: ['Python', 'Pandas', 'Plotly', 'Data Viz'],
    imageUrl: 'https://raw.githubusercontent.com/rohitp-dev11/Rohit_Profile/main/data-insight-dashboard.png',
    githubUrl: 'https://github.com/Rohit-11r',
    liveUrl: 'https://github.com/Rohit-11r',
  },
   {
    title: 'Portfolio Website Template',
    description: 'A modern and customizable portfolio template for developers using HTML, CSS, and JS, with a focus on clean design.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX'],
    imageUrl: 'https://raw.githubusercontent.com/rohitp-dev11/Rohit_Profile/main/portfolio-project.png',
    githubUrl: 'https://github.com/Rohit-11r',
    liveUrl: 'https://github.com/Rohit-11r',
  },
];

const ProjectCard: React.FC<{ project: Project; isVisible: boolean; index: number }> = ({ project, isVisible, index }) => {
  return (
    <div 
      className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group border border-gray-100 flex flex-col ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6 text-left flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-primary-text mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 text-sm flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="bg-gray-200 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-md">{tag}</span>
          ))}
        </div>
        <div className="flex items-center space-x-6 mt-auto pt-4 border-t border-gray-200">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-text transition-colors flex items-center space-x-2 font-medium">
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </a>
          )}
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-text transition-colors flex items-center space-x-2 font-medium">
            <Github size={18} />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};


const Projects: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <SectionWrapper id="projects" subtitle="PORTFOLIO" title="Featured Projects">
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} isVisible={isVisible} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;