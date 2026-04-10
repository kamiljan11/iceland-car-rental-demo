import { Star } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";
import Snowflake from "@/components/svg/Snowflake";
import AuroraGlow from "@/components/svg/AuroraGlow";

const TestimonialsSection = () => {
  const { lang } = useLang();

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Ambient glow */}
      <AuroraGlow position="bottom-left" />
      <Snowflake className="absolute top-16 left-[10%] text-primary" size={20} />
      <Snowflake className="absolute top-1/3 right-[8%] text-accent" size={16} />
      <Snowflake className="absolute bottom-24 left-[20%] text-primary" size={14} />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-primary font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-2 sm:mb-3">
            {t.testimonials.label[lang]}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            {t.testimonials.title[lang]}
          </h2>
        </div>

        <div className="flex overflow-x-auto gap-5 sm:gap-6 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 md:grid md:grid-cols-3 md:overflow-visible scrollbar-hide">
          {t.testimonials.items.map((item, i) => (
            <div
              key={i}
              className="bg-card/50 border border-border/50 rounded-2xl p-6 sm:p-8 flex flex-col shrink-0 w-[280px] sm:w-auto"
            >
              <p className="text-secondary-foreground text-sm leading-relaxed mb-6 flex-1 italic">
                "{item.text[lang]}"
              </p>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-semibold text-sm">{item.name}</p>
              <p className="text-muted-foreground text-xs">{item.route[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
