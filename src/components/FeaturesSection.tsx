import {
  Shield,
  MapPin,
  Clock,
  Headphones,
  Snowflake,
  CreditCard,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Pełne ubezpieczenie",
    desc: "CDW, SCDW, gravel protection i ubezpieczenie piaskowe w cenie.",
  },
  {
    icon: MapPin,
    title: "Odbiór z lotniska KEF",
    desc: "Darmowy transfer z Keflavík International Airport 24/7.",
  },
  {
    icon: Snowflake,
    title: "Opony zimowe",
    desc: "Studded tyres w sezonie zimowym, all-season latem.",
  },
  {
    icon: Clock,
    title: "Elastyczne rezerwacje",
    desc: "Darmowe anulowanie do 48h przed odbiorem.",
  },
  {
    icon: Headphones,
    title: "Wsparcie 24/7",
    desc: "Pomoc drogowa i wsparcie telefoniczne na całej wyspie.",
  },
  {
    icon: CreditCard,
    title: "Bez ukrytych kosztów",
    desc: "Przejrzyste ceny. Bez niespodzianek przy odbiorze.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-3">
            Dlaczego my
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Wszystko, czego potrzebujesz
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Skupiamy się na tym, żebyś mógł skupić się na Islandii.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
