import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Camera, BarChart3, Zap } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";

const CTASection = () => {
  const { lang } = useLang();

  const features = [
    { icon: Globe, label: t.cta.features.f1[lang] },
    { icon: Camera, label: t.cta.features.f2[lang] },
    { icon: BarChart3, label: t.cta.features.f3[lang] },
    { icon: Zap, label: t.cta.features.f4[lang] },
  ];

  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-8">
          {t.cta.label[lang]}
        </p>

        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-2 leading-tight">
          {t.cta.title1[lang]}
        </h2>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          <span className="text-gradient-glacier italic">{t.cta.title2[lang]}</span>
        </h2>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          {t.cta.desc[lang]}
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {features.map((f) => (
            <div key={f.label} className="flex items-center gap-2 text-muted-foreground">
              <f.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{f.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
          <Button
            size="lg"
            className="text-base px-12 py-7 gap-3 tracking-[0.15em] uppercase font-semibold bg-accent text-accent-foreground hover:bg-accent/90"
          >
            {t.cta.cta1[lang]}
            <ArrowRight className="w-5 h-5" />
          </Button>
          <span className="text-muted-foreground text-base">
            {t.cta.price[lang]}
          </span>
        </div>

        <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
          <Zap className="w-4 h-4 text-accent" />
          <span>
            {t.cta.badges.b1[lang]} · {t.cta.badges.b2[lang]} · {t.cta.badges.b3[lang]}
          </span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
