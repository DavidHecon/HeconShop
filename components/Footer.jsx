
import style from "./Footer.module.css"
import Image from "next/image";


export default function Footer() {
  return (
    <footer className={style.container}>
      <div className={style.column}>
        <h3>Ayuda</h3>
        <p>Preguntas frecuentes</p>
        <p>Servicios de tienda</p>
        <p>Trajeta regalo</p>
        <p>Factura</p>
      </div>

      <div className={style.column}>
        <h3>Empresa</h3>
        <p>Quiénes somos</p>
        <p>Trabaja con nosotros</p>
      </div>

      <div className={style.logoContainer}>
        <Image
          src="/icons/logo.png"
          alt="Logo"
          width={110}
          height={128}
          className={style.logo}
        />
      </div>

      <div className={style.column}>
        <h3>Follow us!</h3>
        <div className={style.icons}>
          <Image src="/icons/x.png" alt="X" width={30} height={30} />
          <Image src="/icons/instagram.png" alt="Instagram" width={30} height={30} />
          <Image src="/icons/facebook.png" alt="Facebook" width={30} height={30} />
        </div>
      </div>
    </footer>
  );
}
