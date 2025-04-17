
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    
    // Check if we've scrolled past the top
    if (window.scrollY > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    
    // Determine which section is in view
    let current = 'home';
    
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 100) {
        current = section.id;
      }
    });
    
    setActiveSection(current);
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleNavLinkClick = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a 
          href="#home" 
          className="text-2xl font-serif font-bold text-navy"
          onClick={() => handleNavLinkClick('home')}
        >
          Portfolio
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`nav-link ${activeSection === item ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick(item);
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <Button 
            className="btn-primary"
            onClick={() => handleNavLinkClick('contact')}
          >
            Get In Touch
          </Button>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-navy"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
          <div className="container-custom py-4 flex flex-col space-y-4">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`text-lg py-2 border-b border-slate-100 ${
                  activeSection === item ? 'text-primary font-medium' : 'text-navy'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick(item);
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
            <Button 
              className="btn-primary w-full"
              onClick={() => handleNavLinkClick('contact')}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
