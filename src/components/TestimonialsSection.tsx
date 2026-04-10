import { Star } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";

const TestimonialsSection = () => {
  const { lang } = useLang();

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10">
          {t.testimonials.title[lang]}
        </h2>

        <div className="flex overflow-x-auto gap-4 sm:gap-5 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 md:grid md:grid-cols-3 md:overflow-visible scrollbar-hide snap-x snap-mandatory">
          {t.testimonials.items.map((item, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-5 sm:p-6 flex flex-col shrink-0 w-[85vw] sm:w-auto snap-start"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-secondary-foreground text-sm leading-relaxed mb-4 flex-1">
                "{item.text[lang]}"
              </p>
              <div>
                <p className="font-semibold text-sm">{item.name}</p>
                <p className="text-muted-foreground text-xs">{item.route[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
