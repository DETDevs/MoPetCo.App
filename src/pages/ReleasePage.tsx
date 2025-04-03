import { useEffect } from "react";
import { Header } from "../components/layout/Header";
import { TranslatableText } from "../components/common/TranslatableText";

import AOS from "aos";
import { SectionTitle } from "../components/common/SectionTitle";

const ReleasePage = () => {
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
          <h1 className="text-3xl font-bold text-center mb-8">
            <SectionTitle>
              <TranslatableText text="MoPetCo Grooming Release Form" />{" "}
            </SectionTitle>
          </h1>

          <p className="text-content">
            <TranslatableText
              text="Upon accepting your first grooming appointment with MoPetCo, you
            will receive a link to our grooming release form. This document
            outlines our company policies and procedures, as we cannot be held
            liable for anything not specified in the release form. Please feel
            free to reach out with any questions or concerns before we begin the
            grooming service."
            />
          </p>
          <p className="text-content">
            <TranslatableText
              text="GROOMING RELEASE FORM -Every new client is required to read and
            agreed to the following. No ear hair plucking without veterinarian
            consent. Anal gland expression is complete with client full consent.
            We do not provide excessive de-matting services. We do not provide
            medical shave downs. We are not responsible for any allergic
            reaction from the product provided by client, like shampoo,
            conditioner, sprays, or creams. We park at our discretion as close
            as we can legally park to your building. When your stylist messages
            you that they are on the way, at that time please head outside to
            walk your pup so we can start our session promptly. All contact
            information for care takers, nannies, housekeepers, dog walkers, dog
            nannies must be shared if you are not present for your appointment,
            prior to your groom-er’s arrival. Your pet is very important to us.
            The Mobile Pet Grooming Co “MePetCo” would like to as-sure you that
            every effort will be made to make your pet’s grooming experience as
            safe and pleasant one. Safety comes first for pets as well as people
            during the grooming process."
            />
          </p>
          <p className="text-content">
            <TranslatableText
              text="SANITIZING: Our standards have always been to clean/sanitize all
            surfaces and tools before and after each session. For liability
            reasons, No humans’ clients are allowed in our workspace while the
            stylist is at work. However, we are happy to showcase the products
            we use, and welcome client to inspect the salon/van before the
            grooming process begins. All leashes and collars are sanitized. We
            make it a priority to communicate our arrival windows and keep our
            client’s time constraints in mind. if there is ever a time conflict
            let us know and we will do our best to work around your windows of
            availability. VACCINATIONS: Any new puppy clients being serviced in
            our salon must be up to date on all puppy vaccinations. Adult/senior
            dogs must be current on Rabies vaccination. AGGRESSIVE OR DANGEROUS
            PETS: MePetCO has the right to refuse any service at any time. In
            the event that your pet is too stressed or becomes dangerous to
            groom, MePetCO has the right to stop grooming services or cancel
            grooming services at any time before, during, or after grooming.
            Client would only be charged a grooming fee for what was done up
            until that point."
            />
          </p>

          <p className="text-content">
            <TranslatableText
              text="CANCELLATIONS AND NO SHOWS: Your pet’s appointment is very important
            to us. The time allocated for your pet’s appointment is reserved
            especially for you. We do understand that sometimes schedule
            adjustments are necessary. Therefore, we respectfully request at
            least 24 hours’ notice for adjustments to your appointments and for
            cancellations."
            />
          </p>

          <p className="text-content">
            <TranslatableText
              text="PAYMENT: Payment is due at time services are completed unless other
            arrangements have been discussed. Forms of payment: We accept Cash,
            ZELLE, Venmo, and credit cards payment."
            />
          </p>

          <p className="text-content">
            <TranslatableText
              text="SATISFACTION: Your satisfaction is important to us. If you are
            unhappy for any reason and would like something adjusted, we will be
            happy to make any adjustments at the end of the groom. Please let us
            know immediately if you would like any adjustments made to your
            pet’s groom. After the day of the appointment, any return visit for
            adjustment would be treated as a new appointment."
            />
          </p>

          <p className="text-content">
            <TranslatableText
              text="PHOTOGRAPHS: MePetCO has the right to take photos of your pet for
            our client records or for the company website/social media pages.
            All photos taken are the property of MePetCO but can be shared with
            you at your request. We will be happy to remove any photos (at our
            discretion) from our website/social media pages if you are
            displeased with the photos for any reason. We strive to only show
            your pet looking their best."
            />
          </p>

          <p className="text-content">
            <TranslatableText
              text="Caring for your pet is a responsibility that MePetCO takes very
            seriously! We want your pet’s experience to be as pleasant and as
            enjoyable as possible. It is important to understand that some pets
            respond to grooming differently even with our best efforts, so we
            will make every effort to make your pet’s experience a positive one.
            If ill or injured, MePetCO has permission to call or take pet to
            veterinarian of our choice if the pet’s normal vet is unavailable.
            Vet expenses will be the responsibility of the owner, unless the
            injury is a direct result of negligence by MePetCO while the pet was
            in our care."
            />
          </p>

          <p className="text-content">
            <TranslatableText
              text="MePetCO will not be held responsible for any sickness, injury or
            death caused by the pet to itself during its grooming session from
            pre-existing health conditions, natural disasters, or any illness a
            pet acquires due to missing or expired vaccines. MePetCO will not be
            held responsible for clipper burn, minor nicks or cuts, or
            irritation resulting from grooming of matted, neglected coats, or
            mild to severe skin allergies (including ears)."
            />
          </p>

          <p className="text-content">
            <TranslatableText
              text="In the event that your pet displays any aggressive behavior, the
            groomer reserves the right to use a muzzle or an Elizabethan collar
            to protect themselves from injury. MePetCO should be notified of any
            claims by owner regarding compensation for veterinary care given as
            a result of alleged negligence on our part within 48 hours of the
            grooming appointment. In the event we dispute the claim, MePetCO
            will personally consult the veterinarian prior to any settlement.
            MePetCO reserves the right to charge additional fees for services we
            consider over and above the norm, including but not limited to:
            severe aggression, bad coat condition, excessive parasite
            infestations, owner neglect."
            />
          </p>

          <p className="text-content">
            <TranslatableText
              text="By accepting our grooming service, you are agreeing that you have
            reviewed this Service Contract for accuracy, and that you understand
            the contents of this contract. You affirm that you are the rightful
            legal owner of the pet(s) for which services are being rendered. You
            authorize this contract to be valid approval for future grooming
            services, permitting MePetCO to accept telephone and/or email
            reservations for service without additional signed contracts or
            written authorization."
            />
          </p>

          <p className="text-content">
            <TranslatableText
              text="MATTED DOG RELEASE FORM (If applicable) *Matted coats can cause a
            variety of skin and health problems. Matted fur does not allow for
            air circulation to the skin causing hot spots, bacterial and fungal
            infections. Fleas, ticks, maggots, and other parasites may be
            lurking in the coat causing further skin infections. Matted fur also
            pulls and binds, causing pain to your pet when they move or lay on
            mats. The skin underneath is usually raw and inflamed. Matted coats
            will not dry properly and can lead to rotting fur and skin."
            />
          </p>

          <p className="text-content">
            <TranslatableText
              text="*In the event of matting, your pet’s hair may need to be shaved
            extremely short to the skin and may show signs of skin irritation
            and sores due to the matting, wet undercoat, and dirty undercoat. In
            order to take care of a pet that has not been groomed often enough,
            and is matted, the required grooming session may be long, stressful,
            and/or painful."
            />
          </p>

          <p className="text-content">
            <TranslatableText
              text="*It is the goal of our salon and our groomers to make your pet’s
            grooming experience as stress free as possible."
            />
          </p>

          <p className="text-content">
            <TranslatableText
              text="*If we have determined that the only humane way to do this is to
            shave the dog’s coat down (Due to the condition of your dog’s coat).
            This is a short clip, removing all the matting. Where feasible, we
            work to de-mat/brush out the dog’s coat, but only when it would not
            cause excessive pain and suffering to attempt to do so."
            />
          </p>

          <p className="text-content">
            <TranslatableText
              text="*There is a possibility that your pet’s skin will become irritated
            during the clipping process. We will use a medicated shampoo to help
            soothe any irritation that may occur."
            />
          </p>

          <p className="text-content">
            <TranslatableText
              text="The matted hair rests tightly against the skin and the only way to
            remove it is to use a short blade clip between the skin and mats.
            Your dog may possibly get nicked and cut because the groomer has to
            work so closely to the skin to remove the matted coat. Our groomers
            are very careful but the possibility of injury exists. Understanding
            these risks, our salon is authorized to proceed with the shave down
            process."
            />
          </p>

          <p className="text-content">
            <TranslatableText
              text="*Please be sure to schedule a follow up appointment to speak with
            our groomer for the best methods of maintaining your dog’s coat."
            />
          </p>

          <p className="text-content">
            <TranslatableText
              text="*I hereby release the MePetCo and Grooming Staff from any liability
            associated with the above mentioned process and any and all medical
            problems that may be uncovered and/or occur during the stripping and
            de-matting process. *Should my pet need veterinarian care after or
            during this process, I agree to pay any and all veterinarian fees."
            />
          </p>

          <p className="text-content">
            <TranslatableText
              text="SENIOR PET (pets over the age of ten) AND PETS WITH PRE-EXISTING
            MEDICAL CONDITIONS RELEASE FORM (if applicable) *Your pet is
            important to us. We want to assure you that every effort will be
            made to make your senior pet’s experience as pleasant as possible.
            For senior pets and pets with health problems, grooming procedures
            can sometimes be stressful and can expose hidden medical conditions
            (or aggravate existing ones). Senior pets and pets with health
            problems also have a greater chance of injury — Therefore, these
            pets will be groomed for cleanliness and comfort in styles that will
            not add to their stress. If any minor accident or injury to your
            elderly or health-compromised pet occurs during their grooming,
            MePetCo is not responsible."
            />
          </p>

          <p className="text-content">
            <TranslatableText
              text="Client has read and understands the above, and as the owner or agent
            for the pet described herein agrees not to hold MePetCO responsible
            for the illness or death of their pet, or for any expenses incurred
            because of the illness or death of the pet described herein. You
            understand that pricing is subject to change. I have read,
            understood and agreed to all of the terms and conditions above."
            />
          </p>
        </div>
      </main>
    </>
  );
};

export default ReleasePage;
