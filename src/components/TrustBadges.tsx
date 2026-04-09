import { Star } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";

const TrustBadges = () => {
  const { lang } = useLang();

  return (
    <section className="py-6 sm:py-8 px-4 sm:px-6 border-b border-border/50">
      <div className="max-w-5xl mx-auto">
        {/* Horizontal scroll on mobile */}
        <div className="flex overflow-x-auto gap-6 sm:gap-8 md:gap-16 items-center justify-start md:justify-center pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
          {/* Google Reviews */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="text-xl sm:text-2xl font-bold">G</div>
            <div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-accent text-accent" />
                ))}
                <span className="font-bold text-base sm:text-lg ml-1">4.8</span>
              </div>
              <p className="text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">
                2,847 Google Reviews
              </p>
            </div>
          </div>

          {/* Trustpilot */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="text-xl sm:text-2xl font-bold text-emerald-500">★</div>
            <div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-emerald-500 text-emerald-500" />
                ))}
                <span className="font-bold text-base sm:text-lg ml-1">4.9</span>
              </div>
              <p className="text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">
                1,203 Trustpilot Reviews
              </p>
            </div>
          </div>

          {/* Awards */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="text-xl sm:text-2xl">🏆</div>
            <div>
              <p className="font-semibold text-xs sm:text-sm whitespace-nowrap">{t.trust.award[lang]}</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">
                {t.trust.awardSub[lang]}
              </p>
            </div>
          </div>

          {/* SAF Member */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="text-xl sm:text-2xl">🇮🇸</div>
            <div>
              <p className="font-semibold text-xs sm:text-sm whitespace-nowrap">{t.trust.saf[lang]}</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">
                {t.trust.safSub[lang]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
