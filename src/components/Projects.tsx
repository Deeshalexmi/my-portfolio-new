import { ExternalLink, Github, Code, Database, Globe, Gamepad2, MonitorSmartphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Tenant Management System",
      description: "A desktop application for managing tenant records and rental data, developed in Python and tested using VS Code.",
      tech: ["Python"],
      category: "Desktop Application",
      icon: Database,
      color: "orange",
      features: [
        "Add/edit/delete tenants",
        "View rental summaries",
        "Search and filter capabilities",
        "File-based data storage"
      ]
    },
    {
      title: "Medical Appointment System",
      description: "A web app for booking doctor appointments, featuring patient management and scheduling using PHP and vanilla web tech.",
      tech: ["HTML", "CSS", "JavaScript", "PHP"],
      category: "Web Application",
      icon: Globe,
      color: "magenta",
      features: [
        "Appointment booking system",
        "Doctor-patient portal",
        "Email confirmation",
        "Responsive design"
      ]
    },
    {
      title: "Hotel Management System",
      description: "A comprehensive hotel management solution built with Java, featuring room booking, customer management, and billing functionalities.",
      tech: ["Java", "MySQL"],
      category: "Desktop Application",
      icon: Database,
      color: "orange",
      features: [
        "Room reservation system",
        "Customer management",
        "Billing and invoicing",
        "Report generation"
      ]
    },
    {
      title: "Furniture Sale Ordering System",
      description: "Java-based inventory and order management system for furniture sales, connected to MySQL for real-time data access.",
      tech: ["Java", "MySQL"],
      category: "Desktop Application",
      icon: MonitorSmartphone,
      color: "cyan",
      features: [
        "Inventory tracking",
        "Order placement & receipt",
        "Sales reporting",
        "Customer database"
      ]
    },
    {
      title: "Python Hangman Game Website",
      description: "Interactive hangman game website built with Pug.js, Node.js, and Express.js for backend logic and templating.",
      tech: ["Pug.js", "Node.js", "Express.js"],
      category: "Web Application",
      icon: Gamepad2,
      color: "lime",
      features: [
        "Word guessing game logic",
        "Dynamic game interface",
        "Score tracking",
        "Responsive layout"
      ]
    },
    {
      title: "Surplus Food Donation Platform",
      description: "Full-stack MERN application connecting food donors with recipients to reduce food waste and help communities.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      category: "Full-Stack Application",
      icon: Globe,
      color: "orange",
      features: [
        "User authentication",
        "Real-time notifications",
        "Location-based matching",
        "Donation tracking"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'orange': return { 
        bg: 'bg-orange/10', 
        text: 'text-orange',
        accent: 'bg-orange',
        border: 'border-orange/10'
      };
      case 'cyan': return { 
        bg: 'bg-cyan/10', 
        text: 'text-cyan',
        accent: 'bg-cyan',
        border: 'border-cyan/20'
      };
      case 'lime': return { 
        bg: 'bg-lime/10', 
        text: 'text-lime',
        accent: 'bg-lime',
        border: 'border-lime/20'
      };
      case 'magenta': return { 
        bg: 'bg-magenta/10', 
        text: 'text-magenta',
        accent: 'bg-magenta',
        border: 'border-magenta/20'
      };
      default: return { 
        bg: 'bg-orange/10', 
        text: 'text-orange',
        accent: 'bg-orange',
        border: 'border-orange/20'
      };
    }
  };

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating various skills and technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            const IconComponent = project.icon;
            
            return (
              <Card key={index} className={`card-hover bg-card/50 border-border/50 ${colors.border} group overflow-hidden`}>
                <CardContent className="p-0">
                  {/* Project Header */}
                  <div className={`${colors.bg} p-6 relative`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 bg-background/20 rounded-lg flex items-center justify-center`}>
                        <IconComponent className={colors.text} size={24} />
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full bg-background/20 ${colors.text}`}>
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3">Key Features</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-xs text-muted-foreground">
                            <div className={`w-1.5 h-1.5 ${colors.accent} rounded-full flex-shrink-0`} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="text-xs px-2 py-1 bg-muted/20 rounded border border-border/50">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className={`flex-1 ${colors.text} border-current hover:${colors.bg}`}
                      >
                        <Github size={14} className="mr-1" />
                        Code
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className={`flex-1 ${colors.text} border-current hover:${colors.bg}`}
                      >
                        <ExternalLink size={14} className="mr-1" />
                        Live
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Interested in seeing more of my work?</p>
          <a 
            href="https://github.com/Deeshalexmi?tab=projects" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
          <Button 
            variant="outline" 
            size="lg"
            className="border-orange text-orange hover:bg-orange hover:text-primary-foreground"
          >
            <Github className="mr-2" size={18} />
            View All Projects on GitHub
          </Button>
        </a>

        </div>
      </div>
    </section>
  );
};

export default Projects;