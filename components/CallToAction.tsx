
import React from 'react';

const SignatureUnderline: React.FC = () => (
    <svg viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <path d="M2 5 Q 30 0, 50 6 T 98 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
);

const WavyLineSeparator: React.FC = () => (
    <svg width="80" height="15" viewBox="0 0 80 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 7.5C15.8333 2.16667 40.5 -2.8 54.5 7.5C64.5 14.8 75 10.1667 78 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
);


const CallToAction: React.FC = () => {
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
        <section className="bg-header-bg text-white py-20 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Ready to bring your <span className="text-accent">ideas to life</span>?
                </h2>
                <div className="flex justify-center my-8 text-accent">
                    <div className="relative inline-block">
                        <p className="font-signature text-[2.8rem] transform -rotate-6">Rohit</p>
                        <div className="absolute -bottom-1 left-0 w-full transform -rotate-1">
                            <SignatureUnderline />
                        </div>
                    </div>
                </div>
                <p className="max-w-2xl mx-auto text-gray-300 mb-10 text-lg">
                    Whether you have a project in mind, a question, or just want to connect, I'm all ears. Let's create something exceptional together.
                </p>
                <div className="relative inline-block mt-4">
                    <a
                        href="#contact"
                        onClick={handleLinkClick}
                        className="bg-accent text-primary-text font-bold py-4 px-10 rounded-full hover:bg-amber-500 transition-all shadow-lg text-lg"
                    >
                        Let's Talk
                    </a>
                </div>
                <div className="flex justify-center mt-16 text-accent">
                    <WavyLineSeparator />
                </div>
            </div>
        </section>
    );
};

export default CallToAction;