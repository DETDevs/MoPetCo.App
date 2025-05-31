import { useRef, useEffect } from "react";
import { SectionTitle } from "../common/SectionTitle";
import { TranslatableText } from "../common/TranslatableText";
import { useWindowSize } from "../../hooks/useWindowSize";
import { usePromociones } from "../../hooks/usePromociones"; // ✅ hook nuevo

function PromocionSection() {
  const { width } = useWindowSize();
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { data: promociones, isLoading } = usePromociones(); // ✅ react query

  const marginPerCard = width >= 768 ? 35 : 15;

  useEffect(() => {
    if (!promociones?.length) return;

    const thresholds = [0, 0.25, 0.5, 0.75, 1];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, intersectionRatio }) => {
        const currentIndex = Number(target.getAttribute("data-index"));
        const prevCard = sectionRefs.current[currentIndex - 1];
        if (!prevCard) return;

        const translateY = -12 * intersectionRatio;
        const scale = 1 - intersectionRatio * 0.1;

        prevCard.style.transform = `translateY(${translateY}%) scale(${scale})`;
      });
    }, { threshold: thresholds });

    sectionRefs.current.forEach((section) => section && observer.observe(section));

    return () => {
      sectionRefs.current.forEach((section) => section && observer.unobserve(section));
    };
  }, [promociones]);

  if (isLoading) {
    return (
      <div className="text-center py-10 text-lg font-medium text-gray-600">
        <TranslatableText text="Loading promotions..." />
      </div>
    );
  }

  return (
    <article className="mb-20">
      <SectionTitle>
        <TranslatableText text="Latest Offers & Discounts" />
      </SectionTitle>

      <div
        className="
          relative w-full flex flex-col justify-start items-center
          mt-6 md:mt-[3em] lg:mt-12
          h-[400vh] sm:h-[350vh] md:h-[450vh] lg:h-[450vh] xl:h-[440vh]
        "
      >
        {promociones?.map(
          (
            {
              icon,
              title,
              description,
              bgColorClass,
              textColor,
              shadowColorClass,
            },
            index
          ) => (
            <div
              key={index}
              data-index={index}
              ref={(el) => {
                if (el) {
                  sectionRefs.current[index] = el;
                }
              }}
              className={`
                sticky top-[15vh] left-[5%] md:left-[8%]
                w-[90%] md:w-[85%] xl:w-[70%] 2xl:w-[55%]
                h-[40rem] md:h-[45vh]
                border-2 border-pink-100 rounded-xl shadow-xl shadow-slate-200
                ${bgColorClass} ${textColor}
                flex items-center justify-center text-center p-6 md:p-10
                transition-transform duration-700 ease-out
                z-[${1000 - index}]
                gap-8 lg:flex-row flex-col
                hover:-translate-y-2 hover:scale-105 hover:${shadowColorClass}
              `}
              style={{
                marginTop: index === 0 ? 0 : `${index * marginPerCard}vh`,
              }}
            >
              <div className="flex flex-col items-center lg:items-start gap-4">
                <i className={`${icon} text-5xl`} />
                <div className="max-w-[600px]">
                  <h2 className="text-3xl md:text-5xl font-bold my-4">
                    <TranslatableText text={title} />
                  </h2>
                  <p className="text-lg md:text-xl leading-relaxed">
                    <TranslatableText text={description} />
                  </p>
                </div>
              </div>
            </div>
          )
        )}

        <a
          href="/promociones"
          className="
            absolute -bottom-24 lg:-bottom-20 md:-bottom-20
            bg-pink-500 text-white px-6 py-2 rounded-full font-semibold
            hover:bg-pink-600 transition-shadow shadow-lg hover:shadow-xl
            flex items-center
          "
        >
          <i className="fa-solid fa-info-circle mr-2"></i>
          <TranslatableText text="Get more info" />
        </a>
      </div>
    </article>
  );
}

export default PromocionSection;
