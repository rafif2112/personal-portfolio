"use client";
import SkillsTabs from "@/components/features/skillsList/SkillsTabs";
import Blob from "@/components/ui/Blob";
import SectionTitle from "@/components/ui/SectionTitle";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const filter = (searchParams.get("filter") || "language") as "language" | "library" | "tools" | "framework";

  return (
    <main className="px-container py-container min-h-screen">
      <section className="flex flex-col items-center gap-16">
        <SectionTitle
          className="text-[35px] font-semibold text-slate-600 dark:text-white md:text-[45px] md:font-bold"
          title="My Skills"
          tagStyle="text-accent_primary font-bold"
        />
        <SkillsTabs filter={filter} />
        <Blob className="fixed -left-20 -top-10 h-64 w-64 bg-accent_primary blur-[90px] lg:-left-44 lg:h-96 lg:w-96 lg:blur-[120px]" />
        <Blob className="fixed -right-20 bottom-0 h-64 w-64 bg-accent_secondary blur-[90px] lg:-right-60 lg:h-96 lg:w-96 lg:blur-[120px]" />
      </section>
    </main>
  );
}