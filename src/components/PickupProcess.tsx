import { Plane, KeyRound, Car } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const steps = [
  {
    icon: Plane,
    title: { en: "Land at KEF", pl: "Wyląduj w KEF", is: "Lentu á KEF" },
    desc: {
      en: "Check in online before you fly. We track your flight — if it's delayed, we adjust.",
      pl: "Zamelduj się online przed lotem. Śledzimy Twój lot — jeśli jest opóźniony, dostosowujemy się.",
      is: "Skráðu þig inn á netinu áður en þú flýgur. Við fylgjumst með flugi þínu.",
    },
  },
  {
    icon: KeyRound,
    title: { en: "Grab your keys", pl: "Odbierz kluczyki", is: "Taktu lyklana" },
    desc: {
      en: "Walk to our keybox at the airport. Enter your code, grab keys. No counter, no queue.",
      pl: "Podejdź do naszego keyboxa na lotnisku. Wpisz kod, odbierz kluczyki. Bez kolejki.",
      is: "Gakktu að lyklaskáp á flugvellinum. Sláðu inn kóða, taktu lykla. Engin biðröð.",
    },
  },
  {
    icon: Car,
    title: { en: "Drive away", pl: "Ruszaj w drogę", is: "Keyrðu í burtu" },
    desc: {
      en: "Your car is parked, fueled, and ready. GPS pre-loaded with your itinerary. Just drive.",
      pl: "Twoje auto jest zaparkowane, zatankowane i gotowe. GPS wczytany. Po prostu jedź.",
      is: "Bíllinn þinn er lagður, tankað og tilbúinn. GPS forhlaðinn. Bara keyrðu.",
    },
  },
];

const PickupProcess = () => {
  const { lang } = useLang();
  const labels = {
    title: { en: "From plane to road in 10 minutes", pl: "Z samolotu na drogę w 10 minut", is: "Frá flugvél á veg á 10 mínútum" },
  };

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12">
          {labels.title[lang]}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 relative">
                <s.icon className="w-7 h-7 text-primary" />
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{s.title[lang]}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">{s.desc[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PickupProcess;
