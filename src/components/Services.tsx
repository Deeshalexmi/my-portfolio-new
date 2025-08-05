import { Globe, Code, BarChart3, MessageSquare, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Design & Development",
      description: "Creating modern, responsive websites with clean design and optimal user experience. From concept to deployment, I deliver high-quality web solutions.",
      features: [
        "Responsive Design",
        "Modern UI/UX",
        "Performance Optimization",
        "Cross-browser Compatibility"
      ],
      color: "orange"
    },
    {
      icon: Code,
      title: "Full-Stack Application Development", 
      description: "Building comprehensive web applications with both frontend and backend components. Specializing in MERN stack and modern development practices.",
      features: [
        "Frontend Development",
        "Backend API Development", 
        "Database Design",
        "System Architecture"
      ],
      color: "cyan"
    },
    {
      icon: Globe,
      title: "Landing Page Development",
      description: "Crafting high-converting, visually compelling landing pages tailored for product launches, portfolios, and marketing campaigns.",
      features: [
        "Pixel-perfect UI",
        "Responsive Layouts",
        "Optimized for Speed",
        "CTA-driven Design"
      ],
      color: "lime"
    },
    {
      icon: MessageSquare,
      title: "Technical Consulting",
      description: "Providing technical guidance and solutions for software development projects. Helping teams make informed decisions about technology stack and architecture.",
      features: [
        "Technology Stack Selection",
        "Architecture Planning",
        "Best Practices",
        "Code Review"
      ],
      color: "magenta"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'orange': return { 
        bg: 'bg-orange/10', 
        text: 'text-orange', 
        border: 'border-orange/20',
        hover: 'hover:border-orange/40'
      };
      case 'cyan': return { 
        bg: 'bg-cyan/10', 
        text: 'text-cyan', 
        border: 'border-cyan/20',
        hover: 'hover:border-cyan/40'
      };
      case 'lime': return { 
        bg: 'bg-lime/10', 
        text: 'text-lime', 
        border: 'border-lime/20',
        hover: 'hover:border-lime/40'
      };
      case 'magenta': return { 
        bg: 'bg-magenta/10', 
        text: 'text-magenta', 
        border: 'border-magenta/20',
        hover: 'hover:border-magenta/40'
      };
      default: return { 
        bg: 'bg-orange/10', 
        text: 'text-orange', 
        border: 'border-orange/20',
        hover: 'hover:border-orange/40'
      };
    }
  };

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive software development services tailored to meet your technical needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            const IconComponent = service.icon;
            
            return (
              <Card key={index} className={`card-hover bg-card/50 border-border/50 ${colors.border} ${colors.hover} transition-all duration-300`}>
                <CardContent className="p-8">
                  {/* Service Header */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className={colors.text} size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3 text-sm">
                          <div className={`w-2 h-2 ${colors.text === 'text-orange' ? 'bg-orange' : 
                            colors.text === 'text-cyan' ? 'bg-cyan' :
                            colors.text === 'text-lime' ? 'bg-lime' : 'bg-magenta'} rounded-full flex-shrink-0`} />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;