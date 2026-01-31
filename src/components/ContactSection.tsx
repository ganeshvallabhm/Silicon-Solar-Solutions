import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "917892388978";

interface FormData {
  name: string;
  phone: string;
  area: string;
  pincode: string;
}

const socialLinks = [
  {
    name: "WhatsApp",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/silicon_solar_solutions/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/siliconsolarsolutions-undefined-48498a3a9/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z" />
      </svg>
    ),
  },
];

export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    area: "",
    pincode: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/^[6-9]\d{9}$/.test(formData.phone)) newErrors.phone = "Invalid phone number";
    if (formData.pincode && !/^\d{6}$/.test(formData.pincode)) newErrors.pincode = "Invalid pincode";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please fix the form errors.",
      });
      return;
    }

    const message = encodeURIComponent(
      `Hello! I'm interested in a Free Solar Inspection.

Name: ${formData.name}
Phone: ${formData.phone}
Area: ${formData.area}
Pincode: ${formData.pincode}`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");

    setFormData({ name: "", phone: "", area: "", pincode: "" });
    setErrors({});
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div ref={ref} className={cn("text-center mb-12 transition-all", isVisible ? "opacity-100" : "opacity-0")}>
          <h2 className="text-4xl font-bold">
            Request Your <span className="text-gradient-solar">Free Inspection</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <a href="tel:+917892388978" className="flex gap-4 p-4 bg-card rounded-xl">
              <Phone className="text-primary" />
              <span>+91 78923 88978</span>
            </a>

            <a href="mailto:siliconsolarsolutions1@gmail.com" className="flex gap-4 p-4 bg-card rounded-xl">
              <Mail className="text-primary" />
              <span>siliconsolarsolutions1@gmail.com</span>
            </a>

            {/* ✅ LINKEDIN CONTACT BLOCK */}
            <a
              href="https://www.linkedin.com/in/siliconsolarsolutions-undefined-48498a3a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-card hover:bg-card/80 transition-colors"
            >
              <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z" />
              </svg>
              <span>LinkedIn – Silicon Solar Solutions</span>
            </a>

            <div className="flex gap-4 p-4 bg-card rounded-xl">
              <MapPin className="text-primary" />
              <span>Bengaluru</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-card p-6 rounded-xl space-y-4">
            <Label>Name</Label>
            <Input name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />

            <Label>Phone</Label>
            <Input name="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />

            <Button type="submit" className="w-full">
              Get Free Inspection
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
