import Image from "next/image";
import Link from "next/link";
import NavigationButtons from "./buttons/NavigationButtons";
const links = [
  {
    label: "Inicio",
    route: "/",
  },
  {
    label: "Departamentos",
    route: "/propiedades",
  },
  {
    label: "Preguntas",
    route: "/faq",
  },
  {
    label: "Contacto",
    route: "/about",
  },
];

export function Navigation() {
  return (
    <header className="bg-black">
      <nav>
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo_fondo_negro.jpg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
              width={100}
              height={100}
            />
          </Link>

          <NavigationButtons links={links} />
        </div>
      </nav>
    </header>
  );
}
