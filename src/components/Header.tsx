import { Flex, Burger, Text } from "@mantine/core";
import NavLink from "./NavLink";

import { useWindowScroll } from "@mantine/hooks";

import { useRouter } from "next/router";
import Link from "next/link";
import { prefix } from "../utils/config";

export default function Header({
  opened,
  toggle
}: {
  opened: boolean;
  toggle: () => void;
}) {
  const [scroll] = useWindowScroll();
  const router = useRouter();
  const isScrolled = scroll.y > 0;
  const isHome = router.pathname === "/";

  const navColor = isScrolled || !isHome ? "#282828" : "white";
  const burgerColor = opened || isScrolled || !isHome ? "#282828" : "white";

  const navLinks = [
    { href: `${prefix}/about`, key: "About" },
    { href: `${prefix}/#tools`, key: "Tools" },
    { href: `${prefix}/#papers`, key: "Papers" },
    { href: `${prefix}/#workshop`, key: "Workshop" }
  ];

  return (
    <Flex
      component="header"
      justify="space-between"
      align="center"
      mx="md"
      mih={56}>
      {/* Logo */}
      <Flex align="center" gap="md">
        <Link
          href={`${prefix}/`}
          style={{
            textDecoration: "none",
            opacity: isScrolled || !isHome ? 1 : 0,
            transition: "opacity 0.3s ease",
            pointerEvents: isScrolled || !isHome ? "auto" : "none"
          }}>
          <Text
            size="25px"
            fw={800}
            variant="gradient"
            gradient={{ from: "#3c5cb2ff", to: "#1e3a8a", deg: 270 }}>
            SinDia
          </Text>
        </Link>
      </Flex>

      {/* NavLink (menu items) */}
      <Flex gap="sm" visibleFrom="sm" align="center">
        {navLinks.map((item) => (
          <NavLink
            key={item.key}
            href={item.href}
            label={item.key}
            color={navColor}
          />
        ))}
      </Flex>

      {/* Burger (mobile menu) */}
      <Burger
        opened={opened}
        onClick={toggle}
        hiddenFrom="sm"
        size="sm"
        mr="sm"
        color={burgerColor}
      />
    </Flex>
  );
}
