import { getDictionary } from "@/getDictionaries";
import Image from "next/image";
import TitleCustom from "../common/title/TitleCustom";
import CTACustom from "../common/cta/CTACustom";
import { CTAKey } from "../common/cta/ctas.config";

export default function Presentation({
  dict,
}: {
  dict: Awaited<ReturnType<typeof getDictionary>>["portfolio"]["presentation"];
}) {
  return (
    <div
      id="presentacion"
      className="relative py-8 flex main:flex-row flex-col"
    >
      <div>
        <div className="relative flex flex-row items-center gap-10">
          <Image
            src="/presentation/perfil.webp"
            alt={dict.title}
            width={150}
            height={150}
            className="rounded-full w-24 h-24 sm:w-36 sm:h-36 object-cover"
          />
          <div className="relative main:-top-12 -top-6 -right-8">
            <TitleCustom
              className="-rotate-12 text-2xl sm:text-4xl main:text-5xl right-6 sm:-right-24 main:right-0 sm:top-8 main:top-0"
              text={dict.title}
            />
            <Image
              src="/presentation/arrow.svg"
              alt=""
              aria-hidden="true"
              width={130}
              height={20}
              className="absolute right-10 top-19 sm:right-32 main:right-28 sm:top-30 main:top-20 w-20 main:w-30 sm:rotate-30 main:rotate-0"
            />
          </div>
        </div>
        <div>
          <h2
            className="text-3xl main:text-4xl font-bold my-4 max-w-60 main:max-w-100"
            dangerouslySetInnerHTML={{ __html: dict.job }}
          />
        </div>
      </div>
      <div className="main:ml-28 flex flex-col justify-end">
        <article>
          <p
            className="text-lg"
            dangerouslySetInnerHTML={{ __html: dict.description }}
          />
          <p
            className="text-lg"
            dangerouslySetInnerHTML={{ __html: dict.stack }}
          />
        </article>
        <div className="flex gap-2 flex-wrap mt-2">
          {dict.CTAs.map((cta, idx) => {
            return (
              <CTACustom
                key={idx}
                label={cta.label}
                href={cta.href}
                target={cta.target}
                icon={cta.icon as CTAKey}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
