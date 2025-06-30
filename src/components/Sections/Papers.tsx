import React from "react";
import SindiaTitle from "../common/SindiaTitle";
import { Container, Grid } from "@mantine/core";
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
      <Grid gutter="md">
        {papersData.map((paper, index) => (
          <Grid.Col key={index} span={{ base: 12, md: 4, lg: 4 }}>
            <ContentCard
              title={paper.title}
              imageUrl={paper.imageUrl}
              altText={paper.altText}
              pdfUrl={paper.pdfUrl}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
