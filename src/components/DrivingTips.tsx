import { AlertTriangle, Gauge, Eye, Fuel, Navigation, ThermometerSnowflake } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";

const tipIcons = [AlertTriangle, Gauge, Eye, Fuel, Navigation, ThermometerSnowflake];

const DrivingTips = () => {
  const { lang } = useLang();

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-primary font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-2 sm:mb-3">
            {t.drivingTips.label[lang]}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            {t.drivingTips.title[lang]}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            {t.drivingTips.desc[lang]}
          </p>
        </div>

        {/* Horizontal scroll on mobile */}
        <div className="flex overflow-x-auto gap-4 sm:gap-6 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible scrollbar-hide">
          {t.drivingTips.items.map((tip, i) => {
            const Icon = tipIcons[i];
            return (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-5 sm:p-6 hover:border-accent/30 transition-colors shrink-0 w-[250px] sm:w-auto"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3 sm:mb-4">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base mb-2">{tip.title[lang]}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{tip.desc[lang]}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 sm:mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0">
          <a
            href="https://safetravel.is"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-xs sm:text-sm font-medium hover:underline"
          >
            {t.drivingTips.safetravel[lang]} →
          </a>
          <span className="hidden sm:inline mx-4 text-border">|</span>
          <a
            href="https://road.is"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-xs sm:text-sm font-medium hover:underline"
          >
            {t.drivingTips.roadis[lang]} →
          </a>
          <span className="hidden sm:inline mx-4 text-border">|</span>
          <a
            href="https://vedur.is"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-xs sm:text-sm font-medium hover:underline"
          >
            {t.drivingTips.vedur[lang]} →
          </a>
        </div>
      </div>
    </section>
  );
};

export default DrivingTips;
