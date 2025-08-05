import { Briefcase, BarChart3, Wrench, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      period: "2024",
      role: "Technical Intern",
      company: "CP Manufacturing Sdn Bhd",
      location: "Malaysia",
      type: "Internship",
      description: "Gained hands-on experience with industry tools, team collaboration, and project execution. Worked on technical projects that enhanced my understanding of manufacturing processes and software integration.",
      achievements: [
        "Collaborated with cross-functional teams on technical projects",
        "Gained experience with industry-standard tools and practices",
        "Contributed to project execution and process optimization",
        "Developed technical documentation and reports"
      ],
      skills: ["Team Collaboration", "Project Management", "Technical Documentation", "Industry Tools"],
      color: "cyan"
    },
    {
      period: "2023",
      role: "Data Analysis Intern",
      company: "Tenaga Nasional Berhad",
      location: "Malaysia",
      type: "Internship",
      description: "Utilized R programming for comprehensive data compilation and interpretation to support strategic project decisions. Focused on analyzing energy consumption patterns and operational efficiency metrics.",
      achievements: [
        "Used R for complex data compilation and statistical analysis",
        "Provided data-driven insights for project decision making",
        "Created comprehensive reports and visualizations",
        "Supported strategic planning with analytical findings"
      ],
      skills: ["R Programming", "Data Analysis", "Statistical Modeling", "Data Visualization"],
      color: "orange"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional internship experiences that shaped my technical skills and industry knowledge
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-hover bg-card/50 border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row">
                  {/* Left Side - Company Info */}
                  <div className={`lg:w-1/3 p-8 ${
                    exp.color === 'orange' ? 'bg-orange/10' : 'bg-cyan/10'
                  }`}>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        exp.color === 'orange' ? 'bg-orange/20' : 'bg-cyan/20'
                      }`}>
                        {exp.company.includes('Tenaga') ? 
                          <BarChart3 className={exp.color === 'orange' ? 'text-orange' : 'text-cyan'} size={24} /> :
                          <Wrench className={exp.color === 'orange' ? 'text-orange' : 'text-cyan'} size={24} />
                        }
                      </div>
                      <div>
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          exp.color === 'orange' ? 'bg-orange/10 text-orange' : 'bg-cyan/10 text-cyan'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                    <h4 className={`text-lg font-semibold mb-3 ${
                      exp.color === 'orange' ? 'text-orange' : 'text-cyan'
                    }`}>
                      {exp.company}
                    </h4>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Details */}
                  <div className="lg:w-2/3 p-8">
                    <p className="text-muted-foreground mb-6 leading-relaxed text-justify">
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <h5 className="font-semibold mb-3 flex items-center">
                        <Briefcase className="mr-2" size={16} />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                              exp.color === 'orange' ? 'bg-orange' : 'bg-cyan'
                            }`} />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-3">Technologies & Skills</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span key={i} className="text-xs px-3 py-1 bg-muted/20 rounded-full text-muted-foreground border border-border/50">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;