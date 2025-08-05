import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "deesha.chandran0424@gmail.com",
      link: "https://mail.google.com/mail/u/0/#inbox?compose=new",
      color: "orange"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "016-2259064",
      link: "https://wa.me/60162259064",
      color: "cyan"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kuala Lumpur, Malaysia",
      link: null,
      color: "lime"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "https://github.com/Deeshalexmi",
      color: "magenta"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/deeshalexmi-chandran-3b7150378/",
      color: "cyan"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    toast({
      title: "Please fill in all fields",
      description: "All fields are required to send your message.",
      variant: "destructive"
    });
    return;
  }

  try {
    await emailjs.send(
      'service_cnmgqqy',      // Replace with your EmailJS Service ID
      'template_6ud4vm6',     // Replace with your EmailJS Template ID
      {
        name: formData.name,
        email: formData.email,
        message: formData.message
      },
      '-3GmI2T__jFEms0-H'       // Replace with your EmailJS Public Key
    );

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', message: '' });
  } catch (error) {
    console.error("EmailJS Error:", error);
    toast({
      title: "Failed to send message",
      description: "Something went wrong. Please try again later.",
      variant: "destructive"
    });
  }
};

const getColorClasses = (color: string) => {
  switch (color) {
    case 'orange':
      return { bg: 'bg-orange/10', text: 'text-orange-500', icon: 'text-orange-500' };
    case 'cyan':
      return { bg: 'bg-cyan-100', text: 'text-cyan-600', icon: 'text-cyan-600' };
    case 'lime':
      return { bg: 'bg-lime-100', text: 'text-lime-600', icon: 'text-lime-600' };
    case 'magenta':
      return { bg: 'bg-pink-100', text: 'text-pink-600', icon: 'text-pink-600' };
    default:
      return { bg: 'bg-muted/10', text: 'text-muted-foreground', icon: 'text-muted-foreground' };
  }
};



  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on innovative projects, 
                or simply connect with fellow developers and technology enthusiasts.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const colors = getColorClasses(contact.color);
                const IconComponent = contact.icon;
                
                return (
                  <Card key={index} className="card-hover bg-card/50 border-border/50">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center`}>
                          <IconComponent className={colors.icon} size={20} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground">{contact.label}</p>
                          {contact.link ? (
                            <a 
                              href={contact.link} 
                              className={`font-medium ${colors.text} hover:underline transition-colors`}
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <p className="font-medium">{contact.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Social Media</h4>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const colors = getColorClasses(social.color);
                  const IconComponent = social.icon;
                  
                  return (
                    <Card key={index} className="card-hover bg-card/50 border-border/50 opacity-60">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center`}>
                            <IconComponent className={colors.icon} size={20} />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-muted-foreground">{social.label}</p>
                            <a 
                            href={social.value} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`font-medium ${colors.text} hover:underline transition-colors`}
                            >
                              {social.value}
                            </a>

                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="bg-background/50"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello..."
                      rows={6}
                      className="bg-background/50 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full btn-glow bg-orange hover:bg-orange-glow text-primary-foreground font-semibold"
                  >
                    <Send className="mr-2" size={18} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;