export const StackMap = {
  javascript: {
    name: "JavaScript",
    icon: "/stack/icons/javascript.webp",
  },
  typescript: {
    name: "TypeScript",
    icon: "/stack/icons/typescript.webp",
  },
  react: {
    name: "React",
    icon: "/stack/icons/react.webp",
  },
  nextjs: {
    name: "Next.js",
    icon: "/stack/icons/nextjs.webp",
  },
  html: {
    name: "HTML5",
    icon: "/stack/icons/html.webp",
  },
  css: {
    name: "CSS",
    icon: "/stack/icons/css.webp",
  },
  tailwindcss: {
    name: "Tailwind CSS",
    icon: "/stack/icons/tailwindcss.webp",
  },
  sass: {
    name: "Sass",
    icon: "/stack/icons/sass.webp",
  },
  drupal: {
    name: "Drupal",
    icon: "/stack/icons/drupal.webp",
  },
  php: {
    name: "PHP",
    icon: "/stack/icons/php.webp",
  },
  angular: {
    name: "Angular",
    icon: "/stack/icons/angular.webp",
  },
  git: {
    name: "Git",
    icon: "/stack/icons/git.webp",
  },
  github: {
    name: "GitHub",
    icon: "/stack/icons/github.webp",
  },
  postman: {
    name: "Postman",
    icon: "/stack/icons/postman.webp",
  },
  laravel: {
    name: "Laravel",
    icon: "/stack/icons/laravel.webp",
  },
} as const;

export type StackKey = keyof typeof StackMap;