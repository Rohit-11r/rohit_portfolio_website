
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { GraduationCap } from 'lucide-react';

const educationData = [
    {
        degree: 'BCA (Bachelor of Computer Applications)',
        institution: 'Mar Thoma Institute of Technology',
        period: 'Jul 2024 — Jan 2027 (Expected)',
    }
];

const Education: React.FC = () => {
  return (
    <SectionWrapper id="education" subtitle="MY JOURNEY" title="Education">
        <div className="max-w-2xl mx-auto">
            {educationData.map((edu, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-left flex items-start space-x-6">
                    <div className="bg-accent/10 p-3 rounded-md mt-1">
                      <GraduationCap className="text-accent" size={28} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-primary-text">{edu.degree}</h3>
                        <h4 className="text-lg font-semibold text-gray-700">{edu.institution}</h4>
                        <p className="text-gray-500 font-medium text-sm mt-1">{edu.period}</p>
                    </div>
                </div>
            ))}
        </div>
    </SectionWrapper>
  );
};

export default Education;
