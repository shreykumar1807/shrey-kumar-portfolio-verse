
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Foodie-Find-Explore",
      description: "A web application that helps users discover new restaurants, cafes, and food spots based on their preferences, location, and dietary restrictions.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      liveLink: "https://foodie-find-explore.lovable.app/",
      githubLink: "#",
      featured: true
    },
    {
      id: 2,
      title: "Sample Project 1",
      description: "A placeholder project to showcase additional work you may have done in the future.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "Django", "PostgreSQL"],
      liveLink: "#",
      githubLink: "#",
      featured: false
    },
    {
      id: 3,
      title: "Sample Project 2",
      description: "Another placeholder project to demonstrate your skills and experience.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
      tags: ["JavaScript", "HTML", "CSS", "Firebase"],
      liveLink: "#",
      githubLink: "#",
      featured: false
    }
  ];

  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">Projects</h2>

        {featuredProject && (
          <div className="mb-16 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h3 className="text-2xl font-semibold mb-6">Featured Project</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <div className="flex gap-2 mb-3">
                      {featuredProject.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-primary/80 text-white text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-bold mb-4">{featuredProject.title}</h4>
                <p className="text-foreground/70 mb-6">{featuredProject.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button asChild>
                    <a href={featuredProject.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={featuredProject.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold mb-6">Other Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card key={project.id} className="overflow-hidden card-hover animate-fade-in" style={{ animationDelay: `${400 + index * 200}ms` }}>
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-foreground/70 text-sm">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mt-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-accent/20 text-accent-foreground rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex gap-3">
                      <Button size="sm" variant="ghost" asChild>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-1 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="ghost" asChild>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-1 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
