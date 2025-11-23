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
        className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
        onClick={() => setOpened(true)}
        h="100%"
      >
        <Card.Section>
          <Image
            src={fullImagePath}
            alt={altText || title}
            height={160}
            style={{ objectFit: "cover" }}
          />
        </Card.Section>

        <Text fw={700} size="lg" mt="md">
          {title}
        </Text>
      </Card>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Detail"
        centered
        size="xl"
        radius="md"
        transitionProps={{
          transition: "pop",
          duration: 400,
          timingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        }}
      >
        <Stack align="center">
          <Text size="xl" fw={700} ta="center" mb="md">
            {title}
          </Text>

          {!fullPdfPath && (
            <Image
              src={fullImagePath}
              alt={altText || title}
              height={300}
              w={"100%"}
              radius="md"
            />
          )}

          {fullPdfPath && (
            <Box my="md" w="100%" h={300}>
              <object
                data={`${fullPdfPath}#toolbar=0`}
                type="application/pdf"
                width="100%"
                height="100%"
                style={{ border: "1px solid #eee", borderRadius: "8px" }}
              >
                <p>
                  Your browser does not support PDFs.
                  <a href={fullPdfPath}>Download the PDF</a>.
                </p>
              </object>
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
                  Access PDF
                </Button>
              )}
            </Group>
          ) : null}
        </Stack>
      </Modal>
    </>
  );
}
