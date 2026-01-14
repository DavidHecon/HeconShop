import Image from "next/image";

export default function OfferBanner() {
  return (
    <section style={{ position: "relative", width: "100%", height: "800px" }}>
      <Image
        src="/img/banner-ofert.jpg"
        alt="banner-oferta"
        fill
        style={{ objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
          ¡First purchase 20% discount!
        </h1>
        <p style={{ fontSize: "1.5rem" }}>
          Take advantage of our exclusive discounts
        </p>
      </div>
    </section>
  );
}
