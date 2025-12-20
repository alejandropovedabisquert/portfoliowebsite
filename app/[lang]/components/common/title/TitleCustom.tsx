import { Handlee } from "next/font/google";
import React from "react";

const handlee = Handlee({
  weight: ["400"],
});

export default function TitleCustom({
  as: Component = "h1",
  className = "",
  text,
}: {
  as?: React.ElementType;
  className?: string;
  text: string;
}) {
  return (
    <Component
      className={`${handlee.className} ${className} w-max px-4 py-2 my-4 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:-z-10 after:bg-accent`}
    >
      {text}
    </Component>
  );
}
