import { Mountain, Mail, Phone, MapPin } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";

const Footer = () => {
  const { lang } = useLang();

  const contactLabel = { en: "Contact", pl: "Kontakt", is: "Hafðu samband" };
  const linksLabel = { en: "Quick links", pl: "Szybkie linki", is: "Flýtitenglar" };
  const hoursLabel = { en: "Open 24/7 during summer season", pl: "Otwarte 24/7 w sezonie letnim", is: "Opið 24/7 á sumrin" };

  return (
    <footer className="border-t border-border/30 bg-card py-10 sm:py-14 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Mountain className="w-5 h-5 text-primary" />
              <span className="font-display text-base font-semibold">NordCar Iceland</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t.footer.desc[lang]}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm mb-3">{linksLabel[lang]}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#fleet" className="hover:text-foreground transition-colors">{t.nav.fleet[lang]}</a></li>
              <li><a href="#routes" className="hover:text-foreground transition-colors">{t.nav.routes[lang]}</a></li>
              <li><a href="#insurance" className="hover:text-foreground transition-colors">{t.nav.insurance[lang]}</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-3">{contactLabel[lang]}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" />
                <a href="tel:+3541234567" className="hover:text-foreground transition-colors">+354 123 4567</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" />
                <a href="mailto:info@nordcar.is" className="hover:text-foreground transition-colors">info@nordcar.is</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>Keflavík Airport, Iceland</span>
              </li>
            </ul>
            <p className="text-xs text-muted-foreground/60 mt-3">{hoursLabel[lang]}</p>
          </div>
        </div>

        <div className="border-t border-border/30 pt-6 text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} NordCar Iceland. All rights reserved.{/* [ukryte 2026-07-21] {" · "}built by{" "}
            <a href="https://kamiljan.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Kamil Jan</a> */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
