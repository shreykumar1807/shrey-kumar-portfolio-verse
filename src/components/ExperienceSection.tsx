
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Award, GraduationCap, Book } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <h2 className="section-title">Experience & Achievements</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h3 className="text-2xl font-semibold flex items-center">
              <Briefcase className="mr-2 text-primary" /> Experience & Internships
            </h3>
            
            <Card className="card-hover">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Learner</CardTitle>
                    <p className="text-foreground/70">Class Works</p>
                  </div>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    Training
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mt-4">
                  <h4 className="font-medium text-primary mb-2">Achievements:</h4>
                  <ul className="list-disc list-inside text-foreground/70">
                    <li>Built applications and other projects</li>
                    <li>Collaborated with team members</li>
                    <li>Learned new technologies and programming concepts</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <h3 className="text-2xl font-semibold flex items-center">
              <Award className="mr-2 text-primary" /> Certifications & Courses
            </h3>
            
            <Card className="card-hover">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Ethical Hacking</CardTitle>
                    <p className="text-foreground/70">RVITM</p>
                  </div>
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                    Certification
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mt-4">
                  <p className="text-foreground/70">
                    Completed comprehensive training in ethical hacking, covering penetration testing, 
                    vulnerability assessment, and security practices.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold flex items-center mb-8 animate-fade-in" style={{ animationDelay: "600ms" }}>
            <Book className="mr-2 text-primary" /> Interests & Hobbies
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "800ms" }}>
            <Card className="card-hover bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="pt-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary w-8 h-8">
                    <path d="M12 22c-1.7 0-3-1.3-3-3v-4c0-1.7 1.3-3 3-3s3 1.3 3 3v4c0 1.7-1.3 3-3 3z"></path>
                    <path d="M9 4v4c0 1.7 1.3 3 3 3s3-1.3 3-3V4"></path>
                    <path d="M12 4V2"></path>
                    <path d="M9 15h6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Cricket</h3>
                <p className="text-foreground/70">
                  Playing and watching cricket, following tournaments and matches.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="pt-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-medium mb-2">Coding</h3>
                <p className="text-foreground/70">
                  Building projects, solving programming challenges, and learning new technologies.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="pt-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Book className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-medium mb-2">Reading</h3>
                <p className="text-foreground/70">
                  Reading books on technology, fiction, and personal development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
