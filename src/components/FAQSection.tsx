import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLang } from "@/i18n/LanguageContext";
import { translations as t } from "@/i18n/translations";

const FAQSection = () => {
  const { lang } = useLang();

  return (
    <section id="faq" className="py-14 sm:py-20 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10">
          {t.faq.title[lang]}
        </h2>

        <Accordion type="single" collapsible className="space-y-1">
          {t.faq.items.map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border-b border-border/30 last:border-0"
            >
              <AccordionTrigger className="text-left font-medium text-sm sm:text-base hover:no-underline py-4">
                {item.q[lang]}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                {item.a[lang]}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
