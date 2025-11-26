import { useState } from "react";
import {
  Card,
  Image,
  Text,
  Modal,
  Stack,
  Button,
  Group,
  Box
} from "@mantine/core";

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
  pdfUrl
}: ContentCardProps) {
  const [opened, setOpened] = useState(false);

  const fullImagePath = `/Cards/${imageUrl}`;
  const fullPdfPath = pdfUrl ? `/pdf/${pdfUrl}` : null;

  return (
    <>
      <Card
        shadow="sm"
        padding="0"
        radius="lg"
        className="group relative overflow-hidden bg-white/40 backdrop-blur-md border border-white/20 transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-2 cursor-pointer h-full flex flex-col"
        onClick={() => setOpened(true)}>
        <Card.Section className="overflow-hidden">
          <Box className="relative h-48 overflow-hidden bg-slate-100">
            {imageUrl ? (
              <>
                <Image
                  src={fullImagePath}
                  alt={altText || title}
                  h="150"
                  w="100%"
                  fit="cover"
                  className="transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </>
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                <Text c="dimmed" size="sm" fw={500}>
                  No Preview
                </Text>
              </div>
            )}
          </Box>
        </Card.Section>

        <Box p="lg" className="flex-1 flex flex-col">
          <Text
            fw={700}
            size="lg"
            className="text-slate-800 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 mb-auto">
            {title}
          </Text>

          <Group
            mt="md"
            gap="xs"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
            <Text size="sm" c="dimmed" fw={500}>
              View Details
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#868e96"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-slate-700">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Group>
        </Box>
      </Card>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={
          <Text fw={700} size="xl" className="text-slate-800 line-clamp-1 pr-4">
            {title}
          </Text>
        }
        centered
        size="xl"
        radius="lg"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 8
        }}
        classNames={{
          content:
            "bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl",
          header: "bg-transparent border-b border-slate-200/50",
          body: "p-6"
        }}
        transitionProps={{
          transition: "pop",
          duration: 300,
          timingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
        }}>
        <Stack gap="xl">
          {!fullPdfPath && imageUrl && (
            <Box className="rounded-xl overflow-hidden shadow-lg border border-slate-100 h-[400px]">
              <Image
                src={fullImagePath}
                alt={altText || title}
                fit="cover"
                w="100%"
                h="300"
                className="bg-slate-50"
              />
            </Box>
          )}

          {fullPdfPath && (
            <Box
              w="100%"
              h={300}
              className="rounded-xl overflow-hidden shadow-inner border border-slate-200 bg-slate-50">
              <object
                data={`${fullPdfPath}#toolbar=0`}
                type="application/pdf"
                width="100%"
                height="100%">
                <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                  <Text size="lg" mb="md">
                    Your browser does not support PDFs.
                  </Text>
                  <Button component="a" href={fullPdfPath} variant="light">
                    Download the PDF
                  </Button>
                </div>
              </object>
            </Box>
          )}

          {(buttonText && buttonLink) || fullPdfPath ? (
            <Group
              justify="flex-end"
              pt="md"
              className="border-t border-slate-200/50">
              {buttonText && buttonLink && (
                <Button
                  component="a"
                  href={buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="md"
                  radius="md"
                  className="bg-slate-900 hover:bg-slate-800 transition-colors">
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
                  size="md"
                  radius="md"
                  color="gray"
                  className="hover:bg-slate-50">
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
