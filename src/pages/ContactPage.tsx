import { useState } from "react";
import { enviarContacto } from "../Service/contactService";
import { ContactoRequest } from "../types/contact";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { WhatsAppButton } from "../components/common/WhatsAppButton";
import { toast } from "react-toastify";
import { TranslatableText } from "../components/common/TranslatableText";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    direccion: "",
    ciudad: "",
    codigoPostal: "",
    numero: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const contacto: ContactoRequest = {
      idContacto: 0,
      nombre: formData.nombre,
      direccion: formData.direccion,
      ciudad: formData.ciudad,
      codigoPostal: formData.codigoPostal,
      number: formData.numero, // <- este nombre debe ser `number` para coincidir con el backend
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
    } else {
      toast.error(
        "There was an error sending your message. Please try again later."
      );
    }
  };

  return (
    <>
      <Header />
      <main className="bg-white text-gray-800 py-10 px-4 my-10">
        <h1 className="text-3xl font-bold text-center mb-2">Contact Us</h1>
        <p className="text-center max-w-3xl mx-auto mb-10 text-gray-600">
          <TranslatableText text="Welcome to MoPetCo Guest Services. We’re always happy to hear from you
          and will do our best to respond to your inquiry in a timely manner. To
          contact us please fill out our Guest Service form below."/>
        </p>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Formulario */}
          <div className="bg-pink-500 text-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-1"><TranslatableText text="Drop us a line!"/></h2>
            <h3 className="text-xl font-semibold mb-6"><TranslatableText text="Make an appointment"/></h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="nombre"
                placeholder="Your Name *"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full p-2 rounded text-black"
              />
              <input
                type="text"
                name="direccion"
                placeholder="Your Address *"
                value={formData.direccion}
                onChange={handleChange}
                required
                className="w-full p-2 rounded text-black"
              />
              <input
                type="text"
                name="ciudad"
                placeholder="Your City *"
                value={formData.ciudad}
                onChange={handleChange}
                required
                className="w-full p-2 rounded text-black"
              />
              <input
                type="text"
                name="codigoPostal"
                placeholder="Zip Code *"
                value={formData.codigoPostal}
                onChange={handleChange}
                required
                className="w-full p-2 rounded text-black"
              />
              <input
                type="text"
                name="numero"
                placeholder="Phone Number *"
                value={formData.numero}
                onChange={handleChange}
                required
                className="w-full p-2 rounded text-black"
              />
              <input
                type="email"
                name="correo"
                placeholder="Email Address *"
                value={formData.correo}
                onChange={handleChange}
                required
                className="w-full p-2 rounded text-black"
              />
              <textarea
                name="mensaje"
                placeholder="Your Question *"
                value={formData.mensaje}
                onChange={handleChange}
                rows={4}
                required
                className="w-full p-2 rounded text-black"
              ></textarea>

              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded font-bold hover:bg-gray-800"
              >
                <TranslatableText text="Send Me"/>
              </button>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
            <p className="text-gray-600">
              <TranslatableText text="If you would like to speak with a team member, please Call or Text
              us at:"/>
              <br />
              <strong className="block mt-1">(954) 271-9939</strong> <TranslatableText text="for Broward
              and Palm Beach"/>
              <br />
              <strong className="block mt-1">(305) 902-5008</strong> <TranslatableText text="for Miami
              Dade"/>
              <br />
              <span className="block mt-1">
                <TranslatableText text="Availability: Mon to Sat, 9:00 AM - 5:30 PM (ET)"/>
              </span>
            </p>

            <div className="space-y-4 text-gray-800">
              <div className="flex items-center space-x-3">
                <i className="fas fa-map-marker-alt text-pink-500 text-xl"></i>
                <a
                  href="https://www.google.com/maps/place/2500+SW+22nd+Ter+%23721,+Fort+Lauderdale,+FL+33312"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  2500 SW 22nd Ter #721, Fort Lauderdale, FL 33312
                </a>
              </div>
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
      <WhatsAppButton />
      <Footer />
    </>
  );
};
