import { ExternalLink, Github, Sparkles, Brain, Eye, Server, Database } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  image: string;
}

const projectsByCategory = {
  "Generative AI": {
    icon: Sparkles,
    color: "text-genai",
    projects: [
      {
        id: "1",
        title: "PPT Generator Tool",
        description: "AI-powered PowerPoint generation tool with intelligent slide creation and content organization.",
        tags: ["TypeScript", "LLMs", "Automation", "API"],
        github: "https://github.com/ArpitBanait/PPT_generator_Tool",
        image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&h=400&fit=crop",
      },
      {
        id: "2",
        title: "Medical Research Assistant RAG",
        description: "Retrieval-Augmented Generation system for medical research with vector database integration.",
        tags: ["RAG", "TypeScript", "Vector DB", "LLMs"],
        github: "https://github.com/ArpitBanait/Medical-Research-Assistant-RAG-",
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop",
      },
      {
        id: "3",
        title: "Job Preparation Agent",
        description: "AI agent that helps job seekers with interview preparation and resume optimization.",
        tags: ["TypeScript", "AI Agents", "LangChain", "FastAPI"],
        github: "https://github.com/ArpitBanait/Job-Preparation-Agent",
        image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop",
      },
      {
        id: "4",
        title: "Data Analytics Agent",
        description: "Intelligent agent for automated data analysis and insight generation from datasets.",
        tags: ["TypeScript", "Data Analysis", "AI Agents", "Python"],
        github: "https://github.com/ArpitBanait/Data-Analytics-Agent",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      },
      {
        id: "5",
        title: "Text-to-SQL AI Agent",
        description: "Convert natural language queries to SQL with intelligent database understanding.",
        tags: ["Python", "LLMs", "NLP", "SQL"],
        github: "https://github.com/ArpitBanait/Text-to-SQL-Ai-Agent",
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop",
      },
      {
        id: "6",
        title: "Youtube Video AI Assistant",
        description: "AI assistant for analyzing and summarizing YouTube video content with Q&A capabilities.",
        tags: ["NLP", "LLMs", "Python", "Video Analysis"],
        github: "https://github.com/ArpitBanait/Youtube_video_AI_Assistant",
        image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&h=400&fit=crop",
      },
    ],
  },
  "ML / Deep Learning": {
    icon: Brain,
    color: "text-mldl",
    projects: [
      {
        id: "7",
        title: "Brain Tumor Detector",
        description: "Deep learning model for detecting and classifying brain tumors from MRI images.",
        tags: ["Deep Learning", "CNN", "Medical Imaging", "Jupyter"],
        github: "https://github.com/ArpitBanait/Brain_tumor_detector",
        image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop",
      },
      {
        id: "8",
        title: "SMS Spam Classifier",
        description: "Machine learning classifier for identifying spam SMS messages with high accuracy.",
        tags: ["NLP", "Scikit-learn", "Classification", "Jupyter"],
        github: "https://github.com/ArpitBanait/Sms_Spam_classifier",
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop",
      },
      {
        id: "9",
        title: "Insurance Premium Predictor",
        description: "ML model to predict insurance premiums based on customer features and historical data.",
        tags: ["Python", "Regression", "Pandas", "Scikit-learn"],
        github: "https://github.com/ArpitBanait/Insurance_premium_predictor",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
      },
      {
        id: "11",
        title: "Movie Recommendation System",
        description: "Collaborative filtering recommendation system for personalized movie suggestions.",
        tags: ["Recommendation", "Python", "Pandas", "Machine Learning"],
        github: "https://github.com/ArpitBanait/Movie-Recommendation",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=400&fit=crop",
      },
      {
        id: "12",
        title: "Resume Analyzer",
        description: "AI-powered resume analysis tool for extracting skills, experience, and providing optimization suggestions.",
        tags: ["NLP", "Python", "Text Analysis", "ML"],
        github: "https://github.com/ArpitBanait/Resume_Analyzer",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
      },
    ],
  },
  "Computer Vision": {
    icon: Eye,
    color: "text-cv",
    projects: [
      {
        id: "13",
        title: "Face Detection",
        description: "Real-time face detection system using OpenCV with high accuracy.",
        tags: ["OpenCV", "Python", "Computer Vision", "Real-time"],
        github: "https://github.com/ArpitBanait/Face-detection",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&h=400&fit=crop",
      },
      {
        id: "14",
        title: "Eye-Controlled Mouse",
        description: "Control your mouse cursor using eye movement with computer vision.",
        tags: ["Eye Tracking", "OpenCV", "Python", "HCI"],
        github: "https://github.com/ArpitBanait/Eye-Controlled-Mouse",        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",      },
      {
        id: "15",
        title: "Hand-Controlled Mouse",
        description: "Hand gesture recognition for hands-free mouse control.",
        tags: ["Gesture Recognition", "OpenCV", "Python", "Mediapipe"],
        github: "https://github.com/ArpitBanait/Hand-controlled-mouse",
        image: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=600&h=400&fit=crop",
      },
    ],
  },
  "Data Analysis": {
    icon: Database,
    color: "text-dataanalysis",
    projects: [
      {
        id: "16",
        title: "Amazon Sales Analysis",
        description: "Comprehensive analysis of Amazon sales data with visualizations and insights.",
        tags: ["Pandas", "Data Visualization", "EDA", "Insights"],
        github: "https://github.com/ArpitBanait/Amazon-Sales-Analysis",
        image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=600&h=400&fit=crop",
      },
      {
        id: "17",
        title: "Ola Rides Analysis",
        description: "In-depth analysis of ride-sharing data with demand patterns and trends.",
        tags: ["Python", "Data Analysis", "Matplotlib", "Seaborn"],
        github: "https://github.com/ArpitBanait/Ola-rides-Analysis",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop",
      },
      {
        id: "18",
        title: "Prime Video Data Analysis",
        description: "Analysis of streaming content data with genre, release trends, and ratings.",
        tags: ["EDA", "Pandas", "Data Viz", "Jupyter"],
        github: "https://github.com/ArpitBanait/Prime_video_data_analysis",
        image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&h=400&fit=crop",
      },
      {
        id: "19",
        title: "Weather Forecast Data Analysis",
        description: "Time series analysis of weather data with forecasting and trends.",
        tags: ["Time Series", "Pandas", "Analysis", "Jupyter"],
        github: "https://github.com/ArpitBanait/Whetherforecast_data_analysis_project",
        image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=600&h=400&fit=crop",
      },
      {
        id: "20",
        title: "Blinkit Data Analysis",
        description: "E-commerce data analysis focusing on quick commerce trends and patterns.",
        tags: ["Data Analysis", "EDA", "Insights", "Python"],
        github: "https://github.com/ArpitBanait/Blinkit_data_analysis_project",
        image: "https://images.unsplash.com/photo-1601599561213-832382fd07ba?w=600&h=400&fit=crop",
      },
      {
        id: "21",
        title: "SQL Python Ecommerce Analysis",
        description: "Integration of SQL and Python for comprehensive e-commerce analytics.",
        tags: ["SQL", "Python", "Database", "Jupyter"],
        github: "https://github.com/ArpitBanait/SQL_python_Ecommerce_analysis",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      },
    ],
  },
  "Backend & Full Stack": {
    icon: Server,
    color: "text-backend",
    projects: [
      {
        id: "22",
        title: "Hospital Management System",
        description: "Full-stack hospital management system with patient records and appointments.",
        tags: ["JavaScript", "React", "Node.js", "Database"],
        github: "https://github.com/ArpitBanait/Hospital_management_system",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
      },
      {
        id: "23",
        title: "Ecommerce Website Django",
        description: "Complete e-commerce platform built with Django backend and HTML frontend.",
        tags: ["Django", "Python", "HTML", "Database"],
        github: "https://github.com/ArpitBanait/Ecommerce_website_Django",
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop",
      },
      {
        id: "24",
        title: "Accident Report Platform",
        description: "Web platform for reporting and analyzing accident data with real-time updates.",
        tags: ["TypeScript", "React", "Backend", "API"],
        github: "https://github.com/ArpitBanait/accident-report-platform",
        image: "https://images.unsplash.com/photo-1569144654912-5f146d08b98b?w=600&h=400&fit=crop",
      },
    ],
  },
};

interface ProjectCardProps {
  project: Project;
  categoryColor: string;
}

const ProjectCard = ({ project, categoryColor }: ProjectCardProps) => {
  return (
    <div className="group relative bg-card rounded-2xl border border-border overflow-hidden card-glow hover:border-primary/50 transition-all h-full flex flex-col">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2.5 py-1 rounded-md text-xs font-medium ${categoryColor === "text-genai" ? "bg-genai/10 text-genai" : categoryColor === "text-mldl" ? "bg-mldl/10 text-mldl" : categoryColor === "text-cv" ? "bg-cv/10 text-cv" : categoryColor === "text-dataanalysis" ? "bg-dataanalysis/10 text-dataanalysis" : "bg-muted text-muted-foreground"}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <div className="flex items-center">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg text-sm font-medium text-foreground hover:bg-primary/20 hover:text-primary transition-all"
          >
            <Github className="w-4 h-4" />
            View Code
          </a>
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
            Explore my work across Generative AI, Machine Learning, Computer Vision, and Data Analysis
          </p>
        </div>

        {/* Render projects by category */}
        {Object.entries(projectsByCategory).map(([category, { icon: Icon, color, projects }]) => (
          <div key={category} className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Icon className={`w-8 h-8 ${color}`} />
              <h3 className={`text-3xl font-bold ${color}`}>{category}</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProjectCard project={project} categoryColor={color} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
