import { useState } from "react";
import { X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    alt: "Residential solar panel installation on rooftop",
    category: "Residential",
  },
  {
    src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80",
    alt: "Commercial solar farm with multiple panels",
    category: "Commercial",
  },
  {
    // ✅ FIXED: replaced unstable image
    src: "https://images.unsplash.com/photo-1584270354949-1b7c1f87dfe7?auto=format&fit=crop&w=800&q=80",
    alt: "Solar panel technology close-up",
    category: "Technology",
  },
  {
    src: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=800&q=80",
    alt: "Installation team working on solar panels",
    category: "Installation",
  },
  {
    src: "https://images.unsplash.com/photo-1595437193398-f24279553f4f?auto=format&fit=crop&w=800&q=80",
    alt: "Solar panels on modern commercial rooftop",
    category: "Commercial",
  },
  {
    src: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=800&q=80",
    alt: "Aerial view of residential solar panel installation",
    category: "Residential",
  },
];

export function GallerySection() {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
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
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Project Gallery
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Explore our portfolio of successful solar installations across
            residential and commercial properties.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={cn(
                "group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-elevated",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <AspectRatio ratio={4 / 3}>
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = FALLBACK_IMAGE;
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </AspectRatio>

              {/* Overlay */}
              <div className="absolute inset-0 bg-solar-dark/0 group-hover:bg-solar-dark/50 transition-all duration-300 flex items-end">
                <div className="w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-solar-dark/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 text-background/70 hover:text-background transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage.replace("w=800", "w=1600")}
            alt="Gallery image enlarged"
            className="max-w-full max-h-[90vh] object-contain rounded-lg animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
