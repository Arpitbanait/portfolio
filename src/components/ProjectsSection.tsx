import { ExternalLink, Github, Sparkles, Brain, Eye, Server } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  categoryIcon: React.ElementType;
  categoryColor: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "AI Chat Assistant",
    description:
      "A conversational AI assistant powered by LLMs with RAG capabilities for context-aware responses. Features custom knowledge base integration and multi-turn conversations.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tags: ["LangChain", "GPT-4", "RAG", "FastAPI", "React"],
    category: "Generative AI",
    categoryIcon: Sparkles,
    categoryColor: "text-genai",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: "2",
    title: "Image Classification Pipeline",
    description:
      "End-to-end deep learning pipeline for multi-class image classification with transfer learning. Achieves 98% accuracy on custom dataset with model versioning.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    tags: ["PyTorch", "CNN", "Transfer Learning", "MLflow"],
    category: "ML/DL",
    categoryIcon: Brain,
    categoryColor: "text-mldl",
    github: "https://github.com",
  },
  {
    id: "3",
    title: "Real-time Object Detection",
    description:
      "YOLO-based object detection system for real-time video analytics. Optimized for edge deployment with TensorRT acceleration.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    tags: ["YOLO", "OpenCV", "TensorRT", "Python"],
    category: "Computer Vision",
    categoryIcon: Eye,
    categoryColor: "text-cv",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: "4",
    title: "Text-to-Image Generator",
    description:
      "Custom fine-tuned Stable Diffusion model for specialized image generation. Includes prompt engineering tools and batch processing.",
    image: "https://images.unsplash.com/photo-1547954575-855750c57bd3?w=600&h=400&fit=crop",
    tags: ["Stable Diffusion", "LoRA", "Gradio", "CUDA"],
    category: "Generative AI",
    categoryIcon: Sparkles,
    categoryColor: "text-genai",
    github: "https://github.com",
  },
  {
    id: "5",
    title: "ML Model Serving Platform",
    description:
      "Scalable microservices architecture for deploying ML models in production. Features A/B testing, monitoring, and auto-scaling.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    tags: ["FastAPI", "Docker", "Kubernetes", "Prometheus"],
    category: "Backend",
    categoryIcon: Server,
    categoryColor: "text-backend",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: "6",
    title: "Sentiment Analysis API",
    description:
      "NLP-powered sentiment analysis service with multi-language support. Processes millions of texts daily with sub-100ms latency.",
    image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=600&h=400&fit=crop",
    tags: ["Transformers", "BERT", "FastAPI", "Redis"],
    category: "ML/DL",
    categoryIcon: Brain,
    categoryColor: "text-mldl",
    github: "https://github.com",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const Icon = project.categoryIcon;

  return (
    <div className="group relative bg-card rounded-2xl border border-border overflow-hidden card-glow">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        <div className="absolute top-4 left-4">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card/80 backdrop-blur-sm text-sm font-medium ${project.categoryColor}`}
          >
            <Icon className="w-4 h-4" />
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-muted rounded-md text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg text-sm font-medium text-foreground hover:bg-primary/20 hover:text-primary transition-all"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent rounded-lg text-sm font-medium text-primary-foreground hover:opacity-90 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in AI/ML, Computer Vision, and Full-Stack
            Development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
