
import React from 'react';
import { Github, Linkedin, Send } from 'lucide-react';

const socialLinks = [
    { icon: Github, href: 'https://github.com/Rohit-11r' },
    { icon: Linkedin, href: 'https://linkedin.com/in/rohit-p-603170310' },
    { icon: Send, href: 'mailto:rohitp.720r@gmail.com' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-header-bg text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Separator Line */}
        <div className="border-t border-accent/40"></div>
        
        <div className="text-center pt-8">
            {/* Social Icons */}
            <div className="flex justify-center space-x-6 mb-6">
                {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                        <a 
                            key={index} 
                            href={link.href} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-400 hover:text-accent transition-transform hover:scale-110"
                        >
                            <Icon size={24} />
                        </a>
                    );
                })}
            </div>
            
            {/* Copyright Notice */}
            <p className="text-sm text-gray-400">&copy; 2025 Rohit P. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
