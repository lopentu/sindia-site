import React from "react";
import {
  Container,
  Text,
  Title,
  Stack,
  List,
  ThemeIcon,
  Box
} from "@mantine/core";
import { useTranslation, Trans } from "react-i18next";

export default function About() {
  const { t } = useTranslation("about");

  return (
    <Container size="md" pb="xl">
      <Stack gap="xl">
        {/* Hero header */}
        <Box className="text-center mb-8" size="md">
          <Title
            order={1}
            className="text-slate-800 mb-4"
            size={42}
            ta="center">
            {t("title")}
          </Title>
          <Text
            size="xl"
            fw={500}
            c="dimmed"
            className="max-w-3xl mx-auto"
            ta="center">
            {t("subtitle")}
          </Text>
        </Box>

        {/* Hero paragraphs */}
        <Stack gap="md">
          <Text size="lg" lh={1.7} className="text-slate-700" ta="justify">
            <Trans
              i18nKey="hero.p1"
              ns="about"
              components={{ bold: <Text span fw={600} /> }}
            />
          </Text>

          <Text size="lg" lh={1.7} className="text-slate-700" ta="justify">
            {t("hero.p2")}
          </Text>

          <Text size="lg" lh={1.7} className="text-slate-700" ta="justify">
            <Trans
              i18nKey="hero.p3"
              ns="about"
              components={{ bold: <Text span fw={600} /> }}
            />
          </Text>

          <Text size="lg" lh={1.7} className="text-slate-700" ta="justify">
            <Trans
              i18nKey="hero.p4"
              ns="about"
              components={{ bold: <Text span fw={600} /> }}
            />
          </Text>
        </Stack>

        {/* Conviction */}
        <Box my="lg">
          <Stack gap="md">
            <Title order={2} size="h2" mb="lg" className="text-slate-800">
              {t("conviction.title")}
            </Title>
            <Text
              size="lg"
              lh={1.7}
              className="text-slate-700 mb-6"
              ta="justify">
              <Trans
                i18nKey="conviction.body"
                ns="about"
                components={{ bold: <Text span fw={600} /> }}
              />
            </Text>
          </Stack>
        </Box>

        {/* Missions */}
        <Box>
          <Title order={2} size="h2" mb="xl">
            {t("missionsTitle")}
          </Title>

          <Stack gap={40}>
            {/* Mission 1 */}
            <Box>
              <Title order={3} size="h3" mb="xs">
                {t("missions.1.title")}
              </Title>
              <Text size="lg" ta="justify" lh={1.7}>
                <Trans
                  i18nKey="missions.1.body"
                  ns="about"
                  components={{ bold: <Text span fw={600} /> }}
                />
              </Text>
            </Box>

            {/* Mission 2 */}
            <Box>
              <Title order={3} size="h3" mb="xs">
                {t("missions.2.title")}
              </Title>
              <Text size="lg" mb="sm" lh={1.7}>
                {t("missions.2.lead")}
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
                {[1, 2, 3, 4].map((i) => (
                  <List.Item key={i}>
                    <Trans
                      i18nKey={`missions.2.items.${i}`}
                      ns="about"
                      components={{ bold: <Text span size="lg" fw={600} /> }}
                    />
                  </List.Item>
                ))}
              </List>
              <Text mt="sm" size="lg">
                {t("missions.2.footer")}
              </Text>
            </Box>

            {/* Mission 3 */}
            <Box>
              <Title order={3} size="h3" mb="xs">
                {t("missions.3.title")}
              </Title>
              <Text size="lg" mb="sm" lh={1.7}>
                {t("missions.3.lead")}
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
                {[1, 2, 3].map((i) => (
                  <List.Item key={i}>{t(`missions.3.items.${i}`)}</List.Item>
                ))}
              </List>
              <Text mt="sm" size="lg">
                {t("missions.3.footer")}
              </Text>
            </Box>

            {/* Mission 4 */}
            <Box>
              <Title order={3} size="h3" mb="xs">
                {t("missions.4.title")}
              </Title>
              <Text lh={1.7} size="lg" ta="justify">
                {t("missions.4.body")}
              </Text>
            </Box>
          </Stack>
        </Box>

        {/* Closing */}
        <Box>
          <Text size="lg" lh={1.8} className="text-slate-700 mb-6" ta="justify">
            <Trans
              i18nKey="closing.body"
              ns="about"
              components={{ bold: <Text span fw={600} /> }}
            />
          </Text>

          <Text
            size="lg"
            my="lg"
            lh={1.8}
            className="text-slate-700"
            ta="justify">
            {t("closing.joinUs")}
          </Text>
          <Text size="lg" lh={1.7} className="text-slate-700" ta="justify">
            {t("closing.contact")}
          </Text>
        </Box>
      </Stack>
    </Container>
  );
}
