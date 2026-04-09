import heroImg from "@/assets/hero-iceland.jpg";
import BookingWidget from "@/components/BookingWidget";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";

const HeroSection = () => {
  const { lang } = useLang();

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen overflow-hidden flex flex-col">
      <img
        src={heroImg}
        alt="Dramatic Icelandic road stretching toward snow-capped mountains"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

      <div className="relative z-10 flex flex-col justify-end flex-1 max-w-7xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12 pt-20 sm:pt-24">
        <p className="text-primary font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-3 sm:mb-4">
          {t.hero.subtitle[lang]}
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-4 sm:mb-6 max-w-4xl">
          {t.hero.title1[lang]}
          <br />
          <span className="text-gradient-glacier">{t.hero.title2[lang]}</span>
        </h1>
        <p className="text-secondary-foreground text-base sm:text-lg md:text-xl max-w-xl mb-8 sm:mb-10 leading-relaxed">
          {t.hero.desc[lang]}
        </p>

        <BookingWidget />
      </div>
    </section>
  );
};

export default HeroSection;
