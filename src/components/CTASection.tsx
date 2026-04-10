import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";
import { useState } from "react";
import DemoDialog from "@/components/DemoDialog";

const CTASection = () => {
  const { lang } = useLang();
  const [demo, setDemo] = useState(false);

  return (
    <>
      <section className="py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-6 sm:mb-8">
            {t.cta.label[lang]}
          </p>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 leading-tight">
            {t.cta.title1[lang]}
          </h2>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="text-gradient-glacier italic">{t.cta.title2[lang]}</span>
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-10 sm:mb-12 leading-relaxed">
            {t.cta.desc[lang]}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
            <Button
              size="lg"
              className="text-sm sm:text-base px-10 sm:px-12 py-6 sm:py-7 gap-2 tracking-[0.1em] uppercase font-semibold bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto"
              onClick={() => setDemo(true)}
            >
              {t.cta.cta1[lang]}
              <ArrowRight className="w-4 h-4" />
            </Button>
            <span className="text-muted-foreground text-sm">
              {t.cta.price[lang]}
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground text-xs">
            <Zap className="w-3.5 h-3.5 text-accent" />
            <span>
              {t.cta.badges.b1[lang]} · {t.cta.badges.b2[lang]} · {t.cta.badges.b3[lang]}
            </span>
          </div>
        </div>
      </section>
      <DemoDialog open={demo} onOpenChange={setDemo} />
    </>
  );
};

export default CTASection;
