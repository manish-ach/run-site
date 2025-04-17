
import { Github, Twitter, Linkedin, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, url: 'https://github.com/yourusername' },
    { icon: Twitter, url: 'https://twitter.com/yourusername' },
    { icon: Linkedin, url: 'https://linkedin.com/in/yourusername' },
    { icon: Instagram, url: 'https://instagram.com/yourusername' }
  ];

  return (
    <footer className="bg-navy text-white py-12">
      <div className="container-custom">
        <div className="text-center mb-8">
          <a href="#home" className="text-2xl font-serif font-bold">
            Portfolio
          </a>
          <p className="text-white/70 mt-4 max-w-md mx-auto">
            Creating beautiful digital experiences with clean, efficient code.
            Let's build something amazing together.
          </p>
        </div>
        
        <div className="flex justify-center space-x-4 mb-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full hover:bg-purple transition-all"
              aria-label={`Visit my ${social.icon.name} profile`}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm mb-4 md:mb-0">
              © {currentYear} Your Name. All rights reserved.
            </p>
            
            <div className="flex gap-6">
              <a href="#" className="text-white/70 text-sm hover:text-white transition-all">
                Privacy Policy
              </a>
              <a href="#" className="text-white/70 text-sm hover:text-white transition-all">
                Terms of Service
              </a>
            </div>
          </div>
          
          <p className="text-white/70 text-sm text-center mt-6 flex items-center justify-center">
            Made with <Heart size={14} className="text-purple mx-1" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
