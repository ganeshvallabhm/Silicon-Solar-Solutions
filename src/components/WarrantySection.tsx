import { Shield, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const warranties = [
  {
    icon: Shield,
    title: "Solar Panels",
    years: "25",
    description: "Industry-leading warranty coverage on all solar panel installations",
  },
  {
    icon: CheckCircle,
    title: "Inverters",
    years: "10",
    description: "Comprehensive warranty on inverter equipment and performance",
  },
];

export function WarrantySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="warranty" className="py-16 md:py-24 bg-gradient-dark text-background">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={cn(
            "text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="inline-block px-4 py-1.5 bg-background/10 text-background rounded-full text-sm font-medium mb-4">
            Peace of Mind
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Industry-Leading{" "}
            <span className="text-primary">Warranty</span>
          </h2>
          <p className="text-background/70 text-base md:text-lg">
            We stand behind our work with comprehensive warranty coverage,
            ensuring your investment is protected for years to come.
          </p>
        </div>

        {/* Warranty Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {warranties.map((warranty, index) => (
            <div
              key={warranty.title}
              className={cn(
                "relative group rounded-2xl p-8 md:p-10 transition-all duration-500 overflow-hidden",
                "bg-background/5 backdrop-blur-sm border border-background/10",
                "hover:bg-background/10 hover:border-primary/30",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              </div>

              <div className="relative z-10">
                <warranty.icon className="h-12 w-12 text-primary mb-6" />
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-5xl md:text-6xl font-bold text-primary">
                    {warranty.years}
                  </span>
                  <span className="text-2xl text-background/80">Years</span>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-background mb-3">
                  {warranty.title} Warranty
                </h3>
                <p className="text-background/60 text-base leading-relaxed">
                  {warranty.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div
          className={cn(
            "flex flex-wrap justify-center gap-4 md:gap-8 mt-12 md:mt-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
          style={{ transitionDelay: "500ms" }}
        >
          {["Certified Installers", "Quality Assured", "24/7 Support", " Service All over Bengaluru "].map(
            (badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/5 border border-background/10"
              >
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm text-background/80">{badge}</span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
