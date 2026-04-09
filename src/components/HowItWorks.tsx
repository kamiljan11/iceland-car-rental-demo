import { ClipboardCheck, Plane, Car } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";

const steps = [
  { icon: ClipboardCheck, key: "book" as const },
  { icon: Plane, key: "arrive" as const },
  { icon: Car, key: "drive" as const },
];

const HowItWorks = () => {
  const { lang } = useLang();

  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-3">
            {t.howItWorks.label[lang]}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            {t.howItWorks.title[lang]}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center group">
              <div className="relative mx-auto w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-9 h-9 text-primary" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">
                {t.howItWorks.steps[step.key].title[lang]}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                {t.howItWorks.steps[step.key].desc[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
