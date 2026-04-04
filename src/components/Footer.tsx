import { Mountain } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Mountain className="w-5 h-5 text-primary" />
          <span className="font-display text-sm font-semibold">
            NordCar Iceland
          </span>
        </div>
        <p className="text-muted-foreground text-sm">
          Demo strony wypożyczalni · Stworzone przez Twój zespół
        </p>
      </div>
    </footer>
  );
};

export default Footer;
