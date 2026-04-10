import { Mountain, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useLang } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";
import { translations as t } from "@/i18n/translations";
import { useState } from "react";
import DemoDialog from "@/components/DemoDialog";

const flags: Record<Lang, string> = { en: "🇬🇧", pl: "🇵🇱", is: "🇮🇸" };
const langs: Lang[] = ["en", "pl", "is"];

const Navbar = () => {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [demo, setDemo] = useState(false);

  const navLinks = [
    { href: "#fleet", label: t.nav.fleet[lang] },
    { href: "#routes", label: t.nav.routes[lang] },
    { href: "#", label: t.nav.insurance[lang] },
    { href: "#", label: t.nav.driving[lang] },
    { href: "#", label: t.nav.contact[lang] },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Mountain className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            <span className="font-display text-base sm:text-lg font-semibold">
              NordCar Iceland
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-foreground transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language switcher - desktop */}
            <div className="hidden sm:flex items-center gap-1 bg-secondary/60 rounded-full p-1">
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

            <Button variant="outline" size="sm" className="hidden md:inline-flex text-xs border-border/50" onClick={() => setDemo(true)}>
              {t.nav.manage[lang]}
            </Button>
            <Button size="sm" className="text-xs sm:text-sm h-8 sm:h-9 px-3 sm:px-4" onClick={() => setDemo(true)}>
              {t.nav.book[lang]}
            </Button>

            {/* Mobile hamburger */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button className="lg:hidden p-2 -mr-2 text-foreground">
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background border-border p-0">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  <div className="p-5 border-b border-border">
                    <div className="flex items-center gap-2">
                      <Mountain className="w-5 h-5 text-primary" />
                      <span className="font-display text-base font-semibold">NordCar Iceland</span>
                    </div>
                  </div>

                  <div className="flex-1 py-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block px-5 py-3.5 text-base text-foreground hover:bg-secondary/50 transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>

                  {/* Language switcher - mobile */}
                  <div className="p-5 border-t border-border">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Language</p>
                    <div className="flex gap-2">
                      {langs.map((l) => (
                        <button
                          key={l}
                          onClick={() => { setLang(l); setOpen(false); }}
                          className={`text-lg px-3 py-2 rounded-lg transition-colors ${
                            lang === l
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary/60 text-muted-foreground"
                          }`}
                        >
                          {flags[l]}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 border-t border-border space-y-2">
                    <Button variant="outline" size="sm" className="w-full text-xs border-border/50" onClick={() => { setOpen(false); setDemo(true); }}>
                      {t.nav.manage[lang]}
                    </Button>
                    <Button size="sm" className="w-full text-sm" onClick={() => { setOpen(false); setDemo(true); }}>
                      {t.nav.book[lang]}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
      <DemoDialog open={demo} onOpenChange={setDemo} />
    </>
  );
};

export default Navbar;
