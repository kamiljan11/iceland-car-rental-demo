import { Mountain, Mail, Phone, MapPin } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";
import { useState } from "react";
import DemoDialog from "@/components/DemoDialog";

const Footer = () => {
  const { lang } = useLang();
  const [demo, setDemo] = useState(false);

  const demoLink = (label: string) => (
    <li>
      <button onClick={() => setDemo(true)} className="hover:text-foreground transition-colors text-left">
        {label}
      </button>
    </li>
  );

  return (
    <>
      <footer className="border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Mountain className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                <span className="font-display text-base sm:text-lg font-semibold">NordCar Iceland</span>
              </div>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                {t.footer.desc[lang]}
              </p>
              <div className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                  <span>+354 555 1234</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                  <span>hello@nordcar.is</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                  <span>Keflavík Airport, Iceland</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-xs sm:text-sm mb-3 sm:mb-4 text-foreground">{t.footer.col1[lang]}</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                {demoLink(t.footer.about[lang])}
                {demoLink(t.footer.careers[lang])}
                {demoLink(t.footer.press[lang])}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-xs sm:text-sm mb-3 sm:mb-4 text-foreground">{t.footer.col2[lang]}</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                {demoLink(t.footer.rentals[lang])}
                {demoLink(t.footer.campers[lang])}
                {demoLink(t.footer.tours[lang])}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-xs sm:text-sm mb-3 sm:mb-4 text-foreground">{t.footer.col3[lang]}</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                {demoLink(t.footer.helpCenter[lang])}
                {demoLink(t.footer.terms[lang])}
                {demoLink(t.footer.privacy[lang])}
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-6 sm:pt-8 text-center text-muted-foreground text-[10px] sm:text-xs">
            © {new Date().getFullYear()} NordCar Iceland. {t.footer.rights[lang]}
          </div>
        </div>
      </footer>
      <DemoDialog open={demo} onOpenChange={setDemo} />
    </>
  );
};

export default Footer;
