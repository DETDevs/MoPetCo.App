export const HomePage = () => {
  return (
    <div className="bg-blue-200 w-full h-[45vh] md:h-[30vh]  mt-16 md:mt-16 flex flex-col md:flex-row justify-center items-center">
      {/* Texto */}
      <div className="text-center space-y-3  md:w-1/2 md:mr-72 lg:-ml-[8rem] xl:-ml-[20rem]">
        <h1 className="text-3xl md:text-[2.5rem] lg:text-[3rem] xl:text-[4.5rem] font-extrabold text-center text-black leading-7 md:leading-none">
          Only the best <br className="block md:hidden" /> for your{" "}
          <span className="text-black">friend</span>
        </h1>
        <p className="mt-0 text-base md:text-lg lg:text-3xl text-gray-700">
          Servicing Miami Dade & Broward, FL
        </p>
        <button className="bg-pink-500 text-white rounded-lg px-6 py-2 font-semibold hover:bg-pink-600 lg:text-2xl">
          Book an appointment
        </button>
      </div>
      {/* Imagen */}
      <img
        src="/assets/dogHomgePage.png"
        alt="Cute Dog"
        className="w-40 md:w-52 h-48 md:h-auto md:absolute md:left-[23rem] lg:left-[28.5rem] xl:left-[39rem] md:top-4 lg:top-[3rem] xl:top-[8rem] md:mt-0"
      />
    </div>
  );
};
