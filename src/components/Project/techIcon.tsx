
import {
  SiPhp,
  SiLaravel,
  SiMysql,
  SiTailwindcss,
  SiLivewire,
  SiDocker,
  SiGit,
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiGooglecloud,
  SiApacheairflow,
  SiCss,
} from "react-icons/si";


import { FaCode, FaDatabase, FaRandom,  FaExternalLinkAlt } from "react-icons/fa";
import type { IconType } from "react-icons";

export const techIcons: Record<string, IconType> = {
  PHP: SiPhp,
  Laravel: SiLaravel,
  MySQL: SiMysql,
  Blade: FaCode,
  "Tailwind CSS": SiTailwindcss,
  Livewire: SiLivewire,
  Docker: SiDocker,
  Git: SiGit,
  CSS: SiCss,
  React: SiReact,
  JavaScript: SiJavascript,
  "Node.js": SiNodedotjs,
  MongoDB: SiMongodb,
  Python: SiPython,
  Faker: FaRandom,
  "Google Composer Platform": SiGooglecloud,
  "Cloud Storage": SiGooglecloud,
  "Cloud Composer": SiGooglecloud,
  Airflow: SiApacheairflow,
  "Cloud Data Fusion": FaDatabase,
  ExternalLink: FaExternalLinkAlt,
};


export const defaultTechIcon = FaCode;