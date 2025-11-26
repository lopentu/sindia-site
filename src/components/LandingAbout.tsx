import {
  Container,
  Text,
  Title,
  Button,
  Stack,
  Group,
  Box
} from "@mantine/core";
import Link from "next/link";
import React from "react";

export default function LandingAbout() {
  return (
    <Box py={80} className="bg-slate-50">
      <Container size="md">
        <Stack gap="lg" align="center">
          <Title order={2} size="h1" className="text-slate-800" ta="center">
            About SinDia
          </Title>

          <Box className="max-w-3xl">
            <Text
              size="xl"
              lh={1.6}
              className="text-slate-700 mb-6"
              ta="justify">
              The vision of Sinographia Diachronica (SinDia) is to awaken the
              millennia-deep intelligence in the age of AI. We aim to construct
              a comprehensive semantic and cultural map where classical
              writings, Buddhist translations, vernacular texts, modern online
              discourse, inscriptions, manuscripts, and multimodal artifacts
              intersect within a single computational universe.
            </Text>
          </Box>

          <Group mt="md">
            <Button
              component={Link}
              href="/about"
              size="lg"
              variant="filled"
              color="#3c5cb2ff"
              radius="lg">
              Read More
            </Button>
          </Group>
        </Stack>
      </Container>
    </Box>
  );
}
