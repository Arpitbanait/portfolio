import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  description: string;
  highlights: string[];
}

const educationData: Education[] = [
  {
    id: "btech",
    degree: "Bachelor of Technology (B.Tech) - Computer Science and Engineering",
    institution: "Indian Institute of Information Technology Nagpur",
    duration: "2023 - 2027",
    description: "",
    highlights: [],
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (HSC) - 12th Standard",
    institution: "Gandhi City Junior College, Wardha",
    duration: "2023",
    description: "Completed Higher Secondary Education with strong performance in Science stream.",
    highlights: [
      "Percentage: 78.83%",
    ],
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (SSC) - 10th Standard",
    institution: "Agragami High School, Wardha",
    duration: "2021",
    description: "Completed Secondary Education with excellent academic performance.",
    highlights: [
      "Percentage: 90.50%",
    ],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-12 relative">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text">
            <span className="text-gradient">Education</span>
          </h2>
        </div>

        {/* Education */}
        <div className="max-w-5xl mx-auto space-y-4">
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className="glass-panel p-5 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center gap-3 flex-1">
                  <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-base font-semibold text-foreground">
                      {edu.institution}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground md:ml-auto flex-shrink-0">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium text-base">{edu.duration}</span>
                </div>
              </div>

              {edu.description && edu.highlights.length > 0 && (
                <div className="flex flex-col md:flex-row md:items-center gap-3 mt-3 ml-10">
                  <p className="text-base text-muted-foreground flex-1">
                    {edu.description}
                  </p>
                  
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="text-sm px-3 py-1.5 rounded bg-primary/10 text-primary border border-primary/20"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
