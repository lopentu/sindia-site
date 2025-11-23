import { Flex, Burger, Text } from "@mantine/core";
import NavLink from "./NavLink";

import { useWindowScroll } from "@mantine/hooks";

export default function Header({
  opened,
  toggle
}: {
  opened: boolean;
  toggle: () => void;
}) {
  const [scroll] = useWindowScroll();
  const isScrolled = scroll.y > 0;

  const navColor = isScrolled ? "#5e5e5e" : "white";
  const burgerColor = opened || isScrolled ? "#5e5e5e" : "white";

  const navLinks = [
    { href: "#about", key: "About" },
    { href: "#tools", key: "Tools" },
    { href: "#papers", key: "Papers" },
    { href: "#workshop", key: "Workshop" }
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
        <Text
          size="25px"
          fw={800}
          variant="gradient"
          gradient={{ from: "green", to: "blue", deg: 270 }}
          style={{
            opacity: isScrolled ? 1 : 0,
            transition: "opacity 0.3s ease",
            pointerEvents: isScrolled ? "auto" : "none"
          }}>
          Sindia
        </Text>
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
