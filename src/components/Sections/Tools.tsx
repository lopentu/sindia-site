import React from 'react'
import SindiaTitle from '../common/SindiaTitle'
import { Container, Grid } from '@mantine/core'
import ContentCard from '../ContentCard';

const toolsData = [
  {
    title: "Historical Chinese Corpus",
    imageUrl: "corpus.png",
    altText: "Corpus visualization",
    buttonText: "Access",
    buttonLink: "http://140.112.80.82:8080/",
  },
  {
    title: "同素異序",
    imageUrl: "compounds.png",
    altText: "AI text analyzer screenshot",
    buttonText: "Access",
    buttonLink: "http://140.112.80.82:8080/compounds-analysis",
  },
];

export default function Tools() {
    return (
      <Container>
        <SindiaTitle title="Tools" />
        <Grid gutter="md">
          {toolsData.map((tool, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 4, lg: 4 }}>
              <ContentCard
                title={tool.title}
                imageUrl={tool.imageUrl}
                altText={tool.altText}
                buttonText={tool.buttonText}
                buttonLink={tool.buttonLink}
              />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    );
}
