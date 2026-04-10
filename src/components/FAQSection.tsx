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
    <section className="py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            {t.faq.title[lang]}
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {t.faq.items.map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border-b border-border/30 last:border-0"
            >
              <AccordionTrigger className="text-left font-medium text-sm sm:text-base hover:no-underline py-5">
                {item.q[lang]}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
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
