import { Container, Text, Title } from '@mantine/core'
import React from 'react'

export default function About() {
  return (
    <Container>
      <Title c={"gray"} my={"xl"} ta={"center"}>
        What is Sindia?
      </Title>
      <Text>Sindia (Sinographia Diachronica) Project is ...</Text>
    </Container>
  );
}
