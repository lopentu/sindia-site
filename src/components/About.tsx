import {
  Container,
  Text,
  Title,
  Stack,
  List,
  ThemeIcon,
  Box
} from "@mantine/core";
import React from "react";

export default function About() {
  return (
    <Container size="md" pb="xl">
      <Stack gap="xl">
        <Box className="text-center mb-8" size="md">
          <Title
            order={1}
            className="text-slate-800 mb-4"
            size={42}
            ta="center">
            Sinographia Diachronica (SinDia)
          </Title>
          <Text
            size="xl"
            fw={500}
            c="dimmed"
            className="max-w-3xl mx-auto"
            ta="center">
            Vision & Mission — The Civilizational Memory of the Sinographic
            World
          </Text>
        </Box>

        <Stack gap="md">
          <Text size="lg" lh={1.7} className="text-slate-700" ta="justify">
            Across the long river of history, the Chinese script has never been
            merely a writing system. It is a
            <Text span fw={600}>
              {" "}
              technology of memory
            </Text>
            —a vessel that preserves how past generations sensed the world,
            shaped meaning, and understood life and cosmos.
          </Text>
          <Text size="lg" lh={1.7} className="text-slate-700" ta="justify">
            It records each moment of transformation: the rise and fall of
            dynasties, the arrival of new religions, the encounters among
            cultures, and the continual re-encoding of language and thought.
          </Text>
          <Text size="lg" lh={1.7} className="text-slate-700" ta="justify">
            The vision of{" "}
            <Text span fw={600}>
              Sinographia Diachronica (SinDia)
            </Text>{" "}
            is to awaken this millennia-deep intelligence in the age of AI.
          </Text>
          <Text size="lg" lh={1.7} className="text-slate-700" ta="justify">
            We aim to construct a comprehensive semantic and cultural map where
            <Text span fw={600}>
              {" "}
              classical writings, Buddhist translations, vernacular texts,
              modern online discourse, inscriptions, manuscripts, and multimodal
              artifacts{" "}
            </Text>
            intersect within a single computational universe.
          </Text>
        </Stack>

        <Box my="lg">
          <Stack gap="md">
            <Title order={2} size="h2" mb="lg" className="text-slate-800">
              Our Conviction
            </Title>
            <Text
              size="lg"
              lh={1.7}
              className="text-slate-700 mb-6"
              ta="justify">
              SinDia rests on a conviction: When the history of language is
              re-woven into computationally visible structures, the deeper
              architecture of civilization becomes
              <Text span fw={600}>
                {" "}
                traceable, interpretable, and imaginable.{" "}
              </Text>
              To understand the history of language is to open a path toward
              understanding
              <Text span fw={600}>
                {" "}
                how human consciousness shapes itself across centuries.{" "}
              </Text>
            </Text>
          </Stack>
        </Box>

        <Box>
          <Title order={2} size="h2" mb="xl">
            Our Missions
          </Title>

          <Stack gap={40}>
            <Box>
              <Title order={3} size="h3" mb="xs">
                1. To weave a linguistic continuum that spans thousands of years
              </Title>
              <Text size="lg" ta="justify" lh={1.7}>
                From oracle-bone inscriptions and early imperial documents, to
                medieval Buddhist translations, to late imperial literature, and
                to contemporary digital communities, SinDia{"'"}s mission is not
                simply to collect data but to
                <Text span fw={600}>
                  {" "}
                  connect, compare, and reconstruct.
                </Text>{" "}
                Our goal is to build a “diachronic observatory” where the life
                cycles of linguistic forms can be seen with clarity.
              </Text>
            </Box>

            <Box>
              <Title order={3} size="h3" mb="xs">
                2. To create tools that prepare the Sinographic world for an AI
                future
              </Title>
              <Text size="lg" mb="sm" lh={1.7}>
                SinDia develops computational instruments designed for the
                unique ecology of the Chinese script:
              </Text>
              <List
                spacing="xs"
                size="lg"
                center
                icon={
                  <ThemeIcon
                    color="#1c398e"
                    size={6}
                    radius="lg"
                    variant="filled"
                  />
                }>
                <List.Item>
                  <Text span size="lg" fw={600}>
                    Glyph tokenization and glyph embeddings{" "}
                  </Text>{" "}
                  to capture the co-evolution of form and meaning
                </List.Item>
                <List.Item>
                  <Text span size="lg" fw={600}>
                    Component-level analyzers
                  </Text>{" "}
                  that reveal the internal logic of characters
                </List.Item>
                <List.Item>
                  <Text span size="lg" fw={600}>
                    Construction search for permutation-sensitive patterns
                  </Text>{" "}
                  (e.g., same-morpheme different-order structures)
                </List.Item>
                <List.Item>
                  <Text span size="lg" fw={600}>
                    Models and simulations of semantic change
                  </Text>
                  , integrating cultural, cognitive, and statistical
                  perspectives
                </List.Item>
              </List>
              <Text mt="sm" size="lg">
                These tools transform historical evidence into navigable
                landscapes of meaning.
              </Text>
            </Box>

            <Box>
              <Title order={3} size="h3" mb="xs">
                3. To bridge AI and the Humanities in order to illuminate the
                “historical mind”
              </Title>
              <Text size="lg" mb="sm" lh={1.7}>
                SinDia investigates how writing, cognition, and cultural memory
                intertwine:
              </Text>
              <List
                spacing="lg"
                size="lg"
                center
                icon={
                  <ThemeIcon
                    color="#1c398e"
                    size={6}
                    radius="xl"
                    variant="filled"
                  />
                }>
                <List.Item>
                  How concepts emerge, shift, stabilize, or dissolve
                </List.Item>
                <List.Item>
                  How writing systems mediate collective thought
                </List.Item>
                <List.Item>How meaning survives the centuries</List.Item>
              </List>
              <Text mt="sm" size="lg">
                Our mission is to reveal how language becomes a medium through
                which civilization remembers.
              </Text>
            </Box>

            <Box>
              <Title order={3} size="h3" mb="xs">
                4. To foster a multidisciplinary and transregional community for
                the Sinographosphere
              </Title>
              <Text lh={1.7} size="lg" ta="justify">
                SinDia brings together scholars from linguistics, AI,
                neuroscience, history, philology, cultural studies, and
                computational humanities. It also reaches across the broader
                Sinographosphere—to Sinitic varieties, neighboring scripts,
                textual networks, and cross-regional cultural flows—building a
                shared methodological and conceptual platform for future
                research.
              </Text>
            </Box>
          </Stack>
        </Box>

        <Box>
          <Text size="lg" lh={1.8} className="text-slate-700 mb-6" ta="justify">
            At its core, SinDia is an inquiry into the
            <Text span fw={600}>
              {" "}
              deep time of language.
            </Text>{" "}
            Tracing the shifts in characters, words, and constructions is
            ultimately a way of
            <Text span fw={600}>
              {" "}
              tracing how thought is preserved, how culture is remembered, and
              how consciousness unfolds along the long arc of history.
            </Text>{" "}
            SinDia seeks to set these buried forces back into motion - to
            understand how the past thought, and to help us imagine how the
            future might think.
          </Text>

          <Text
            size="lg"
            my="lg"
            lh={1.8}
            className="text-slate-700"
            ta="justify">
            Join Us!
          </Text>
          <Text size="lg" lh={1.7} className="text-slate-700" ta="justify">
            Contact: Prof. Shu-Kai Hsieh, shukaihsieh@ntu.edu.tw
          </Text>
        </Box>
      </Stack>
    </Container>
  );
}
