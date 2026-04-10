import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";

const TrustBadges = () => {
  const { lang } = useLang();

  const items = [
    { value: "4.8★", label: "Google Reviews" },
    { value: "4.9★", label: "Trustpilot" },
    { value: t.trust.award[lang], label: t.trust.awardSub[lang] },
    { value: t.trust.saf[lang], label: t.trust.safSub[lang] },
  ];

  return (
    <section className="py-5 sm:py-6 px-4 sm:px-6 border-b border-border/30">
      <div className="max-w-5xl mx-auto flex overflow-x-auto gap-8 sm:gap-12 md:gap-16 items-center justify-start md:justify-center scrollbar-hide">
        {items.map((item, i) => (
          <div key={i} className="shrink-0 text-center">
            <p className="text-xs sm:text-sm font-semibold text-foreground whitespace-nowrap">{item.value}</p>
            <p className="text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBadges;
