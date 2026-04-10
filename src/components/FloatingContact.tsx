import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const FloatingContact = () => {
  const [tooltip, setTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {tooltip && (
        <div className="bg-card border border-border rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 animate-in fade-in slide-in-from-right-4">
          <p className="text-sm">
            <span className="font-medium">Need help?</span>
            <br />
            <span className="text-muted-foreground text-xs">We reply in under 30 min</span>
          </p>
          <button onClick={() => setTooltip(false)} className="text-muted-foreground hover:text-foreground">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
      <a
        href="https://wa.me/3541234567"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingContact;
