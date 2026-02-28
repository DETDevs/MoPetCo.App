import { motion } from "framer-motion";
import { CalendarCheck2, PawPrint, User, Clock, Sparkles } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { currency } from "./utilss/format";
import { useBooking } from "@/store/booking";
import { useTranslation } from "@/i18n";

export default function AsideSummary() {
  const { service, petSize, employee, date, time, client } = useBooking();
  const { t } = useTranslation();
  const price = petSize?.price ?? service?.price ?? 0;

  const fadeIn = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <aside
      className="w-full lg:w-[22rem] shrink-0 rounded-2xl lg:sticky lg:top-24 
                       bg-white shadow-xl shadow-gray-100/50 border border-gray-100 p-6 space-y-5 overflow-hidden"
    >
      <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-pink-400" />
        {t("booking.summary")}
      </h2>

      <Section
        label={t("booking.summaryService")}
        icon={<PawPrint className="w-4 h-4 text-pink-400" />}
      >
        {service ? (
          <motion.p
            className="font-medium text-gray-800"
            variants={fadeIn}
            initial="hidden"
            animate="show"
          >
            {service.name}
          </motion.p>
        ) : (
          <Placeholder t={t} />
        )}
      </Section>

      <Section
        label={t("booking.summarySize")}
        icon={<PawPrint className="w-4 h-4 text-pink-400" />}
      >
        {petSize ? (
          <motion.p
            className="flex justify-between items-center"
            variants={fadeIn}
            initial="hidden"
            animate="show"
          >
            <span className="font-medium text-gray-800">{petSize.label}</span>
            <span className="font-semibold text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full text-sm">
              {currency(price)}
            </span>
          </motion.p>
        ) : (
          <Placeholder t={t} />
        )}
      </Section>

      <Section
        label={t("booking.summaryEmployee")}
        icon={<User className="w-4 h-4 text-pink-400" />}
      >
        {employee ? (
          <motion.div
            className="flex items-center gap-2.5"
            variants={fadeIn}
            initial="hidden"
            animate="show"
          >
            <Avatar className="h-7 w-7 ring-2 ring-pink-200">
              <AvatarFallback className="bg-pink-100 text-pink-600 text-xs font-semibold">
                {employee.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span className="font-medium text-gray-800">{employee.name}</span>
          </motion.div>
        ) : (
          <Placeholder t={t} />
        )}
      </Section>

      <Section
        label={t("booking.summaryDatetime")}
        icon={<CalendarCheck2 className="w-4 h-4 text-pink-400" />}
      >
        {date && time ? (
          <motion.p
            className="font-medium text-gray-800"
            variants={fadeIn}
            initial="hidden"
            animate="show"
          >
            {date}{" "}
            <Clock className="inline w-3.5 h-3.5 mx-1 -mt-0.5 text-pink-400" />{" "}
            {time}
          </motion.p>
        ) : (
          <Placeholder t={t} />
        )}
      </Section>

      <Section
        label={t("booking.summaryClient")}
        icon={<User className="w-4 h-4 text-pink-400" />}
      >
        {client ? (
          <motion.div
            className="flex items-center gap-2.5"
            variants={fadeIn}
            initial="hidden"
            animate="show"
          >
            <Avatar className="h-7 w-7 ring-2 ring-pink-200">
              <AvatarFallback className="bg-pink-100 text-pink-600 text-xs font-semibold">
                {client.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span className="font-medium text-gray-800">{client.name}</span>
          </motion.div>
        ) : (
          <Placeholder t={t} />
        )}
      </Section>

      <Section
        label={t("booking.summaryPet")}
        icon={<PawPrint className="w-4 h-4 text-pink-400" />}
      >
        {client?.petName ? (
          <motion.p
            className="font-medium text-gray-800"
            variants={fadeIn}
            initial="hidden"
            animate="show"
          >
            🐾 {client.petName}
          </motion.p>
        ) : (
          <Placeholder t={t} />
        )}
      </Section>

      <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
        <span className="font-bold text-gray-800">
          {t("booking.summaryTotal")}
        </span>
        <span className="font-bold text-xl text-pink-600">
          {currency(price)}
        </span>
      </div>
    </aside>
  );
}

function Section({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <h3 className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">
        {icon} {label}
      </h3>
      {children}
    </div>
  );
}

const Placeholder = ({ t }: { t: (key: string) => string }) => (
  <p className="flex items-center gap-1.5 text-sm italic text-gray-300">
    <span className="w-1.5 h-1.5 rounded-full bg-gray-200 animate-pulse" />
    {t("booking.summaryNotSelected")}
  </p>
);
