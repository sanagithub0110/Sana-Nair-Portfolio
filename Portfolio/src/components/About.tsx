import { GraduationCap } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "B.E. in Computer Engineering",
      institution: "Pimpri Chinchwad College of Engineering and Research",
      period: "2023 – 2027",
      score: "CGPA: 8.4",
    },
    {
      degree: "HSC - Information Technology",
      institution: "Jai Hind Junior College",
      period: "2022 – 2023",
      score: "77.8%",
    },
    {
      degree: "SSC",
      institution: "Podar International School",
      period: "2020 – 2021",
      score: "94.20%",
    },
  ];

  return (
    <section id="about" className="py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* ABOUT ME Section */}
        <div className="text-center flex flex-col items-center justify-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            ABOUT ME
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-6 max-w-4xl text-center">
            I am a passionate Computer Engineer dedicated to crafting visually
            stunning interfaces. With an eye for modern design and intuitive user experience,
            I love to combine creativity with functionality to bring interfaces to life
            , creating every innovation that feels both intuitive and engaging.
          </p>
        </div>

        {/* EDUCATION Section */}
        <div className="animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-foreground text-center">
            EDUCATION
          </h2>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-card border border-border p-8 rounded-lg hover:border-primary/50 transition-all text-left"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-foreground">
                    {edu.degree}
                  </h4>
                  <span className="text-muted-foreground">{edu.period}</span>
                </div>
                <p className="text-muted-foreground mb-2">{edu.institution}</p>
                <p className="text-primary font-semibold">{edu.score}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
