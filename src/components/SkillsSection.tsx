import { Sparkles, Brain, Eye, Server, Database } from "lucide-react";

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  borderColor: string;
  skills: { name: string; level: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "genai",
    title: "Generative AI",
    icon: Sparkles,
    color: "text-genai",
    bgColor: "bg-genai/10",
    borderColor: "border-genai/30",
    skills: [
      { name: "LLMs (GPT, Claude, Llama)", level: 95 },
      { name: "Prompt Engineering", level: 90 },
      { name: "LangChain / LlamaIndex", level: 88 },
      { name: "RAG Systems", level: 92 },
      { name: "Fine-tuning & PEFT", level: 85 },
      { name: "Diffusion Models", level: 80 },
    ],
  },
  {
    id: "mldl",
    title: "ML / Deep Learning",
    icon: Brain,
    color: "text-mldl",
    bgColor: "bg-mldl/10",
    borderColor: "border-mldl/30",
    skills: [
      { name: "PyTorch", level: 92 },
      { name: "TensorFlow / Keras", level: 88 },
      { name: "Scikit-learn", level: 95 },
      { name: "Neural Networks", level: 90 },
      { name: "Transformers", level: 88 },
      { name: "MLOps / MLflow", level: 82 },
    ],
  },
  {
    id: "cv",
    title: "Computer Vision",
    icon: Eye,
    color: "text-cv",
    bgColor: "bg-cv/10",
    borderColor: "border-cv/30",
    skills: [
      { name: "OpenCV", level: 90 },
      { name: "Object Detection (YOLO)", level: 88 },
      { name: "Image Segmentation", level: 85 },
      { name: "Face Recognition", level: 82 },
      { name: "Video Analytics", level: 78 },
      { name: "3D Vision", level: 75 },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: Server,
    color: "text-backend",
    bgColor: "bg-backend/10",
    borderColor: "border-backend/30",
    skills: [
      { name: "Python / FastAPI", level: 92 },
      { name: "Node.js / Express", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 78 },
      { name: "Docker / Kubernetes", level: 82 },
      { name: "AWS / GCP", level: 80 },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: Database,
    color: "text-database",
    bgColor: "bg-database/10",
    borderColor: "border-database/30",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 80 },
      { name: "Vector Databases", level: 85 },
      { name: "SQL Optimization", level: 82 },
      { name: "Data Modeling", level: 85 },
    ],
  },
];

const SkillCard = ({ category }: { category: SkillCategory }) => {
  const Icon = category.icon;

  return (
    <div
      className={`p-6 rounded-2xl border ${category.borderColor} ${category.bgColor} card-glow backdrop-blur-sm`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div
          className={`w-12 h-12 rounded-xl ${category.bgColor} flex items-center justify-center`}
        >
          <Icon className={`w-6 h-6 ${category.color}`} />
        </div>
        <h3 className={`text-xl font-bold ${category.color}`}>
          {category.title}
        </h3>
      </div>

      <div className="space-y-4">
        {category.skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-foreground">{skill.name}</span>
              <span className="text-sm text-muted-foreground">
                {skill.level}%
              </span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-1000 ease-out`}
                style={{
                  width: `${skill.level}%`,
                  background: `linear-gradient(90deg, hsl(var(--${category.id})) 0%, hsl(var(--${category.id}) / 0.6) 100%)`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning AI/ML, Computer Vision, Backend
            Development, and Database technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <SkillCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
