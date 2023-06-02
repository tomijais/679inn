export const Hero = () => {
  return (
    <section className="w-full h-96 bg-hero-custom-pattern bg-cover bg-center flex justify-start items-center">
      <div className="container mx-auto">
        <div className="flex justify-start items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-center text-6xl text-amber-500 font-bold drop-shadow-lg">
              Sentite
              <span className="text-white block"> como en casa</span>
            </h1>
            <p className="mt-5 text-center text-lg text-white opacity-70">
              Departamentos totalmente equipados
            </p>
            <a
              className="mt-8 px-12 py-3 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-xl text-white/80 font-semibold drop-shadow-lg rounded-full"
              href="#"
            >
              Descubrir
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
