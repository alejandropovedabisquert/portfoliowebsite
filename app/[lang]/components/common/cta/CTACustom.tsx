import Link from "next/link";
import { IconKey } from "../icon/icon.config";
import IconCustom from "../icon/IconCustom";

export default function CTACustom({
  label,
  href,
  target,
  icon,
}: {
  label: string;
  href: string;
  target?: string;
  icon?: IconKey;
}) {
  return (
    <Link
      href={href}
      target={target}
      className="text-sm bg-accent border-2 border-primary font-bold flex gap-2 justify-center items-center px-2 py-1 hover:bg-primary hover:text-accent transition-colors"
    >
      {icon && <IconCustom icon={icon} />}
      {label}
    </Link>
  );
}
