import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "arpitbanait@gmail.com",
    href: "mailto:arpitbanait@gmail.com",
    color: "hover:text-primary",
  },
  {
    icon: Phone,
    label: "Contact",
    value: "+91 82373 87044",
    href: "tel:+918237387044",
    color: "hover:text-genai",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/arpit-banait-350238283",
    href: "https://www.linkedin.com/in/arpit-banait-350238283",
    color: "hover:text-mldl",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Arpitbanait",
    href: "https://github.com/Arpitbanait",
    color: "hover:text-foreground",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className={`group p-6 bg-card rounded-2xl border border-border card-glow animate-fade-in-up flex items-center gap-4`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon
                      className={`w-7 h-7 text-muted-foreground group-${link.color} transition-colors`}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {link.label}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      {link.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5" />
              <span>Available for remote work worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
