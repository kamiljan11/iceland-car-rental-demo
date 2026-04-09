import { Mountain, Mail, Phone, MapPin } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";

const Footer = () => {
  const { lang } = useLang();

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="w-6 h-6 text-primary" />
              <span className="font-display text-lg font-semibold">NordCar Iceland</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {t.footer.desc[lang]}
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+354 555 1234</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@nordcar.is</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Keflavík Airport, Iceland</span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">{t.footer.col1[lang]}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">{t.footer.about[lang]}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t.footer.careers[lang]}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t.footer.press[lang]}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">{t.footer.col2[lang]}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">{t.footer.rentals[lang]}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t.footer.campers[lang]}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t.footer.tours[lang]}</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-foreground">{t.footer.col3[lang]}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">{t.footer.helpCenter[lang]}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t.footer.terms[lang]}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">{t.footer.privacy[lang]}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground text-xs">
          © {new Date().getFullYear()} NordCar Iceland. {t.footer.rights[lang]}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
