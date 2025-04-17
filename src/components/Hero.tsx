
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />
      
      <div className="container-custom">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-purple font-serif mb-4 text-lg md:text-xl">Hi there, I'm</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-navy mb-6">
            <span className="block">Manish Acharya.</span>
            <span className="text-2xl md:text-4xl text-slate">Software Engineering Student</span>
          </h1>
          <p className="text-lg md:text-xl text-black mb-8">
            I'm a student at Pokhara University specializing in system programming with Rust and C,
            backend development with Java and Python, and UI/UX design with Figma.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="btn-primary"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Let's Work Together
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              See My Work
            </Button>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-primary"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
