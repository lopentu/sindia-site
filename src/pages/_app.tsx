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
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import "../i18n";
import { useTranslation } from "react-i18next";
import LanguageToggle from "@/components/LanguageToggle";

const menuItems = [
  { label: "About", href: "/about" },
  { label: "Tools", href: "/#tools" },
  { label: "Papers", href: "/#papers" },
  { label: "Workshops", href: "/#workshop" }
];

export default function MyApp({ Component, pageProps }: AppProps) {
  const [opened, { toggle }] = useDisclosure();
  const [scroll] = useWindowScroll();
  const { t } = useTranslation();
  const isScrolled = scroll.y > 0;

  return (
    <>
      <Head>
        <title>Sindia</title>
        <link rel="icon" href="/logo_lope.jpg" />
      </Head>
      <ColorSchemeScript />

      <MantineProvider>
        <AppShell
          header={{ height: 56, offset: false }}
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
              transition: "all 0.5s ease",
              zIndex: 1001
            },
            aside: {
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              backgroundColor: "rgba(235, 235, 235, 0.5)",
              color: isScrolled ? "#282828" : "#FFFFFF"
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
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              backdropFilter: "blur(10px)"
            }}>
            <Stack align="center" justify="space-between" gap="xl">
              {menuItems.map((item, index) => (
                <Anchor
                  key={index}
                  component={Link}
                  href={item.href}
                  onClick={() => toggle()}>
                  <Text size="lg" fw={500} c="#282828">
                    {t(item.label)}
                  </Text>
                </Anchor>
              ))}
              <LanguageToggle color="#282828" />
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
