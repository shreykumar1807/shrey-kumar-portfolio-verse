
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, BookOpen, Shield, Database, Cpu, Terminal, 
  Laptop, Lightbulb, GraduationCap
} from "lucide-react";

const AboutSection = () => {
  const skills = [
    { name: "Programming", icon: <Code />, items: ["C", "Java", "Python"] },
    { name: "Tools & Software", icon: <Laptop />, items: ["MATLAB", "SolidWorks", "Eclipse", "Replit", "VS Code"] },
    { name: "Database", icon: <Database />, items: ["SQL"] },
    { name: "Specializations", icon: <Lightbulb />, items: ["Data Analysis", "Ethical Hacking", "Front-End Development"] },
  ];

  return (
    <section id="about" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h3 className="text-2xl font-semibold flex items-center">
              <GraduationCap className="mr-2 text-primary" /> Education
            </h3>
            <Card className="card-hover">
              <CardContent className="pt-6">
                <h4 className="text-xl font-semibold mb-2">Bachelor of Technology (B.Tech)</h4>
                <p className="text-foreground/70">Information Science and Engineering</p>
                <p className="font-medium mt-4">RV Institute of Technology</p>
                <p className="text-foreground/70">Expected Graduation: 2027</p>
                
                <div className="mt-4">
                  <h5 className="font-medium text-primary">Relevant Coursework:</h5>
                  <ul className="list-disc list-inside text-foreground/70 mt-2">
                    <li>Artificial Intelligence (AI)</li>
                    <li>Front-End Development</li>
                    <li>Cybersecurity</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <h3 className="text-2xl font-semibold flex items-center">
              <Terminal className="mr-2 text-primary" /> Technical Skills
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skillGroup, index) => (
                <Card key={index} className="card-hover h-full">
                  <CardContent className="pt-6">
                    <h4 className="text-lg font-medium flex items-center mb-3">
                      <span className="text-primary mr-2">{skillGroup.icon}</span>
                      {skillGroup.name}
                    </h4>
                    <ul className="space-y-2">
                      {skillGroup.items.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "600ms" }}>
          <h3 className="text-2xl font-semibold mb-4">Languages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Hindi", "English", "Maithili"].map((language) => (
              <span key={language} className="px-4 py-2 bg-accent/10 rounded-full text-accent-foreground">
                {language}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
