
import React from 'react';
import SectionWrapper from './SectionWrapper';

const stats = [
    { value: '10+', label: 'Projects Completed' },
    { value: '1', label: 'Internship Experience' },
    { value: '2+', label: 'Years Learning' },
];

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" subtitle="ABOUT ME" title="Who is Rohit P?">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
        {/* Image */}
        <div className="relative flex justify-center items-center">
             <div className="relative w-80 h-80 md:w-96 md:h-96 animate-float">
                 <img
                  src="https://raw.githubusercontent.com/rohitp-dev11/Rohit_Profile/main/WhatsApp%20Image%202025-11-09%20at%2010%2C51%2C52_17e9c95e-photoaidcom-cropped%20(1).jpg"
                  alt="Rohit P at a station"
                  className="rounded-full object-cover w-full h-full shadow-xl border-4 border-white"
                />
            </div>
        </div>

        {/* Text content */}
        <div className="text-gray-600 text-left">
            <div className="space-y-4 mb-8">
                <p>
                    I am a second-year BCA (Computer Science) student at Mar Thoma Institute of Technology with a deep-seated passion for technology and problem-solving. My journey into programming quickly evolved into a dedicated pursuit of building elegant and efficient solutions.
                </p>
                <p>
                    My primary focus is on back-end development with <span className="font-semibold text-primary-text">Python and Django</span>, but I'm also deeply interested in the narratives that data can tell. This intersection of robust development and data-driven insights is where I thrive.
                </p>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 text-left">
              {stats.map(stat => (
                  <div key={stat.label}>
                      <p className="text-4xl font-bold text-accent">{stat.value}</p>
                      <p className="text-gray-500 mt-1">{stat.label}</p>
                  </div>
              ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;