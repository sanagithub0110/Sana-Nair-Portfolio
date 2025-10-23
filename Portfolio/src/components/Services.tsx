import { Palette, Layout, Figma, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI Design",
      description:
        "Creating visually appealing interfaces with modern design principles, color theory and typography that engage users.",
      features: ["Visual Design", "Color Schemes", "Typography", "Brand Identity"],
    },
    
    {
      icon: Figma,
      title: "Interactive Prototypes",
      description:
        "Building interactive prototypes that bring designs to life, allowing stakeholders to experience the final product.",
      features: [
        "Clickable Prototypes",
        "Animations",
        "User Testing",
        "Design Systems",
      ],
    },
    {
  icon: Sparkles,
  title: "Front-End Development",
  description:
    "Building responsive, interactive, and user-friendly web applications using modern front-end technologies and best practices.",
  features: [
    "Responsive Design",
    "React & JavaScript",
    "Performance Optimization",
    "Cross-Browser Compatibility",
  ],
}

  ];

  return (
    <section id="services" className="py-20 relative bg-background">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            MY SERVICES
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Offering a range of services to turn your ideas into engaging, user-friendly digital experiences
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-primary/20 p-4 rounded-xl w-fit mb-6">
                <service.icon className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm text-foreground/80"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="glass-card p-12 rounded-2xl text-center max-w-3xl mx-auto animate-scale-in">
          <h3 className="text-3xl font-bold mb-4 text-foreground">
            Ready to Make It Happen?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you’re building from scratch or refreshing your brand, I can help transform your ideas into reality. Let’s join forces to craft designs that speak, inspire, and connect.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Hire Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => {
                const element = document.querySelector("#portfolio");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
