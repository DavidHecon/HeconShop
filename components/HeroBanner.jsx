import Image from "next/image";

export default function HeroBanner() {
  return (
    <section>
      <Image
        src="/img/hero-banner-home.avif"
        alt="hero-banner-home"
        width={1920}
        height={800}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </section>
  );
}
