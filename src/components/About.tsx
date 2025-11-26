import { Container, Text, Title } from "@mantine/core";
import React from "react";

export default function About() {
  return (
    <Container>
      <Title c={"gray"} my={"xl"} ta={"center"}>
        What is Sindia?
      </Title>
      <Text ta="justify">
        Sindia (Sinographia Diachronica) Project is an initiative that explores
        how the meanings and usages of Chinese characters have changed
        throughout history. Combining large-scale historical corpora with
        AI-powered word sense disambiguation techniques, Sindia enables
        researchers and learners to trace and visualize semantic shifts of
        classical Chinese words across dynasties and texts. From philosophical
        terms like 仁 (ren) to everyday words like 家 (jia), Sindia helps reveal
        how the same character can carry different meanings depending on time,
        context, and genre.
      </Text>
    </Container>
  );
}
