import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "React", level: 75, category: "frontend" },
  { name: "TypeScript", level: 60, category: "frontend" },
  { name: "Tailwind CSS", level: 76, category: "frontend" },
  { name: "Generative AI", level: 70},

  // Backend
  { name: "SQL", level: 80, category: "backend" },
  { name: "FireBase", level: 70, category: "backend" },
 
  // Tools
  { name: "Git/GitHub", level: 80, category: "tools" },
  { name: "Docker", level: 60, category: "tools" },
  { name: "Figma", level: 67, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
  { name: "Excel", level: 78, category: "tools" },
  { name: "Power BI", level: 82, category: "tools" },

  //Other
  { name: "Data Structure and Algorithms", level: 68, category: "other" },
  { name: "Python", level: 72, category: "other" },
  { name: "C++", level: 83, category: "other" },
  { name: "Object Oriented Programming", level: 80, category: "other" },
  { name: "Operating System", level: 79, category: "other" },
  { name: "Database Managment System", level: 80, category: "other" },
  { name: "Design Analysis and Algorithm", level: 77, category: "other" },
  { name: "Network Security and Cryptography", level: 82, category: "other" },
  { name: "Machine Learning", level: 57, category: "other" },
  { name: "Deep Learning", level: 48, category: "other" },
];

const categories = ["all", "frontend", "backend", "tools", "other"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
