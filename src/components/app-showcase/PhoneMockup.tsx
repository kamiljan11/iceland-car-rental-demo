import {
  MapPin, Navigation, Cloud, AlertTriangle, Fuel, Phone,
  Sparkles, Eye, Mountain, Camera, Zap, Car, DollarSign
} from "lucide-react";
import { screens } from "./screens";
import type { Lang } from "@/i18n/translations";

const PhoneMockup = ({ activeScreen, lang }: { activeScreen: number; lang: Lang }) => {
  return (
    <div className="relative mx-auto w-[220px] sm:w-[260px]">
      <div className="relative bg-card border-2 border-border rounded-[2rem] p-2 shadow-2xl shadow-black/40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-card rounded-b-xl z-10" />
        <div className="bg-background rounded-[1.5rem] overflow-hidden aspect-[9/19]">
          <div className="flex items-center justify-between px-5 pt-6 pb-2 text-[9px] text-muted-foreground">
            <span>9:41</span>
            <span>NordCar</span>
            <span>●●●</span>
          </div>

          {/* 0 — Live Map */}
          {activeScreen === 0 && (
            <div className="px-4 pt-2">
              <div className="bg-secondary/50 rounded-xl h-32 sm:h-40 mb-3 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                  <svg viewBox="0 0 200 160" className="w-full h-full">
                    <path d="M20 140 C40 100, 60 120, 80 80 C100 40, 140 60, 180 30" stroke="hsl(var(--primary))" strokeWidth="2.5" fill="none" strokeDasharray="4 2" />
                    <circle cx="20" cy="140" r="4" fill="hsl(var(--accent))" />
                    <circle cx="80" cy="80" r="3" fill="hsl(var(--primary))" />
                    <circle cx="180" cy="30" r="4" fill="hsl(var(--primary))" />
                  </svg>
                </div>
                <div className="relative z-10 flex flex-col items-center">
                  <Navigation className="w-5 h-5 text-primary mb-1" />
                  <span className="text-[10px] text-muted-foreground">Ring Road</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 bg-secondary/30 rounded-lg px-3 py-2">
                  <MapPin className="w-3 h-3 text-primary" />
                  <span className="text-[10px] text-foreground">Seljalandsfoss — 12 km</span>
                </div>
                <div className="flex items-center gap-2 bg-secondary/30 rounded-lg px-3 py-2">
                  <Fuel className="w-3 h-3 text-accent" />
                  <span className="text-[10px] text-foreground">N1 Vík — 45 km</span>
                </div>
              </div>
            </div>
          )}

          {/* 1 — Weather */}
          {activeScreen === 1 && (
            <div className="px-4 pt-2">
              <div className="text-center mb-3">
                <Cloud className="w-8 h-8 text-primary mx-auto mb-1" />
                <p className="text-lg font-bold text-foreground">7°C</p>
                <p className="text-[10px] text-muted-foreground">Partly cloudy · Wind 15 km/h</p>
              </div>
              <div className="grid grid-cols-4 gap-1.5 mb-3">
                {["12:00", "15:00", "18:00", "21:00"].map((t, i) => (
                  <div key={t} className="bg-secondary/30 rounded-lg py-2 text-center">
                    <p className="text-[8px] text-muted-foreground">{t}</p>
                    <p className="text-[10px] font-semibold text-foreground">{[7, 6, 4, 3][i]}°</p>
                  </div>
                ))}
              </div>
              <div className="bg-accent/10 border border-accent/20 rounded-lg px-3 py-2">
                <div className="flex items-center gap-1.5">
                  <AlertTriangle className="w-3 h-3 text-accent" />
                  <span className="text-[10px] font-medium text-accent">Wind alert at Dyrhólaey</span>
                </div>
              </div>
            </div>
          )}

          {/* 2 — Aurora */}
          {activeScreen === 2 && (
            <div className="px-4 pt-2">
              <div className="text-center mb-3">
                <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center relative overflow-hidden">
                  <svg viewBox="0 0 64 64" className="w-full h-full absolute">
                    <defs>
                      <linearGradient id="auroraGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                        <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                    <path d="M0 20 Q16 5 32 15 Q48 5 64 20 L64 64 L0 64Z" fill="url(#auroraGrad)" />
                  </svg>
                  <span className="relative text-lg font-bold text-primary">KP 5</span>
                </div>
                <p className="text-[11px] font-semibold text-foreground">
                  {lang === "en" ? "Aurora likely tonight!" : lang === "pl" ? "Zorza prawdopodobna dziś!" : "Norðurljós líkleg í kvöld!"}
                </p>
                <p className="text-[9px] text-muted-foreground">22:00 – 02:00 · Low cloud cover</p>
              </div>
              <div className="space-y-2">
                <div className="bg-primary/10 border border-primary/20 rounded-lg px-3 py-2">
                  <span className="text-[9px] text-primary font-medium">📍 Best spot: Grótta Lighthouse — 8 km</span>
                </div>
                <div className="bg-secondary/30 rounded-lg px-3 py-2">
                  <span className="text-[9px] text-foreground">🌙 Moon: 12% · Ideal darkness</span>
                </div>
                <div className="bg-secondary/30 rounded-lg px-3 py-2">
                  <span className="text-[9px] text-foreground">📸 Camera settings: ISO 3200 · f/2.8 · 15s</span>
                </div>
              </div>
            </div>
          )}

          {/* 3 — Secrets */}
          {activeScreen === 3 && (
            <div className="px-4 pt-2">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-[11px] font-semibold text-foreground">
                  {lang === "en" ? "Nearby secrets" : lang === "pl" ? "Sekrety w pobliżu" : "Leyndarmál í nágrenninu"}
                </span>
              </div>
              <div className="space-y-2">
                {[
                  { name: "Seljavallalaug Pool", dist: "0.8 km", type: "hot-spring" },
                  { name: "Hidden Canyon Trail", dist: "2.1 km", type: "viewpoint" },
                  { name: "Local Fish Soup", dist: "4.5 km", type: "food" },
                ].map((spot) => (
                  <div key={spot.name} className="bg-secondary/30 rounded-lg px-3 py-2.5">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[10px] font-medium text-foreground">{spot.name}</span>
                      <span className="text-[8px] text-primary font-semibold">{spot.dist}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-2.5 h-2.5 text-muted-foreground" />
                      <span className="text-[8px] text-muted-foreground">
                        {spot.type === "hot-spring" ? "🔥 Hidden hot spring" : spot.type === "viewpoint" ? "👁 Secret viewpoint" : "🍜 Local favorite"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 bg-accent/10 border border-accent/20 rounded-lg px-3 py-2">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-accent" />
                  <span className="text-[9px] text-accent font-medium">
                    {lang === "en" ? "Alert: Secret waterfall 300m off road!" : lang === "pl" ? "Alert: Ukryty wodospad 300m od drogi!" : "Viðvörun: Leyndur foss 300m frá vegi!"}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* 4 — Hiking Trails */}
          {activeScreen === 4 && (
            <div className="px-4 pt-2">
              <div className="flex items-center gap-2 mb-3">
                <Mountain className="w-4 h-4 text-primary" />
                <span className="text-[11px] font-semibold text-foreground">
                  {lang === "en" ? "Trails nearby" : lang === "pl" ? "Szlaki w pobliżu" : "Gönguleiðir í nágrenninu"}
                </span>
              </div>
              <div className="space-y-2">
                {[
                  { name: "Skógafoss Trail", diff: "Easy", dist: "3.2 km", elev: "↑ 120m", time: "1h" },
                  { name: "Fimmvörðuháls", diff: "Hard", dist: "22 km", elev: "↑ 1000m", time: "10h" },
                  { name: "Reykjadalur Hot River", diff: "Medium", dist: "7 km", elev: "↑ 280m", time: "3h" },
                ].map((trail) => (
                  <div key={trail.name} className="bg-secondary/30 rounded-lg px-3 py-2">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[10px] font-medium text-foreground">{trail.name}</span>
                      <span className={`text-[8px] font-semibold ${trail.diff === "Easy" ? "text-emerald-400" : trail.diff === "Hard" ? "text-destructive" : "text-accent"}`}>{trail.diff}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[8px] text-muted-foreground">
                      <span>{trail.dist}</span>
                      <span>{trail.elev}</span>
                      <span>⏱ {trail.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[8px] text-muted-foreground text-center mt-3">Works offline · GPS tracking</p>
            </div>
          )}

          {/* 5 — Road Status */}
          {activeScreen === 5 && (
            <div className="px-4 pt-2">
              <div className="space-y-2">
                {[
                  { road: "Route 1 (South)", status: "Open", color: "text-emerald-400" },
                  { road: "Route 1 (East)", status: "Open", color: "text-emerald-400" },
                  { road: "F26 Sprengisandur", status: "Closed", color: "text-destructive" },
                  { road: "F35 Kjalvegur", status: "Closed", color: "text-destructive" },
                  { road: "Route 54 Snæfellsnes", status: "Icy", color: "text-accent" },
                ].map((r) => (
                  <div key={r.road} className="flex items-center justify-between bg-secondary/30 rounded-lg px-3 py-2">
                    <span className="text-[10px] text-foreground">{r.road}</span>
                    <span className={`text-[9px] font-semibold ${r.color}`}>{r.status}</span>
                  </div>
                ))}
              </div>
              <p className="text-[8px] text-muted-foreground text-center mt-3">Source: road.is · Updated 5 min ago</p>
            </div>
          )}

          {/* 6 — Road Cams */}
          {activeScreen === 6 && (
            <div className="px-4 pt-2">
              <div className="flex items-center gap-2 mb-3">
                <Camera className="w-4 h-4 text-primary" />
                <span className="text-[11px] font-semibold text-foreground">
                  {lang === "en" ? "Live cameras" : lang === "pl" ? "Kamery na żywo" : "Myndavélar í beinni"}
                </span>
              </div>
              <div className="space-y-2">
                {[
                  { name: "Vík í Mýrdal", status: "Clear", updated: "2 min ago" },
                  { name: "Hringvegur – Ólafsvík", status: "Snow", updated: "5 min ago" },
                  { name: "Hvalfjörður Tunnel", status: "Clear", updated: "1 min ago" },
                ].map((cam) => (
                  <div key={cam.name} className="bg-secondary/30 rounded-lg px-3 py-2">
                    <div className="bg-secondary/80 rounded-md h-10 mb-1.5 flex items-center justify-center">
                      <Camera className="w-3 h-3 text-muted-foreground/50" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] text-foreground font-medium">{cam.name}</span>
                      <span className={`text-[8px] font-semibold ${cam.status === "Clear" ? "text-emerald-400" : "text-accent"}`}>{cam.status}</span>
                    </div>
                    <p className="text-[7px] text-muted-foreground">{cam.updated}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 7 — EV Charging */}
          {activeScreen === 7 && (
            <div className="px-4 pt-2">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-[11px] font-semibold text-foreground">
                  {lang === "en" ? "Nearby chargers" : lang === "pl" ? "Ładowarki w pobliżu" : "Hleðslustöðvar í nágrenninu"}
                </span>
              </div>
              <div className="space-y-2">
                {[
                  { name: "ON Power Selfoss", type: "DC 150kW", avail: "2/4", dist: "3 km" },
                  { name: "Ísorka Vík", type: "DC 50kW", avail: "1/2", dist: "18 km" },
                  { name: "RARIK Kirkjubæjar", type: "AC 22kW", avail: "3/3", dist: "45 km" },
                ].map((ch) => (
                  <div key={ch.name} className="bg-secondary/30 rounded-lg px-3 py-2.5">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[10px] font-medium text-foreground">{ch.name}</span>
                      <span className="text-[8px] text-primary font-semibold">{ch.dist}</span>
                    </div>
                    <div className="flex items-center justify-between text-[8px] text-muted-foreground">
                      <span>⚡ {ch.type}</span>
                      <span className="text-emerald-400 font-semibold">{ch.avail} available</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 bg-primary/10 border border-primary/20 rounded-lg px-3 py-2 text-center">
                <span className="text-[9px] text-primary font-medium">Navigate to nearest charger →</span>
              </div>
            </div>
          )}

          {/* 8 — Parking */}
          {activeScreen === 8 && (
            <div className="px-4 pt-2">
              <div className="flex items-center gap-2 mb-3">
                <Car className="w-4 h-4 text-primary" />
                <span className="text-[11px] font-semibold text-foreground">
                  {lang === "en" ? "Parking" : lang === "pl" ? "Parking" : "Bílastæði"}
                </span>
              </div>
              <div className="bg-secondary/50 rounded-xl h-20 mb-3 flex items-center justify-center">
                <span className="text-[9px] text-muted-foreground">📍 Reykjavík Downtown</span>
              </div>
              <div className="space-y-2">
                {[
                  { name: "Kolaportið P1", price: "250 ISK/h", spots: "12 free" },
                  { name: "Harpa Garage", price: "300 ISK/h", spots: "34 free" },
                ].map((p) => (
                  <div key={p.name} className="bg-secondary/30 rounded-lg px-3 py-2.5">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[10px] font-medium text-foreground">{p.name}</span>
                      <span className="text-[8px] text-emerald-400 font-semibold">{p.spots}</span>
                    </div>
                    <span className="text-[8px] text-muted-foreground">{p.price}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 bg-primary/10 border border-primary/20 rounded-lg px-3 py-2.5 text-center">
                <span className="text-[10px] text-primary font-semibold">Pay via Parka · One tap</span>
              </div>
            </div>
          )}

          {/* 9 — Currency */}
          {activeScreen === 9 && (
            <div className="px-4 pt-2">
              <div className="flex items-center gap-2 mb-3">
                <DollarSign className="w-4 h-4 text-primary" />
                <span className="text-[11px] font-semibold text-foreground">
                  {lang === "en" ? "Currency converter" : lang === "pl" ? "Przelicznik walut" : "Gjaldmiðlabreytir"}
                </span>
              </div>
              <div className="bg-secondary/50 rounded-xl px-4 py-4 mb-3 text-center">
                <p className="text-[9px] text-muted-foreground mb-1">ISK</p>
                <p className="text-2xl font-bold text-foreground">5 000</p>
                <div className="my-2 text-muted-foreground text-[10px]">↓</div>
                <p className="text-[9px] text-muted-foreground mb-1">EUR</p>
                <p className="text-xl font-bold text-primary">€32.50</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { cur: "USD", val: "$35.10" },
                  { cur: "GBP", val: "£27.80" },
                  { cur: "PLN", val: "140 zł" },
                  { cur: "NOK", val: "360 kr" },
                ].map((c) => (
                  <div key={c.cur} className="bg-secondary/30 rounded-lg px-3 py-2 text-center">
                    <p className="text-[8px] text-muted-foreground">{c.cur}</p>
                    <p className="text-[10px] font-semibold text-foreground">{c.val}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 10 — SOS */}
          {activeScreen === 10 && (
            <div className="px-4 pt-4 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-destructive/20 flex items-center justify-center mb-3">
                <Phone className="w-7 h-7 text-destructive" />
              </div>
              <p className="text-sm font-bold text-foreground mb-1">
                {lang === "en" ? "Emergency?" : lang === "pl" ? "Nagły wypadek?" : "Neyðartilvik?"}
              </p>
              <p className="text-[10px] text-muted-foreground text-center mb-4 px-2">
                {lang === "en" ? "Tap to call. GPS location sent automatically." : lang === "pl" ? "Dotknij, by zadzwonić. Lokalizacja GPS wysłana automatycznie." : "Snertu til að hringja. GPS staðsetning send sjálfkrafa."}
              </p>
              <div className="w-full bg-destructive/90 text-destructive-foreground rounded-xl py-3 text-center text-xs font-semibold">
                {lang === "en" ? "Call NordCar Rescue" : lang === "pl" ? "Zadzwoń po pomoc" : "Hringdu í NordCar björgun"}
              </div>
              <p className="text-[8px] text-muted-foreground mt-3">24/7 · +354 123 4567</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
