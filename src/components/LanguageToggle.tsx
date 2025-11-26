import { SegmentedControl, Text } from "@mantine/core";
import { useTranslation } from "react-i18next";

interface LanguageToggleProps {
  color?: string;
}

export default function LanguageToggle({ color = "#282828" }: LanguageToggleProps) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("zh") ? "zh" : "en";
  const inverseColor = color === "white" ? "#282828" : "white";

  return (
    <SegmentedControl
      value={currentLang}
      onChange={(value) => i18n.changeLanguage(value)}
      data={[
        {
          label: (
            <Text
              span
              size="xs"
              fw={500}
              c={currentLang === "en" ? inverseColor : color}>
              EN
            </Text>
          ),
          value: "en"
        },
        {
          label: (
            <Text
              span
              size="xs"
              fw={500}
              c={currentLang === "zh" ? inverseColor : color}>
              中
            </Text>
          ),
          value: "zh"
        }
      ]}
      size="xs"
      radius="xl"
      bg="transparent"
      withItemsBorders={false}
      styles={{
        root: {
          border: `1px solid ${color}`,
          padding: 2
        },
        indicator: {
          backgroundColor: color
        }
      }}
    />
  );
}
