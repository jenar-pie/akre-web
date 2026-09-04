import Hero from "@/components/Hero";
import QuickAccess from "@/components/QuickAccess";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Specialists from "@/components/Specialists";
import Promotions from "@/components/Promotions";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickAccess />
      <Specialists />
      <Gallery />
      <Services />
      <Promotions />
    </>
  );
}


