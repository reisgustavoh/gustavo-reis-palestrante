import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "sobre", label: "Sobre" },
    { id: "expertise", label: "Expertise" },
    { id: "palestras", label: "Palestras" },
    { id: "resultados", label: "Resultados" },
    { id: "experiencia", label: "Experiência" },
    { id: "contato", label: "Contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl md:text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            Gustavo Reis
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button onClick={() => scrollToSection("contato")} size="sm">
              Solicite uma Palestra
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button
                  onClick={() => scrollToSection("contato")}
                  className="w-full"
                  size="sm"
                >
                  Solicite uma Palestra
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
