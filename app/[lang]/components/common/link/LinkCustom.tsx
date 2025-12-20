import Link from "next/link";

export default function LinkCustom({
  label,
  href,
  target = "_self",
  onClick,
}: {
  label: string;
  href: string;
  target?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}) {
  return (
    <Link
      className="relative px-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-3 after:bg-accent after:-z-10 hover:after:scale-x-100 after:scale-x-0 after:origin-bottom-left after:transition-transform after:duration-300"
      href={href}
      target={target}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}
