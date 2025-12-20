import Link from "next/link";
import { IconMap, type CTAKey } from "./ctas.config";

export default function CTACustom({
  label,
  href,
  target,
  icon,
}: {
  label: string;
  href: string;
  target?: string;
  icon?: CTAKey;
}) {
  const IconComponent = icon ? IconMap[icon] : null;
  return (
    <Link
      href={href}
      target={target}
      className="text-sm bg-accent border-2 border-primary font-bold flex gap-2 justify-center items-center px-2 py-1 hover:bg-primary hover:text-accent transition-colors"
    >
      {IconComponent && <IconComponent size={18} />}
      {label}
    </Link>
  );
}
