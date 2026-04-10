import { ShieldCheck, Banknote, Headphones } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";

const icons = [ShieldCheck, Banknote, Headphones];

const USPSection = () => {
  const { lang } = useLang();

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {t.usp.zeros.map((zero, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base mb-1">
                    {zero.title[lang]}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {zero.desc[lang]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default USPSection;
