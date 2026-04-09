import { Star } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";

const TrustBadges = () => {
  const { lang } = useLang();

  return (
    <section className="py-8 px-6 border-b border-border/50">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-8 md:gap-16">
        {/* Google Reviews */}
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold">G</div>
          <div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
              <span className="font-bold text-lg ml-1">4.8/5</span>
            </div>
            <p className="text-xs text-muted-foreground">
              2,847 Google Reviews
            </p>
          </div>
        </div>

        {/* Trustpilot */}
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold text-emerald-500">★</div>
          <div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
              ))}
              <span className="font-bold text-lg ml-1">4.9/5</span>
            </div>
            <p className="text-xs text-muted-foreground">
              1,203 Trustpilot Reviews
            </p>
          </div>
        </div>

        {/* Awards */}
        <div className="flex items-center gap-3">
          <div className="text-2xl">🏆</div>
          <div>
            <p className="font-semibold text-sm">{t.trust.award[lang]}</p>
            <p className="text-xs text-muted-foreground">
              {t.trust.awardSub[lang]}
            </p>
          </div>
        </div>

        {/* SAF Member */}
        <div className="flex items-center gap-3">
          <div className="text-2xl">🇮🇸</div>
          <div>
            <p className="font-semibold text-sm">{t.trust.saf[lang]}</p>
            <p className="text-xs text-muted-foreground">
              {t.trust.safSub[lang]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
