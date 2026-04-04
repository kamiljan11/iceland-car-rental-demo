import { Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";
import { translations as t } from "@/i18n/translations";

const flags: Record<Lang, string> = { en: "🇬🇧", pl: "🇵🇱", is: "🇮🇸" };
const langs: Lang[] = ["en", "pl", "is"];

const Navbar = () => {
  const { lang, setLang } = useLang();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Mountain className="w-6 h-6 text-primary" />
          <span className="font-display text-lg font-semibold">
            NordCar Iceland
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#fleet" className="hover:text-foreground transition-colors">
            {t.nav.fleet[lang]}
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            {t.nav.routes[lang]}
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            {t.nav.pricing[lang]}
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            {t.nav.contact[lang]}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-secondary/60 rounded-full p-1">
            {langs.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-sm px-2 py-1 rounded-full transition-colors ${
                  lang === l
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-secondary text-muted-foreground"
                }`}
              >
                {flags[l]}
              </button>
            ))}
          </div>
          <Button size="sm" className="text-sm">
            {t.nav.book[lang]}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
