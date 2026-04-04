import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
          Chcesz coś
          <br />
          <span className="text-gradient-glacier">takiego dla siebie?</span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Tworzymy kompletne strony rezerwacyjne, systemy flotowe i branding dla
          wypożyczalni samochodów. Skontaktuj się z nami — zbudujemy to razem.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base px-10 py-6 gap-2">
            Zamów swoją stronę
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-base px-10 py-6 border-foreground/20 hover:bg-foreground/5"
          >
            Zobacz więcej demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
