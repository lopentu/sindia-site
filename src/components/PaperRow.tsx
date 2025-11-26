import React from "react";
import { Paper, Text, Group, Stack, Badge, Button, Box } from "@mantine/core";

interface PaperRowProps {
  title: string;
  authors?: string;
  year?: string;
  publication?: string;
  pdfUrl?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function PaperRow({
  title,
  authors,
  year,
  publication,
  pdfUrl,
  buttonText,
  buttonLink
}: PaperRowProps) {
  const fullPdfPath = pdfUrl ? `/pdf/${pdfUrl}` : null;
  const link = buttonLink || fullPdfPath;
  const actionText = buttonText || "View PDF";

  return (
    <Paper
      py="md"
      px={0}
      radius="md"
      className="bg-transparent hover:bg-slate-50/50 transition-colors duration-300 group">
      <Group justify="space-between" align="flex-start" wrap="nowrap">
        <Stack gap="sm" className="flex-1">
          <Text
            size="lg"
            fw={700}
            className="text-slate-800 group-hover:text-blue-700 transition-colors lh-1.3">
            {title}
          </Text>

          <Stack gap="sm">
            {year && (
              <Badge
                variant="light"
                color="gray"
                size="sm"
                radius="sm"
                className="bg-slate-100 text-slate-600 font-medium normal-case">
                {year}
              </Badge>
            )}
            {authors && (
              <Text size="sm" className="text-slate-600">
                {authors}
              </Text>
            )}

            <Group gap="xs" wrap="wrap">
              {publication && (
                <Text size="sm" className="text-slate-500 italic">
                  {publication}
                </Text>
              )}
            </Group>
          </Stack>
        </Stack>

        {link && (
          <Box className="flex-shrink-0 ml-4 self-center">
            <Button
              component="a"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              variant="light"
              color="blue"
              size="sm"
              radius="md"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {actionText}
            </Button>
          </Box>
        )}
      </Group>
    </Paper>
  );
}
