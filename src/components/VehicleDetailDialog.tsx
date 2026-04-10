import { useState } from "react";
import { ChevronLeft, ChevronRight, Check, Mountain, Fuel, Users, Cog, Shield, Luggage, Zap, Gauge, CarFront } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";
import BookingSimDialog from "@/components/BookingSimDialog";

type VehicleKey = "suv" | "camper" | "compact" | "offroad" | "electric" | "luxury";

interface VehicleDetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  vehicleKey: VehicleKey | null;
  images: Record<string, string[]>;
}

const transmissionLabel = { automatic: "Automatic", manual: "Manual" };
const fuelLabels: Record<string, string> = { diesel: "Diesel", petrol: "Petrol", electric: "Electric" };

const VehicleDetailDialog = ({ open, onOpenChange, vehicleKey, images }: VehicleDetailDialogProps) => {
  const { lang } = useLang();
  const [imgIdx, setImgIdx] = useState(0);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingVehicle, setBookingVehicle] = useState<{ name: string; price: string } | null>(null);

  // Store vehicle info for booking before closing detail dialog
  const handleBookClick = () => {
    if (!vehicleKey) return;
    const v = t.vehicles[vehicleKey];
    setBookingVehicle({ name: v.name[lang], price: v.price[lang] });
    onOpenChange(false);
    setTimeout(() => setBookingOpen(true), 300);
  };

  const bookingDialog = (
    <BookingSimDialog
      open={bookingOpen}
      onOpenChange={setBookingOpen}
      vehicleName={bookingVehicle?.name || ""}
      vehiclePrice={bookingVehicle?.price || ""}
    />
  );

  if (!vehicleKey) return bookingDialog;

  const v = t.vehicles[vehicleKey];
  const dm = t.fleet.detailModal;
  const imgs = images[vehicleKey] || [];
  const s = v.specs;
  const FuelIcon = s.fuel === "electric" ? Zap : Fuel;

  const specs = [
    { icon: Users, label: dm.seats[lang], value: String(s.seats) },
    { icon: Cog, label: lang === "en" ? "Transmission" : lang === "pl" ? "Skrzynia" : "Gírskipti", value: transmissionLabel[s.transmission] },
    { icon: FuelIcon, label: dm.fuel[lang], value: fuelLabels[s.fuel] },
    { icon: CarFront, label: dm.drive[lang], value: s.drivetrain },
    { icon: Gauge, label: lang === "en" ? "Engine" : lang === "pl" ? "Silnik" : "Vél", value: s.engine },
    { icon: Fuel, label: lang === "en" ? "Range" : lang === "pl" ? "Zasięg" : "Drægni", value: s.range },
    { icon: Luggage, label: lang === "en" ? "Luggage" : lang === "pl" ? "Bagaż" : "Farangur", value: s.luggage > 0 ? `${s.luggage} bags` : (lang === "en" ? "Camper storage" : lang === "pl" ? "Schowek kampera" : "Geymsla húsbíls") },
    { icon: Mountain, label: v.froad ? dm.froad[lang] : dm.noFroad[lang], value: v.froad ? "✓" : "✗" },
  ];

  return (
    <>
      <Dialog open={open} onOpenChange={(o) => { onOpenChange(o); if (!o) setImgIdx(0); }}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden gap-0 max-h-[90vh] overflow-y-auto custom-scrollbar">
          {/* Image gallery */}
          <div className="relative bg-secondary/30 aspect-[16/10] group/detail">
            <img
              src={imgs[imgIdx] || ""}
              alt={v.name[lang]}
              className="w-full h-full object-cover bg-secondary/20 transition-all duration-500"
            />
            <span className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-full">
              {v.tag[lang]}
            </span>
            {imgs.length > 1 && (
              <>
                <button
                  onClick={() => setImgIdx((i) => (i - 1 + imgs.length) % imgs.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/70 backdrop-blur flex items-center justify-center opacity-0 group-hover/detail:opacity-100 transition-opacity"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setImgIdx((i) => (i + 1) % imgs.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/70 backdrop-blur flex items-center justify-center opacity-0 group-hover/detail:opacity-100 transition-opacity"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {imgs.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImgIdx(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${i === imgIdx ? "bg-primary-foreground" : "bg-primary-foreground/40"}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Content */}
          <div className="p-5 sm:p-7 space-y-5">
            <DialogHeader className="space-y-1 text-left">
              <DialogTitle className="font-display text-2xl sm:text-3xl font-bold">
                {v.name[lang]}
              </DialogTitle>
              <p className="text-muted-foreground text-sm">{v.subtitle[lang]}</p>
            </DialogHeader>

            {/* Price + Best for */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-primary font-semibold text-xl">{v.price[lang]}</span>
              <span className="text-xs text-muted-foreground bg-secondary/60 px-3 py-1 rounded-full">
                {t.fleet.bestFor[lang]} {v.bestFor[lang]}
              </span>
            </div>

            {/* Description */}
            {'description' in v && v.description && (
              <p className="text-sm text-muted-foreground leading-relaxed">
                {(v.description as Record<string, string>)[lang]}
              </p>
            )}

            {/* Specs grid */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">{dm.specs[lang]}</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {specs.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3 bg-secondary/40 rounded-xl px-3.5 py-2.5">
                    <Icon className="w-4 h-4 text-primary shrink-0" />
                    <div className="min-w-0">
                      <p className="text-[10px] text-muted-foreground truncate">{label}</p>
                      <p className="text-xs font-medium">{value}</p>
                    </div>
                  </div>
                ))}
                <div className="flex items-center gap-3 bg-secondary/40 rounded-xl px-3.5 py-2.5">
                  <Users className="w-4 h-4 text-primary shrink-0" />
                  <div>
                    <p className="text-[10px] text-muted-foreground">{dm.minAge[lang]}</p>
                    <p className="text-xs font-medium">{v.minAge}+</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Included items */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
                <Shield className="w-3.5 h-3.5" />
                {dm.included[lang]}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {dm.includedItems[lang].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Button
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 text-base"
              onClick={() => { onOpenChange(false); setTimeout(() => setBookingOpen(true), 300); }}
            >
              {dm.bookThis[lang]}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <BookingSimDialog
        open={bookingOpen}
        onOpenChange={setBookingOpen}
        vehicleName={v.name[lang]}
        vehiclePrice={v.price[lang]}
      />
    </>
  );
};

export default VehicleDetailDialog;
