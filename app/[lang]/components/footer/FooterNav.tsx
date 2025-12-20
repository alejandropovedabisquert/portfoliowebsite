import { getDictionary } from "@/getDictionaries";
import LinkCustom from "../common/link/LinkCustom";

export default function FooterNav({
  dict,
}: {
  dict: Awaited<ReturnType<typeof getDictionary>>["footer"];
}) {
  const date = new Date().getFullYear();
  return (
    <nav className="flex main:flex-row flex-col justify-between items-center gap-4">
      <div>
        <p className="font-bold main:text-lg">{`© ${date} ${dict.text}`}</p>
      </div>
      <div>
        <ul className="flex gap-6 flex-wrap justify-end main:gap-8">
          {dict.navigation.map((item, idx) => (
            <li key={idx} className="main:text-lg">
              <LinkCustom
                label={item.label}
                href={item.href}
                target={item.target}
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
