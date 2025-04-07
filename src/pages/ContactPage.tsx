import { useState, useRef, useEffect } from "react";
import { enviarContacto } from "../Service/contactService";
import { ContactoRequest } from "../types/contact";
import { Header } from "../components/layout/Header";
import { toast } from "react-toastify";
import { TranslatableText } from "../components/common/TranslatableText";
import { SectionTitle } from "../components/common/SectionTitle";
import ReCAPTCHA from "react-google-recaptcha";
import { verificarCaptcha } from "../Service/captchaService";
import { useLanguage } from "../contexts/LanguageContext";
import { getTranslation } from "../utils/translationHelper";

const SITE_KEY = "6LfiwAkrAAAAAD5LPzXJsij7YcHZG7reqDDoiwRF";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    direccion: "",
    ciudad: "",
    codigoPostal: "",
    numero: "",
    correo: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const captchaRef = useRef<ReCAPTCHA>(null);
  const { language } = useLanguage();

  const [placeholders, setPlaceholders] = useState({
    nombre: "Your Name *",
    direccion: "Your Address *",
    ciudad: "Your City *",
    codigoPostal: "Zip Code *",
    numero: "Phone Number *",
    correo: "Email Address *",
    mensaje: "Your Question *",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      toast.error("Please verify that you're not a robot.");
      return;
    }

    setIsSubmitting(true);

    try {
      const captchaResponse = await verificarCaptcha(captchaToken);

      if (!captchaResponse || !captchaResponse.content) {
        toast.error("Captcha verification failed. Please try again.");
        setIsSubmitting(false);
        return;
      }

      const contacto: ContactoRequest = {
        idContacto: 0,
        nombre: formData.nombre,
        direccion: formData.direccion,
        ciudad: formData.ciudad,
        codigoPostal: formData.codigoPostal,
        number: formData.numero,
        correo: formData.correo,
        mensaje: formData.mensaje,
        fechaEnvio: new Date().toISOString(),
        estado: "Pendiente",
      };

      const success = await enviarContacto(contacto);
      if (success) {
        toast.success("Your message has been sent successfully!");
        setFormData({
          nombre: "",
          direccion: "",
          ciudad: "",
          codigoPostal: "",
          numero: "",
          correo: "",
          mensaje: "",
        });
        setCaptchaToken(null);
        captchaRef.current?.reset();
      } else {
        toast.error(
          "There was an error sending your message. Please try again later."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const loadPlaceholders = async () => {
      const translated = await Promise.all([
        getTranslation("Your Name *", language),
        getTranslation("Your Address *", language),
        getTranslation("Your City *", language),
        getTranslation("Zip Code *", language),
        getTranslation("Phone Number *", language),
        getTranslation("Email Address *", language),
        getTranslation("Your Question *", language),
      ]);
  
      setPlaceholders({
        nombre: translated[0],
        direccion: translated[1],
        ciudad: translated[2],
        codigoPostal: translated[3],
        numero: translated[4],
        correo: translated[5],
        mensaje: translated[6],
      });
    };
  
    loadPlaceholders();
  }, [language]);
  

  return (
    <>
      <Header />
      <main className="bg-white text-gray-800 py-10 px-4 my-10">
        <h1 className="text-3xl font-bold text-center mb-2">
          <SectionTitle>
            <TranslatableText text="Contact Us" />
          </SectionTitle>
        </h1>
        <p className="text-center max-w-3xl mx-auto mb-10 text-gray-600">
          <TranslatableText
            text="Welcome to MoPetCo Guest Services. We’re always happy to hear from you
            and will do our best to respond to your inquiry in a timely manner. 
            To contact us please fill out our Guest Service form below."
          />
        </p>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-pink-500 text-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-1">
              <TranslatableText text="Drop us a line!" />
            </h2>
            <h3 className="text-xl font-semibold mb-6">
              <TranslatableText text="Make an appointment" />
            </h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="nombre"
                placeholder={placeholders.nombre}
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full p-2 rounded text-black"
              />
              <input
                type="text"
                name="direccion"
                placeholder={placeholders.direccion}
                value={formData.direccion}
                onChange={handleChange}
                required
                className="w-full p-2 rounded text-black"
              />
              <input
                type="text"
                name="ciudad"
                placeholder={placeholders.ciudad}
                value={formData.ciudad}
                onChange={handleChange}
                required
                className="w-full p-2 rounded text-black"
              />
              <input
                type="number"
                name="codigoPostal"
                placeholder={placeholders.codigoPostal}
                value={formData.codigoPostal}
                onChange={handleChange}
                required
                className="w-full p-2 rounded text-black"
              />
              <input
                type="number"
                name="numero"
                placeholder={placeholders.numero}
                value={formData.numero}
                onChange={handleChange}
                required
                className="w-full p-2 rounded text-black"
              />
              <input
                type="email"
                name="correo"
                placeholder={placeholders.correo}
                value={formData.correo}
                onChange={handleChange}
                required
                className="w-full p-2 rounded text-black"
              />
              <textarea
                name="mensaje"
                placeholder={placeholders.mensaje}
                value={formData.mensaje}
                onChange={handleChange}
                rows={4}
                required
                className="w-full p-2 rounded text-black"
              ></textarea>

              {/* CAPTCHA */}
              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={captchaRef}
                  sitekey={SITE_KEY}
                  onChange={(token) => {
                    console.log("Token Captcha recibido:", token);
                    setCaptchaToken(token);
                  }}
                  theme="dark"
                />
              </div>

              <button
                type="submit"
                className={`bg-black text-white px-4 py-2 rounded font-bold transition ${
                  isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-800"
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <TranslatableText text="Send Me" />
                )}
              </button>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              <TranslatableText text="Get in Touch" />
            </h2>
            <p className="text-gray-600">
              <TranslatableText text="If you would like to speak with a team member, please Call or Text us at:" />
              <br />
              <strong className="block mt-1">(954) 271-9939</strong>{" "}
              <TranslatableText text="for Broward and Palm Beach" />
              <br />
              <strong className="block mt-1">(305) 902-5008</strong>{" "}
              <TranslatableText text="for Miami Dade" />
              <br />
              <span className="block mt-1">
                <TranslatableText text="Availability: Mon to Sat, 9:00 AM - 5:30 PM (ET)" />
              </span>
            </p>

            <div className="space-y-4 text-gray-800">
              <div className="flex items-center space-x-3">
                <i className="fas fa-phone-alt text-pink-500 text-xl"></i>
                <a href="tel:+19542719939" className="hover:underline">
                  (954) 271-9939
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope text-pink-500 text-xl"></i>
                <a href="mailto:info@mopetco.com" className="hover:underline">
                  info@mopetco.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
