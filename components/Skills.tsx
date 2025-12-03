
import React, { useState, useEffect, useRef } from 'react';
import SectionWrapper from './SectionWrapper';

interface Skill {
  name: string;
  percentage: number;
}

const technicalSkills: Skill[] = [
  { name: 'Python', percentage: 90 },
  { name: 'Django', percentage: 85 },
  { name: 'Data Science', percentage: 75 },
  { name: 'HTML & CSS', percentage: 80 },
  { name: 'JavaScript', percentage: 70 },
];

const creativeSkills: Skill[] = [
  { name: 'Technical Writing', percentage: 95 },
];

const professionalSkills: Skill[] = [
  { name: 'Problem-Solving', percentage: 88 },
  { name: 'Communication', percentage: 92 },
];

const SkillBar: React.FC<{ skill: Skill; isVisible: boolean }> = ({ skill, isVisible }) => {
  return (
    <div className="mb-6 text-left">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-primary-text">{skill.name}</span>
        <span className="text-sm font-medium text-primary-text">{skill.percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-accent h-2 rounded-full transition-all duration-1000 ease-out" 
          style={{ width: isVisible ? `${skill.percentage}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
};


const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        },
        { threshold: 0.1 }
    );

    const currentRef = skillsRef.current;
    if (currentRef) {
        observer.observe(currentRef);
    }

    return () => {
        if (currentRef) {
            observer.unobserve(currentRef);
        }
    };
  }, []);

  return (
    <SectionWrapper id="skills" subtitle="MY SKILLS" title="Expertise & Proficiencies">
      <div ref={skillsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
        {/* Technical Skills */}
        <div>
          <h3 className="text-xl font-semibold text-primary-text mb-4 text-left">Technical Skills</h3>
          {technicalSkills.map((skill, index) => (
            <SkillBar key={index} skill={skill} isVisible={isVisible} />
          ))}
        </div>
        {/* Creative & Professional Skills */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-primary-text mb-4 text-left">Creative Skills</h3>
            {creativeSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} isVisible={isVisible} />
            ))}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary-text mb-4 text-left">Professional Skills</h3>
            {professionalSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
