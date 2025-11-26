import React from "react";
import SindiaTitle from "../common/SindiaTitle";
import { Container, Stack, Divider } from "@mantine/core";
import PaperRow from "../PaperRow";

const papersData = [
  {
    title:
      "Building a Semantic Search Platform for Exploring Historical Chinese Corpora",
    altText: "NLP in education research paper",
    pdfUrl: "paper1.pdf",
    authors: "Micah Kitsunai, Deborah Watty, and Shu-Kai Hsieh",
    year: "2024",
    buttonText: "Read Paper",
    publication: "じんもんこん 2024 論文集 2024, 241-246"
  },
  {
    title:
      "Exploring Dynamic Few-Shot Prompting for Word Sense Disambiguation in Historical Chinese",
    altText: "Micah Kitsunai, Deborah Watty, and Shu-Kai Hsieh",
    pdfUrl: "paper2.pdf",
    authors: "Micah Kitsunai, Deborah Watty, and Shu-Kai Hsie",
    year: "2025",
    buttonText: "Read Paper",
    publication: "言語処理学会 第31回年次大会 発表論文集（2025年3月）"
  },
  {
    title: "Modeling semantic change with word embeddings: a case study of jia",
    altText: "Master thesis on semantic change",
    authors: "Pei-Yi Chen",
    year: "2021",
    publication: "Master thesis, National Taiwan University",
    buttonText: "Read Paper",
    buttonLink: "https://doi.org/10.6342/NTU202004346"
  },
  {
    title: "在空中相會：從佛學到大型語言模型的跨學科對話",
    altText: "Talk on Buddhism and AI",
    authors: "Shu-Kai Hsieh",
    year: "2024",
    publication: "台大跨領域論壇「佛學研究與AI」",
    buttonText: "View Slides",
    buttonLink:
      "https://www.canva.com/design/DAGYBihI8pI/hU6XjhQ2w1bE8ixdsyZNsw/edit"
  },
  {
    title:
      "Tracing the Evolution of Qing: Computational Analysis of Semantic Shifts from Classical Chinese Texts to Modernity",
    altText: "Chapter on Qing evolution",
    authors: "Shu-Kai Hsieh and Wei-Ling Chen",
    year: "2025",
    publication:
      "In: Kuang-Hui Yeh (et al) eds. 2026. Chinese Qing in the Digital Era: Challenges and Promises. Palgrave Studies in Indigenous Psychology. Springer Nature."
  }
];

export default function Papers() {
  return (
    <Container>
      <SindiaTitle title="Papers & Talks" />
      <Stack gap="xl" align="stretch">
        {papersData.map((paper, index) => (
          <React.Fragment key={index}>
            <PaperRow
              title={paper.title}
              pdfUrl={paper.pdfUrl}
              year={paper.year}
              authors={paper.authors}
              publication={paper.publication}
              buttonText={paper.buttonText}
              buttonLink={paper.buttonLink}
            />
            {index < papersData.length - 1 && <Divider color="gray.2" />}
          </React.Fragment>
        ))}
      </Stack>
    </Container>
  );
}
