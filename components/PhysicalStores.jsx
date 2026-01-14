'use client';

import style from "./PhysicalStores.module.css"

export default function PhysicalStores() {
  return (
    <section className={style.container}>
      <h1 className={style.title}>Physical Store</h1>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.12345!2d-99.1332!3d19.4326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f123456789ab%3A0xc0ffee123456789!2sCiudad+de+México!5e0!3m2!1ses!2smx!4v1694480000000!5m2!1ses!2smx"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </section>
  );
}
