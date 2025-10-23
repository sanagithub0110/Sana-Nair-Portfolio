import { useEffect, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: "HTML & CSS", level: 100, category: "Frontend" },
    { name: "React JS", level: 70, category: "Frontend" },
    { name: "Python", level: 70, category: "Programming" },
    { name: "C++", level: 80, category: "Programming" },
    { name: "Java", level: 60, category: "Programming" },
    { name: "MongoDB", level: 100, category: "Database" },
    { name: "UI/UX Design", level: 90, category: "Design" },
    { name: "MS Excel", level: 90, category: "Tools" },
    { name: "Power BI", level: 80, category: "Tools" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector("#skills");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-32 relative bg-background">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="mb-20 text-center animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            MY EXPERTISE
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Technical competencies and areas of expertise
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-card border border-border p-6 rounded-lg hover:border-primary/50 transition-all"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-foreground">{skill.name}</h3>
                <span className="text-sm text-muted-foreground">{skill.category}</span>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-secondary/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000"
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${index * 50}ms`,
                    }}
                  ></div>
                </div>
                <p className="text-xs text-muted-foreground">{skill.level}% proficiency</p>
              </div>
            </div>
          ))}
        </div>

        {/* Favorite Stack Section */}
        <div className="mt-32 animate-fade-in">
          <h3 className="text-4xl md:text-5xl font-bold mb-12 text-foreground text-center">
            FAVOURITE STACK
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {["HTML", "CSS", "JS", "Python", "React", "MongoDB", "Figma", "Git"].map((tech, index) => (
              <div
                key={tech}
                className="bg-card border border-border p-6 rounded-lg hover:border-primary/50 transition-all flex items-center justify-center aspect-square"
              >
                <span className="text-2xl font-bold text-foreground">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
