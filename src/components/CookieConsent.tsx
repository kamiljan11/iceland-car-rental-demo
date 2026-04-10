import { useState, useEffect } from "react";
import { useLang } from "@/i18n/LanguageContext";

const CookieConsent = () => {
  const { lang } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  const labels = {
    text: {
      en: "We use cookies to improve your experience. By continuing, you agree to our cookie policy.",
      pl: "Używamy plików cookie, aby poprawić Twoje doświadczenie. Kontynuując, zgadzasz się na naszą politykę cookie.",
      is: "Við notum vefkökur til að bæta upplifun þína. Með því að halda áfram samþykkir þú vefkökustefnu okkar.",
    },
    accept: { en: "Accept", pl: "Akceptuję", is: "Samþykkja" },
    decline: { en: "Decline", pl: "Odrzuć", is: "Hafna" },
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 animate-in slide-in-from-bottom-4">
      <div className="max-w-xl mx-auto bg-card border border-border rounded-2xl shadow-lg p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-xs sm:text-sm text-muted-foreground flex-1">{labels.text[lang]}</p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={decline}
            className="text-xs px-3 py-2 rounded-lg border border-border text-muted-foreground hover:text-foreground transition-colors"
          >
            {labels.decline[lang]}
          </button>
          <button
            onClick={accept}
            className="text-xs px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            {labels.accept[lang]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
