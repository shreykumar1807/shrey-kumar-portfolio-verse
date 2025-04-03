
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    { 
      icon: <Mail className="h-5 w-5" />, 
      label: "Email", 
      value: "youremail@example.com", 
      link: "mailto:youremail@example.com" 
    },
    { 
      icon: <Phone className="h-5 w-5" />, 
      label: "Phone", 
      value: "Your Phone Number", 
      link: "tel:+your-phone-number" 
    },
    { 
      icon: <Linkedin className="h-5 w-5" />, 
      label: "LinkedIn", 
      value: "linkedin.com/in/yourusername", 
      link: "https://linkedin.com/in/yourusername" 
    },
    { 
      icon: <Github className="h-5 w-5" />, 
      label: "GitHub", 
      value: "github.com/yourusername", 
      link: "https://github.com/yourusername" 
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="text-foreground/70 mb-8">
              Feel free to reach out to me for collaborations, opportunities, or just to say hello. I'm always open to discussing new projects and ideas.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-4 flex items-center">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-foreground/70">{info.label}</p>
                      <a 
                        href={info.link} 
                        className="font-medium hover:text-primary transition-colors"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {info.value}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
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

export default ContactSection;
