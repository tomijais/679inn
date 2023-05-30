import { Key } from "react";
import deptos from "../../../departamentos.json";
import Image from "next/image";

// TODO set state y use effect
export default async function Propiedad({ params }: { params: any }) {
  const { id, images, title, imageDir } = deptos[params.id - 1];
  

  // const response = await fetch(`/api/imageHandler?id=${params.id - 1}`);
  // const imageFiles = await response.json()

  return (
    <>
      <h1>Bienvenido al {title}</h1>

      <li key={id}>
        {images.map((fileName: any ) => {
          console.log(`/${imageDir}/${fileName}`);
          
          return (
            <Image
              key={fileName}
              alt={fileName}
              src={`/${imageDir}/${fileName}`}
              width={100}
              height={100}
            />
          );
        })}
      </li>
    </>
  );
}
