import { Plane, KeyRound, Car } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const steps = [
  {
    icon: Plane,
    num: "01",
    title: { en: "Land at KEF", pl: "Wyląduj w KEF", is: "Lentu á KEF" },
    desc: {
      en: "Check in online before you fly. We track your flight — if it's delayed, we adjust. No stress.",
      pl: "Zamelduj się online przed lotem. Śledzimy Twój lot — jeśli jest opóźniony, dostosowujemy się.",
      is: "Skráðu þig inn á netinu áður en þú flýgur. Við fylgjumst með flugi þínu.",
    },
  },
  {
    icon: KeyRound,
    num: "02",
    title: { en: "Grab your keys", pl: "Odbierz kluczyki", is: "Taktu lyklana" },
    desc: {
      en: "Walk to our secure keybox at the airport. Enter your code, grab keys. No counter, no queue, no upsell.",
      pl: "Podejdź do naszego keyboxa na lotnisku. Wpisz kod, odbierz kluczyki. Bez kolejki, bez upsellingu.",
      is: "Gakktu að öruggum lyklaskáp á flugvellinum. Sláðu inn kóða, taktu lykla. Engin biðröð.",
    },
  },
  {
    icon: Car,
    num: "03",
    title: { en: "Drive away", pl: "Ruszaj w drogę", is: "Keyrðu í burtu" },
    desc: {
      en: "Your car is parked, fueled, and ready in our marked spot. GPS pre-loaded with your itinerary. Just drive.",
      pl: "Twoje auto jest zaparkowane, zatankowane i gotowe. GPS wczytany z Twoim planem podróży. Po prostu jedź.",
      is: "Bíllinn þinn er lagður, tankað og tilbúinn. GPS forhlaðinn með ferðaáætluninni. Bara keyrðu.",
    },
  },
];

const PickupProcess = () => {
  const { lang } = useLang();
  const labels = {
    label: { en: "Pickup at Keflavík", pl: "Odbiór na Keflavík", is: "Afhending á Keflavík" },
    title: { en: "From plane to road in 10 minutes", pl: "Z samolotu na drogę w 10 minut", is: "Frá flugvél á veg á 10 mínútum" },
  };

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs sm:text-sm mb-2">
            {labels.label[lang]}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            {labels.title[lang]}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-primary/30 font-display text-3xl font-black">{s.num}</span>
              <h3 className="font-display text-lg sm:text-xl font-semibold mt-1 mb-2">{s.title[lang]}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PickupProcess;
