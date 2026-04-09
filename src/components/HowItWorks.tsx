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
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-primary font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-2 sm:mb-3">
            {t.howItWorks.label[lang]}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            {t.howItWorks.title[lang]}
          </h2>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex overflow-x-auto gap-6 sm:gap-8 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 md:grid md:grid-cols-3 md:overflow-visible scrollbar-hide">
          {steps.map((step, i) => (
            <div key={i} className="text-center group shrink-0 w-[240px] sm:w-auto">
              <div className="relative mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-7 h-7 sm:w-9 sm:h-9 text-primary" />
                <span className="absolute -top-2 -right-2 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-accent text-accent-foreground text-[10px] sm:text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                {t.howItWorks.steps[step.key].title[lang]}
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed max-w-xs mx-auto">
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
