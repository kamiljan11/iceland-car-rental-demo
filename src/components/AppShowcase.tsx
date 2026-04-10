import { useState, useEffect } from "react";
import { MapPin, Navigation, Cloud, Sparkles, Zap, Mountain, Phone, Camera } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";

const features = [
  { icon: Navigation, label: { en: "Offline Maps", pl: "Mapy offline", is: "Ónettengd kort" } },
  { icon: Sparkles, label: { en: "Aurora Alerts", pl: "Alerty zorzy", is: "Norðurljósaviðvaranir" } },
  { icon: Mountain, label: { en: "Hiking Trails", pl: "Szlaki", is: "Gönguleiðir" } },
  { icon: Cloud, label: { en: "Road Weather", pl: "Pogoda na trasie", is: "Vegaveður" } },
  { icon: Camera, label: { en: "Live Road Cams", pl: "Kamery drogowe", is: "Vegamyndavélar" } },
  { icon: MapPin, label: { en: "Secret Spots", pl: "Ukryte miejsca", is: "Leyndir staðir" } },
  { icon: Zap, label: { en: "EV Charging", pl: "Ładowarki EV", is: "Hleðslustöðvar" } },
  { icon: Phone, label: { en: "24/7 SOS", pl: "SOS 24/7", is: "SOS 24/7" } },
];

const MiniPhone = ({ lang }: { lang: Lang }) => {
  const [screen, setScreen] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setScreen((p) => (p + 1) % 3), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="w-[140px] sm:w-[160px] shrink-0">
      <div className="bg-card border-2 border-border rounded-[1.5rem] p-1.5 shadow-xl shadow-black/30">
        <div className="bg-background rounded-[1.2rem] overflow-hidden aspect-[9/18]">
          <div className="flex items-center justify-between px-3 pt-4 pb-1 text-[7px] text-muted-foreground">
            <span>9:41</span>
            <span>NordCar</span>
            <span>●●●</span>
          </div>

          {screen === 0 && (
            <div className="px-3 pt-1">
              <div className="bg-secondary/50 rounded-lg h-16 mb-2 flex items-center justify-center relative overflow-hidden">
                <svg viewBox="0 0 200 100" className="absolute inset-0 w-full h-full opacity-30">
                  <path d="M20 80 C50 40, 80 60, 120 30 C150 10, 170 30, 190 20" stroke="hsl(var(--primary))" strokeWidth="2.5" fill="none" strokeDasharray="4 2" />
                  <circle cx="20" cy="80" r="3" fill="hsl(var(--accent))" />
                  <circle cx="190" cy="20" r="3" fill="hsl(var(--primary))" />
                </svg>
                <Navigation className="w-4 h-4 text-primary relative z-10" />
              </div>
              <div className="space-y-1.5">
                <div className="bg-secondary/30 rounded px-2 py-1.5 flex items-center gap-1.5">
                  <MapPin className="w-2.5 h-2.5 text-primary" />
                  <span className="text-[7px] text-foreground">Seljalandsfoss — 12 km</span>
                </div>
              </div>
            </div>
          )}

          {screen === 1 && (
            <div className="px-3 pt-2 text-center">
              <div className="w-10 h-10 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-1.5 relative overflow-hidden">
                <svg viewBox="0 0 40 40" className="absolute inset-0 w-full h-full">
                  <defs><linearGradient id="ag" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" /><stop offset="100%" stopColor="transparent" /></linearGradient></defs>
                  <path d="M0 15 Q10 5 20 10 Q30 5 40 15 L40 40 L0 40Z" fill="url(#ag)" />
                </svg>
                <span className="relative text-[10px] font-bold text-primary">KP 5</span>
              </div>
              <p className="text-[8px] font-semibold text-foreground">
                {lang === "en" ? "Aurora tonight!" : lang === "pl" ? "Zorza dziś!" : "Norðurljós!"}
              </p>
              <p className="text-[7px] text-muted-foreground">22:00 – 02:00</p>
              <div className="mt-2 bg-primary/10 rounded px-2 py-1">
                <span className="text-[7px] text-primary">📍 Grótta — 8 km</span>
              </div>
            </div>
          )}

          {screen === 2 && (
            <div className="px-3 pt-2 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center mb-2">
                <Phone className="w-4 h-4 text-destructive" />
              </div>
              <p className="text-[9px] font-bold text-foreground mb-0.5">SOS</p>
              <p className="text-[7px] text-muted-foreground text-center mb-2">GPS auto-sent</p>
              <div className="w-full bg-destructive/90 text-destructive-foreground rounded-lg py-1.5 text-center text-[8px] font-semibold">
                {lang === "en" ? "Call Rescue" : lang === "pl" ? "Zadzwoń" : "Hringdu"}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const AppShowcase = () => {
  const { lang } = useLang();

  const labels = {
    badge: { en: "Free with every booking", pl: "Gratis do każdej rezerwacji", is: "Ókeypis með hverri bókun" },
    title: { en: "NordCar Travel App", pl: "Aplikacja NordCar Travel", is: "NordCar Travel App" },
    desc: { en: "Everything you need for Iceland in one app — no extra cost.", pl: "Wszystko, czego potrzebujesz w Islandii — bez dodatkowych kosztów.", is: "Allt sem þú þarft á Íslandi í einu appi — án aukakostnaðar." },
  };

  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center">
          {/* Mini phone */}
          <MiniPhone lang={lang} />

          {/* Content */}
          <div className="flex-1 text-center sm:text-left">
            <span className="inline-block text-[10px] sm:text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1 mb-3">
              {labels.badge[lang]}
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-bold mb-2 text-foreground">
              {labels.title[lang]}
            </h2>
            <p className="text-muted-foreground text-sm mb-5">
              {labels.desc[lang]}
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {features.map((f) => (
                <div key={f.label.en} className="flex items-center gap-1.5 bg-secondary/40 rounded-lg px-2.5 py-2">
                  <f.icon className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="text-[10px] sm:text-xs text-foreground font-medium">{f.label[lang]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
