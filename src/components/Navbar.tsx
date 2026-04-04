import { Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Mountain className="w-6 h-6 text-primary" />
          <span className="font-display text-lg font-semibold">
            NordCar Iceland
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#fleet" className="hover:text-foreground transition-colors">
            Flota
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Trasy
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Cennik
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Kontakt
          </a>
        </div>
        <Button size="sm" className="text-sm">
          Rezerwuj
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
