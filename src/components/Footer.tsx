import { Mountain } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";
import IcelandOutline from "@/components/svg/IcelandOutline";

const Footer = () => {
  const { lang } = useLang();

  return (
    <footer className="border-t border-border/30 py-10 sm:py-14 px-4 sm:px-6 relative overflow-hidden">
      <IcelandOutline className="absolute top-1/2 right-8 -translate-y-1/2 text-muted-foreground hidden sm:block" size={100} />
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Mountain className="w-5 h-5 text-primary" />
            <span className="font-display text-base font-semibold">NordCar Iceland</span>
          </div>
          <p className="text-muted-foreground text-xs sm:text-sm text-center">
            {t.footer.desc[lang]}
          </p>
          <p className="text-muted-foreground text-[10px] sm:text-xs">
            © {new Date().getFullYear()} NordCar Iceland
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
