import React from "react";
import { Briefcase } from "lucide-react";

const internships = [
  { company: "Kinnyrabbit", role: "Full-Time Internship", period: "Oct 2024 – Dec 2024" },
  { company: "Accenture", role: "Data Analytics & Visualization (Virtual)", period: "June 2024" },
  { company: "Verizon", role: "Cloud Computing Platform Training", period: "June 2024" },
  { company: "Deloitte Australia", role: "Data Analytics (Virtual)", period: "June 2025" },
  { company: "Codsoft", role: "Virtual Internship - C++ Programming", period: "Nov 2024" },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            EXPERIENCE
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and learning experiences
          </p>
        </div>

        {/* Staggered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {internships.map((exp, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl
                animate-fade-in animate-delay-${index * 100}`}
            >
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 text-primary mr-3" />
                <h4 className="text-2xl font-semibold text-foreground">{exp.company}</h4>
              </div>
              <p className="text-muted-foreground mb-2">{exp.role}</p>
              <span className="text-muted-foreground">{exp.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
