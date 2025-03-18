export const GallerySection = () => {
  return (
    <div className="w-full px-4 py-10 flex flex-col items-center bg-white">
      <h2 className="text-xl font-bold text-center mb-6">
        Looking & Smelling Great!
      </h2>

      {/* Grid con altura automática y balanceada */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl w-full grid-auto-rows-[200px] md:auto-rows-[200px]">
        {/* Imagen grande, altura doble */}
        <img
          src="/assets/dog2.jpg"
          alt="Dog 1"
          className="col-span-2 row-span-2 object-cover w-full h-full rounded-lg"
        />
        {/* Imágenes normales */}
        <img
          src="/assets/dog1.JPG"
          alt="Dog 2"
          className="object-cover w-full h-full rounded-lg"
        />
        <img
          src="/assets/dog3.jpg"
          alt="Dog 3"
          className="object-cover w-full h-full rounded-lg"
        />
        <img
          src="/assets/dog1.JPG"
          alt="Dog 4"
          className="object-cover w-full h-full rounded-lg"
        />
        <img
          src="/assets/dog2.jpg"
          alt="Dog 5"
          className="object-cover w-full h-full rounded-lg"
        />
        <img
          src="/assets/dog3.jpg"
          alt="Dog 6"
          className="object-cover w-full h-full rounded-lg"
        />
        <img
          src="/assets/dog1.JPG"
          alt="Dog 7"
          className="object-cover w-full h-full rounded-lg"
        />
          {/* Imagen grande, altura doble */}
          <img
           src="/assets/dog2.jpg"
           alt="Dog 1"
           className="col-span-2 row-span-2 object-cover w-full h-full rounded-lg"
         />
        <img
          src="/assets/dog1.JPG"
          alt="Dog 7"
          className="object-cover w-full h-full rounded-lg"
        />
        <img
          src="/assets/dog1.JPG"
          alt="Dog 7"
          className="object-cover w-full h-full rounded-lg"
        />
      </div>

      {/* Botón */}
      <button className="mt-8 bg-pink-500 text-white rounded-lg px-6 py-2 font-semibold hover:bg-pink-600">
        Browse more furry friends!
      </button>
    </div>
  );
};
