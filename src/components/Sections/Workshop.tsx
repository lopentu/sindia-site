import React from 'react'
import SindiaTitle from '../common/SindiaTitle'
import { Container, Grid } from '@mantine/core'
import ContentCard from '../ContentCard'

const workshopData = [
  {
    title: "LangCog 2025",
    imageUrl: "workshop.png",
    altText: "LangCog_2025",
    buttonText: "Workshop Website",
    buttonLink: "https://lopentu.github.io/langcog2025/",
  },
];

export default function Workshop() {
  return (
    <Container mb={"xl"}>
      <SindiaTitle title="Workshop" />
      <Grid gutter="md">
        {workshopData.map((workshop, index) => (
          <Grid.Col key={index} span={{ base: 12, md: 4, lg: 4 }}>
            <ContentCard
              title={workshop.title}
              imageUrl={workshop.imageUrl}
              altText={workshop.altText}
              buttonText={workshop.buttonText}
              buttonLink={workshop.buttonLink}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
