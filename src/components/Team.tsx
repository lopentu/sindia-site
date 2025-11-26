import {
  Container,
  Title,
  SimpleGrid,
  Text,
  Card,
  Group,
  Stack,
  Box
} from "@mantine/core";
import React from "react";
import { useTranslation } from "react-i18next";

const teamMembers = [
  {
    name: "Prof. Dr. Shu-Kai Hsieh",
    role: "PROJECT LEADER",
    description:
      "Professor, Graduate Institute of Linguistics, National Taiwan University, Taiwan",
    image: "https://placehold.co/400x400?text=Member+1"
  },
  {
    name: "Wei-Ling Chen",
    role: "",
    description: "Graduate Institute of Linguistics, National Taiwan University, Taiwan",
    image: "https://placehold.co/400x400?text=Member+2"
  },
  {
    name: "Lang-Ching Yeh",
    role: "",
    description: "Graduate Institute of Linguistics, National Taiwan University, Taiwan",
    image: "https://placehold.co/400x400?text=Member+5"
  },
  {
    name: "Deborah Watty",
    role: "",
    description:
      "Research Assistant ,Institute of Linguistics, Academia Sinica, Taiwan",
    image: "https://placehold.co/400x400?text=Member+3"
  },
  {
    name: "Micah Kitsunai",
    role: "",
    description: "M.A. in Linguistics, National Taiwan University, Taiwan",
    image: "https://placehold.co/400x400?text=Member+4"
  },
  {
    name: "Yu-Hsiang Tseng",
    role: "",
    description: "Post-doc researcher, Universität Tübingen, Germany",
    image: "https://placehold.co/400x400?text=Member+5"
  },
  {
    name: "Yongfu Liao",
    role: "",
    description: "M.A. in Linguistics, National Taiwan University, Taiwan",
    image: "https://placehold.co/400x400?text=Member+5"
  }
];

export default function Team() {
  const { t } = useTranslation();

  return (
    <Container size="md" py="xl" id="team">
      <Stack gap="xl">
        <Box className="text-center mb-8">
          <Title order={2} className="text-slate-800" size={36} ta="center">
            {t("About Our Team")}
          </Title>
        </Box>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
          {teamMembers.map((member, index) => (
            <Card key={index} padding="md" radius="md" withBorder>
              <Stack gap="xs">
                <Group justify="space-between" align="baseline" wrap="nowrap">
                  <Text fw={600} size="md">
                    {t(member.name)}
                  </Text>
                  <Text
                    size="xs"
                    c="dimmed"
                    fw={500}
                    style={{ whiteSpace: "nowrap" }}>
                    {member.role ? t(member.role) : ""}
                  </Text>
                </Group>
                <Text size="sm" c="dimmed" lh={1.4}>
                  {t(member.description)}
                </Text>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
