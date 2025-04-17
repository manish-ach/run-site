
import { useEffect, useRef } from 'react';
import { User, MapPin, Calendar, Award } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
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

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="section bg-slate-light/30"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-purple mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animated-element">
            <div className="relative">
              <div className="bg-white shadow-lg rounded-lg p-4 md:p-8 relative z-10">
                <img 
                  src="/lovable-uploads/62366f9c-ef38-4701-8c15-b4a9e693e9a2.png" 
                  alt="Manish Acharya's portrait"
                  className="w-full h-auto rounded"
                />
              </div>
              <div 
                className="absolute -bottom-4 -right-4 w-full h-full rounded-lg border-2 border-purple -z-10"
              ></div>
            </div>
          </div>
          
          <div>
            <div className="animated-element">
              <h3 className="text-2xl font-serif font-semibold text-navy mb-4">
                I'm <span className="text-purple">Manish Acharya</span>, a Software Engineering Student
              </h3>
              <p className="text-slate mb-6">
                I'm currently studying Software Engineering at Pokhara University in Nepal. My passion lies in
                system programming using Rust and C, as well as backend development with Java and Python.
                I also enjoy creating intuitive user interfaces with a focus on great user experience.
              </p>
              <p className="text-slate mb-8">
                When I'm not coding, I enjoy exploring new technologies and contributing to open-source projects.
                I believe in continuous learning and pushing the boundaries of what's possible with software.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="animated-element">
                <div className="flex items-center gap-3">
                  <div className="bg-purple/10 p-3 rounded-full">
                    <User size={20} className="text-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-slate">Name</p>
                    <p className="font-medium">Manish Acharya</p>
                  </div>
                </div>
              </div>
              
              <div className="animated-element" style={{ animationDelay: '100ms' }}>
                <div className="flex items-center gap-3">
                  <div className="bg-purple/10 p-3 rounded-full">
                    <MapPin size={20} className="text-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-slate">Location</p>
                    <p className="font-medium">Pokhara, Nepal</p>
                  </div>
                </div>
              </div>
              
              <div className="animated-element" style={{ animationDelay: '200ms' }}>
                <div className="flex items-center gap-3">
                  <div className="bg-purple/10 p-3 rounded-full">
                    <Calendar size={20} className="text-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-slate">Experience</p>
                    <p className="font-medium">2+ Years</p>
                  </div>
                </div>
              </div>
              
              <div className="animated-element" style={{ animationDelay: '300ms' }}>
                <div className="flex items-center gap-3">
                  <div className="bg-purple/10 p-3 rounded-full">
                    <Award size={20} className="text-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-slate">Age</p>
                    <p className="font-medium">20 Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
