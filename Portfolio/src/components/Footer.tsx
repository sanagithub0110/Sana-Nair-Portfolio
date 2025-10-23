const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h3 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              DREAM. DESIGN. DEVELOP.
            </span>
          </h3>
          <a
            href="#contact"
            className="inline-block bg-primary text-primary-foreground font-bold text-xl px-12 py-6 rounded-full hover:bg-primary/90 transition-all hover:scale-105"
          >
            Get in Touch
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground mb-8">
          <a href="mailto:sanasantosh05@gmail.com" className="hover:text-primary transition-colors">
            EMAIL
          </a>
          <a href="https://www.linkedin.com/in/sananair" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            LINKEDIN
          </a>
          <a href="https://github.com/sanagithub0110" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            GITHUB
          </a>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Sana Santosh Nair. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
