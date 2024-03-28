import Contact from "@/components/Contact";
import About from "@/components/about";
import Services from "@/components/services";
import Slider from "@/components/slider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Slider />
      <About />
      <Services />
      <Contact />
      
    </main>
  );
}
