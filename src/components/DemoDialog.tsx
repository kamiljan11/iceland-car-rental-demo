import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles, ExternalLink } from "lucide-react";

interface DemoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DemoDialog = ({ open, onOpenChange }: DemoDialogProps) => {
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
            You're viewing a <strong className="text-foreground">live demo simulation</strong> of a premium car rental website built for the Icelandic market. This button would be fully functional in the production version.
          </DialogDescription>
        </DialogHeader>

        <div className="bg-secondary/60 rounded-xl p-4 text-left space-y-2 mt-2">
          <p className="text-sm font-medium text-foreground">Want a website like this?</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            We build custom, high-converting websites for car rental businesses in Iceland — fully functional booking, payments, fleet management, and more.
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
