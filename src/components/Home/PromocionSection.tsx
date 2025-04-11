import { useEffect, useRef } from "react";
import { SectionTitle } from "../common/SectionTitle";
import { TranslatableText } from "../common/TranslatableText";

interface CardData {
  title: string;
  subtitle: string;
  shadowColorClass: string;
  bgColorClass: string;
  textColor: string;
  icon: string;
}

const cards: CardData[] = [
  {
    title: "First Time Customer Discount",
    subtitle:
      "Get 20% off your first grooming service! New customers only. Valid for appointments scheduled Monday through Thursday.",
    shadowColorClass: "shadow-yellow-500",
    bgColorClass: "bg-yellow-50",
    textColor: "text-black",
    icon: "fa-solid fa-gift",
  },
  {
    title: "Multiple Pet Discounts",
    subtitle:
      "Enjoy 10% off when grooming two or more pets from the same household in a single appointment. This discount remains available as long as you continue using our services.",
    shadowColorClass: "shadow-blue-500",
    bgColorClass: "bg-blue-50",
    textColor: "text-black",
    icon: "fa-solid fa-paw",
  },
  {
    title: "Referral Bonus",
    subtitle:
      "Love our service? Refer a friend and receive 15% off your next appointment! Discount applies after the referred pet completes their first service.",
    shadowColorClass: "shadow-purple-500",
    bgColorClass: "bg-purple-50",
    textColor: "text-black",
    icon: "fa-solid fa-user-friends",
  },
  {
    title: "Loyalty Rewards",
    subtitle:
      "Earn points each time you use our grooming services — collect enough and redeem them for a free grooming session!",
    shadowColorClass: "shadow-green-500",
    bgColorClass: "bg-green-50",
    textColor: "text-black",
    icon: "fa-solid fa-star",
  },
];

export function PromocionSection() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // IntersectionObserver para efecto “stack”
  useEffect(() => {
    const sections = sectionRefs.current;
    const thresholds = Array.from({ length: 101 }, (_, i) => i / 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const currentIndex = Number(entry.target.getAttribute("data-index"));
          const prevCard = sections[currentIndex - 1];
          if (!prevCard) return;

          const ratio = entry.intersectionRatio;
          const translateY = -12 * ratio;
          const scale = 1 - ratio * 0.1;

          prevCard.style.transform = `translateY(${translateY}%) scale(${scale})`;
        });
      },
      { threshold: thresholds }
    );

    sections.forEach((sec) => {
      if (sec) observer.observe(sec);
    });

    return () => {
      sections.forEach((sec) => {
        if (sec) observer.unobserve(sec);
      });
    };
  }, []);

  return (
    <article className="mb-20">
      <SectionTitle>Latest Offers & Discounts</SectionTitle>

      {/*
        Ajusta la altura total del contenedor en cada breakpoint:
        - Mobile por defecto: 400vh
        - sm: 350vh
        - md: 300vh
        - lg: 250vh
        - xl: 200vh
      */}
      <div
        className="
          relative 
          w-full 
          flex flex-col 
          justify-start 
          items-center 
          mt-6 md:mt-[3em] lg:mt-12
          h-[500vh]           /* móvil */
          sm:h-[350vh]        /* sm */
          md:h-[450vh]        /* md */
          lg:h-[450vh]        /* lg */
          xl:h-[440vh]        /* xl */
        "
      >
        {cards.map((card, index) => {
          // Ajusta la separación vertical entre las tarjetas
          const marginPerCard = 35; // en vh
          return (
            <div
              key={index}
              data-index={index}
              ref={(el) => {
                if (el) sectionRefs.current[index] = el;
              }}
              className={`
                sticky             
                top-[15vh]            
                left-[5%] md:left-[8%]
                w-[90%] md:w-[85%] xl:w-[70%] 2xl:w-[55%]
                h-[45rem] md:h-[45vh]
                border-2 border-pink-100
                rounded-xl shadow-xl shadow-slate-200
                ${card.bgColorClass} ${card.textColor}
                flex items-center justify-center text-center p-6 md:p-10
                transition-transform duration-700 ease-out
                z-[${1000 - index}]
                gap-8 lg:flex-row flex-col
                hover:-translate-y-2 hover:scale-105
                hover:${card.shadowColorClass}
              `}
              style={{
                // Aplica margen a partir de la segunda tarjeta (index > 0)
                marginTop: index === 0 ? 0 : `${index * marginPerCard}vh`,
              }}
            >
              <div className="flex flex-col items-center lg:items-start gap-4">
                <i className={`${card.icon} text-5xl`} />
                <div className="max-w-[600px]">
                  <h2 className="text-3xl md:text-5xl font-bold my-4">
                    <TranslatableText text={card.title} />
                  </h2>
                  <p className="text-lg md:text-xl leading-relaxed">
                    <TranslatableText text={card.subtitle} />
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        <a
          href="/gallery"
          className="absolute -bottom-24 lg:-bottom-20 md:-bottom-20 bg-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-600 transition-shadow shadow-lg hover:shadow-xl flex items-center"
        >
          <i className="fa-solid fa-info-circle mr-2"></i>
          Get more info
        </a>
      </div>
    </article>
  );
}
