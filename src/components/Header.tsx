import { Flex, Burger, Text } from "@mantine/core";
import NavLink from "./NavLink";

export default function Header({
  opened,
  toggle
}: {
  opened: boolean;
  toggle: () => void;
}) {
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
      mih={60}>
      {/* Logo */}
      <Flex align="center" gap="md">
        <Text
          size="30px"
          fw={800}
          variant="gradient"
          gradient={{ from: "green", to: "blue", deg: 270 }}>
          Sindia
        </Text>
      </Flex>

      {/* NavLink (menu items) */}
      <Flex gap="sm" visibleFrom="sm" align="center">
        {navLinks.map((item) => (
          <NavLink key={item.key} href={item.href} label={item.key} />
        ))}
      </Flex>

      {/* Burger (mobile menu) */}
      <Burger
        opened={opened}
        onClick={toggle}
        hiddenFrom="sm"
        size="sm"
        mr="sm"
      />
    </Flex>
  );
}
