import { getDictionary } from "@/getDictionaries";
import TitleCustom from "../common/title/TitleCustom";
import Image from "next/image";
import { StackMap, type StackKey } from "./stack.config";

export default function Stack({
  dict,
}: {
  dict: Awaited<ReturnType<typeof getDictionary>>["portfolio"]["stack"];
}) {
  return (
    <div id="stack" className="relative py-8">
      <div className="relative w-fit">
        <TitleCustom
          as="h2"
          className="text-right text-2xl sm:text-4xl main:text-5xl"
          text={dict.title}
        />
        <Image
          src="/stack/arrow.svg"
          alt=""
          aria-hidden="true"
          width={300}
          height={20}
          className="absolute w-24 sm:w-32 top-4 main:top-6 main:w-30 -right-30 sm:-right-36 main:-right-40"
        />
      </div>
      <div>
        <div className="mt-18 sm:mt-24">
          {dict.categories.map((category, idx) => (
            <div key={idx} className="flex flex-col mt-4">
              <h3 className="text-2xl font-bold mb-4">{category.name}</h3>
              <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 grid-wrap gap-4">
                {category.technologies.map((tech, idx) => {
                  const stackInfo = StackMap[tech.name as StackKey];
                  if (!stackInfo) {
                    return (
                      <li
                        key={idx}
                        className="flex flex-col items-center w-1/2"
                      >
                        <span className="text-center font-semibold text-lg">
                          {tech.name}
                        </span>
                      </li>
                    );
                  }

                  return (
                    <li
                      key={idx}
                      className="flex flex-col items-center gap-2 relative border-4 border-primary p-2 transition-all duration-300 bg-accent/10 hover:border-accent hover:rounded hover:bg-primary/10 hover:scale-105"
                    >
                      <Image
                        src={stackInfo.icon}
                        alt={stackInfo.name}
                        width={50}
                        height={50}
                        className="w-10 h-10 object-contain"
                      />
                      <span className="text-center font-semibold text-base">
                        {stackInfo.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
