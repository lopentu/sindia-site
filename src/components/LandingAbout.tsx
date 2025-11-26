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
import { useTranslation } from "react-i18next";

export default function LandingAbout() {
  const { t } = useTranslation();

  return (
    <Box py={80} className="bg-slate-50">
      <Container size="md">
        <Stack gap="lg" align="center">
          <Title order={2} size="h1" className="text-slate-800" ta="center">
            {t("About SinDia")}
          </Title>

          <Box className="max-w-3xl">
            <Text
              size="xl"
              lh={1.6}
              className="text-slate-700 mb-6"
              ta="justify">
              {t("LandingAbout")}
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
              {t("Read More")}
            </Button>
          </Group>
        </Stack>
      </Container>
    </Box>
  );
}
