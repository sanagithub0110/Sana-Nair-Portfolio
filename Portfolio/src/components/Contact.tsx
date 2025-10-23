import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  subject: z.string().trim().min(1, { message: "Subject is required" }).max(200),
  message: z.string().trim().min(1, { message: "Message is required" }).max(1000),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, Maharashtra",
      link: null,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8087666355",
      link: "tel:+918087666355",
    },
    {
      icon: Mail,
      label: "Email",
      value: "sanasantosh05@gmail.com",
      link: "mailto:sanasantosh05@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/sananair",
      link: "https://linkedin.com/in/sananair",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/sanagithub0110",
      link: "https://github.com/sanagithub0110",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  return (
    <section id="contact" className="py-32 relative bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-20 animate-fade-in text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            LET'S COLLABORATE!
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss your project or opportunity
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card border border-border p-8 rounded-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a href="mailto:sanasantosh05@gmail.com" className="text-foreground hover:text-primary transition-colors">
                  sanasantosh05@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Phone className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <a href="tel:+918087666355" className="text-foreground hover:text-primary transition-colors">
                  +91-8087666355
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="text-foreground">Pune, Maharashtra</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Connect</h3>
            <div className="space-y-4">
              <a
                href="https://linkedin.com/in/sananair"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
                <span>linkedin.com/in/sananair</span>
              </a>
              <a
                href="https://github.com/sanagithub0110"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
                <span>github.com/sanagithub0110</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
