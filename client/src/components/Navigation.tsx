import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    setIsHomePage(window.location.pathname === "/");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Se estamos na home, faz scroll direto
    if (window.location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    } else {
      // Se estamos em outra página, redireciona para home com scrollTo
      window.location.href = `/?scrollTo=${sectionId}`;
    }
  };

  const navItems = [
    { type: "scroll", id: "sobre", label: "Sobre" },
    { type: "scroll", id: "expertise", label: "Expertise" },
    { type: "scroll", id: "palestras", label: "Palestras" },
    { type: "scroll", id: "resultados", label: "Resultados" },
    { type: "scroll", id: "experiencia", label: "Experiência" },
    { type: "scroll", id: "contato", label: "Contato" },
    { type: "link", href: "/blog", label: "Blog" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomePage
          ? isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-transparent"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <a
            href="/"
            className="text-xl md:text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            Gustavo Reis
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, idx) => {
              if (item.type === "scroll") {
                return (
                  <button
                    key={idx}
                    onClick={() => scrollToSection(item.id!)}
                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                );
              }

              if (item.type === "link") {
                return (
                  <Link key={idx} href={item.href!}>
                    <span className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors cursor-pointer">
                      {item.label}
                    </span>
                  </Link>
                );
              }
            })}

            <Button
              onClick={() => {
                if (window.location.pathname === "/") {
                  scrollToSection("contato");
                } else {
                  window.location.href = "/?scrollTo=contato";
                }
              }}
              size="sm"
            >
              Solicite uma Palestra
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-3">
              {navItems.map((item, idx) => {
                if (item.type === "scroll") {
                  return (
                    <button
                      key={idx}
                      onClick={() => scrollToSection(item.id!)}
                      className="text-left px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-md transition-colors"
                    >
                      {item.label}
                    </button>
                  );
                }

                if (item.type === "link") {
                  return (
                    <Link key={idx} href={item.href!}>
                      <span
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-left px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-md transition-colors cursor-pointer"
                      >
                        {item.label}
                      </span>
                    </Link>
                  );
                }
              })}

              <div className="px-4 pt-2">
                <Button
                  onClick={() => {
                    if (window.location.pathname === "/") {
                      scrollToSection("contato");
                    } else {
                      window.location.href = "/?scrollTo=contato";
                    }
                    setIsMobileMenuOpen(false);
                  }}
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
