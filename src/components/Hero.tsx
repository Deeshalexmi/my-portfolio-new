import { ArrowDown, Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-picture.png';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden hero-pattern">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-orange/30 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-cyan/20 rounded-lg animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-orange/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 relative inline-block">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-orange/50 animate-glow">
              <img 
                src={profileImage} 
                alt="Deeshalexmi Chandran" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-orange rounded-full flex items-center justify-center animate-float">
              <div className="w-6 h-6 bg-primary-foreground rounded-full" />
            </div>
          </div>

          {/* Main Heading */}
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              I'M A <span className="gradient-text">SOFTWARE</span>
              <br />
              <span className="gradient-accent-text">ENGINEER</span>
            </h1>
          </div>

          {/* Subheading */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Hello, I'm <span className="text-orange font-semibold">Deeshalexmi Chandran</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              As a frontend enthusiast and recent Software Engineering graduate, 
              I'm driven to build seamless and engaging web experiences. 
              I'm actively looking for opportunities to grow as a frontend developer and contribute to impactful teams.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange mb-2">1+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Year Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan mb-2">4+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-lime mb-2">2+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Internships</div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="btn-glow bg-orange hover:bg-orange-glow text-primary-foreground font-semibold px-8 py-6 text-lg"
            >
              <Eye className="mr-2" size={20} />
              View My Work
            </Button>
            <a 
              href="https://raw.githubusercontent.com/Deeshalexmi/my-portfolio-assets/main/Deeshalexmi_Resume.pdf"
              download="Deeshalexmi_Resume.pdf"
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="border-orange text-orange hover:bg-orange hover:text-primary-foreground font-semibold px-8 py-6 text-lg"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="text-orange" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
