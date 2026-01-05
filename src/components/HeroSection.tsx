import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-glow delay-1000" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <span className="inline-block px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground mb-6">
            👋 Welcome to my portfolio
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up">
          <span className="text-foreground">Hi, I'm </span>
          <span className="text-gradient">Your Name</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up delay-200">
          AI/ML Engineer specializing in{" "}
          <span className="text-primary">Generative AI</span>,{" "}
          <span className="text-secondary">Deep Learning</span>, and{" "}
          <span className="text-accent">Computer Vision</span>
        </p>

        <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in-up delay-300">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all glow"
          >
            View My Work
          </a>
          <a
            href="#about"
            className="px-8 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-all"
          >
            Learn More
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 animate-fade-in-up delay-500">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-muted hover:bg-primary/20 hover:text-primary transition-all"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-muted hover:bg-primary/20 hover:text-primary transition-all"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="p-3 rounded-full bg-muted hover:bg-primary/20 hover:text-primary transition-all"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
      >
        <ArrowDown className="w-8 h-8 text-muted-foreground" />
      </a>
    </section>
  );
};

export default HeroSection;
