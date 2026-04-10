import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import { useLang } from "@/i18n/LanguageContext";

const team = [
  {
    img: team1,
    name: "Elín Þórdís",
    role: { en: "Founder & CEO", pl: "Założycielka i CEO", is: "Stofnandi og forstjóri" },
    bio: {
      en: "Born in Reykjavík, 12 years in car rental. Knows every F-road by name.",
      pl: "Urodzona w Reykjavíku, 12 lat w branży. Zna każdą drogę F z nazwy.",
      is: "Fædd í Reykjavík, 12 ár í bílaleigu. Þekkir hvern F-veg af nafni.",
    },
  },
  {
    img: team2,
    name: "Ragnar Sigurðsson",
    role: { en: "Fleet Manager", pl: "Kierownik floty", is: "Bílastjóri" },
    bio: {
      en: "Former mechanic. Every car leaves our lot in perfect condition — he makes sure of it.",
      pl: "Były mechanik. Każde auto opuszcza nasz parking w idealnym stanie — on tego pilnuje.",
      is: "Fyrrverandi bifvélavirki. Hver bíll fer frá okkur í fullkomnu ástandi.",
    },
  },
  {
    img: team3,
    name: "Bjarki Ólafsson",
    role: { en: "Customer Experience", pl: "Doświadczenie klienta", is: "Upplifun viðskiptavina" },
    bio: {
      en: "Your first point of contact. Replies in under 30 minutes, even on weekends.",
      pl: "Twój pierwszy kontakt. Odpowiada w mniej niż 30 minut, nawet w weekendy.",
      is: "Fyrsti tengiliður þinn. Svarar á innan við 30 mínútum, jafnvel um helgar.",
    },
  },
];

const TeamSection = () => {
  const { lang } = useLang();
  const labels = {
    label: { en: "The people behind the wheel", pl: "Ludzie za kierownicą", is: "Fólkið á bak við stýrið" },
    title: { en: "Meet our team", pl: "Poznaj nasz zespół", is: "Kynntu þér teymið" },
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
          {team.map((m) => (
            <div key={m.name} className="text-center">
              <img
                src={m.img}
                alt={m.name}
                loading="lazy"
                width={400}
                height={400}
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover mx-auto mb-4 border-2 border-border"
              />
              <h3 className="font-display text-lg font-semibold">{m.name}</h3>
              <p className="text-primary text-xs sm:text-sm font-medium mb-2">{m.role[lang]}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{m.bio[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
