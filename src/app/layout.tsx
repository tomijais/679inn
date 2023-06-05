import { Navigation } from "@/components/Navigation";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "679 Inn Hostel",
  description: "Pagina del hostel 679 Inn",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
