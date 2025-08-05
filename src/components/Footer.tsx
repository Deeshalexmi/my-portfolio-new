import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card/30 border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold gradient-text mb-2">Deeshalexmi Chandran</h3>
            <p className="text-muted-foreground">Aspiring Software Engineer & Full-Stack Developer</p>
          </div>

          {/* Quote */}
          <div className="mb-8 max-w-2xl mx-auto">
            <blockquote className="text-lg italic text-muted-foreground">
              "Passionate about innovative technologies and eager to contribute to impactful projects 
              that make a difference in the world."
            </blockquote>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            {['Home', 'About', 'Experience', 'Skills', 'Services', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase());
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-muted-foreground hover:text-orange transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-border/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart className="text-orange" size={16} fill="currentColor" />
                <span>by Deeshalexmi Chandran</span>
              </div>
              
              <div className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} All rights reserved.
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-orange hover:text-orange-glow hover:bg-orange/10"
              >
                <ArrowUp size={16} />
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;