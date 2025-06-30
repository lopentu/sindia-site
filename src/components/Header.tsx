import { Flex, Burger, Text } from "@mantine/core";
import NavLink from "./NavLink";

export default function Header({
  opened,
  toggle,
}: {
  opened: boolean;
  toggle: () => void;
}) {

  const navLinks = [
    { href: "#about", key: "About" },
    { href: "#tools", key: "Tools" },
    { href: "#papers", key: "Papers" },
    { href: "#workshop", key: "Workshop" },
  ];

  return (
    <Flex justify="space-between" mx={"md"}>
      <Burger
        opened={opened}
        onClick={toggle}
        hiddenFrom="sm"
        size="sm"
        m={"sm"}
      />
      <Flex align="center" gap="md">
        {/* <Anchor href="/" style={{ textDecoration: "none" }}>
          <Image
            h={60}
            w={60}
            src="/images/lope-logo.jpg"
            alt="Logo"
            style={{ cursor: "pointer" }}
          />
        </Anchor> */}
        <Text
          size="36px"
          fw={800}
          mt={10}
          variant="gradient"
          gradient={{ from: "green", to: "blue", deg: 301 }}
        >
          Sindia
        </Text>
      </Flex>
      <Flex gap={"sm"} visibleFrom="sm">
        {navLinks.map((item) => (
          <NavLink key={item.key} href={item.href} label={item.key} />
        ))}
      </Flex>
    </Flex>
  );
}
