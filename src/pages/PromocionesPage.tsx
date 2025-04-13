import { SectionTitle } from "../components/common/SectionTitle";
import { TranslatableText } from "../components/common/TranslatableText";
import { ParallaxSection } from "../components/common/ParallaxSection";
import { Header } from "../components/layout/Header";
import { useEffect, useState } from "react";
import { Promocion } from "../types/promociones";
import { fetchPromocion } from "../Service/promocionesApi";

function PromocionesPage() {
  const [Promocion, setPromocion] = useState<Promocion[] | null>(null);

  useEffect(() => {
    const loadPromocion = async () => {
      const data = await fetchPromocion();
      setPromocion(data);
    };

    loadPromocion();
  }, []);

  return (
    <>
      <Header />
      <ParallaxSection
        imageUrl="/assets/dog-para.jpg"
        height="100vh"
      >
        <div className="p-0 w-full flex flex-col justify-center items-center">
          <h1 className="text-4xl lg:w-1/2 text-center md:text-5xl lg:text-6xl font-extrabold  text-white">
            <TranslatableText text="Grooming Specials & Loyalty Rewards" />
          </h1>
        </div>
      </ParallaxSection>
      <main className="w-full overflow-x-hidden ">
        <section className="py-16 px-6 bg-white">
          <div className="container mx-auto">
            <SectionTitle>
              <TranslatableText text="Featured Deals" />
            </SectionTitle>
            <div className="my-8 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              {Promocion?.map((promo, i) => (
                <div
                  key={i}
                  className="
                  bg-white 
                  rounded-xl 
                  shadow-xl
                  shadow-slate-300
                  overflow-hidden 
                  transition-transform 
                  hover:-translate-y-2
                "
                >
                  <div className="h-[15rem] w-full relative overflow-hidden">
                    <img
                      src={promo.imageUrl}
                      alt={promo.title}
                      className="object-cover w-full h-[14rem]"
                    />
                  </div>
                  {/* Texto */}
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">
                      <TranslatableText text={promo.title} />
                    </h2>
                    <p className="text-base text-gray-600 mb-4">
                      <TranslatableText text={promo.description} />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <ParallaxSection
        imageUrl="/assets/cat-para.jpg"
        height="80vh"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
          <TranslatableText text="More Ways to Save" />
        </h2>
        <p className="max-w-md mx-auto mb-6 text-sm md:text-base">
          <TranslatableText text="We’re always updating our deals. Send a email for more information" />
        </p>
        <a
          href="/contact"
          className="
            bg-pink-500 
            text-white 
            px-6 py-3 
            rounded-full 
            font-semibold 
            hover:bg-pink-600 
            transition-colors
          "
        >
          <i className="fa-solid fa-envelope mr-2" />
          <TranslatableText text="Go to!" />
        </a>
      </ParallaxSection>
      {/* section de promos */}
      <section className="py-16 px-6 bg-black text-white text-center relative overflow-hidden flex flex-col justify-center items-center">
        <div>
          {/* Título */}
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
            <TranslatableText text="COUPON TERMS & CONDITIONS" />
          </h2>

          {/* Listado de condiciones */}
          <ul className="text-sm md:text-base mb-10 max-w-2xl mx-auto text-gray-300 text-left">
            <li>
              <TranslatableText
                text="- Customer is required to mention any specials that apply to their
              service upon scheduling the appointment or before completing
              payment transactions."
              />
            </li>
            <li>
              <TranslatableText text="- Coupons cannot be combined with any other offers." />
            </li>
            <li>
              <TranslatableText text="- Limit one (1) coupon per visit." />
            </li>
            <li>
              <TranslatableText text="- Coupons are not redeemable after 3:00 PM." />
            </li>
            <li>
              <TranslatableText
                text="- Management reserves the right to change, accept, decline, or
              limit the use of any coupons without prior notice."
              />
            </li>
          </ul>

          {/* Contenedor animado */}
          {/* <div className="relative w-fit mx-auto p-2 rounded-xl bg-black overflow-hidden border-4 border-transparent coupon-frame">
            <img src="/assets/Cupon.PNG" alt="Coupons" className="w-[40rem]" />
          </div> */}
        </div>
      </section>

      {/* section de metodos de pago */}
      <section className="py-16 px-6 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-gray-800">
            <TranslatableText text="Accepted Payment Methods" />
          </h2>
          <p className="text-sm md:text-base text-gray-500 mb-8">
            <TranslatableText text="Fast and secure payments with your preferred method." />
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6">
            {/* Payment icons */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
              alt="Visa"
              className="h-10 w-auto"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="MasterCard"
              className="h-10 w-auto"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg"
              alt="American Express"
              className="h-10 w-auto"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Discover_Card_logo.png"
              alt="Discover"
              className="h-10 w-auto"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/45/Venmo_Logo.svg"
              alt="Venmo"
              className="h-10 w-auto"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Zelle_logo.svg"
              alt="Zelle"
              className="h-10 w-auto"
            />
            <img src="/assets/cash.svg" alt="Cash" className="h-10 w-auto" />
          </div>

          <p className="text-xs text-gray-400 mt-6">
            <TranslatableText text="Note: A processing fee may apply for electronic payments." />
          </p>
        </div>
      </section>
    </>
  );
}

export default PromocionesPage;
