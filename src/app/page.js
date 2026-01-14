import HeroBanner from "../../components/HeroBanner"
import OfferBanner from "../../components/OfferBanner";
import CardsPrendas from "../../components/CardsPrendas";


export default function HomePage() {
  return (
    <>

        {/* <Navbar /> */}
      <main>
      <HeroBanner/>  
      <CardsPrendas/>
      <OfferBanner/>
      </main>

        {/* <Footer /> */}
    </>
  );
}
