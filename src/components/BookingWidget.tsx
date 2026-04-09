import { MapPin, Calendar, Clock, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";

const BookingWidget = () => {
  const { lang } = useLang();

  return (
    <div className="bg-card/90 backdrop-blur-lg border border-border rounded-2xl p-6 w-full max-w-4xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Pickup Location */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-primary font-medium uppercase tracking-wider">
            {t.booking.pickupLocation[lang]}
          </label>
          <div className="flex items-center gap-2 bg-secondary/60 rounded-lg px-3 py-2.5">
            <MapPin className="w-4 h-4 text-primary shrink-0" />
            <select className="bg-transparent text-sm text-foreground w-full outline-none cursor-pointer">
              <option>Keflavík Airport (KEF)</option>
              <option>Reykjavík Downtown</option>
              <option>Akureyri Airport (AEY)</option>
              <option>Egilsstaðir (EGS)</option>
            </select>
          </div>
        </div>

        {/* Pickup Date */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-primary font-medium uppercase tracking-wider">
            {t.booking.pickupDate[lang]}
          </label>
          <div className="flex items-center gap-2 bg-secondary/60 rounded-lg px-3 py-2.5">
            <Calendar className="w-4 h-4 text-primary shrink-0" />
            <input
              type="date"
              className="bg-transparent text-sm text-foreground w-full outline-none cursor-pointer"
            />
          </div>
        </div>

        {/* Dropoff Date */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-primary font-medium uppercase tracking-wider">
            {t.booking.dropoffDate[lang]}
          </label>
          <div className="flex items-center gap-2 bg-secondary/60 rounded-lg px-3 py-2.5">
            <Calendar className="w-4 h-4 text-primary shrink-0" />
            <input
              type="date"
              className="bg-transparent text-sm text-foreground w-full outline-none cursor-pointer"
            />
          </div>
        </div>

        {/* Pickup Time */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-primary font-medium uppercase tracking-wider">
            {t.booking.time[lang]}
          </label>
          <div className="flex items-center gap-2 bg-secondary/60 rounded-lg px-3 py-2.5">
            <Clock className="w-4 h-4 text-primary shrink-0" />
            <select className="bg-transparent text-sm text-foreground w-full outline-none cursor-pointer">
              {Array.from({ length: 24 }, (_, i) => {
                const h = String(i).padStart(2, "0");
                return (
                  <option key={i} value={`${h}:00`}>
                    {h}:00
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex flex-col justify-end">
          <Button className="w-full py-6 text-base font-semibold gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
            <Search className="w-5 h-5" />
            {t.booking.search[lang]}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingWidget;
