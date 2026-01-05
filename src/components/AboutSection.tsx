import { Code2, Brain, Sparkles, Database } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "AI/ML Expert",
    description: "Deep expertise in machine learning and neural networks",
  },
  {
    icon: Sparkles,
    title: "GenAI Specialist",
    description: "Building cutting-edge generative AI applications",
  },
  {
    icon: Code2,
    title: "Full Stack Dev",
    description: "End-to-end development from frontend to backend",
  },
  {
    icon: Database,
    title: "Data Engineer",
    description: "Designing scalable data pipelines and systems",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about pushing the boundaries of AI and creating
            innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm an AI/ML Engineer with a passion for building intelligent
              systems that solve real-world problems. With expertise spanning
              Generative AI, Deep Learning, Computer Vision, and Full-Stack
              Development, I bring a unique perspective to every project.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in technology has led me to work on cutting-edge
              projects involving large language models, neural network
              architectures, and scalable backend systems. I thrive on
              challenges that require both technical depth and creative
              problem-solving.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring the latest research
              papers, contributing to open-source projects, or mentoring
              aspiring developers in the AI/ML space.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="p-6 bg-card rounded-xl border border-border card-glow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
