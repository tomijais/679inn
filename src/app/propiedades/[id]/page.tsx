import deptos from "../../../departamentos.json";
import Image from "next/image";
import fs from "fs";

export default function Propiedad({ params }) {
  const { id, images, title } = deptos[params.id - 1];
  const imageDirectory = `public/${images}`;

  const imageFiles = fs.readdirSync(imageDirectory);

  return (
    <>
      <h1>Bienvenido al {title}</h1>

      <li key={id}>
        {imageFiles.map((fileName) => (
          <Image
            key={fileName}
            alt={fileName}
            src={`/${images}/${fileName}`}
            width={100}
            height={100}
          />
        ))}
      </li>
    </>
  );
}
