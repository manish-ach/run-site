
import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animated-element');
      elements.forEach((el) => observer.observe(el));
    }
    
    return () => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll('.animated-element');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@manishacharya.name.np',
      link: 'mailto:contact@manishacharya.name.np'
    },
    {
      icon: Github,
      title: 'GitHub',
      content: 'github.com/manish-ach',
      link: 'https://github.com/manish-ach'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      content: 'Manish Acharya',
      link: 'https://www.linkedin.com/in/manish-acharya-08345a260'
    }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="section"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-purple mx-auto mb-6"></div>
          <p className="text-slate max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration?
            I'd love to hear from you. Send me a message and I'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <div key={index} className="animated-element" style={{ animationDelay: `${index * 100}ms` }}>
              <a 
                href={item.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all h-full"
              >
                <div className="bg-purple/10 p-4 rounded-full mb-4">
                  <item.icon size={24} className="text-purple" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-slate">{item.content}</p>
              </a>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-purple p-8 md:p-12 text-white">
              <h3 className="text-2xl font-serif font-semibold mb-4 animated-element">
                Let's discuss your project
              </h3>
              <p className="mb-6 opacity-90 animated-element">
                Tell me about your project, timeline, and budget. I'll get back to you as soon as possible.
              </p>
              <div className="space-y-4 animated-element">
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-2 rounded-full">
                    <Mail size={18} />
                  </div>
                  <span>contact@manishacharya.name.np</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-2 rounded-full">
                    <MapPin size={18} />
                  </div>
                  <span>Pokhara, Nepal</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-2 rounded-full">
                    <Github size={18} />
                  </div>
                  <span>github.com/manish-ach</span>
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-12 animated-element">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-6">
                  <div>
                    <label htmlFor="name" className="block text-navy text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple/50 focus:border-purple/50"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-navy text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple/50 focus:border-purple/50"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-navy text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple/50 focus:border-purple/50"
                      placeholder="Project Inquiry"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-navy text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple/50 focus:border-purple/50"
                      placeholder="Tell me about your project..."
                      required
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send size={18} />
                        Send Message
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
