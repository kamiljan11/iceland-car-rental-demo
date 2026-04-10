import heroImg from "@/assets/hero-iceland.jpg";
import BookingWidget from "@/components/BookingWidget";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";

const HeroSection = () => {
  const { lang } = useLang();

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen overflow-hidden flex flex-col">
      <img
        src={heroImg}
        alt="Dramatic Icelandic road stretching toward snow-capped mountains"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />

      <div className="relative z-10 flex flex-col justify-end flex-1 max-w-7xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12 pt-20 sm:pt-24">
        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-3 sm:mb-5 max-w-3xl">
          {t.hero.title1[lang]}
          <br />
          <span className="text-primary">{t.hero.title2[lang]}</span>
        </h1>
        <p className="text-secondary-foreground text-sm sm:text-base md:text-lg max-w-lg mb-6 sm:mb-8 leading-relaxed">
          {t.hero.desc[lang]}
        </p>

        <BookingWidget />
      </div>
    </section>
  );
};

export default HeroSection;
