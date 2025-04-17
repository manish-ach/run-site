
import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Code, FileCode, FileJson, Database, Coffee, Cpu, Braces, FileType, FileBadge2, Radius, CircleEllipsis } from 'lucide-react';
import { Button } from '@/components/ui/button';

type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  homepage: string | null;
  topics: string[];
  language: string | null;
};

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/users/manish-ach/repos');
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects. Please try again later.');
        setLoading(false);
      }
    };
    
    fetchProjects();
  }, []);
  
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

  const getLanguageIcon = (language: string | null) => {
    if (!language) return <Code size={48} className="text-purple" />;
    
    const lang = language.toLowerCase();
    
    switch(lang) {
      case 'javascript':
        return <Braces size={48} className="text-yellow-500" />;
      case 'typescript':
        return <FileType size={48} className="text-blue-500" />;
      case 'html':
        return <FileCode size={48} className="text-orange-500" />;
      case 'css':
        return <FileBadge2 size={48} className="text-blue-600" />;
      case 'python':
        return <FileCode size={48} className="text-blue-700" />;
      case 'java':
        return <Coffee size={48} className="text-red-500" />;
      case 'rust':
        return <Cpu size={48} className="text-orange-600" />;
      case 'c':
      case 'c++':
        return <Code size={48} className="text-purple-700" />;
      case 'go':
        return <Radius size={48} className="text-cyan-500" />;
      case 'mysql':
      case 'sql':
        return <Database size={48} className="text-blue-800" />;
      default:
        return <CircleEllipsis size={48} className="text-gray-500" />;
    }
  };

  const getLanguageColor = (language: string | null) => {
    if (!language) return 'bg-purple/5 text-purple-dark';
    
    const lang = language.toLowerCase();
    
    switch(lang) {
      case 'javascript':
        return 'bg-yellow-100 text-yellow-800';
      case 'typescript':
        return 'bg-blue-100 text-blue-800';
      case 'html':
        return 'bg-orange-100 text-orange-800';
      case 'css':
        return 'bg-blue-100 text-blue-800';
      case 'python':
        return 'bg-green-100 text-green-800';
      case 'java':
        return 'bg-red-100 text-red-800';
      case 'rust':
        return 'bg-orange-100 text-orange-800';
      case 'c':
      case 'c++':
        return 'bg-purple-100 text-purple-800';
      case 'go':
        return 'bg-cyan-100 text-cyan-800';
      case 'php':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="section bg-slate-light/30"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-purple mx-auto mb-6"></div>
          <p className="text-slate max-w-2xl mx-auto">
            Here are some of my recent GitHub projects. Each one was carefully crafted to
            solve a specific problem and demonstrate my technical skills.
          </p>
        </div>
        
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-purple border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            <p className="mt-4 text-slate">Loading projects...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-red-500">{error}</p>
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate">No projects found.</p>
          </div>
        ) : (
          <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="animated-element project-card-container" 
              >
                <div className="project-card h-full flex flex-col bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="relative overflow-hidden bg-gray-50 flex items-center justify-center p-8">
                    {getLanguageIcon(project.language)}
                    <div className="absolute inset-0 bg-purple/80 flex items-center justify-center gap-4 opacity-0 transition-all duration-300 hover:opacity-100">
                      {project.homepage && (
                        <a 
                          href={project.homepage} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-white p-3 rounded-full hover:bg-slate-light transition-all"
                        >
                          <ExternalLink size={20} className="text-purple" />
                        </a>
                      )}
                      <a 
                        href={project.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white p-3 rounded-full hover:bg-slate-light transition-all"
                      >
                        <Github size={20} className="text-purple" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-navy mb-2">
                      {project.name}
                    </h3>
                    <p className="text-slate mb-4 flex-grow">
                      {project.description || 'No description available.'}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.language && (
                        <span className={`${getLanguageColor(project.language)} text-sm px-3 py-1 rounded-full`}>
                          {project.language}
                        </span>
                      )}
                      {project.topics && project.topics.slice(0, 3).map((topic, topicIndex) => (
                        <span 
                          key={topicIndex}
                          className="bg-purple/5 text-purple-dark text-sm px-3 py-1 rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto">
                      <a 
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple font-medium hover:text-purple-dark transition-all"
                      >
                        View Project →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="text-center mt-12 animated-element">
          <Button 
            className="btn-primary"
            onClick={() => window.open('https://github.com/manish-ach', '_blank')}
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
