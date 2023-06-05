import Instagram from "./Icons/Instagram";
import Whatsapp from "./Icons/Whatsapp";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-black text-white">
      <div>
        <Image src={"/logo_fondo_negro.jpg"} alt="Logo 679Inn" width={100} height={100} />
        <p>
          679 Inn.
          <br />
          Tu refugio perfecto.
        </p>
      </div>
      <div>
        <span className="footer-title text-white opacity-100	">Nuestras redes</span>
        <div className="grid grid-flow-col gap-4">
          <a href="https://api.whatsapp.com/send/?phone=%2B542974288241&text&type=phone_number&app_absent=0/" target="_blank">
            <Whatsapp color="amber-500" />
          </a>
          <a href="https://www.instagram.com/apart.679/" target="_blank">
            <Instagram color="amber-500" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
