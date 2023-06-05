import IconsWrap from "./wrap/IconsWrap";
import Image from "next/image";

const AccommodationInfo = () => {
  return (
    <div className="bg-white py-10 px-5 ">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-black mb-5 text-center">
          Tu refugio perfecto, en
          <span className="text-orange-600	"> 679 Inn</span>
        </h1>
        <p className="text-black mb-8">
          ¿Buscas un alojamiento que te brinde comodidad, funcionalidad y
          privacidad en tu próxima escapada o viaje de negocios? En 679 INN te
          ofrecemos una amplia variedad de opciones para que elijas la que mejor
          se adapte a tus necesidades.
        </p>
        <div className="grid grid-cols-1 gap-8 mb-5">
          <div className="bg-orange-100 rounded-md p-6 shadow-md grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex items-center bg-homepage1-pattern bg-cover bg-bottom	">
              {/* <Image
                src="/homepage/IMG_0614.jpg"
                fill
                alt="asd"
                sizes="10%"
                className="block w-full h-auto"
              /> */}
            </div>
            <div className="">
              <h2 className="text-xl font-semibold mb-4">
                Amplia variedad de alojamientos completamente amueblados y
                equipados.
              </h2>
              <p className="text-black mb-4">
                Desde monoambientes hasta departamentos de 1, 2 o 3 dormitorios,
                nuestros alojamientos tienen capacidad para hospedar de 1 a 6
                personas cómodamente.
              </p>
              <p className="mb-4 font-bold	text-orange-600">
                ¡Vos elegís si preferís camas de 1 o 2 plazas!
              </p>
              <p className="text-black mb-4">
                Y para que te sientas como en casa, todos nuestros departamentos
                están completamente amueblados y equipados con elementos de
                cocina de calidad, como microondas, tostadora, pava eléctrica y
                heladera.
              </p>
            </div>
          </div>

          <div className="bg-orange-100 rounded-md p-6 shadow-md grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Ubicación estratégica cerca de restaurantes, supermercados y
                comercios
              </h2>
              <p className="text-black mb-4">
                ¡Todo está incluido! Desde los servicios de luz, gas y wifi
                hasta DIRECTV o Video cable, para que no te pierdas ningún
                programa o evento importante.
              </p>
              <p className="text-black mb-4">
                Para que te sientas seguro y respaldado durante tu estadía,
                ofrecemos{" "}
                <span className="font-bold">
                  servicio de limpieza y mantenimiento periódico.
                </span>
              </p>
              <p className="text-black mb-4">
                Nuestros departamentos están ubicados estratégicamente en zonas
                seguras y de fácil acceso, a metros de los principales centros
                de salud, cocheras, lavaderos, restaurantes, pubs, supermercados
                y comercios.
              </p>
              <p className="text-black mb-4">
                La estadía mínima es de{" "}
                <span className="font-bold text-orange-600">solo 3 noches</span>
                .
              </p>
            </div>
            <div className="flex items-center bg-homepage3-pattern bg-cover bg-center">
              {/* <Image
                src="/homepage/IMG_0616.jpg"
                fill
                alt="asd"
                sizes="100%"
                className="w-full h-full object-contain xl:object-fill"
              /> */}
            </div>
          </div>
        </div>
        <div className="icons-grid ">
          <div className="bg-orange-100 rounded-md p-6 shadow-md ">
            <IconsWrap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationInfo;
