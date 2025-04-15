import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";
import SearchModal from "./components/modals/SearchModal";

// const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "HomeRide",
   description: "Airbnb Clone",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
   const currentUser = await getCurrentUser();
   return (
      <html lang="en">
         <body className={nunito.className}>
            <ClientOnly>
               <ToasterProvider />
               <SearchModal />
               <RentModal />
               <LoginModal />
               <RegisterModal />
               <Navbar currentUser={currentUser} />
            </ClientOnly>
            <div className="pb-20 pt-28">{children}</div>
         </body>
      </html>
   );
}
