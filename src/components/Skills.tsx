
import { useEffect, useRef } from 'react';
import { Code, PenTool, Database, Server, Globe, GitBranch } from 'lucide-react';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.animated-element');
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('animate');
            }, index * 100);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    { 
      id: 1, 
      title: 'System Programming', 
      icon: Code, 
      description: 'Building efficient, reliable, and high-performance systems close to the hardware.',
      technologies: ['Rust', 'C']
    },
    { 
      id: 2, 
      title: 'Backend Development', 
      icon: Server, 
      description: 'Creating robust server-side applications with a focus on performance and scalability.',
      technologies: ['Java', 'Python']
    },
    { 
      id: 3, 
      title: 'UI/UX Design', 
      icon: PenTool, 
      description: 'Designing intuitive and engaging user experiences with a clean, modern aesthetic.',
      technologies: ['Figma']
    },
    { 
      id: 4, 
      title: 'Database Management', 
      icon: Database, 
      description: 'Designing and optimizing database schemas for efficient data storage and retrieval.',
      technologies: ['MySQL']
    },
    { 
      id: 5, 
      title: 'Web Development', 
      icon: Globe, 
      description: 'Building responsive and modern web applications with cutting-edge technologies.',
      technologies: ['HTML', 'CSS', 'JavaScript']
    },
    { 
      id: 6, 
      title: 'DevOps', 
      icon: GitBranch, 
      description: 'Streamlining development workflows and deployment processes for efficiency.',
      technologies: ['Git']
    }
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="section"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-purple mx-auto mb-6"></div>
          <p className="text-slate max-w-2xl mx-auto">
            I've developed skills in various areas of software development.
            Here's a glimpse of what I can bring to your project.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div key={skill.id} className="animated-element">
              <div className="skill-card h-full">
                <div className="bg-purple/10 p-4 rounded-full w-fit mb-4">
                  <skill.icon size={24} className="text-purple" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2">
                  {skill.title}
                </h3>
                <p className="text-slate mb-4">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {skill.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-purple/5 text-purple-dark text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
