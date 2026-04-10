import { MapPin, Calendar, Clock, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";
import { useState } from "react";
import DemoDialog from "@/components/DemoDialog";

const BookingWidget = () => {
  const { lang } = useLang();
  const [demo, setDemo] = useState(false);

  return (
    <>
      <div className="bg-card/90 backdrop-blur-lg border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 w-full max-w-4xl">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          <div className="flex flex-col gap-1 col-span-2 lg:col-span-1">
            <label className="text-[10px] sm:text-xs text-primary font-medium uppercase tracking-wider">
              {t.booking.pickupLocation[lang]}
            </label>
            <div className="flex items-center gap-2 bg-secondary/60 rounded-lg px-3 py-2 sm:py-2.5">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <select className="bg-transparent text-sm text-foreground w-full outline-none cursor-pointer">
                <option>Keflavík Airport (KEF)</option>
                <option>Reykjavík Downtown</option>
                <option>Akureyri Airport (AEY)</option>
                <option>Egilsstaðir (EGS)</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[10px] sm:text-xs text-primary font-medium uppercase tracking-wider">
              {t.booking.pickupDate[lang]}
            </label>
            <div className="flex items-center gap-2 bg-secondary/60 rounded-lg px-3 py-2 sm:py-2.5">
              <Calendar className="w-4 h-4 text-primary shrink-0 hidden sm:block" />
              <input type="date" className="bg-transparent text-sm text-foreground w-full outline-none cursor-pointer" />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[10px] sm:text-xs text-primary font-medium uppercase tracking-wider">
              {t.booking.dropoffDate[lang]}
            </label>
            <div className="flex items-center gap-2 bg-secondary/60 rounded-lg px-3 py-2 sm:py-2.5">
              <Calendar className="w-4 h-4 text-primary shrink-0 hidden sm:block" />
              <input type="date" className="bg-transparent text-sm text-foreground w-full outline-none cursor-pointer" />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[10px] sm:text-xs text-primary font-medium uppercase tracking-wider">
              {t.booking.time[lang]}
            </label>
            <div className="flex items-center gap-2 bg-secondary/60 rounded-lg px-3 py-2 sm:py-2.5">
              <Clock className="w-4 h-4 text-primary shrink-0 hidden sm:block" />
              <select className="bg-transparent text-sm text-foreground w-full outline-none cursor-pointer">
                {Array.from({ length: 24 }, (_, i) => {
                  const h = String(i).padStart(2, "0");
                  return <option key={i} value={`${h}:00`}>{h}:00</option>;
                })}
              </select>
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <Button
              className="w-full py-5 sm:py-6 text-sm sm:text-base font-semibold gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
              onClick={() => setDemo(true)}
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              {t.booking.search[lang]}
            </Button>
          </div>
        </div>
      </div>
      <DemoDialog open={demo} onOpenChange={setDemo} feature="search" />
    </>
  );
};

export default BookingWidget;
