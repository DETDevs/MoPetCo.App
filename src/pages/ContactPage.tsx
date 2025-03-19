import { Footer } from "../components/ui/Footer";
import { Header } from "../components/ui/Header";

export const ContactPage = () => {
  return (
    <>
      <Header />
      <main className="bg-white text-gray-800 py-10 px-4 my-10">
        <h1 className="text-3xl font-bold text-center mb-2">Contact Us</h1>
        <p className="text-center max-w-3xl mx-auto mb-10 text-gray-600">
          Welcome to MoPetCo Guest Services. We’re always happy to hear from you
          and will do our best to respond to your inquiry in a timely manner. To
          contact us please fill out our Guest Service form below.
        </p>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Formulario */}
          <div className="bg-pink-500 text-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-1">Drop us a line!</h2>
            <h3 className="text-xl font-semibold mb-6">Make an appointment</h3>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded text-black"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Your Address *
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded text-black"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Your City *
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded text-black"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Zip Code *
                </label>
                <input
                  type="number"
                  className="w-full p-2 rounded text-black"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number *
                </label>
                <input
                  type="number"
                  className="w-full p-2 rounded text-black"
                  required
                />
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="w-full p-2 rounded text-black"
                  required
                />
              </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Your Question *
                </label>
                <textarea
                  className="w-full p-2 rounded text-black"
                  rows={4}
                  required
                ></textarea>
              </div>
              {/* reCAPTCHA */}
              {/* <div className="bg-white rounded p-2">
                <p className="text-black text-center">[reCAPTCHA]</p>
              </div> */}
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded font-bold hover:bg-gray-800"
              >
                SUBMIT
              </button>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
            <p className="text-gray-600">
              If you would like to speak with a team member, please Call or Text
              us at:
              <br />
              <strong className="block mt-1">(954) 271-9939</strong> for Broward
              and Palm Beach
              <br />
              <strong className="block mt-1">(305) 902-5008</strong> for Miami
              Dade
              <br />
              <span className="block mt-1">
                Availability: Mon to Sat, 9:00 AM - 5:30 PM (ET)
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
      <Footer />
    </>
  );
};
