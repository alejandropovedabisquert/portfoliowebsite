import { getDictionary } from "@/getDictionaries";
import TitleCustom from "../common/title/TitleCustom";
import Image from "next/image";
import TagCustom from "../common/tag/TagCustom";
import CTACustom from "../common/cta/CTACustom";
import { TagKey } from "../common/tag/tags.config";
import { CTAKey } from "../common/cta/ctas.config";
export default function Projects({
  dict,
}: {
  dict: Awaited<ReturnType<typeof getDictionary>>["portfolio"]["projects"];
}) {
  return (
    <div id="proyectos" className="relative py-8">
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
        {dict.featured.map((project, idx) => (
          <article
            key={idx}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div>
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={400}
                className="w-full h-auto object-cover shadow-lg border-4 border-primary"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <div className="relative">
                  <h3 className="text-3xl font-semibold">{project.title}</h3>
                  {project.inDevelopment && (
                    <span className="absolute top-0 right-0 bg-accent text-primary text-xs font-bold px-2 py-1">
                      {project.inDevelopment}
                    </span>
                  )}
                </div>
                <div className="mt-2">
                  <ul className="flex flex-wrap gap-1">
                    {project.stack.map((tag, idx) => (
                      <li key={idx}>
                        <TagCustom tag={tag as TagKey} />
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-2 text-lg">{project.description}</p>
              </div>
              <div className="flex gap-2 flex-wrap mt-4 sm:mt-0">
                {project.CTAs.map((cta, idx) => {
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
          </article>
        ))}
      </div>
    </div>
  );
}
