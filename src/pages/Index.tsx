
import { useEffect } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ChatbotBubble from "@/components/ChatbotBubble";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Shrey Kumar | Portfolio";
  }, []);

  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
        <ChatbotBubble />
      </div>
    </ThemeProvider>
  );
};

export default Index;
