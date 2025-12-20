import Image from "next/image";
import { TagMap, type TagKey } from "./tags.config";

export default function TagCustom({ tag }: { tag: TagKey }) {
  return (
    <div
      className="flex items-center gap-2 px-3 py-1 text-xs font-bold w-fit border border-primary text-primary"
      style={{ backgroundColor: TagMap[tag].color + "33" }}
    >
      <Image
        src={TagMap[tag].icon}
        alt=""
        aria-hidden="true"
        width={20}
        height={20}
        className="w-5 h-5 object-contain"
      />
      <span>{TagMap[tag].name}</span>
    </div>
  );
}
