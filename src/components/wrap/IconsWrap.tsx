import Image from "next/image";

const IconsWrap = () => {
  return (
    <section className="iconsWrap justify-center flex flex-wrap">
      <div className="icon flex items-center flex-col w-1/2 sm:w-1/4">
        <Image src="/icons/wifi.png" alt="Wifi icon" height={50} width={50} />
        <p className="text-center">Wifi</p>
      </div>
      <div className="icon flex items-center flex-col w-1/2 sm:w-1/4">
        <Image
          src="/icons/tv-monitor.png"
          style={{
            filter:
              "invert(37%) sepia(95%) saturate(3795%) hue-rotate(344deg) brightness(109%) contrast(101%)",
          }}
          alt="Tv icon"
          height={50}
          width={50}
        />
        <p className="text-center">Smart TV</p>
      </div>
      <div className="icon flex items-center flex-col w-1/2 sm:w-1/4">
        <Image
          src="/icons/patio-al-aire-libre.png"
          alt="Patio al aire libre icon"
          height={50}
          width={50}
        />
        <p className="text-center">Patio al aire libre</p>
      </div>
      <div className="icon flex items-center flex-col w-1/2 sm:w-1/4">
        <Image
          src="/icons/aire-acondicionado.png"
          alt="Aire acondicionado icon"
          height={50}
          width={50}
        />
        <p className="text-center">Aire Acondicionado</p>
      </div>
    </section>
  );
};

export default IconsWrap;
