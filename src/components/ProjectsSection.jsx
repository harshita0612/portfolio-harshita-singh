import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Mock Interview",
    description: "An AI-powered mock interview platform with real-time question generation and instant feedback for any job role with user authentication",
    image: "/projects/project1.png",
    tags: ["React","Typescipt","TailwindCSS", "Gemini API", "FireBase"],
    demoUrl: "https://ai-mock-interview-1ena.vercel.app/",
    githubUrl: "https://github.com/harshita0612/ai-mock-interview.git",
  },

  {
    id: 2,
    title: "Brain Stroke Prediction",
    description:
      "A machine learning model predicting the likelihood of brain stroke, based on key health indicators- such as age, smoking status, medical histroy etc",
    image: "/projects/project2.png",
    tags: ["Python","Flask" ,"Pandas", "Random Forest", "Numpy"],
    githubUrl: "https://github.com/harshita0612/brain-stroke-prediction.git",
  },

  {
    id: 3,
    title: "Telecom Customer Churn Analysis",
    description:
      "Telecom churn analysis project involving SQL-based data exploration, Power BI dashboard creation, and machine learning models for predicting future churn trends",
    image: "/projects/project3.png",
    tags: ["SQL","PowerBI" ,"Python", "Machine Learning", "MS Excel"],
    githubUrl: "https://github.com/harshita0612/telecom-customer-churn-analysis-using-sql-ml-powerbi.git",
  },

  {
    id: 4,
    title: "Vendor Performance Data Analysis",
    description:
      "Vendor performance analysis using data visualization techniques to assess top brands, trends, and key insights through graphical summaries and comparative metrics",
    image: "/projects/project4.png",
    tags: ["SQL","Python", "MS Excel", "Matplotlib", "Pandas"],
    githubUrl: "https://github.com/harshita0612/vendor-performance-data-analysis-using-sql-python.git",
  },

  {
    id: 5,
    title: "Trendflix",
    description:
      "A dynamic movie site using the TMDb API with live search, stored user queries, and a section that highlights the top five most-searched movies",
    image: "/projects/project5.png",
    tags: ["React","TailwindCSS" ,"TMDB API", "Appwrite"],
    demoUrl: "https://trendflix-api-powered-cinemas.vercel.app/",
    githubUrl: "https://github.com/harshita0612/trendflix-api-powered-cinema.git",
  },

  {
    id: 6,
    title: "CurePoint Health Center",
    description:
      "A responsive healthcare platform showcasing services, organizational information, and an online patient registration system with a user-friendly UI",
    image: "/projects/project6.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://curepoint-health-centre.vercel.app/",
    githubUrl: "https://github.com/harshita0612/CurePoint-hospital-management-portal.git",
  },

  {
    id: 7,
    title: "Zentry",
    description:
      "An immersive 3D web showcase inspired by Zentry to present unique gaming collections and hubs with an interactive, modern design",
    image: "/projects/project7.png",
    tags: ["React", "TailwindCSS", "GSAP"],
    demoUrl: "https://zentry-3d-gaming-hub.vercel.app/",
    githubUrl: "https://github.com/harshita0612/zentry-3d-gaming-hub.git",
  },

  
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/harshita0612"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
