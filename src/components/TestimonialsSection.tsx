import { Star, Quote } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";

const TestimonialsSection = () => {
  const { lang } = useLang();

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-3">
            {t.testimonials.label[lang]}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            {t.testimonials.title[lang]}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.testimonials.items.map((item, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl p-8 flex flex-col hover:border-primary/30 transition-colors duration-300"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-secondary-foreground text-sm leading-relaxed mb-6 flex-1">
                "{item.text[lang]}"
              </p>
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-sm">{item.name}</p>
                <p className="text-muted-foreground text-xs">{item.country[lang]}</p>
                <p className="text-primary text-xs mt-1">{item.route[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
