import { useState } from "react";
import { Card, Image, Text, Modal, Stack, Button, Group, Box } from "@mantine/core";

interface ContentCardProps {
  title: string;
  imageUrl: string;
  altText?: string;
  buttonText?: string; 
  buttonLink?: string;
  pdfUrl?: string;
}

export default function ContentCard({
  title,
  imageUrl,
  altText = "",
  buttonText,
  buttonLink,
  pdfUrl,
}: ContentCardProps) {
  const [opened, setOpened] = useState(false);

  const fullImagePath = `/Cards/${imageUrl}`;
  const fullPdfPath = pdfUrl ? `/pdf/${pdfUrl}` : null;

  return (
    <>
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        className="hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        onClick={() => setOpened(true)}
      >
        <Card.Section>
          <Image
            src={fullImagePath}
            alt={altText || title}
            height={160}
            style={{ objectFit: "cover" }}
          />
        </Card.Section>

        <Text fw={500} size="lg" mt="md">
          {title}
        </Text>
      </Card>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Detail"
        centered
        size="xl"
      >
        <Stack align="center">
          <Text size="xl" fw={700} ta="center" mb="md">
            {title}
          </Text>

          <Image
            src={fullImagePath}
            alt={altText || title}
            height={300}
            w={"100%"}
            radius="md"
          />

          {fullPdfPath && (
            <Box my="md" w="100%" h={500}>
              <iframe
                src={`${fullPdfPath}#toolbar=0`}
                width="100%"
                height="100%"
                style={{ border: "1px solid #eee", borderRadius: "8px" }}
                title={`PDF for ${title}`}
              />
            </Box>
          )}

          {(buttonText && buttonLink) || fullPdfPath ? (
            <Group mt="md">
              {buttonText && buttonLink && (
                <Button
                  component="a"
                  href={buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {buttonText}
                </Button>
              )}

              {fullPdfPath && (
                <Button
                  component="a"
                  href={fullPdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                >
                  More
                </Button>
              )}
            </Group>
          ) : null}
        </Stack>
      </Modal>
    </>
  );
}
