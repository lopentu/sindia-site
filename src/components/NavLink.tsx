import { UnstyledButton } from "@mantine/core";

interface NavLinkProps {
  href: string;
  label: string;
}

export default function NavLink({ href, label }: NavLinkProps) {
  return (
    <UnstyledButton
      component="a"
      href={href}
      style={(theme) => ({
        padding: "0px 4px",
        borderRadius: theme.radius.lg,
        fontWeight: 500,
        fontSize: theme.fontSizes.md,
        color: "#000000",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        transition: "background-color 120ms ease, transform 80ms ease",
        cursor: "pointer",
        // simple hover effect
        "&:hover": {
          backgroundColor: theme.colors.gray[0],
          transform: "translateY(-1px)"
        }
      })}>
      {label}
    </UnstyledButton>
  );
}
