import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollPosition } from "@/hooks/useScrollAnimation";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#warranty", label: "Warranty" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isScrolled } = useScrollPosition();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/95 backdrop-blur-md shadow-card"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        {/* Increased header height */}
        <div className="flex items-center justify-between h-28 md:h-32">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3"
          >
            <img
              src={logo}
              alt="Silicon Solar Solutions"
              className="h-16 md:h-20 w-auto object-contain"
            />
            <span
              className={`font-bold text-lg md:text-xl transition-colors ${isScrolled ? "text-foreground" : "text-background"
                }`}
            >
              Silicon Solar
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors hover:text-primary ${isScrolled ? "text-foreground" : "text-background"
                  }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+917892388978">
              <Button
                variant="ghost"
                size="sm"
                className={`gap-2 ${isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-background hover:text-primary hover:bg-background/10"
                  }`}
              >
                <Phone className="h-4 w-4" />
                <span className="hidden lg:inline">+91 78923 88978</span>
              </Button>
            </a>
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-solar"
            >
              Get Free Inspection
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 transition-colors ${isScrolled ? "text-foreground" : "text-background"
              }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border animate-slide-in-right">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-left py-3 px-4 text-foreground font-medium hover:bg-muted rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t border-border mt-2 flex flex-col gap-3">
              <a href="tel:+917892388978" className="w-full">
                <Button variant="outline" className="w-full gap-2">
                  <Phone className="h-4 w-4" />
                  +91 78923 88978
                </Button>
              </a>
              <Button
                onClick={() => scrollToSection("#contact")}
                className="w-full bg-primary text-primary-foreground"
              >
                Get Free Inspection
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
