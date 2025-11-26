import Link from "next/link";
import { UnstyledButton } from "@mantine/core";

interface NavLinkProps {
  href: string;
  label: string;
  color?: string;
  className?: string;
}

export default function NavLink({
  href,
  label,
  color = "#282828",
  className
}: NavLinkProps) {
  return (
    <UnstyledButton
      component={Link}
      href={href}
      style={{
        color,
        transition:
          "background-color 120ms ease-in, transform 80ms ease, color 0.3s ease",
        fontWeight: 525
      }}
      className={`inline-flex items-center justify-center px-1 rounded-lg font-medium text-base no-underline cursor-pointer hover:bg-slate-200 hover:-translate-y-px hover:!text-black hover:underline ${
        className || ""
      }`}>
      {label}
    </UnstyledButton>
  );
}