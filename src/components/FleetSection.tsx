import carSuv from "@/assets/car-suv.jpg";
import carCamper from "@/assets/car-camper.jpg";
import carCompact from "@/assets/car-compact.jpg";
import { Users, Fuel, Snowflake } from "lucide-react";

const vehicles = [
  {
    name: "SUV 4×4",
    subtitle: "Land Cruiser / Defender",
    image: carSuv,
    price: "od 89€ / dzień",
    features: ["5 osób", "Diesel 4WD", "F-Road ready"],
    icons: [Users, Fuel, Snowflake],
    tag: "Najpopularniejszy",
  },
  {
    name: "Kamper Van",
    subtitle: "VW California / podobne",
    image: carCamper,
    price: "od 119€ / dzień",
    features: ["2-4 osób", "Kuchnia", "Łóżko na dachu"],
    icons: [Users, Fuel, Snowflake],
    tag: "Dla podróżników",
  },
  {
    name: "Compact SUV",
    subtitle: "Duster / Tucson",
    image: carCompact,
    price: "od 49€ / dzień",
    features: ["5 osób", "Ekonomiczny", "Łatwy w prowadzeniu"],
    icons: [Users, Fuel, Snowflake],
    tag: "Najlepszy budżet",
  },
];

const FleetSection = () => {
  return (
    <section id="fleet" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-3">
          Nasza flota
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          Pojazdy na każdy teren
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mb-16">
          Każdy samochód jest przygotowany na islandzkie warunki — opony zimowe,
          GPS, ubezpieczenie i pełny pakiet startowy.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {vehicles.map((v) => (
            <div
              key={v.name}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-500"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={v.image}
                  alt={v.name}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {v.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold mb-1">
                  {v.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {v.subtitle}
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {v.features.map((f, i) => {
                    const Icon = v.icons[i];
                    return (
                      <span
                        key={f}
                        className="flex items-center gap-1.5 text-sm text-secondary-foreground bg-secondary px-3 py-1.5 rounded-lg"
                      >
                        <Icon className="w-3.5 h-3.5 text-primary" />
                        {f}
                      </span>
                    );
                  })}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold text-lg">
                    {v.price}
                  </span>
                  <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                    Szczegóły →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
