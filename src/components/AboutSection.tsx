import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Monthly electricity bill data
const billData = [
  { month: "Jan", withoutSolar: 3800, withSolar: 3800 },
  { month: "Feb", withoutSolar: 3650, withSolar: 3650 },
  { month: "Mar", withoutSolar: 3900, withSolar: 3900 },
  { month: "Apr", withoutSolar: 4100, withSolar: 950 },
  { month: "May", withoutSolar: 4200, withSolar: 850 },
  { month: "Jun", withoutSolar: 4150, withSolar: 900 },
  { month: "Jul", withoutSolar: 3950, withSolar: 1100 },
  { month: "Aug", withoutSolar: 3850, withSolar: 1050 },
  { month: "Sep", withoutSolar: 3700, withSolar: 1150 },
  { month: "Oct", withoutSolar: 3600, withSolar: 1200 },
  { month: "Nov", withoutSolar: 3750, withSolar: 1000 },
  { month: "Dec", withoutSolar: 3950, withSolar: 950 },
];

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={cn(
            "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Powering a{" "}
              <span className="text-gradient-solar">Sustainable Future</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              At Silicon Solar Solutions, we are committed to making clean energy
              accessible for everyone. With over a decade of experience in the
              solar industry, we have helped hundreds of homeowners and
              businesses transition to sustainable energy solutions.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                </div>
                <p className="text-foreground">
                  <strong>Residential & Commercial Solutions</strong> — Tailored
                  solar systems for homes and businesses of all sizes
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                </div>
                <p className="text-foreground">
                  <strong>Clean Energy Adoption</strong> — Reducing carbon
                  footprint while saving on electricity bills
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                </div>
                <p className="text-foreground">
                  <strong>Long-term Cost Efficiency</strong> — Significant
                  savings over the lifetime of your solar system
                </p>
              </div>
            </div>
          </div>

          {/* Electricity Bill Comparison Graph */}
          <div
            className={cn(
              "bg-white rounded-2xl p-6 md:p-8 shadow-lg transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
              Monthly Electricity Bill Comparison
            </h3>
            <div className="w-full h-[300px] md:h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={billData}
                  margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="month"
                    stroke="#6b7280"
                    style={{ fontSize: "12px" }}
                  />
                  <YAxis
                    stroke="#6b7280"
                    style={{ fontSize: "12px" }}
                    tickFormatter={(value) => `₹${value}`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                    formatter={(value: number) => [`₹${value}`, ""]}
                    labelStyle={{ color: "#111827", fontWeight: "600" }}
                  />
                  <Legend
                    wrapperStyle={{ paddingTop: "20px" }}
                    iconType="line"
                  />
                  <Line
                    type="monotone"
                    dataKey="withoutSolar"
                    stroke="#eab308"
                    strokeWidth={3}
                    name="Without Solar"
                    dot={{ fill: "#eab308", r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="withSolar"
                    stroke="#22c55e"
                    strokeWidth={3}
                    name="With Solar"
                    dot={{ fill: "#22c55e", r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 text-center mt-6 leading-relaxed">
              Indicative monthly electricity bill comparison before and after solar installation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
