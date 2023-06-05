import Card from "@/components/Card";
import Link from "next/link";
import deptos from "../../departamentos.json";

export default async function Propiedades() {
  return (
    <div className="">
      <h1>Este es propiedades</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-8 mb-5">
          {deptos.map((e) => (
            <Card deptos={e} key={e.id} />
            // <li key={id}>
            //   <li key={id}>
            //     <Link href={`/propiedades/${id}`}>{title}</Link>
            //   </li>
            // </li>
          ))}
        </div>
      </div>
    </div>
  );
}
