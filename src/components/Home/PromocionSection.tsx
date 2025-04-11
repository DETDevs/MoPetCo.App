import { useEffect, useRef, useState } from "react";
import { SectionTitle } from "../common/SectionTitle";

interface CardData {
  title: string;
  subtitle: string;
  bgColor: string;
  textColor: string;
}

const cards: CardData[] = [
  {
    title: "First Time Customer Discount",
    subtitle:
      "Get 20% off your first grooming service! New customers only. Valid for appointments scheduled Monday through Thursday.",
    bgColor: "bg-yellow-500",
    textColor: "text-white",
  },
  {
    title: "Multiple Pet Discounts",
    subtitle:
      "Enjoy 10% off when grooming two or more pets from the same household in a single appointment. This discount remains available as long as you continue using our services.",
    bgColor: "bg-blue-500",
    textColor: "text-white",
  },
  {
    title: "Referral Bonus",
    subtitle:
      "Love our service? Refer a friend and receive 15% off your next appointment! Discount applies after the referred pet completes their first service.",
    bgColor: "bg-purple-500",
    textColor: "text-white",
  },
  {
    title: "Loyalty Rewards",
    subtitle:
      "Earn points each time you use our grooming services — collect enough and redeem them for a free grooming session!",
    bgColor: "bg-green-500",
    textColor: "text-white",
  },
];

export function PromocionSection() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  // Estado para el multiplicador (valor base para el marginTop)
  const [marginMultiplier, setMarginMultiplier] = useState(35);

  // Hook para actualizar el multiplicador según el ancho de la pantalla
  useEffect(() => {
    function updateMarginMultiplier() {
      const width = window.innerWidth;

      // Ajusta estos valores según tus breakpoints y necesidades
      if (width < 640) {
        // Mobile
        setMarginMultiplier(25);
      } else if (width < 768) {
        // sm
        setMarginMultiplier(25);
      } else if (width < 1024) {
        // md
        setMarginMultiplier(28);
      } else if (width < 1280) {
        // lg
        setMarginMultiplier(0);
      } else {
        // xl y superiores
        setMarginMultiplier(35);
      }
    }

    updateMarginMultiplier(); // se ejecuta una vez al montar
    window.addEventListener("resize", updateMarginMultiplier);
    return () => window.removeEventListener("resize", updateMarginMultiplier);
  }, []);

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
      <SectionTitle>Promociones</SectionTitle>
      <div
        className="relative w-full flex flex-col justify-center items-center mt-6 md:mt-[7em] lg:mt-12"
        style={{ height: `${(cards.length + 1) * 80}vh` }}
      >
        {cards.map((card, index) => {
          // Se calcula el marginTop en función del indice y el multiplicador (según screen size)
          const marginTop = index * marginMultiplier;

          return (
            <div
              key={index}
              data-index={index}
              ref={(el) => {
                if (el) sectionRefs.current[index] = el;
              }}
              className={`
                sticky
                top-[15%] md:top-1/4 left-[5%] md:left-[8%]
                -translate-x-[10$] -translate-y-[8%]
                w-[90%] md:w-[85%] lg:w-[55%] h-[40rem] md:h-[60vh]
                ${card.bgColor} ${card.textColor}
                rounded-3xl shadow-xl
                flex items-center justify-center text-center p-6 md:p-10
                transition-transform duration-700 ease-out
                z-[${1000 - index}]
                gap-8
                lg:flex-row
                flex-col
              `}
              style={{
                marginTop: `${marginTop}vh`,
              }}
            >
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  {card.title}
                </h2>
                <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                  {card.subtitle}
                </p>
              </div>
              <div>
                <img
                  src="/assets/404.gif"
                  alt="404 imagen"
                  className="h-[10rem] md:h-[15rem] lg:h-[25rem]"
                />
              </div>
            </div>
          );
        })}

        <a
          href="/gallery"
          className="lg:-mb-12 -mb-6 bg-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-600 transition-shadow shadow-lg hover:shadow-xl"
        >
          Get more info
        </a>
      </div>
    </article>
  );
}
