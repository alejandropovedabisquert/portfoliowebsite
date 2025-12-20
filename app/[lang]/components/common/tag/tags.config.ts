export const TagMap = {
  javascript: {
    name: "JavaScript",
    color: "#f7df1e",
    icon: "/tagIcons/javascript.webp",
  },
  typescript: {
    name: "TypeScript",
    color: "#3178c6",
    icon: "/tagIcons/typescript.webp",
  },
  react: {
    name: "React",
    color: "#61dafb",
    icon: "/tagIcons/react.webp",
  },
  nextjs: {
    name: "Next.js",
    color: "#000000",
    icon: "/tagIcons/nextjs.webp",
  },
  html: {
    name: "HTML5",
    color: "#e34f26",
    icon: "/tagIcons/html.webp",
  },
  css: {
    name: "CSS",
    color: "#1572b6",
    icon: "/tagIcons/css.webp",
  },
  tailwindcss: {
    name: "Tailwind CSS",
    color: "#38bdf8",
    icon: "/tagIcons/tailwindcss.webp",
  },
  sass: {
    name: "Sass",
    color: "#cc6699",
    icon: "/tagIcons/sass.webp",
  },
  drupal: {
    name: "Drupal",
    color: "#0678be",
    icon: "/tagIcons/drupal.webp",
  },
  php: {
    name: "PHP",
    color: "#777bb4",
    icon: "/tagIcons/php.webp",
  },
  angular: {
    name: "Angular",
    color: "#dd0031",
    icon: "/tagIcons/angular.webp",
  },
} as const;

export type TagKey = keyof typeof TagMap;