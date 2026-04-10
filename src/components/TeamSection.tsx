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
      en: "Former mechanic. Every car leaves our lot in perfect condition.",
      pl: "Były mechanik. Każde auto opuszcza nasz parking w idealnym stanie.",
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
    title: { en: "Meet our team", pl: "Poznaj nasz zespół", is: "Kynntu þér teymið" },
  };

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10">
          {labels.title[lang]}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {team.map((m) => (
            <div key={m.name} className="flex flex-col items-center text-center">
              <img
                src={m.img}
                alt={m.name}
                loading="lazy"
                width={400}
                height={400}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover mb-3 border-2 border-border"
              />
              <h3 className="font-semibold text-base">{m.name}</h3>
              <p className="text-primary text-xs font-medium mb-1">{m.role[lang]}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{m.bio[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
