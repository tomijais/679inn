export const Hero = () => {

    return (
        <section className="bg-white dark:bg-gray-900 bg-hero2-pattern bg-right-top bg-auto bg-no-repeat" >
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-5">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-7xl dark:text-white">
              Sentite
            </h1>
            <h2 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-7xl dark:text-white">
              como en casa
            </h2>
            <p className="max-w-2xl mb-6 font-light text-red-500 lg:mb-8 md:text-lg lg:text-5xl dark:text-gray-400 drop-shadow-xl">
              Departamentos totalmente equipados
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300  bg-orange-500 hover:bg-white hover:border-orange-500 focus:ring-white dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 "
            >
              Descubrir
            </a>
          </div>
        </div>
      </section>
    
    )

};
