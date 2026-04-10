import { Map, Compass, Smartphone, Car, CalendarDays } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";
import TopoLines from "@/components/svg/TopoLines";
import DemoDialog from "@/components/DemoDialog";
import { useState } from "react";
import appMockup from "@/assets/app-mockup.jpg";

const featureIcons = [Map, Compass, Smartphone, Car];

const ItinerarySection = () => {
  const { lang } = useLang();
  const [demo, setDemo] = useState(false);
  const it = t.itinerary;

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
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
                {it.title[lang]}
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-xl mb-8 sm:mb-10">
                {it.desc[lang]}
              </p>

              <div className="space-y-5 mb-8 sm:mb-10">
                {it.features.map((feat, i) => {
                  const Icon = featureIcons[i];
                  return (
                    <div key={i} className="flex gap-4">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm sm:text-base mb-0.5">{feat.title[lang]}</h3>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{feat.desc[lang]}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Sample routes chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                {it.sampleRoutes.map((route, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 text-xs bg-secondary/60 text-muted-foreground px-3 py-1.5 rounded-full">
                    <CalendarDays className="w-3 h-3" />
                    {route.name[lang]} · {route.days} {lang === "pl" ? "dni" : lang === "is" ? "dagar" : "days"}
                  </span>
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
              <div className="relative max-w-[320px] sm:max-w-[360px]">
                <img
                  src={appMockup}
                  alt="NordCar itinerary app"
                  loading="lazy"
                  width={640}
                  height={800}
                  className="w-full rounded-3xl shadow-2xl shadow-primary/10"
                />
                {/* Subtle glow behind phone */}
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
