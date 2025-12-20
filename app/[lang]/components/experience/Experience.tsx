import { getDictionary } from "@/getDictionaries";
import TitleCustom from "../common/title/TitleCustom";
import Image from "next/image";
import TagCustom from "../common/tag/TagCustom";
import { type TagKey } from "../common/tag/tags.config";

export default function Experience({
  dict,
}: {
  dict: Awaited<ReturnType<typeof getDictionary>>["portfolio"]["experience"];
}) {
  return (
    <div className="relative py-8" id="experiencia">
      <div className="relative w-fit mt-0 mb-0 mr-0 ml-auto">
        <TitleCustom
          as="h2"
          className="text-right rotate-12 text-2xl sm:text-4xl main:text-5xl"
          text={dict.title}
        />
        <Image
          src="/experience/arrow.svg"
          alt=""
          aria-hidden="true"
          width={300}
          height={20}
          className="absolute w-24 sm:w-46 right-56 sm:right-80 top-0 main:right-100 main:-top-4 main:w-72"
        />
      </div>
      <div className="mt-10 sm:mt-20 main:mt-24">
        <ol>
          {dict.jobs.map((job, idx) => (
            <li key={idx} className="grid grid-cols-12 gap-4">
              <div className="col-span-2 md:col-span-1 relative after:content-[''] after:w-0.5 after:h-full after:bg-primary after:absolute after:top-0 after:left-1/2 after:right-1/2 after:translate-x-1/2">
                <Image
                  src={job.logo}
                  alt={job.logoAlt}
                  width={50}
                  height={50}
                  className="top-8 w-24 mx-auto my-0 object-contain bg-background relative z-10"
                />
              </div>
              <div className="col-span-10 md:col-span-11 flex flex-col md:flex-row md:mb-10">
                <div className="w-full md:w-[40%] mt-8">
                  <h3 className="text-2xl font-semibold relative w-fit">
                    <span>{job.position}</span>
                  </h3>
                  <h4 className="text-xl font-semibold">{job.company}</h4>
                  <p className="text-base text-gray-800">{job.duration}</p>
                  <div className="mt-4">
                    <ul className="flex flex-wrap gap-1">
                      {job.stack.map((tag, idx) => (
                        <li key={idx}>
                          <TagCustom tag={tag as TagKey} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="w-full md:w-[60%] md:mt-8">
                  <p className="mt-2 text-lg">{job.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
