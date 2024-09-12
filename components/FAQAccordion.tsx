"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQAccordion = () => {
  const faqs = [
    {
      question: "Sport TV nedir?",
      answer:
        "Sport TV; internet bağlantılı binlerce cihazda canlı maçlar, spor belgeselleri, analizler ve daha fazlasını sunan bir spor yayın platformudur. Tek bir reklam olmadan, istediğiniz kadar, istediğiniz zaman izleyebilirsiniz - hepsi aylık düşük bir ücret karşılığında.",
    },
    {
      question: "Sport TV'nin maliyeti nedir?",
      answer:
        "Sport TV'yi akıllı telefonunuz, tabletiniz, Akıllı TV'niz, dizüstü bilgisayarınız veya yayın cihazınızda sabit bir aylık ücretle izleyin. Aylık plan ücretleri 49,99 TL ile 99,99 TL arasında değişmektedir. Ekstra maliyet yok, sözleşme yok.",
    },
    {
      question: "Nerede izleyebilirim?",
      answer:
        "İstediğiniz yerde, istediğiniz zaman izleyin. Bilgisayarınızda sporttv.com adresinden veya akıllı TV'ler, akıllı telefonlar, tabletler, medya oynatıcılar ve oyun konsolları dâhil Sport TV uygulamasını sunan, internet bağlantılı herhangi bir cihazda anında izlemek için Sport TV hesabınızla oturum açın.",
    },
    {
      question: "Nasıl iptal ederim?",
      answer:
        "Sport TV esnektir. Sinir bozucu hiçbir sözleşme ve taahhüt yoktur. Hesabınızı çevrimiçi olarak iki tıklamayla kolayca iptal edebilirsiniz. İptal ücreti yoktur - hesabınızı istediğiniz zaman başlatın veya durdurun.",
    },
    {
      question: "Sport TV'de ne izleyebilirim?",
      answer:
        "Sport TV, canlı futbol maçları, spor belgeselleri, futbol programları, maç özetleri, futbolcu röportajları ve daha fazlasından oluşan kapsamlı bir kütüphaneye sahiptir. İstediğiniz her zaman, istediğiniz kadar çok şey izleyin.",
    },
  ];

  return (
    <Accordion type="single" collapsible className="space-y-4">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border bg-[#2d2d2d] rounded"
        >
          <AccordionTrigger className="flex justify-between items-center w-full p-4 text-left text-white bg-[#2d2d2d] focus:outline-none">
            <span className="text-lg font-semibold">{faq.question}</span>
          </AccordionTrigger>
          <AccordionContent className="p-4 bg-[#2d2d2d text-white">
            <p>{faq.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
