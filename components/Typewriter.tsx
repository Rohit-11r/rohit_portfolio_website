import React, { useState, useEffect } from 'react';

const Typewriter: React.FC = () => {
    const textToType = "I code stuff and recount life.";
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = 150;
    const deletingSpeed = 75;
    const delay = 2000;

    useEffect(() => {
        const handleTyping = () => {
            const fullText = textToType;
            const updatedText = isDeleting
                ? fullText.substring(0, displayedText.length - 1)
                : fullText.substring(0, displayedText.length + 1);

            setDisplayedText(updatedText);

            if (!isDeleting && updatedText === fullText) {
                setTimeout(() => setIsDeleting(true), delay);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting]);

    return (
        <section className="py-16 bg-light-bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex justify-center items-center space-x-4">
                    <div className="h-px w-16 bg-gray-300 hidden sm:block"></div>
                    <p className="text-xl sm:text-2xl md:text-3xl font-light text-gray-700 italic text-center w-full sm:w-auto sm:min-w-[29ch]" style={{ minHeight: '40px' }}>
                        {displayedText}
                        <span className="animate-blink border-r-2 border-gray-700" aria-hidden="true"></span>
                    </p>
                    <div className="h-px w-16 bg-gray-300 hidden sm:block"></div>
                </div>
            </div>
        </section>
    );
};

export default Typewriter;