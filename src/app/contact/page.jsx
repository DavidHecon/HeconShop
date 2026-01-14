'use client';
import PhysicalStores from "../../../components/PhysicalStores"
import Contact from "../../../components/Contact"


import { Philosopher } from "next/font/google";

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Contactpg(){
    return(
        <>
          <main className={philosopher.className}>
            <Contact/>
             <PhysicalStores/>
        </main>
        </>
    )
}