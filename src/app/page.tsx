import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Ventures from "@/components/Ventures";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Ventures />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
