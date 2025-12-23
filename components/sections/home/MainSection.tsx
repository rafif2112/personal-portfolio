import Terminal from "@/components/features/terminal/Terminal";
import { Button } from "@/components/ui/button";
import Blob from "../../ui/Blob";
import { Download } from "lucide-react";
import Brand from "@/components/features/brand/Brand";
type Props = {};

export default function MainSection({ }: Props) {
  return (
    <section className="relative w-full">
      <div className="flex justify-center items-center flex-col max-w-7xl w-full mx-auto">
        <article className="relative z-10 flex w-full flex-col items-center justify-between gap-20 lg:flex-row">
          {/* Hero Title */}
          <div className="w-full">
            <h1 className="text-[45px] font-bold leading-none text-slate-900 drop-shadow-[0_0_15px_rgba(30, 131, 247,0.5)] dark:text-white dark:drop-shadow-[0_0_15px_rgba(30, 131, 247,0.5)] sm:text-[60px] md:text-[64px] lg:text-[80px]">
              Hello,
              <br />
              I’m Rafif{" "}
              <span className="wave inline-block text-[50px] md:text-[60px]">
                👋
              </span>
            </h1>
            <p className="mt-2 max-w-lg text-slate-700 dark:text-slate-300 lg:text-xl">
              I am Junior Full Stack Web Developer and Junior Mobile Developer
              with experience in React.js, Vue.js, Next.js, Tailwind CSS, Laravel, and
              Flutter.
            </p>
            <Button className="!dark:text-dark mt-5 flex items-center gap-2 !bg-blue-500 shadow-2xl hover:!bg-blue-400/50">
              <a
                href="/CV Muhamad Rafif.pdf"
                download="CV Muhamad Rafif.pdf"
                className="flex gap-3">
                Download CV
                <Download size={18} />
              </a>
            </Button>
          </div>
          {/* Terminal */}
          <Terminal />
        </article>
      </div>
      {/* Built With */}
      <Blob className="-left-20 -top-10 h-72 w-72 bg-blue-600 blur-[90px] lg:-left-44 lg:h-96 lg:w-96 lg:blur-[120px]" />
      <Blob className="-right-20 top-44 h-64 w-64 bg-blue-400 blur-[90px] lg:-right-60 lg:bottom-40 lg:h-96 lg:w-96 lg:blur-[120px]" />
    </section>
  );
}
