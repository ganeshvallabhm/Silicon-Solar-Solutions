import {
  Search,
  Home,
  Building2,
  PenTool,
  Wrench,
  Zap,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Search,
    title: "Free Site Inspection",
    description:
      "Our experts will visit your location to assess solar potential, roof condition, and provide personalized recommendations at no cost.",
    featured: true,
  },
  {
    icon: Home,
    title: "Residential Solar Installation",
    description:
      "Custom solar solutions designed for your home. Reduce electricity bills and increase property value with clean energy.",
    featured: false,
  },
  {
    icon: Zap,
    title: "EV Charging Station Installation",
    description:
      "Professional installation of home and commercial EV charging stations with safety compliance and future-ready power management.",
    category: "EV Solutions",
    features: [
      "Home EV chargers",
      "Commercial EV stations",
      "Fast & smart charger support",
    ],
    featured: false,
  },
  {
    icon: Building2,
    title: "Commercial Solar Installation",
    description:
      "Large-scale solar systems for businesses, factories, and commercial buildings. Maximize ROI with sustainable energy.",
    featured: false,
  },
  {
    icon: PenTool,
    title: "Design, Engineering & Procurement",
    description:
      "End-to-end project planning including system design, engineering calculations, and quality equipment sourcing.",
    featured: false,
  },
  {
    icon: Wrench,
    title: "Installation and Warranty Support",
    description:
      "Professional installation by certified technicians with comprehensive warranty coverage and ongoing support.",
    featured: false,
  },
];

export function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          ref={ref}
          className={cn(
            "text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Complete Solar Solutions
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            From initial consultation to installation and beyond, we provide
            comprehensive solar services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={cn(
                "group hover-lift transition-all duration-500 border-border/50",
                service.featured
                  ? "md:col-span-2 lg:col-span-1 bg-gradient-solar text-primary-foreground border-transparent"
                  : "bg-card",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <CardHeader>
                <div
                  className={cn(
                    "w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110",
                    service.featured
                      ? "bg-primary-foreground/20"
                      : "bg-primary/10"
                  )}
                >
                  <service.icon
                    className={cn(
                      "h-7 w-7",
                      service.featured ? "text-primary-foreground" : "text-primary"
                    )}
                  />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <CardTitle
                    className={cn(
                      "text-xl",
                      service.featured ? "text-primary-foreground" : "text-foreground"
                    )}
                  >
                    {service.title}
                  </CardTitle>
                  {service.category && (
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {service.category}
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription
                  className={cn(
                    "text-base leading-relaxed",
                    service.featured
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  )}
                >
                  {service.description}
                </CardDescription>
                {service.features && (
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className={cn(
                          "flex items-center gap-2 text-sm",
                          service.featured
                            ? "text-primary-foreground/70"
                            : "text-muted-foreground"
                        )}
                      >
                        <span className={cn(
                          "w-1.5 h-1.5 rounded-full",
                          service.featured ? "bg-primary-foreground/50" : "bg-primary"
                        )} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
