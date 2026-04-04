import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";

const CTASection = () => {
  const { lang } = useLang();

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
          {t.cta.title1[lang]}
          <br />
          <span className="text-gradient-glacier">{t.cta.title2[lang]}</span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.cta.desc[lang]}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base px-10 py-6 gap-2">
            {t.cta.cta1[lang]}
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-base px-10 py-6 border-foreground/20 hover:bg-foreground/5"
          >
            {t.cta.cta2[lang]}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
