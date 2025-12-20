import { Github, Linkedin, Mail, Download, Globe } from "@deemlol/next-icons";

export const IconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  download: Download,
  globe: Globe
} as const;

export type CTAKey = keyof typeof IconMap;