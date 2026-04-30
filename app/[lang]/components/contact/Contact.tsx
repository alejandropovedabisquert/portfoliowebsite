import { getDictionary } from "@/getDictionaries";
import TitleCustom from "../common/title/TitleCustom";
import Image from "next/image";
import IconCustom from "../common/icon/IconCustom";
import { IconKey } from "../common/icon/icon.config";

export default function Contact({
    dict, }: {
        dict: Awaited<ReturnType<typeof getDictionary>>["portfolio"]["contact"];
    }) {
    return (
        <div className="relative py-8" id="contacto">
            <div className="relative w-fit">
                <TitleCustom
                    as="h2"
                    className="text-right text-2xl sm:text-4xl main:text-5xl"
                    text={dict.title}
                />
                <Image
                    src="/projects/arrow.svg"
                    alt=""
                    aria-hidden="true"
                    width={300}
                    height={20}
                    className="absolute w-24 sm:w-32 top-4 main:top-6 main:w-30 -right-30 sm:-right-36 main:-right-40"
                />
            </div>
            <div className="mt-18 sm:mt-24">
                <p className="text-lg">
                    {dict.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 main:grid-cols-4 gap-4 mt-8 w-full justify-center">
                    {dict.contactMethods.map((method, idx) => (
                        <a
                            key={idx}
                            href={method.href}
                            target={method.target}
                            className="flex flex-col items-center gap-2 border-4 border-primary p-2 transition-all duration-300 bg-accent/10 hover:border-accent hover:rounded hover:bg-primary/10 hover:scale-105"
                        >
                            <IconCustom icon={method.icon as IconKey} size={50} />
                            <span className="font-bold">{method.label}</span>
                            <span className="text-sm">{method.subtitle}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}