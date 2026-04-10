import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { screens } from "./app-showcase/screens";
import PhoneMockup from "./app-showcase/PhoneMockup";

const AppShowcase = () => {
  const { lang } = useLang();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % screens.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const labels = {
    title: { en: "Free app with every booking", pl: "Darmowa aplikacja do każdej rezerwacji", is: "Ókeypis app með hverri bókun" },
    desc: { en: "11 tools in one app — maps, aurora alerts, hiking trails, road cams, and more.", pl: "11 narzędzi w jednej aplikacji — mapy, zorza, szlaki, kamery drogowe i więcej.", is: "11 verkfæri í einu appi — kort, norðurljós, gönguleiðir, vegamyndavélar og fleira." },
  };

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-secondary/30 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Text side */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              {labels.title[lang]}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mb-6">
              {labels.desc[lang]}
            </p>

            <div className="space-y-0.5 max-h-[420px] overflow-y-auto pr-1 scrollbar-thin">
              {screens.map((screen, i) => (
                <button
                  key={screen.id}
                  onClick={() => setActive(i)}
                  className={`w-full text-left rounded-xl px-4 py-2.5 transition-all duration-300 flex items-center justify-between group ${
                    active === i
                      ? "bg-card border border-primary/30"
                      : "hover:bg-card/50"
                  }`}
                >
                  <div className="min-w-0">
                    <h3 className={`text-sm font-semibold ${active === i ? "text-primary" : "text-foreground"}`}>
                      {screen.title[lang]}
                    </h3>
                    {active === i && (
                      <p className="text-xs mt-0.5 leading-relaxed text-muted-foreground">
                        {screen.desc[lang]}
                      </p>
                    )}
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 ml-3 transition-colors ${active === i ? "text-primary" : "text-muted-foreground/30"}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Phone side */}
          <div className="flex justify-center">
            <PhoneMockup activeScreen={active} lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
