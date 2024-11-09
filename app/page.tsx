import About from "@/components/HomeComponents/About";
import Accompagnement from "@/components/HomeComponents/Accompagnement";
import Avis from "@/components/HomeComponents/Avis";
import Banner from "@/components/HomeComponents/Banner";
import Blog from "@/components/HomeComponents/Blog";
import Comm from "@/components/HomeComponents/Comm";
import CreateEvent from "@/components/HomeComponents/CreateEvent";
import Event from "@/components/HomeComponents/Event";
import NeedSceno from "@/components/HomeComponents/NeedSceno";
import Ready from "@/components/HomeComponents/Ready";
import Sceno from "@/components/HomeComponents/Sceno";
import Temoignages from "@/components/HomeComponents/Temoignages";
import Type from "@/components/HomeComponents/Type";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <CreateEvent />
      <About />
      <Type />
      <Event />
      <Ready />
      <Sceno />
      <NeedSceno />
      <Comm />
      <Accompagnement />
      <Temoignages />
      <Avis />
      <Blog />
    </div>
  );
}
