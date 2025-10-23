import { Rocket, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 relative bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            PROJECTS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the work I’ve crafted with code and creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card border border-border p-6 rounded-lg hover:border-primary/50 transition-all group">
            <div className="aspect-video bg-secondary/20 rounded-lg mb-4 flex items-center justify-center">
              <Rocket className="text-primary" size={48} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">CodeChaos - DSA Games</h3>
            <p className="text-muted-foreground text-sm mb-4">In Progress</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-secondary/20 px-3 py-1 rounded-full text-foreground">UI</span>
              <span className="text-xs bg-secondary/20 px-3 py-1 rounded-full text-foreground">Angular JS</span>
              <span className="text-xs bg-secondary/20 px-3 py-1 rounded-full text-foreground">Springboot</span>
            </div>
          </div>

          <div className="bg-card border border-border p-6 rounded-lg hover:border-primary/50 transition-all group">
            <div className="aspect-video bg-secondary/20 rounded-lg mb-4 flex items-center justify-center">
              <Sparkles className="text-primary" size={48} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Monastery 360</h3>
            <p className="text-muted-foreground text-sm mb-4">In Progress</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-secondary/20 px-3 py-1 rounded-full text-foreground">UI (Figma) </span>
              <span className="text-xs bg-secondary/20 px-3 py-1 rounded-full text-foreground">MERN Stack</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;
