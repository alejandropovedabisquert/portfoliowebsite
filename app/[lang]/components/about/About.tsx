import { getDictionary } from "@/getDictionaries";
import TitleCustom from "../common/title/TitleCustom";
import Image from "next/image";

export default function About({
  dict,
}: {
  dict: Awaited<ReturnType<typeof getDictionary>>["portfolio"]["about"];
}) {
  return (
    <div id="sobre-mi" className="py-8">
      <div className="relative w-fit">
        <TitleCustom
          as="h2"
          className="text-right text-2xl sm:text-4xl main:text-5xl"
          text={dict.title}
        />
        <Image
          src="/about/arrow.svg"
          alt=""
          aria-hidden="true"
          width={300}
          height={20}
          className="absolute w-24 sm:w-32 top-4 main:top-6 main:w-30 -right-30 sm:-right-36 main:-right-40"
        />
      </div>
      <div>
        <article className="mt-18 sm:mt-24 flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            {dict.description.map((paragraph, idx) => (
              <p
                key={idx}
                className="mb-4 text-lg"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              ></p>
            ))}
          </div>
          <div className="md:w-1/3 flex justify-center items-start">
            <Image
              src={dict.imgage}
              alt={dict.imageAlt}
              width={300}
              height={300}
              className="rotate-12 w-64 h-64 sm:w-80 sm:h-80 object-cover border-4 border-primary sm:mr-8"
            />
          </div>
        </article>
      </div>
    </div>
  );
}
