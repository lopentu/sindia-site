import "@mantine/core/styles.css";
import {
  Anchor,
  Stack,
  Text,
  AppShell,
  MantineProvider,
  ColorSchemeScript
} from "@mantine/core";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import I18nProvider from "@/components/I18nProvider";

const menuItems = [
  { label: "About", href: "#about" },
  { label: "Tools", href: "#tools" },
  { label: "Paper", href: "#papers" },
  { label: "Workshop", href: "#workshop" }
];

export default function MyApp({ Component, pageProps }: AppProps) {
  const [opened, { toggle }] = useDisclosure();
  const [scroll] = useWindowScroll();
  const isScrolled = scroll.y > 0;

  return (
    <>
      <ColorSchemeScript />

      <MantineProvider>
        <AppShell
          header={{ height: 60, offset: false }}
          aside={{
            width: 300,
            breakpoint: "sm",
            collapsed: { desktop: true, mobile: !opened }
          }}
          styles={{
            header: {
              backdropFilter: isScrolled ? "blur(10px)" : "none",
              WebkitBackdropFilter: isScrolled ? "blur(10px)" : "none",
              backgroundColor: isScrolled
                ? "rgba(255, 255, 255, 0.5)"
                : "transparent",
              borderBottom: isScrolled
                ? "1px solid rgba(148, 163, 184, 0.4)"
                : "none",
              transition: "all 0.3s ease",
              zIndex: 1001
            },
            aside: {
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              backgroundColor: "rgba(255, 255, 255, 0.5)"
            }
          }}>
          <AppShell.Header>
            <Header opened={opened} toggle={toggle} />
          </AppShell.Header>

          <AppShell.Aside
            py="md"
            pt={80}
            px={4}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              backdropFilter: "blur(10px)"
            }}>
            <Stack align="center" justify="space-between" gap="xl">
              {menuItems.map((item, index) => (
                <Anchor key={index} href={item.href} onClick={() => toggle()}>
                  <Text size="lg" fw={500} c="#000000">
                    {item.label}
                  </Text>
                </Anchor>
              ))}
            </Stack>
          </AppShell.Aside>

          <AppShell.Main>
            <Component {...pageProps} />
          </AppShell.Main>

          <Footer />
        </AppShell>
      </MantineProvider>
    </>
  );
}
