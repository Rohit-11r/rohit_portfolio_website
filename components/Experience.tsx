
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Briefcase } from 'lucide-react';

const experienceData = [
    {
        role: 'Python Development Intern',
        company: 'Cognifyz Technologies',
        period: 'Oct 2025 – Nov 2025',
        description: 'Gained hands-on experience in Python development, contributing to live projects and learning industry best practices in a collaborative team environment.'
    }
];

const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience" subtitle="PROFESSIONAL PATH" title="Internship Experience">
        <div className="max-w-2xl mx-auto">
            {experienceData.map((exp, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-left flex items-start space-x-6">
                    <div className="bg-accent/10 p-3 rounded-md mt-1">
                      <Briefcase className="text-accent" size={28} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-primary-text">{exp.role}</h3>
                        <h4 className="text-lg font-semibold text-gray-700">{exp.company}</h4>
                        <p className="text-gray-500 font-medium text-sm mt-1">{exp.period}</p>
                        <p className="text-gray-600 mt-2">{exp.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </SectionWrapper>
  );
};

export default Experience;
