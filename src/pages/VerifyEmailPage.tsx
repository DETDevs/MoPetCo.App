import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { sendCode, validateCode } from "../Service/contactService";
import { TranslatableText } from "../components/common/TranslatableText";

type LocationState = { email: string };

const START_SECONDS = 60;

const VerifyEmailPage = () => {
  const { state } = useLocation() as { state: LocationState };
  const navigate = useNavigate();

  const [digits, setDigits] = useState<string[]>(Array(6).fill(""));
  const [seconds, setSeconds] = useState(START_SECONDS);
  const inputs = useRef<Array<HTMLInputElement | null>>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    startCountdown();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setDigit = (idx: number, val: string) => {
    if (!/^\d?$/.test(val)) return;
    const cp = [...digits];
    cp[idx] = val;
    setDigits(cp);
    if (val && idx < 5) inputs.current[idx + 1]?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === "Backspace" && !digits[idx] && idx > 0) {
      inputs.current[idx - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!text) return;
    const arr = text.padEnd(6).split("").slice(0, 6);
    setDigits(arr);
    inputs.current[arr.length - 1]?.focus();
  };

  const handleVerify = async () => {
    if (seconds === 0) return; // caducado
    if (digits.some((d) => d === "")) {
      toast.warn("Ingresa los 6 dígitos");
      return;
    }
    const ok = await validateCode(state.email, digits.join(""));
    if (ok) {
      toast.success("✅ Código correcto");
      navigate("/contact", {
        state: { emailVerified: true, email: state.email },
      });
    } else {
      toast.error("Código incorrecto o expirado 😕");
    }
  };

  const handleResend = async () => {
    if (seconds > 0) return;
    const ok = await sendCode(state.email);
    if (ok) {
      toast.info("Nuevo código enviado 📩");
      setDigits(Array(6).fill(""));
      startCountdown();
    } else {
      toast.error("No pudimos reenviar el código. Intenta luego.");
    }
  };

  const startCountdown = () => {
    setSeconds(START_SECONDS);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1 && timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
        return s - 1;
      });
    }, 1000);
  };

  const mmss = `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(
    seconds % 60
  ).padStart(2, "0")}`;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md text-center"
      >
        <button
          onClick={() => navigate("/contact")}
          aria-label="contact"
          className="text-black font-bold px-2 py-1 rounded-full shadow-md bg-white hover:bg-slate-200 transition duration-300 mr-[22rem] mb-2"
        >
          <i className="fa-solid fa-arrow-left text-pink-500"></i>
        </button>

        <h1 className="text-3xl font-extrabold mb-4">
          <TranslatableText text="Verify your email" />
        </h1>

        <p className="text-gray-600 mb-8">
          <TranslatableText text="We've sent a 6-digit code to" />
          <br />
          <span className="font-semibold">{state.email}</span>
        </p>

        {/* Code input boxes */}
        <div
          onPaste={handlePaste}
          className="flex justify-center gap-3 mb-8 select-none"
        >
          {digits.map((d, i) => (
            <input
              key={i}
              ref={(el) => {
                inputs.current[i] = el;
              }}
              value={d}
              onChange={(e) => setDigit(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className="w-12 h-12 md:w-14 md:h-14 text-2xl md:text-3xl font-bold text-center
                         bg-gray-50 border-2 border-pink-400 rounded-lg focus:outline-none
                         focus:ring-2 focus:ring-pink-500 transition"
            />
          ))}
        </div>

        <p className="mb-4 text-sm text-gray-500">
          {seconds > 0 ? (
            <>
              <TranslatableText text="Expires in" /> {mmss}
            </>
          ) : (
            <TranslatableText text="Code expired" />
          )}
        </p>

        <motion.button
          whileHover={{ scale: seconds > 0 ? 1.05 : 1 }}
          whileTap={{ scale: seconds > 0 ? 0.97 : 1 }}
          disabled={seconds === 0}
          onClick={handleVerify}
          className={`bg-pink-600 text-white px-8 py-2 rounded-lg font-semibold shadow-lg
            ${
              seconds === 0
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-pink-700"
            }`}
        >
          <TranslatableText text="Confirm" />
        </motion.button>

        {/* Resend button */}
        <button
          onClick={handleResend}
          disabled={seconds > 0}
          className={` text-black px-8 py-2 rounded-lg font-semibold shadow-lg ml-2 ${
            seconds > 0
              ? "text-gray-400 cursor-not-allowed bg-gray-50"
              : "text-white bg-pink-600 hover:text-pink-200"
          }`}
        >
          {seconds > 0 ? (
            <>
              <TranslatableText text="Resend in" /> {mmss}
            </>
          ) : (
            <TranslatableText text="Resend code" />
          )}
        </button>
      </motion.div>
    </main>
  );
};

export default VerifyEmailPage;
