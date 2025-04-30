import { LinksType, ProjectType, SkillType } from "@/@types/type";
import {
  Code2,
  Coffee,
  Github,
  Home,
  Instagram,
  Linkedin,
  LucideIcon,
  Terminal,
  Youtube,
} from "lucide-react";

export const menuItems: LinksType = [
  {
    name: "Home",
    href: "/",
    Icon: Home,
  },
  {
    name: "About",
    href: "/about",
    Icon: Coffee,
  },
  {
    name: "Skills",
    href: "/skills",
    Icon: Code2,
  },
  {
    name: "Projects",
    href: "/projects",
    Icon: Terminal,
  },
];
export const socials: LinksType = [
  {
    name: "Github",
    href: "https://github.com/rafif2112",
    Icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muhamad-rafif22/",
    Icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/rafiff.21/",
    Icon: Instagram,
  },
];

export const skillsTools: SkillType = [
  // { title: "VS Code", logo: "skills/vscode.png" },
  { title: "Git", logo: "skills/git.png" },
  { title: "GitHub", logo: "skills/github.png" },
  { title: "NPM", logo: "skills/npm.png" },
  // { title: "Laragon", logo: "skills/laragon.svg" },
  { title: "Socket", logo: "skills/socket.png" },
  // { title: "XAMPP", logo: "skills/xampp.png" },
  { title: "Vercel", logo: "skills/vercel.png" },
  { title: "Vite", logo: "skills/vite.png" },
];

export const skillsLanguage: SkillType = [
  { title: "HTML 5", logo: "skills/html.png" },
  { title: "CSS 3", logo: "skills/css.png" },
  { title: "JavaScript", logo: "skills/javascript.png" },
  { title: "TypeScript", logo: "skills/typescript.png" },
  { title: "PHP", logo: "skills/php.png" },
];

export const skillsLibrary: SkillType = [
  { title: "Tailwind CSS", logo: "skills/tailwindcss.png" },
  { title: "Bootstrap", logo: "skills/bootstrap.png" },
  { title: "React JS", logo: "skills/react.png" },
];

export const skillsFramework: SkillType = [
  { title: "Next JS", logo: "skills/nextjs.png" },
  { title: "Laravel", logo: "skills/laravel.png" },
  { title: "Flutter", logo: "skills/flutter.png" },
  { title: "Vue JS", logo: "skills/vue.png" },
];

export const aboutLinks: {
  title: string;
  href: string;
  description: string;
  Icon: LucideIcon;
}[] = [
  {
    title: "About Me",
    href: "/about",
    description: "Everything about me",
    Icon: Coffee,
  },
  {
    title: "Skills",
    href: "/skills",
    description: "Technologies I can use",
    Icon: Code2,
  },
  {
    title: "Projects",
    href: "/projects",
    description: "All projects I have worked on",
    Icon: Terminal,
  },
];

export const projects: ProjectType[] = [
  // {
  //   title: "My Qur'an",
  //   image: "projects/my-quran.png",
  //   tags: ["React JS", "Tailwind CSS", "Flowbite", "Vite"],
  //   gitHub: "https://github.com/Lviathannn/my-quran",
  //   demo: "https://my-alquran-id.vercel.app/",
  // },
  {
    title: "Portfolio laravel",
    image: "projects/portfolio-laravel.png",
    tags: ["Laravel", "Tailwind CSS", "Flowbite", "MySQL", "JavaScript"],
    gitHub: "https://github.com/rafif2112/portfolio-laravel",
    demo: "http://muhamadrafif.free.nf/?i=1",
  },
  {
    title: "Rekap Absensi",
    image: "projects/rekap-absensi.png",
    tags: ["Laravel", "React JS", "Tailwind CSS", "Flowbite", "MySQL", "JavaScript"],
    gitHub: "https://github.com/rafif2112/Rekapitulasi-Keterlambatan",
    demo: "",
  },
  {
    title: "Pengaduan Masyarakat",
    image: "projects/pengaduan-masyarakat.png",
    tags: ["Laravel", "Tailwind CSS", "Flowbite", "MySQL", "JavaScript"],
    gitHub: "https://github.com/rafif2112/pengaduan-masyarakat",
    demo: "",
  },
  {
    title: "Perpustakaan",
    image: "projects/perpus-app.png",
    tags: ["Laravel", "Tailwind CSS", "Flowbite", "MySQL", "JavaScript"],
    gitHub: "https://github.com/rafif2112/perpus-app",
    demo: "",
  },
  { 
    title: "Cashier App",
    image: "projects/cashier-app.png",
    tags: ["PHP", "Tailwind CSS", "JavaScript", "HTML" ],
    gitHub: "https://github.com/rafif2112/cashier-app",
    demo: "https://rafif.free.nf/app",
  },
  {
    title: "Rayon Cicurug 2",
    image: "projects/rayon-cic2.png",
    tags: ["Laravel", "Tailwind CSS", "Flowbite", "MySQL", "JavaScript"],
    gitHub: "https://github.com/rafif2112/rayon-cicurug2",
    demo: "https://cicurug2.my.id/",
  },
  { 
    title: "Kalkulator Index Masa Tubuh",
    image: "projects/imt.png",
    tags: ["PHP", "Bootstrap", "HTML" ],
    gitHub: "https://github.com/rafif2112/IMT",
    demo: "",
  },
  {
    title: "Kalkulator Bunga",
    image: "projects/kalkulator-bunga.png",
    tags: ["HTML", "CSS", "Tailwind CSS", "Flowbite", "JavaScript"],
    gitHub: "https://github.com/rafif2112/kalkulator-bunga",
    demo: "https://kalkulatorbunga.netlify.app/",
  },
];

export const skillLogo = [
  "skills/html.png",
  "skills/css.png",
  "skills/sass.png",
  "skills/javascript.png",
  "skills/typescript.png",
  "skills/tailwindcss.png",
  "skills/framer.png",
  "skills/react.png",
  "skills/redux.png",
  "skills/nextjs.png",
  "skills/vscode.png",
  "skills/figma.png",
  "skills/git.png",
  "skills/github.png",
  "skills/npm.png",
];
