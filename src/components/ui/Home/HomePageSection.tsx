export const HomePageSection = () => {
    return (
      <div className="relative bg-blue-200 w-full min-h-[60vh] mt-16 px-4 flex items-center justify-center">
        {/* Grid texto */}
        <div className="text-center space-y-3 max-w-md mx-auto z-0">
          <h1 className="z-0 text-3xl md:text-[2.5rem] lg:text-[3rem] font-extrabold text-black leading-8 md:leading-none">
            Only the best <br className="block md:hidden" /> for your{" "}
            <span className="text-black">friend</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-700">
            Servicing Miami Dade & Broward, FL
          </p>
          <button className="bg-pink-500 text-white rounded-lg px-6 py-2 font-semibold hover:bg-pink-600 lg:text-lg">
            Book an appointment
          </button>
        </div>
  
        {/* Imagen perrito esquina */}
        <img
          src="/assets/dogHomgePage.png"
          alt="Cute Dog"
          className="absolute -top-14 md:-top-16 right-0 w-32 md:w-40 h-auto z-0 animate-puppy-fadeder"
        />
  
        {/* Imagen perrito esquina */}
        <img
          src="/assets/dogHomgePage.png"
          alt="Cute Dog"
          className="absolute -bottom-0 left-0 w-32 md:w-40 h-auto z-0 animate-puppy-fadeizq"
        />
      </div>
    );
  };
  