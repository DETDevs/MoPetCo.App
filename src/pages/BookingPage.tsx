import { useNavigate } from "react-router-dom";
import { Header } from "../components/layout/Header";

const BookingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="max-w-6xl my-8 mx-auto py-10 px-4">
      <button
            onClick={() => navigate("/")}
            aria-label="booking"
            className="text-black font-bold px-2 py-1 rounded-full shadow-md bg-white hover:bg-slate-200 transition duration-300 my-2"
          >
            <i className="fa-solid fa-arrow-left text-pink-500"></i>
          </button>

        <div className="rounded-lg overflow-hidden border-2 border-pink-300 shadow-lg bg-black">
          <iframe
            src="https://plugin.myonlineappointment.com/External/BookingPlugin/?guid=9ec31d04-b039-4977-ac27-32eeb1b3cec0"
            title="Book Appointment"
            className="w-full h-[650px] border-0"
          />
        </div>
      </div>
    </>
  );
};

export default BookingPage;