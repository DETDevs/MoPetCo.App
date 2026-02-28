import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Copy } from "lucide-react";
import { format, parseISO, addMinutes } from "date-fns";
import { motion } from "framer-motion";
import { useBooking } from "@/store/booking";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "@/i18n";

interface Props {
  onPrev: () => void;
}

export default function Step4Confirmation({ onPrev }: Props) {
  const { service, employee, date, time, bookingId, reset, petSize, client } =
    useBooking();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const price = petSize?.price ?? service?.price ?? 0;

  const start = parseISO(`${date}T${time}`);
  const end = addMinutes(start, 60);
  const gCalLink = buildGoogleCalLink({
    title: `${service?.name} – MoPetCo`,
    start,
    end,
    details: `${t("booking.bookingId")} ${bookingId}. ${t("booking.summaryEmployee")}: ${employee?.name}`,
  });

  const summaryTxt = `
${t("booking.summaryTitle")} – MoPetCo
────────────────
${t("booking.summaryService")}:  ${service?.name}
${t("booking.summaryEmployee")}: ${employee?.name}
${t("booking.summaryPet")}:     ${client?.petName ?? "—"}
${format(start, "dd MMM yyyy")} ${time}
${t("booking.bookingId")} ${bookingId}
${t("booking.summaryTotal")}:     $${price}
  `.trim();

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(summaryTxt);
      if (navigator.share) {
        await navigator.share({ text: summaryTxt });
      } else {
        alert("📋 Copied to clipboard!");
      }
    } catch {
      alert("Could not share. Please copy manually.");
    }
  };

  const nuevaReserva = () => {
    reset();
    window.scrollTo({ top: 0, behavior: "smooth" });
    onPrev();
    navigate("/services-showcase");
  };

  return (
    <section className="flex flex-col items-center mt-10 space-y-6">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 15 }}
      >
        <CheckCircle2 className="w-20 h-20 text-green-600" />
      </motion.div>

      <h1 className="text-3xl font-semibold text-center">
        {t("booking.success")}
      </h1>
      <p className="text-muted-foreground text-center max-w-md">
        {t("booking.successMessage")}
        <br />
        {t("booking.bookingId")}&nbsp;
        <span className="font-medium">{bookingId}</span>
      </p>

      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>{t("booking.summaryTitle")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-1 text-sm">
          <Row label={t("booking.summaryService")} value={service?.name} />
          <Row label={t("booking.summaryEmployee")} value={employee?.name} />
          <Row label={t("booking.summaryPet")} value={client?.petName} />
          <Row label={format(start, "dd MMM yyyy")} value={time} />
          <Row label={t("booking.summaryTotal")} value={`$${price}`} bold />
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild variant="secondary">
          <a href={gCalLink} target="_blank" rel="noopener noreferrer">
            {t("booking.addToCalendar")}
          </a>
        </Button>

        <Button variant="secondary" onClick={handleShare}>
          <Copy className="w-4 h-4 mr-1" /> {t("booking.share")}
        </Button>
      </div>

      <Button onClick={nuevaReserva}>{t("booking.newBooking")}</Button>
    </section>
  );
}

function Row({
  label,
  value,
  bold,
}: {
  label: string;
  value?: string;
  bold?: boolean;
}) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className={bold ? "font-semibold" : ""}>{value ?? "—"}</span>
    </div>
  );
}

function buildGoogleCalLink(opts: {
  title: string;
  start: Date;
  end: Date;
  details: string;
}) {
  const fmt = (d: Date) => format(d, "yyyyMMdd'T'HHmmss");
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: opts.title,
    dates: `${fmt(opts.start)}/${fmt(opts.end)}`,
    details: opts.details,
  }).toString();
  return `https://calendar.google.com/calendar/render?${params}`;
}
