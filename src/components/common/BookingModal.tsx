import React from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black  flex items-center justify-center z-50">
      {/* Fondo del modal blanco sólido, sin transparencia */}
      <div className="bg-black white rounded-2xl max-w-5xl w-full relative p-4 shadow-2xl animate-bounce-in">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute py-1 px-2 top-4 cursor-pointer right-10 text-white bg-red-500 rounded-full hover:text-pink-700 text-center text-xs font-bold"
        >
          X
        </button>

        {/* Contenedor del iframe con fondo blanco y sombra */}
        <div className="rounded-lg overflow-hidden border-2 border-pink-300 shadow-lg bg-black">
          <iframe
            src="https://plugin.myonlineappointment.com/External/BookingPlugin/?guid=9ec31d04-b039-4977-ac27-32eeb1b3cec0"
            title="Book Appointment"
            className="w-full h-[650px] border-0"
          />
        </div>
      </div>
    </div>
  );
};
