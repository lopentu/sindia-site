import MainVisual from "@/components/MainVisual";
import LandingAbout from "@/components/LandingAbout";
import Papers from "@/components/Sections/Papers";
import Tools from "@/components/Sections/Tools";
import Workshop from "@/components/Sections/Workshop";
import { Box } from "@mantine/core";

export default function Home() {
  return (
    <>
      <MainVisual />
      <LandingAbout />

      <Box id="tools" mb={60}>
        <Tools />
      </Box>
      <Box id="papers" mb={60}>
        <Papers />
      </Box>
      <Box id="workshop" mb={60}>
        <Workshop />
      </Box>
    </>
  );
}
