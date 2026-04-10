import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";
import { useState } from "react";
import DemoDialog from "@/components/DemoDialog";

const CTASection = () => {
  const { lang } = useLang();
  const [demo, setDemo] = useState(false);

  return (
    <>
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-card border-t border-border/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
            {t.cta.title1[lang]}{" "}
            <span className="text-primary">{t.cta.title2[lang]}</span>
          </h2>

          <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
            {t.cta.desc[lang]}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button
              size="lg"
              className="text-sm sm:text-base px-8 py-6 gap-2 font-semibold bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto"
              onClick={() => setDemo(true)}
            >
              {t.cta.cta1[lang]}
              <ArrowRight className="w-4 h-4" />
            </Button>
            <a
              href="tel:+3541234567"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors py-3"
            >
              <Phone className="w-4 h-4" />
              +354 123 4567
            </a>
          </div>

          <p className="text-muted-foreground text-xs mt-6">
            {t.cta.price[lang]}
          </p>
        </div>
      </section>
      <DemoDialog open={demo} onOpenChange={setDemo} feature="book" />
    </>
  );
};

export default CTASection;
