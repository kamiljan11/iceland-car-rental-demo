import heroImg from "@/assets/hero-iceland.jpg";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";

const HeroSection = () => {
  const { lang } = useLang();

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      <img
        src={heroImg}
        alt="Dramatic Icelandic road stretching toward snow-capped mountains"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

      <div className="relative z-10 flex flex-col justify-end h-full max-w-7xl mx-auto px-6 pb-24">
        <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
          {t.hero.subtitle[lang]}
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-6 max-w-4xl">
          {t.hero.title1[lang]}
          <br />
          <span className="text-gradient-glacier">{t.hero.title2[lang]}</span>
        </h1>
        <p className="text-secondary-foreground text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
          {t.hero.desc[lang]}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <Button size="lg" className="text-base px-8 py-6 gap-2">
            <Calendar className="w-5 h-5" />
            {t.hero.cta1[lang]}
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-base px-8 py-6 gap-2 border-foreground/20 hover:bg-foreground/5"
          >
            <MapPin className="w-5 h-5" />
            {t.hero.cta2[lang]}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
