import Blob from "@/components/ui/Blob";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { socials } from "@/constants/dummy";
import { Download } from "lucide-react";
import Image from "next/image";
import AboutImage from "@/public/mrafif.jpg";
type Props = {};

export default function page({}: Props) {
  return (
    <main className="px-container py-container min-h-screen">
      <section className="flex flex-col items-center gap-16">
        <SectionTitle
          className="text-[35px] font-semibold text-slate-600 dark:text-white md:text-[45px] md:font-bold"
          title="About Me"
          tagStyle="text-accent_primary font-bold"
        />
        <div className="flex w-full flex-col-reverse items-center justify-evenly gap-14 lg:flex-row">
          <article className="w-full max-w-xl">
            <header className="max-w-lg text-[40px] font-bold leading-none text-slate-600 dark:text-white lg:text-[48px]">
              Muhamad Rafif
            </header>
            <p className="mt-5 text-slate-500 dark:text-slate-300">
              I am a Junior programmer with skills in React.js, Next.js, Tailwind CSS, and Laravel. 
              I actively participate in various projects and extracurricular activities that enhance my leadership and teamwork abilities. 
              I am ready for new challenges. Contact me for more information or collaboration opportunities.
            </p>

            <div className="mt-5 flex items-end gap-3">
              <Button className="hover:!bg-accent_hover mt-5 flex items-center gap-2 !bg-accent_primary !text-dark shadow-2xl">
                <a
                  href="/CV Muhamad Rafif.pdf"
                  download="CV Muhamad Rafif.pdf"
                  className="flex gap-3 text-white dark:text-dark"
                >
                  Download CV
                  <Download size={18} />
                </a>
              </Button>
              {socials.map((social) => (
                <Button
                  key={social.name}
                  variant="outline"
                  size="icon"
                  className="border-none !bg-transparent text-slate-500 hover:!text-accent_primary dark:text-white"
                  aria-label={`Link to ${social.name}`}
                >
                  <a
                    href={social.href}
                    target="_blank"
                    aria-label={`Link to ${social.name}`}
                  >
                    <social.Icon size={18} />
                  </a>
                </Button>
              ))}
            </div>
          </article>
          <div className="relative aspect-square w-full max-w-xs overflow-hidden rounded-2xl object-contain lg:max-w-sm">
            <Image
              src={AboutImage}
              alt="My Image"
              fill
              placeholder="blur"
              priority
            />
          </div>
        </div>
        <Blob className="fixed -left-20 -top-10 h-64 w-64 bg-accent_primary blur-[90px] lg:-left-44 lg:h-96 lg:w-96 lg:blur-[120px]" />
        <Blob className="fixed -right-20 bottom-0 h-64 w-64 bg-accent_secondary blur-[90px] lg:-right-60 lg:h-96 lg:w-96 lg:blur-[120px]" />
      </section>
    </main>
  );
}
