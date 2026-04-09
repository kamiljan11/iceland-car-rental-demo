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
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-3">
            {t.faq.label[lang]}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            {t.faq.title[lang]}
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {t.faq.items.map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-left font-semibold text-sm md:text-base hover:no-underline py-5">
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
