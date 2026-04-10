import { useState } from "react";
import { format, addDays } from "date-fns";
import { CalendarIcon, Loader2, User, Mail, Phone, MapPin, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { useLang } from "@/i18n/LanguageContext";
import DemoDialog from "@/components/DemoDialog";

interface BookingSimDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  vehicleName: string;
  vehiclePrice: string;
}

type Step = "details" | "processing" | "done";

const BookingSimDialog = ({ open, onOpenChange, vehicleName, vehiclePrice }: BookingSimDialogProps) => {
  const { lang } = useLang();
  const [pickupDate, setPickupDate] = useState<Date | undefined>(addDays(new Date(), 7));
  const [dropoffDate, setDropoffDate] = useState<Date | undefined>(addDays(new Date(), 14));
  const [step, setStep] = useState<Step>("details");
  const [demoOpen, setDemoOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [extras, setExtras] = useState({ gps: false, childSeat: false, gravel: false, wifi: false });

  const labels = {
    title: { en: "Complete Your Booking", pl: "Dokończ rezerwację", is: "Ljúktu bókuninni" },
    subtitle: { en: "Fill in your details to reserve", pl: "Wypełnij dane, aby zarezerwować", is: "Fylltu inn upplýsingar til að bóka" },
    pickup: { en: "Pick-up", pl: "Odbiór", is: "Afhending" },
    dropoff: { en: "Drop-off", pl: "Zwrot", is: "Skil" },
    confirm: { en: "Confirm & Pay", pl: "Potwierdź i zapłać", is: "Staðfesta og borga" },
    processing: { en: "Processing payment…", pl: "Przetwarzanie płatności…", is: "Vinnsla greiðslu…" },
    total: { en: "Total", pl: "Suma", is: "Samtals" },
    selectDate: { en: "Select date", pl: "Wybierz datę", is: "Veldu dagsetningu" },
    personalInfo: { en: "Personal Information", pl: "Dane osobowe", is: "Persónuupplýsingar" },
    fullName: { en: "Full name", pl: "Imię i nazwisko", is: "Fullt nafn" },
    emailLabel: { en: "Email address", pl: "Adres e-mail", is: "Netfang" },
    phoneLabel: { en: "Phone number", pl: "Numer telefonu", is: "Símanúmer" },
    optionalExtras: { en: "Optional Extras", pl: "Dodatkowe opcje", is: "Aukaval" },
    pickupLoc: { en: "Pick-up location", pl: "Miejsce odbioru", is: "Afhendingarstaður" },
    securePayment: { en: "Secure payment · Free cancellation up to 48h", pl: "Bezpieczna płatność · Darmowe anulowanie do 48h", is: "Örugg greiðsla · Ókeypis afbókun í allt að 48 klst" },
  };

  const freeLabel = { en: "Free", pl: "Gratis", is: "Ókeypis" };
  const extrasOptions = [
    { key: "gps" as const, label: { en: "GPS Navigation", pl: "Nawigacja GPS", is: "GPS leiðsögn" }, price: freeLabel[lang] },
    { key: "childSeat" as const, label: { en: "Child Seat", pl: "Fotelik dziecięcy", is: "Barnastóll" }, price: freeLabel[lang] },
    { key: "gravel" as const, label: { en: "Gravel Protection", pl: "Ochrona przed żwirem", is: "Malarvörn" }, price: freeLabel[lang] },
    { key: "wifi" as const, label: { en: "Mobile WiFi", pl: "Mobilne WiFi", is: "Farsíma WiFi" }, price: freeLabel[lang] },
  ];

  const days = pickupDate && dropoffDate
    ? Math.max(1, Math.ceil((dropoffDate.getTime() - pickupDate.getTime()) / (1000 * 60 * 60 * 24)))
    : 0;

  const priceNum = parseInt(vehiclePrice.replace(/[^0-9]/g, "")) || 89;
  const total = days * priceNum;

  const isFormValid = name.trim().length > 0 && email.includes("@") && phone.trim().length > 0 && days > 0;

  const handleConfirm = () => {
    setStep("processing");
    setTimeout(() => {
      // Instead of completing, show demo dialog
      setStep("details");
      onOpenChange(false);
      setDemoOpen(true);
    }, 2000);
  };

  const handleClose = (o: boolean) => {
    if (!o) {
      setStep("details");
    }
    onOpenChange(o);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="max-w-lg z-[60] max-h-[100dvh] sm:max-h-[90vh] overflow-y-auto custom-scrollbar p-0 gap-0 sm:rounded-xl rounded-none w-full h-full sm:h-auto sm:w-auto">
          <div className="p-5 sm:p-6 space-y-5">
            <DialogHeader>
              <DialogTitle className="font-display text-xl">{labels.title[lang]}</DialogTitle>
              <DialogDescription className="text-sm">{vehicleName} · {vehiclePrice}</DialogDescription>
            </DialogHeader>

            {step === "details" && (
              <div className="space-y-5">
                {/* Dates row */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-muted-foreground">{labels.pickup[lang]}</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn("w-full justify-start text-left font-normal text-xs sm:text-sm", !pickupDate && "text-muted-foreground")}
                        >
                          <CalendarIcon className="mr-1.5 h-3.5 w-3.5" />
                          {pickupDate ? format(pickupDate, "dd MMM yyyy") : labels.selectDate[lang]}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 z-[70]" align="start">
                        <Calendar
                          mode="single"
                          selected={pickupDate}
                          onSelect={(d) => {
                            setPickupDate(d);
                            if (d && dropoffDate && d >= dropoffDate) setDropoffDate(addDays(d, 1));
                          }}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-muted-foreground">{labels.dropoff[lang]}</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn("w-full justify-start text-left font-normal text-xs sm:text-sm", !dropoffDate && "text-muted-foreground")}
                        >
                          <CalendarIcon className="mr-1.5 h-3.5 w-3.5" />
                          {dropoffDate ? format(dropoffDate, "dd MMM yyyy") : labels.selectDate[lang]}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 z-[70]" align="start">
                        <Calendar
                          mode="single"
                          selected={dropoffDate}
                          onSelect={setDropoffDate}
                          disabled={(date) => date <= (pickupDate || new Date())}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                {/* Pickup location */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground">{labels.pickupLoc[lang]}</label>
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

                {/* Personal info */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-widest text-muted-foreground">{labels.personalInfo[lang]}</h4>
                  <div className="space-y-2.5">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder={labels.fullName[lang]}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="pl-9"
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder={labels.emailLabel[lang]}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-9"
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        type="tel"
                        placeholder={labels.phoneLabel[lang]}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="pl-9"
                      />
                    </div>
                  </div>
                </div>

                {/* Optional extras */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-widest text-muted-foreground">{labels.optionalExtras[lang]}</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {extrasOptions.map((opt) => (
                      <label
                        key={opt.key}
                        className={cn(
                          "flex items-center gap-2.5 rounded-xl border px-3 py-2.5 cursor-pointer transition-colors",
                          extras[opt.key] ? "border-primary bg-primary/10" : "border-border bg-secondary/30 hover:bg-secondary/50"
                        )}
                      >
                        <Checkbox
                          checked={extras[opt.key]}
                          onCheckedChange={(c) => setExtras(prev => ({ ...prev, [opt.key]: !!c }))}
                        />
                        <div className="min-w-0">
                          <p className="text-xs font-medium leading-tight">{opt.label[lang]}</p>
                          <p className="text-[10px] text-muted-foreground">{opt.price}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price summary */}
                {days > 0 && (
                  <div className="bg-secondary/50 rounded-xl p-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{vehiclePrice} × {days} {lang === "pl" ? "dni" : lang === "is" ? "dagar" : "days"}</span>
                      <span className="font-medium">€{days * priceNum}</span>
                    </div>
                    <div className="flex justify-between text-sm border-t border-border/50 pt-2">
                      <span className="font-semibold">{labels.total[lang]}</span>
                      <span className="font-bold text-primary text-lg">€{total}</span>
                    </div>
                  </div>
                )}

                <Button
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 text-base"
                  onClick={handleConfirm}
                  disabled={!isFormValid}
                >
                  {labels.confirm[lang]}
                </Button>

                <p className="flex items-center justify-center gap-1.5 text-[10px] text-muted-foreground">
                  <Shield className="w-3 h-3" />
                  {labels.securePayment[lang]}
                </p>
              </div>
            )}

            {step === "processing" && (
              <div className="flex flex-col items-center justify-center py-12 gap-4">
                <Loader2 className="w-10 h-10 text-accent animate-spin" />
                <p className="text-sm text-muted-foreground">{labels.processing[lang]}</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
      <DemoDialog open={demoOpen} onOpenChange={setDemoOpen} feature="book" />
    </>
  );
};

export default BookingSimDialog;
