import React from "react";
import SindiaTitle from "../common/SindiaTitle";
import { Container, SimpleGrid } from "@mantine/core";
import ContentCard from "../ContentCard";
import { useTranslation } from "react-i18next";

const toolsData = [
  {
    title: "Historical Chinese Corpus",
    imageUrl: "corpus.png",
    altText: "Corpus visualization",
    buttonText: "Access",
    buttonLink: "http://140.112.80.82:8080/"
  },
  {
    title: "Compound Analysis",
    imageUrl: "compounds.png",
    altText: "AI text analyzer screenshot",
    buttonText: "Access",
    buttonLink: "http://140.112.80.82:8080/compounds-analysis"
  },
  {
    title: "HanziAnalysisKit",
    imageUrl: "hanzi.png",
    altText: "HanziAnalysisKit",
    buttonText: "Access",
    buttonLink: "https://lopentu.github.io/HanziAnalysisKit/index.html"
  }
];

export default function Tools() {
  const { t } = useTranslation();
  return (
    <Container>
      <SindiaTitle title={t("Tools")} />
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="md">
        {toolsData.map((tool, index) => (
          <ContentCard
            key={index}
            title={tool.title}
            imageUrl={tool.imageUrl}
            altText={tool.altText}
            buttonText={t(tool.buttonText)}
            buttonLink={tool.buttonLink}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
}
