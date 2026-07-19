import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Mission from "@/components/Mission";
import PlasticToCash from "@/components/PlasticToCash";
import CollectionCentres from "@/components/CollectionCentres";
import ProjectTide from "@/components/ProjectTide";
import Timeline from "@/components/Timeline";
import Gallery from "@/components/Gallery";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Problem />
        <Mission />
        <PlasticToCash />
        <CollectionCentres />
        <ProjectTide />
        <Timeline />
        <Gallery />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
