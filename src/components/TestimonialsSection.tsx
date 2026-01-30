import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
    {
        name: "Ramesh Kumar",
        location: "Whitefield, Bangalore",
        feedback:
            "The solar installation was smooth and professionally handled. My electricity bill has reduced drastically within the first month itself.",
        rating: 5,
    },
    {
        name: "Ananya Rao",
        location: "Jayanagar, Bangalore",
        feedback:
            "Very knowledgeable team and excellent after-installation support. They explained everything clearly and delivered on time.",
        rating: 5,
    },
    {
        name: "Mohammed Irfan",
        location: "Yelahanka, Bangalore",
        feedback:
            "Clean installation and quality workmanship. The system performance is exactly as promised. Highly recommended.",
        rating: 5,
    },
    {
        name: "Suresh Patel",
        location: "Electronic City, Bangalore",
        feedback:
            "From site inspection to final setup, everything was well coordinated. A reliable and trustworthy solar solutions provider.",
        rating: 5,
    },
];

export function TestimonialsSection() {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section id="testimonials" className="py-16 md:py-24 bg-background">
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
                        Testimonials
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        What Our Customers Say
                    </h2>
                    <p className="text-muted-foreground text-base md:text-lg">
                        Trusted by homeowners and businesses across Bangalore
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={testimonial.name}
                            className={cn(
                                "group hover-lift transition-all duration-500 border-border/50 bg-card",
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-10"
                            )}
                            style={{ transitionDelay: `${index * 100 + 200}ms` }}
                        >
                            <CardContent className="p-6">
                                {/* Star Rating */}
                                <div className="flex gap-1 mb-4">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-4 w-4 fill-primary text-primary"
                                        />
                                    ))}
                                </div>

                                {/* Feedback */}
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                    "{testimonial.feedback}"
                                </p>

                                {/* Customer Info */}
                                <div className="border-t border-border/50 pt-4">
                                    <h4 className="font-semibold text-foreground text-base mb-1">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-muted-foreground text-xs">
                                        {testimonial.location}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
