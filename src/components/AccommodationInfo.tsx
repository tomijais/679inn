const AccommodationInfo = () => {
  return (
    <div className="bg-gray-100 py-10 px-5">
      <h1 className="text-3xl font-bold text-black mb-5">
        Descubre tu refugio perfecto en 679 INN
      </h1>
      <p className="text-black mb-8">
        ¿Buscas un alojamiento que te brinde comodidad, funcionalidad y
        privacidad en tu próxima escapada o viaje de negocios? En 679 INN te
        ofrecemos una amplia variedad de opciones para que elijas la que mejor
        se adapte a tus necesidades.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-md p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Alojamientos para todos
          </h2>
          <p className="text-black mb-4">
            Desde monoambientes hasta departamentos de 1, 2 o 3 dormitorios,
            nuestros alojamientos tienen capacidad para hospedar de 1 a 6
            personas cómodamente.
          </p>
          <p className="text-black mb-4">
            ¡Vos elegís si preferís camas de 1 o 2 plazas!
          </p>
          <p className="text-black mb-4">
            Y para que te sientas como en casa, todos nuestros departamentos
            están completamente amueblados y equipados con elementos de cocina
            de calidad, como microondas, tostadora, pava eléctrica y heladera.
          </p>
          <p className="text-black mb-4">
            ¡Todo está incluido! Desde los servicios de luz, gas y wifi hasta
            DIRECTV o Video cable, para que no te pierdas ningún programa o
            evento importante.
          </p>
          <p className="text-black mb-4">
            Para que te sientas seguro y respaldado durante tu estadía,
            ofrecemos servicio de limpieza y mantenimiento periódico.
          </p>
          <p className="text-black mb-4">
            Nuestros departamentos están ubicados estratégicamente en zonas
            seguras y de fácil acceso, a metros de los principales centros de
            salud, cocheras, lavaderos, restaurantes, pubs, supermercados y
            comercios.
          </p>
          <p className="text-black mb-4">
            La estadía mínima es de solo 3 noches.
          </p>
          <p className="text-black">
            ¡No te quedes sin tu departamento ideal! ¡Reserva ahora mismo y
            prepárate para disfrutar de una estadía inolvidable!
          </p>
        </div>
        {/* Otros elementos del grid */}
      </div>
    </div>
  );
};

export default AccommodationInfo;
