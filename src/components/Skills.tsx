import { Code2, Palette, Database, Settings, Users, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "orange",
      skills: [
        { name: "Java", level: 80 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "PHP", level: 70 },
        { name: "C++", level: 75 }
      ]
    },
    {
      title: "Frontend Development", 
      icon: Palette,
      color: "cyan",
      skills: [
        { name: "HTML/CSS", level: 92 },
        { name: "React.js", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Responsive Design", level: 90 }
      ]
    },
    {
      title: "Backend & Database",
      icon: Database,
      color: "lime",
      skills: [
        { name: "Node.js", level: 82 },
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "REST APIs", level: 75 },
        { name: "Express.js", level: 75 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Settings,
      color: "magenta",
      skills: [
        { name: "Git/GitHub", level: 65 },
        { name: "Visual Studio Code", level: 95 },
        { name: "Visual Studio", level: 80 },
        { name: "Canva", level: 85 },
        { name: "Figma", level: 75 }
      ]
    }
  ];

  const softSkills = [
    { name: "Problem-solving", icon: Lightbulb },
    { name: "Team Collaboration", icon: Users },
    { name: "Adaptability", icon: Settings },
    { name: "Communication", icon: Users },
    { name: "Critical Thinking", icon: Lightbulb },
    { name: "Time Management", icon: Settings }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'orange': return { bg: 'bg-orange/10', text: 'text-orange', accent: 'bg-orange' };
      case 'cyan': return { bg: 'bg-cyan/10', text: 'text-cyan', accent: 'bg-cyan' };
      case 'lime': return { bg: 'bg-lime/10', text: 'text-lime', accent: 'bg-lime' };
      case 'magenta': return { bg: 'bg-magenta/10', text: 'text-magenta', accent: 'bg-magenta' };
      default: return { bg: 'bg-orange/10', text: 'text-orange', accent: 'bg-orange' };
    }
  };

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            const IconComponent = category.icon;
            
            return (
              <Card key={index} className="card-hover bg-card/50 border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center`}>
                      <IconComponent className={colors.text} size={24} />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className={`text-xs ${colors.text}`}>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted/30 rounded-full h-2">
                          <div 
                            className={`h-2 ${colors.accent} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Soft Skills */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            Soft <span className="gradient-accent-text">Skills</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {softSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <Card key={index} className="card-hover bg-card/30 border-border/50 text-center">
                  <CardContent className="p-4">
                    <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="text-orange" size={20} />
                    </div>
                    <p className="text-sm font-medium">{skill.name}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;