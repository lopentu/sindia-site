import { Title } from "@mantine/core";
import React from "react";

export default function SindiaTitle({ title }: { title: string }) {
  return (
    <>
      <Title my={"xl"} c={"black"} order={2} ta="center">
        {title}
      </Title>
    </>
  );
}
