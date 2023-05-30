import { Key } from "react";
import deptos from "../../../departamentos.json";
import Image from "next/image";


export default async function Propiedad({ params }: { params: any }) {
  const { id, images, title } = deptos[params.id - 1];
  

  const response = await fetch(`http://localhost:3001/api/imageHandler?id=${params.id - 1}`);
  const imageFiles = await response.json()

  return (
    <>
      <h1>Bienvenido al {title}</h1>

      <li key={id}>
        {imageFiles.map((fileName: any ) => {
          return (
            <Image
              key={fileName}
              alt={fileName}
              src={`/${images}/${fileName}`}
              width={100}
              height={100}
            />
          );
        })}
      </li>
    </>
  );
}
