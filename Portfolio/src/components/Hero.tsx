import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import profilePic from "@/assets/profile-picture.jpg";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Web Developer | UI/UX Designer | Digital Innovator";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              Hi, Meet <span className="text-primary">Sana</span> 👋
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
             I’m Sana Santosh Nair, an aspiring Computer Engineer with a passion for web development, digital innovation and cross-cultural collaboration. I enjoy creating modern, user-friendly websites and applications that combine technical expertise with creativity and I love contributing to innovative, globally-minded projects.
            </p>
          </div>

          {/* Profile Section */}
          <div className="flex justify-center mb-16 animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
              <img
                src={profilePic}
                alt="Sana Santosh Nair - Computer Engineer"
                className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-2 border-primary/30"
              />
            </div>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
            {["User Interface", "Web-Development", "Artificial Intelligence"].map((skill, index) => (
              <span
                key={index}
                className="px-6 py-2 bg-card border border-border rounded-full text-foreground/80 hover:border-primary/50 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
              onClick={() => {
                const element = document.querySelector("#portfolio");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
            </Button>
            <a href="/Sana_Nair_Resume.pdf" download>
            <Button
               size="lg"
               variant="outline"
               className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
      >
        Download Resume
      </Button>
    </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
