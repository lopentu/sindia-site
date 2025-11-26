import AboutComponent from "@/components/About";
import Team from "@/components/Team";
import { Box } from "@mantine/core";

export default function AboutPage() {
  return (
    <Box size="md" mt="7rem">
      <AboutComponent />
      <Team />
    </Box>
  );
}
