
import React, { useState } from 'react';
import { Github, Linkedin, Send } from 'lucide-react';

// TypeScript declaration for the EmailJS SDK loaded from a script tag
declare global {
    interface Window {
        emailjs: {
            send: (
                serviceID: string,
                templateID: string,
                templateParams: Record<string, unknown>,
                publicKey: string
            ) => Promise<{ status: number; text: string }>;
        };
    }
}

const socialLinks = [
    { icon: Github, href: 'https://github.com/Rohit-11r' },
    { icon: Linkedin, href: 'https://linkedin.com/in/rohit-p-603170310' },
    { icon: Send, href: 'mailto:rohitp.720r@gmail.com' },
];

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<{ type: 'success' | 'error' | ''; message: string }>({ type: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name || !email || !message) {
            setStatus({ type: 'error', message: 'Please fill out all fields.' });
            return;
        }

        setIsLoading(true);
        setStatus({ type: '', message: '' });

        // IMPORTANT: The keys here (from_name, from_email, from_message)
        // must EXACTLY match the variables in your EmailJS template.
        const templateParams = {
            from_name: name,
            from_email: email,
            from_message: message,
        };
        
        if (!window.emailjs) {
            console.error('EmailJS SDK not loaded.');
            setStatus({ type: 'error', message: 'Email service is currently unavailable. Please try again later.' });
            setIsLoading(false);
            return;
        }

        window.emailjs.send('service_fsqcla8', 'template_m5ah9x6', templateParams, 'En2WznTVGpHZmwN_c')
            .then(() => {
                setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
                setName('');
                setEmail('');
                setMessage('');
                setTimeout(() => setStatus({ type: '', message: '' }), 5000);
            }, (error) => {
                console.error('EMAILJS FAILED:', error.text || error);
                setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
                setTimeout(() => setStatus({ type: '', message: '' }), 5000);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <section id="contact" className="bg-header-bg text-white py-20 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <p className="font-semibold text-accent mb-2 uppercase">CONTACT</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Get In Touch
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-gray-300 mb-10 text-lg">
                        I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out!
                    </p>

                    <form onSubmit={sendEmail} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <input
                                type="text"
                                name="from_name"
                                id="name"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="bg-transparent border-b border-gray-500 py-3 px-1 text-white placeholder:text-gray-400 focus:outline-none focus:border-accent transition-colors"
                                required
                            />
                            <input
                                type="email"
                                name="from_email"
                                id="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-transparent border-b border-gray-500 py-3 px-1 text-white placeholder:text-gray-400 focus:outline-none focus:border-accent transition-colors"
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                name="from_message"
                                id="message"
                                rows={4}
                                placeholder="Your Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full bg-transparent border-b border-gray-500 py-3 px-1 text-white placeholder:text-gray-400 focus:outline-none focus:border-accent transition-colors resize-none"
                                required
                            ></textarea>
                        </div>
                        <div className="text-center pt-4">
                             <button
                                type="submit"
                                disabled={isLoading}
                                className="bg-accent text-primary-text font-bold py-3 px-8 rounded-full hover:bg-amber-500 transition-all shadow-lg text-base disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
                            >
                                {isLoading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : 'Send Message'}
                            </button>
                        </div>
                    </form>
                    
                    {status.message && (
                        <p className={`mt-6 text-sm font-medium ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                            {status.message}
                        </p>
                    )}

                     <div className="flex justify-center space-x-6 mt-12">
                        {socialLinks.map((link, index) => {
                            const Icon = link.icon;
                            return (
                                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-transform hover:scale-110">
                                    <Icon size={28} />
                                </a>
                            );
                        })}
                    </div>
                    <p className="mt-12 text-sm text-gray-400 italic font-light">
                        "let's suffer with aim, shall we?"
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;