
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5 dark:to-accent/10 z-0"></div>
      
      {/* Animated circles */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl animate-pulse z-0"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl animate-pulse z-0"></div>
      
      <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            MR. SHREY KUMAR
          </h1>
          <h2 className="text-xl md:text-2xl text-foreground/80 mb-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Aspiring Software Engineer | AI & Cybersecurity Enthusiast | Front-End Developer
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto lg:mx-0 mb-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
            B.Tech student in Information Science and Engineering at RV Institute of Technology, passionate about artificial intelligence, cybersecurity, and front-end development. Looking to innovate and make an impact in the tech world.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "600ms" }}>
            <Button asChild className="rounded-full">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <a href="#contact">Contact Me</a>
            </Button>
            <Button asChild variant="secondary" className="rounded-full">
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
          
          <div className="mt-8 flex gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "800ms" }}>
            <Button variant="ghost" size="icon" className="rounded-full hover:text-primary">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:text-primary">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:text-primary">
              <a href="mailto:youremail@example.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </Button>
          </div>
        </div>
        
        <div className="flex-1 max-w-md">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-2xl"></div>
            <img
              src="/lovable-uploads/0c1c3923-6ef9-4f0b-a265-801d5878a61b.png"
              alt="Shrey Kumar"
              className="relative z-10 rounded-full border-4 border-primary/20 shadow-xl animate-fade-in"
              style={{ animationDelay: "1000ms" }}
            />
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="text-primary h-6 w-6" />
      </a>
    </section>
  );
};

export default HeroSection;
