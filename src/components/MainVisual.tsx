import { Container, Text, Center } from "@mantine/core";

export default function MainVisual() {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(135deg, #B2F7EF, #7DE2D1, #6EC6CA, #A0EEC0)",
        backgroundSize: "600% 600%",
        minHeight: "100vh",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflowX: "hidden",
        animation: "gradient 4s ease-in-out infinite"
      }}>
      <style>
        {`
        @keyframes gradient {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
        }
      `}
      </style>

      <Container>
        <Center>
          <Text size="70px" c={"white"} m={"lg"} fw={500}>
            Sindia Project
          </Text>
        </Center>

        <Center>
          <Text
            size="20px"
            fw={500}
            style={{ marginBottom: "20px", color: "white" }}>
            @ 台大語言學研究所
          </Text>
        </Center>

        {/* <Center>
        <Text
        size="30px"
        style={{ maxWidth: "800px", lineHeight: 1.5, color: "#22543D" }}
        >
        <span style={{ color: "#38A169", fontWeight: "bold" }}>L</span>ab of{" "}
        <span style={{ color: "#38A169", fontWeight: "bold" }}>O</span>
        ntologies, Language{" "}
        <span style={{ color: "#38A169", fontWeight: "bold" }}>P</span>
        rocessing and{" "}
        <span style={{ color: "#38A169", fontWeight: "bold" }}>E</span>
        -humanities
        </Text>
      </Center> */}
      </Container>
    </div>
  );
}
