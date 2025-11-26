import React from "react";
import SindiaTitle from "../common/SindiaTitle";
import { Container, SimpleGrid } from "@mantine/core";
import ContentCard from "../ContentCard";

const papersData = [
  {
    title:
      "Building a Semantic Search Platform for Exploring Historical Chinese Corpora",
    imageUrl: "paper1.png",
    altText: "NLP in education research paper",
    pdfUrl: "paper1.pdf",
  },
  {
    title:
      "Exploring Dynamic Few-Shot Prompting for Word Sense Disambiguation in Historical Chinese",
    imageUrl: "paper2.png",
    altText: "NLP in education research paper",
    pdfUrl: "paper2.pdf",
  },
];

export default function Papers() {
  return (
    <Container>
      <SindiaTitle title="Papers" />
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="md">
        {papersData.map((paper, index) => (
          <ContentCard
            key={index}
            title={paper.title}
            imageUrl={paper.imageUrl}
            altText={paper.altText}
            pdfUrl={paper.pdfUrl}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
}
