'use client'
import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { pushGTMEvent } from "../utils/pushGTMEven";


export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Sección izquierda */}
      <div className={styles.left}>
        <Link href="/" onClick={()=>pushGTMEvent("select_content",
          {
            content_id:"nav_button-home",  //boton,banner, link, dependiendo de que dispare el evento
            group_id:"nav_superior", //sección donde se encuentra mi activador o disparador de evento
            content_type:"home"      //el identificador o texto dentro del boton, banner : su nombre, link: si es a: el texto, Link: contexto de adonde va (corto)
          }
        )}
        >Home</Link>
        <Link href="#" onClick={()=>pushGTMEvent("select_content",
          {
            content_id:"nav_button-catalog",  
            group_id:"nav_superior", 
            content_type:"home"      
          }
        )}>Catalog</Link>
        <Link href="/contact" onClick={()=>pushGTMEvent("select_content",
          {
            content_id:"nav_button-contact",  
            group_id:"nav_superior", 
            content_type:"home"      
          }
        )}>Contact</Link>
      </div>

      {/* Logo en el centro */}
      <div className={styles.center}>
        <Image 
          src="/icons/logo.png"  
          alt="Logo" 
          width={84}          
          height={78} 
          className={styles.logo}
        />
      </div>

      {/* Sección derecha */}
      <div className={styles.right}>
        <button className={styles.navbarButton}>
          <Image 
            src="/icons/lupa.png" 
            alt="Search" 
            width={24} 
            height={24} 
            className={styles.icon}
          />
        </button>
        <button className={styles.navbarButton}>
          <Image 
            src="/icons/bolso.png" 
            alt="Bag" 
            width={24} 
            height={24} 
            className={styles.icon}
          />
        </button>
      </div>
    </nav>
  );
}