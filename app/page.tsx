
import Header from "@/components/header";
import Footer from "@/components/footer";
import FAQ from "@/components/faqs";
import Service from "@/components/service";
import Hero from "@/components/hero";
import DemoResult from "@/components/demoResult";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <DemoResult/>
      <Service/>
      <FAQ/>
      <Footer/>
      
    </>
  );
}
