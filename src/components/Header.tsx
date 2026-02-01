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

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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

      {/* Mobile Menu - Full Screen Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-28 z-[100] bg-[#0f172a] animate-slide-in-right">
          <nav className="container mx-auto px-6 py-8 flex flex-col gap-3 h-full overflow-y-auto">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-left py-4 px-5 text-white font-semibold text-lg hover:bg-white/10 rounded-lg transition-all border border-transparent hover:border-primary/30"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-6 border-t border-white/20 mt-4 flex flex-col gap-4">
              <a href="tel:+917892388978" className="w-full">
                <Button variant="outline" className="w-full gap-2 py-6 text-base border-white/30 text-white hover:bg-white/10 hover:text-white">
                  <Phone className="h-5 w-5" />
                  +91 78923 88978
                </Button>
              </a>
              <Button
                onClick={() => scrollToSection("#contact")}
                className="w-full bg-primary text-primary-foreground py-6 text-base hover:bg-primary/90 shadow-lg"
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
