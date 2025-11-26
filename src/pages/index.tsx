import About from "@/components/About";
import MainVisual from "@/components/MainVisual";
import Papers from "@/components/Sections/Papers";
import Tools from "@/components/Sections/Tools";
import Workshop from "@/components/Sections/Workshop";

export default function Home() {
  return (
    <>
      <MainVisual />
      <div id="about">
        <About />
      </div>
      <div id="tools">
        <Tools />
      </div>
      <div id="papers">
        <Papers />
      </div>
      <div id="workshop">
        <Workshop />
      </div>
    </>
  );
}
