import { useEffect } from "react";
import { Footer } from "../components/ui/Footer";
import { Header } from "../components/ui/Header";
import AOS from 'aos';

export const FAQsPage = () => {

    useEffect(() => {
      AOS.init({ duration: 1000 }); // Animación al hacer scroll
    }, []);

  return (
    <>
      <Header />
      <main className="bg-white pt-24 pb-12 px-4">
        <div
          className="max-w-4xl mx-auto text-gray-800 space-y-6"
          data-aos="fade-down"
        >
          <h1 className="text-3xl font-bold text-center mb-8 border-b-2 border-pink-400 pb-4">
            About Mobile Grooming
          </h1>

          <p className="text-lg leading-relaxed">
            <strong>Why choose mobile pet grooming?</strong>
          </p>

          <p className="text-lg leading-relaxed">
            Mobile pet grooming provides a stress-free experience for both you
            and your pet. No more struggling with transportation or exposure to
            crowded salons—our groomers come to you, whether at home, work, or
            even your favorite hangout spot. Your pet enjoys a personalized,
            cage-free grooming session without the risk of illness, fleas, or
            the anxiety of other barking dogs.
          </p>

          <p>
            We offer one-on-one service with the same groomer each time,
            ensuring a familiar and comfortable experience. Our Super luxury
            bathing system provides deep cleansing while soothing joint and
            muscle discomfort.
          </p>

          <p>
            With a clean, professional, and state-of-the-art grooming van, we
            guarantee a relaxing, high-quality, and stress-free grooming
            experience for your furry friend.
          </p>

          <p>
            <strong>
              What can I expect when booking an appointment with Hair of the
              Dog?
            </strong>
          </p>

          <p>
            At MoPetCo, we provide a 5-star pet grooming experience with the
            highest standards of care for both pets and their owners. Our
            process begins with a detailed consultation about your pet’s health,
            grooming history, and your expectations. We provide an arrival
            window to ensure every pet receives the attention they deserve
            without rushed appointments.
          </p>

          <p>
            During your first visit, we conduct a thorough nose-to-tail
            consultation to discuss your pet’s needs. Once you're satisfied, we
            get to work, leaving your pet fresh, clean, and happy!
          </p>

          <p>
            <strong>What areas does Hair of the Dog service?</strong>
          </p>

          <p>
            We currently serve Miami-Dade from Pinecrest through Broward County
            and extend into Palm Beach County up to Okeechobee Blvd. As our
            business grows, we plan to expand our service areas, so be sure to
            check back with us! Many of our fur-clients outside these areas
            arrange to meet us at a convenient location within our service zone
            while running errands or grabbing lunch.
          </p>

          <p>
            <strong>Do you use our electricity or water?</strong>
          </p>

          <p>
            We are completely self-sufficient and completely green too. All we
            leave behind is a clean, happy pet!
          </p>

          <p>
            <strong>
              Can we be inside the Van while the groomer is at work?
            </strong>
          </p>

          <p>
            You're welcome to take a look inside our mobile grooming van at any
            time; however, for safety and insurance reasons, only MoPetCo staff
            are allowed inside while we groom your pet.
          </p>

          <p>
            Additionally, some pets may become anxious or restless when they see
            their owners during the grooming process, making it challenging to
            complete their treatment safely. To ensure peace of mind, we’re
            happy to provide a live video feed of your pet’s grooming session
            upon request via FaceTime.
          </p>

          <p>
            <strong>
              How old does an animal have to be to have their first spa day?
            </strong>
          </p>

          <p>
            An early start on a grooming regimen helps the groomer and your
            fur-friend start off on the right paw. Grooming is something your
            pet will need monthly for the rest of their lives, so the sooner the
            better! We recommend starting after appropriate shots have been
            administered and your puppy is weaned and healthy – typically around
            8 weeks of age.
          </p>

          <p>
            <strong>Can I supply my own shampoo?</strong>
          </p>

          <p>
            Absolutely! We understand that you want the very best for your furry
            friend, and we share the same goal. Rest assured, we’re happy to use
            your own shampoo upon request.
          </p>

          <p>
            <strong>Do you express anal glands?</strong>
          </p>

          <p>
            We offer external anal gland expression during grooming; however,
            for the best care, veterinarians and vet technicians perform this
            procedure internally, ensuring complete drainage and assessing any
            issues. In some pets, external expression may not fully empty the
            glands or could cause discomfort. For optimal results, we recommend
            consulting a veterinarian.
          </p>

          <p>
            <strong>Do you take credit cards?</strong>
          </p>

          <p>
            We accept Cash, Zelle, Venmo, Debit, and Credit Cards. Please note
            that a merchant processing fee applies to all electronic
            transactions.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};
