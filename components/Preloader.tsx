import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-header-bg flex items-center justify-center z-[100]">
      <div className="flex items-center justify-center space-x-3" style={{ animation: 'preloader-scale 1.5s ease-out forwards' }}>
        <div className="bg-accent h-14 w-14 rounded-full flex items-center justify-center text-primary-text font-bold text-4xl">
          R
        </div>
      </div>
    </div>
  );
};

export default Preloader;