import { GraduationCap, Award, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const education = [
    {
      period: "2024 - 2025",
      title: "BSc (Hons) in Software Engineering",
      institution: "Asia Pacific University of Technology and Innovation",
      status: "Completed"
    },
    {
      period: "2021 - 2023",
      title: "Diploma in ICT (Software Engineering)",
      institution: "Asia Pacific University of Technology and Innovation",
      status: "Completed"
    },
    {
      period: "2015 - 2019",
      title: "Secondary Education",
      institution: "SMK Batu 8",
      status: "Completed"
    },
    {
      period: "2009 - 2014",
      title: "Primary Education",
      institution: "SK Puchong Jaya",
      status: "Completed"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know more about my journey, education, and passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Bio */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-orange/20 rounded-full flex items-center justify-center">
                <Heart className="text-orange" size={24} />
              </div>
              <h3 className="text-2xl font-bold">My Story</h3>
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed text-justify">
              I am a Software Engineering graduate from <span className="text-orange">Asia Pacific University</span>, 
              passionate about building engaging, intuitive, and responsive user interfaces. 
              Throughout my academic journey, I developed a strong interest in frontend development, 
              where I discovered the joy of transforming creative ideas into interactive digital experiences. 
              My core skills include React, Tailwind CSS, HTML, CSS, and JavaScript, 
              and I’m well-versed in modern frontend development practices such as component-based architecture, 
              responsive design, and state management. During my university years, I worked on several individual and team-based projects 
              that challenged me to think critically and collaborate effectively. These experiences helped me sharpen both my technical abilities
              and soft skills like communication, adaptability, and problem-solving. I particularly enjoy solving design-to-code challenges, 
              translating UI/UX mockups into high-quality code, and ensuring that the final product is both visually appealing and user-friendly. 
              In addition to my academic background, I actively seek out opportunities to learn new tools and frameworks, explore best practices, 
              and stay current with industry trends. I believe in continuous improvement and value clean, maintainable code and user-first design. 
              I’m now excited to apply my skills in a professional setting where I can contribute to real-world projects, learn from experienced developers, 
              and continue growing in my journey as a frontend developer.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed text-justify">
              Throughout my academic journey, I've gained hands-on experience through internships 
              at <span className="text-cyan font-semibold">Tenaga Nasional Berhad</span> and 
              <span className="text-lime font-semibold"> CP Manufacturing Sdn Bhd</span>, where I've 
              applied my technical skills to real-world challenges.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center space-x-2 bg-orange/10 px-4 py-2 rounded-full">
                <Award className="text-orange" size={16} />
                <span className="text-sm font-semibold">Problem Solver</span>
              </div>
              <div className="flex items-center space-x-2 bg-cyan/10 px-4 py-2 rounded-full">
                <GraduationCap className="text-cyan" size={16} />
                <span className="text-sm font-semibold">Continuous Learner</span>
              </div>
              <div className="flex items-center space-x-2 bg-lime/10 px-4 py-2 rounded-full">
                <Heart className="text-lime" size={16} />
                <span className="text-sm font-semibold">Team Player</span>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-cyan/20 rounded-full flex items-center justify-center">
                <GraduationCap className="text-cyan" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Education Timeline</h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="card-hover bg-card/50 border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-sm font-semibold text-orange bg-orange/10 px-3 py-1 rounded-full">
                        {edu.period}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        edu.status === 'Final Year' ? 'bg-lime/10 text-lime' :
                        edu.status === 'Completed' ? 'bg-cyan/10 text-cyan' : 'bg-muted/10 text-muted-foreground'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{edu.title}</h4>
                    <p className="text-muted-foreground text-sm">{edu.institution}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;