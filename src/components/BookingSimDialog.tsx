import { useState } from "react";
import { format, addDays } from "date-fns";
import { CalendarIcon, Loader2, CheckCircle2 } from "lucide-react";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useLang } from "@/i18n/LanguageContext";
import DemoDialog from "@/components/DemoDialog";

interface BookingSimDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  vehicleName: string;
  vehiclePrice: string;
}

type Step = "dates" | "processing" | "done";

const BookingSimDialog = ({ open, onOpenChange, vehicleName, vehiclePrice }: BookingSimDialogProps) => {
  const { lang } = useLang();
  const [pickupDate, setPickupDate] = useState<Date | undefined>(addDays(new Date(), 7));
  const [dropoffDate, setDropoffDate] = useState<Date | undefined>(addDays(new Date(), 14));
  const [step, setStep] = useState<Step>("dates");
  const [demoOpen, setDemoOpen] = useState(false);

  const labels = {
    title: { en: "Book your vehicle", pl: "Zarezerwuj pojazd", is: "Bókaðu ökutæki" },
    pickup: { en: "Pick-up date", pl: "Data odbioru", is: "Afhendingardagur" },
    dropoff: { en: "Drop-off date", pl: "Data zwrotu", is: "Skiladagur" },
    confirm: { en: "Confirm & Pay", pl: "Potwierdź i zapłać", is: "Staðfesta og borga" },
    processing: { en: "Processing payment…", pl: "Przetwarzanie płatności…", is: "Vinnsla greiðslu…" },
    success: { en: "Booking confirmed!", pl: "Rezerwacja potwierdzona!", is: "Bókun staðfest!" },
    total: { en: "Total", pl: "Suma", is: "Samtals" },
    selectDate: { en: "Select date", pl: "Wybierz datę", is: "Veldu dagsetningu" },
  };

  const days = pickupDate && dropoffDate
    ? Math.max(1, Math.ceil((dropoffDate.getTime() - pickupDate.getTime()) / (1000 * 60 * 60 * 24)))
    : 0;

  const priceNum = parseInt(vehiclePrice.replace(/[^0-9]/g, "")) || 89;
  const total = days * priceNum;

  const handleConfirm = () => {
    setStep("processing");
    setTimeout(() => {
      setStep("done");
      setTimeout(() => {
        onOpenChange(false);
        setStep("dates");
        setDemoOpen(true);
      }, 1500);
    }, 2000);
  };

  const handleClose = (o: boolean) => {
    if (!o) {
      setStep("dates");
    }
    onOpenChange(o);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="max-w-md z-[60]">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">{labels.title[lang]}</DialogTitle>
            <DialogDescription className="text-sm">{vehicleName} · {vehiclePrice}</DialogDescription>
          </DialogHeader>

          {step === "dates" && (
            <div className="space-y-4 mt-2">
              {/* Pickup date */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground">{labels.pickup[lang]}</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !pickupDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {pickupDate ? format(pickupDate, "PPP") : labels.selectDate[lang]}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 z-[70]" align="start">
                    <Calendar
                      mode="single"
                      selected={pickupDate}
                      onSelect={(d) => {
                        setPickupDate(d);
                        if (d && dropoffDate && d >= dropoffDate) {
                          setDropoffDate(addDays(d, 1));
                        }
                      }}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Dropoff date */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-muted-foreground">{labels.dropoff[lang]}</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !dropoffDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {dropoffDate ? format(dropoffDate, "PPP") : labels.selectDate[lang]}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 z-[70]" align="start">
                    <Calendar
                      mode="single"
                      selected={dropoffDate}
                      onSelect={setDropoffDate}
                      disabled={(date) => date <= (pickupDate || new Date())}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Summary */}
              {days > 0 && (
                <div className="bg-secondary/50 rounded-xl p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{vehiclePrice} × {days} {lang === "pl" ? "dni" : lang === "is" ? "dagar" : "days"}</span>
                    <span className="font-medium">€{total}</span>
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
                disabled={!pickupDate || !dropoffDate || days <= 0}
              >
                {labels.confirm[lang]}
              </Button>
            </div>
          )}

          {step === "processing" && (
            <div className="flex flex-col items-center justify-center py-12 gap-4">
              <Loader2 className="w-10 h-10 text-accent animate-spin" />
              <p className="text-sm text-muted-foreground">{labels.processing[lang]}</p>
            </div>
          )}

          {step === "done" && (
            <div className="flex flex-col items-center justify-center py-12 gap-4">
              <CheckCircle2 className="w-12 h-12 text-green-500" />
              <p className="text-lg font-semibold">{labels.success[lang]}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
      <DemoDialog open={demoOpen} onOpenChange={setDemoOpen} feature="book" />
    </>
  );
};

export default BookingSimDialog;
