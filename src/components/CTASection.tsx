import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Camera, BarChart3, Zap } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";
import { useState } from "react";
import DemoDialog from "@/components/DemoDialog";

const featureIcons = [Globe, Camera, BarChart3, Zap];

const CTASection = () => {
  const { lang } = useLang();
  const [demo, setDemo] = useState(false);

  const featureKeys = ["f1", "f2", "f3", "f4"] as const;

  return (
    <>
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-card border-t border-border/30">
        <div className="max-w-3xl mx-auto text-center">
          {/* Label */}
          <span className="inline-block text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-primary mb-6">
            {t.cta.label[lang]}
          </span>

          {/* Title */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight text-foreground">
            {t.cta.title1[lang]}
          </h2>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-primary italic">{t.cta.title2[lang]}</span>
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
            {t.cta.desc[lang]}
          </p>

          {/* Feature icons row */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-10">
            {featureKeys.map((key, i) => {
              const Icon = featureIcons[i];
              return (
                <div key={key} className="flex items-center gap-2 text-muted-foreground">
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="text-xs sm:text-sm font-medium">{t.cta.features[key][lang]}</span>
                </div>
              );
            })}
          </div>

          {/* CTA button + price */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
            <Button
              size="lg"
              className="text-sm sm:text-base px-10 py-6 gap-2 font-bold bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto tracking-wide"
              onClick={() => setDemo(true)}
            >
              {t.cta.cta1[lang]}
              <ArrowRight className="w-4 h-4" />
            </Button>
            <span className="text-sm text-muted-foreground">
              {t.cta.price[lang].split(/(\d[\d\s,.]+)/g).map((part, i) =>
                /\d/.test(part) ? (
                  <strong key={i} className="text-primary font-bold">{part}</strong>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </span>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground/70">
            {(["b1", "b2", "b3"] as const).map((key, i) => (
              <span key={key} className="flex items-center gap-1">
                {i > 0 && <span className="text-border mx-1">·</span>}
                {t.cta.badges[key][lang]}
              </span>
            ))}
          </div>
        </div>
      </section>
      <DemoDialog open={demo} onOpenChange={setDemo} feature="book" />
    </>
  );
};

export default CTASection;
