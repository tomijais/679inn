import Departamentos from "@/app/interfaces/departamentos.interface";
import Image from "next/image";

interface ICard {
  deptos: Departamentos;
}

const Card = ({ deptos }: ICard) => {
  const { id, imageDir, images, price, title, price2, price3 } = deptos;
  return (
    <div className="w-full h-72 bg-orange-100 border-black rounded-lg shadow border-solid border-2">
      <div className="grid grid-cols-2 h-full">
        <div className="relative">
          <Image
            className="p-1 rounded-t-lg w-full h-full object-cover object-center"
            src={`/${imageDir}/${images[0]}`}
            alt="product image"
            fill
            sizes="100%"
          />
        </div>
        <div className="px-5 pb-5 flex flex-col justify-center h-full">
          <h5 className="text-3xl font-semibold tracking-tight text-gray-900 mb-6 underline">
            {title}
          </h5>
          <div className="flex flex-col mb-6">
            <span className="text-md font-bold text-gray-900 mb-3">Precio por noche (3 a 8): {price}</span>
            <span className="text-md font-bold text-gray-900 mb-3">Precio por noche (9 a 20): {price2}</span>
            <span className="text-md font-bold text-gray-900 mb-3">Precio por noche (+20): {price3}</span>
          </div>
          <a
            href={`/propiedades/${id}`}
            className="text-black bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Mas detalles
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
// Precio por noche (3 a 8): $12.000

// Precio por noche (9 a 20): $9.500

// Precio por noche (+20): $8.000

