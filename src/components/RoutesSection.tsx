import { Check } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";
import TopoLines from "@/components/svg/TopoLines";
import DemoDialog from "@/components/DemoDialog";
import { useState } from "react";
import appMockup from "@/assets/app-mockup.jpg";

const ItinerarySection = () => {
  const { lang } = useLang();
  const [demo, setDemo] = useState(false);
  const it = t.itinerary;

  const bullets = {
    en: ["Custom day-by-day route built by locals", "Offline maps, weather & road alerts", "Hidden gems you won't find on Google"],
    pl: ["Trasa dzień po dniu stworzona przez lokalnych", "Mapy offline, pogoda i alerty drogowe", "Ukryte perełki, których nie znajdziesz w Google"],
    is: ["Dag-fyrir-dag leið smíðuð af heimamönnum", "Ónettengd kort, veður og vegaviðvaranir", "Faldir gimsteinar sem þú finnur ekki á Google"],
  };

  return (
    <>
      <section id="routes" className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
        <TopoLines className="absolute top-0 right-0 w-[500px] h-[400px] text-primary" />
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — content */}
            <div>
              <p className="text-primary font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm mb-2 sm:mb-3">
                {it.label[lang]}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-5">
                {it.title[lang]}
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-lg mb-8">
                {it.desc[lang]}
              </p>

              <div className="space-y-3 mb-8">
                {bullets[lang].map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm sm:text-base">{b}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setDemo(true)}
                className="bg-accent text-accent-foreground px-6 py-3 rounded-xl font-medium text-sm hover:bg-accent/90 transition-colors"
              >
                {it.cta[lang]}
              </button>
            </div>

            {/* Right — app mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative max-w-[300px] sm:max-w-[340px]">
                <img
                  src={appMockup}
                  alt="NordCar itinerary app"
                  loading="lazy"
                  width={640}
                  height={800}
                  className="w-full rounded-3xl shadow-2xl shadow-primary/10"
                />
                <div className="absolute -inset-8 bg-primary/5 rounded-full blur-3xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <DemoDialog open={demo} onOpenChange={setDemo} feature="generic" />
    </>
  );
};

export default ItinerarySection;
