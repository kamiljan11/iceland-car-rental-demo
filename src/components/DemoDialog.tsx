import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles, ExternalLink } from "lucide-react";

type DemoFeature = "book" | "search" | "details" | "generic";

interface DemoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  feature?: DemoFeature;
}

const featureDescriptions: Record<DemoFeature, { action: string; details: string[] }> = {
  book: {
    action: "Complete a full vehicle reservation",
    details: [
      "Secure online payment via Stripe",
      "Instant booking confirmation via email",
      "Calendar sync & availability check",
      "Optional extras (GPS, child seat, gravel protection)",
    ],
  },
  search: {
    action: "Search available vehicles in real-time",
    details: [
      "Live fleet availability by date & location",
      "Dynamic pricing based on season & duration",
      "Filter by vehicle type, transmission & features",
      "Instant price comparison across categories",
    ],
  },
  details: {
    action: "View full vehicle specifications",
    details: [
      "360° photo gallery of each vehicle",
      "Detailed specs (engine, fuel, storage, seats)",
      "Customer reviews for each car model",
      "Insurance options & pricing breakdown",
    ],
  },
  generic: {
    action: "Access full platform functionality",
    details: [
      "End-to-end booking & payment system",
      "Customer account with booking history",
      "Multi-language support with auto-detection",
      "Admin dashboard for fleet management",
    ],
  },
};

const DemoDialog = ({ open, onOpenChange, feature = "generic" }: DemoDialogProps) => {
  const { action, details } = featureDescriptions[feature];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md text-center">
        <DialogHeader className="items-center">
          <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-2 mx-auto">
            <Sparkles className="w-7 h-7 text-accent" />
          </div>
          <DialogTitle className="text-xl font-display">
            This is a Demo
          </DialogTitle>
          <DialogDescription className="text-sm leading-relaxed">
            You're viewing a <strong className="text-foreground">live demo simulation</strong>. In the full version, this button would:
          </DialogDescription>
        </DialogHeader>

        <div className="bg-secondary/60 rounded-xl p-4 text-left space-y-3 mt-2">
          <p className="text-sm font-medium text-foreground">{action}</p>
          <ul className="space-y-2">
            {details.map((d) => (
              <li key={d} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                <span className="text-accent mt-0.5">✓</span>
                {d}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-secondary/30 rounded-xl p-4 text-left mt-1">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Want a fully functional website like this? We build custom, high-converting platforms for car rental businesses.
          </p>
        </div>

        <div className="flex flex-col gap-2 mt-2">
          <Button
            className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
            onClick={() => window.open("mailto:hello@nordcar.is", "_blank")}
          >
            <ExternalLink className="w-4 h-4" />
            Get in Touch
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => onOpenChange(false)}
          >
            Continue Browsing
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoDialog;
