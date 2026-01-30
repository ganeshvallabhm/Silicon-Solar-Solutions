import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import solarHeroImage from "@/assets/solar-farm-hero.jpg";

const WHATSAPP_NUMBER = "917892388978";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi! I'm interested in getting a free solar inspection for my property."
);

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
      "_blank"
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Solar Farm Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${solarHeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/55 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-6 md:mb-8 animate-fade-up">
            <img
              src={logo}
              alt="Silicon Solar Solutions"
              className="h-32 md:h-40 lg:h-48 w-auto mx-auto drop-shadow-2xl"
            />
          </div>

          {/* Company Name */}
          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-background mb-4 md:mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Silicon Solar Solutions
          </h1>

          {/* Tagline */}
          <p
            className="text-lg md:text-xl lg:text-2xl text-background/90 mb-8 md:mb-10 font-light animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Lighting the Future with Clean Energy
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-solar text-base md:text-lg px-6 md:px-8 py-5 md:py-6 hover-glow transition-all"
            >
              Get Free Inspection
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={openWhatsApp}
              className="bg-[#25D366] border-[#25D366] text-white hover:bg-[#20BA5A] hover:border-[#20BA5A] hover:text-white text-base md:text-lg px-6 md:px-8 py-5 md:py-6 transition-all"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Contact on WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-gentle">
        <button
          onClick={scrollToContact}
          className="text-background/70 hover:text-background transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
}
