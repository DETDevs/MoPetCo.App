import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ReCAPTCHA from "react-google-recaptcha";
import { CheckCircle2, XCircle } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { useBooking } from "@/store/booking";
import { createBooking, BookingRequest } from "../api/booking";
import { useTranslation } from "@/i18n";

const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

const schema = z.object({
  name: z.string().min(2),
  idNumber: z.string().min(5).max(20),
  email: z.string().email(),
  phone: z.string().regex(/^\d{8,15}$/),
  petName: z.string().min(1),
});
type FormData = z.infer<typeof schema>;

interface Props {
  onNext: () => void;
  onPrev: () => void;
}

export default function Step3ClientForm({ onNext, onPrev }: Props) {
  const { service, employee, date, time, setClient, setBookingId } =
    useBooking();
  const { t } = useTranslation();

  const captchaRef = useRef<ReCAPTCHA>(null);
  const [captcha, setCaptcha] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isSubmitting, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data: FormData) => {
    if (!captcha || !service || !employee || !date || !time) return;

    setClient(data);

    const body: BookingRequest = {
      serviceId: service.id,
      employeeId: employee.id,
      date,
      time,
      client: data,
    };

    try {
      const resp = await createBooking(body);
      setBookingId(resp.id);
      onNext();
    } catch (err) {
      console.error(err);
      alert(t("booking.submitError"));
    }
  };

  const Icon = ({ name }: { name: keyof FormData }) => {
    if (!touchedFields[name]) return null;
    return errors[name] ? (
      <XCircle className="w-5 h-5 text-destructive" />
    ) : (
      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
    );
  };

  return (
    <section
      className="relative flex flex-col py-8 px-5 space-y-6 max-w-md w-full
                        rounded-2xl shadow-xl shadow-gray-100/50 border border-gray-100 bg-white"
    >
      <h1 className="text-xl font-bold text-gray-800">
        {t("booking.yourData")}
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Field label={t("booking.fullName")} error={errors.name?.message}>
          <div className="relative">
            <Input
              placeholder={t("booking.fullName.placeholder")}
              {...register("name")}
            />
            <span className="absolute right-2 top-2">
              <Icon name="name" />
            </span>
          </div>
        </Field>

        <Field label={t("booking.idNumber")} error={errors.idNumber?.message}>
          <div className="relative">
            <Input
              placeholder={t("booking.idNumber.placeholder")}
              maxLength={20}
              {...register("idNumber")}
            />
            <span className="absolute right-2 top-2">
              <Icon name="idNumber" />
            </span>
          </div>
        </Field>

        <Field label={t("booking.email")} error={errors.email?.message}>
          <div className="relative">
            <Input
              type="email"
              placeholder={t("booking.email.placeholder")}
              {...register("email")}
            />
            <span className="absolute right-2 top-2">
              <Icon name="email" />
            </span>
          </div>
        </Field>

        <Field label={t("booking.phone")} error={errors.phone?.message}>
          <div className="relative">
            <Input
              placeholder={t("booking.phone.placeholder")}
              {...register("phone")}
            />
            <span className="absolute right-2 top-2">
              <Icon name="phone" />
            </span>
          </div>
        </Field>

        <Field label={t("booking.petName")} error={errors.petName?.message}>
          <div className="relative">
            <Input
              placeholder={t("booking.petName.placeholder")}
              {...register("petName")}
            />
            <span className="absolute right-2 top-2">
              <Icon name="petName" />
            </span>
          </div>
        </Field>

        <div className="flex justify-center">
          <ReCAPTCHA
            ref={captchaRef}
            sitekey={SITE_KEY}
            theme="light"
            onChange={(token) => setCaptcha(token)}
            onExpired={() => setCaptcha(null)}
          />
        </div>

        <div className="flex gap-3 pt-4">
          <Button
            variant="outline"
            type="button"
            onClick={onPrev}
            className="rounded-full px-6 border-2 border-gray-200 hover:border-pink-200 hover:bg-pink-50 transition-all duration-200"
          >
            {t("booking.back")}
          </Button>
          <Button
            type="submit"
            disabled={!isValid || !captcha || isSubmitting}
            className="rounded-full px-8 bg-gradient-to-r from-pink-500 to-pink-400 hover:from-pink-600 hover:to-pink-500 shadow-lg shadow-pink-200/50 transition-all duration-300 disabled:opacity-40 disabled:shadow-none font-semibold"
          >
            {isSubmitting
              ? t("booking.submitting")
              : t("booking.confirmBooking")}
          </Button>
        </div>
      </form>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1">
      <Label className="text-sm">{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
