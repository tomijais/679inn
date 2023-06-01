import Link from "next/link";
import deptos from "../../departamentos.json";

export default async function Propiedades() {
  return (
    <div>
      <h1>Este es propiedades</h1>
      <ul>
        {deptos.map(({ title, id }) => (
          <li key={id}>
            <li key={id}>
              <Link href={`/propiedades/${id}`}>{title}</Link>
            </li>
          </li>
        ))}
      </ul>
    </div>
  );
}
