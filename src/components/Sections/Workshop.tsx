import React from "react";
import SindiaTitle from "../common/SindiaTitle";
import { Container, SimpleGrid } from "@mantine/core";
import ContentCard from "../ContentCard";

const workshopData = [
  {
    title: "LangCog 2025",
    imageUrl: "workshop.png",
    altText: "LangCog_2025",
    buttonText: "Workshop Website",
    buttonLink: "https://lopentu.github.io/langcog2025/"
  },
  {
    title: "2nd Joint Workshop on Chinese Lexical Semantic Change",
    imageUrl: "workshop2.png",
    altText: "JCLSC_2024",
    buttonText: "Workshop Website",
    buttonLink: "https://lopentu.github.io/2023-ntue/"
  }
];

export default function Workshop() {
  return (
    <Container mb={"xl"}>
      <SindiaTitle title="Workshops" />
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="md">
        {workshopData.map((workshop, index) => (
          <ContentCard
            key={index}
            title={workshop.title}
            imageUrl={workshop.imageUrl}
            altText={workshop.altText}
            buttonText={workshop.buttonText}
            buttonLink={workshop.buttonLink}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
}
