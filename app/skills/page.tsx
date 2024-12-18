import SkillsTabs from "@/components/features/skillsList/SkillsTabs";
import Blob from "@/components/ui/Blob";
import SectionTitle from "@/components/ui/SectionTitle";

type Props = {
  searchParams: {
    filter: "language" | "library" | "tools" | "framework";
  };
};

export default function page({ searchParams }: Props) {
  return (
    <main className="px-container py-container min-h-screen">
      <section className="flex flex-col items-center gap-16">
        <SectionTitle
          className="text-[35px] font-semibold text-slate-600 dark:text-white md:text-[45px] md:font-bold"
          title="My Skills"
          tagStyle="text-accent_primary font-bold"
        />
        <SkillsTabs filter={searchParams.filter || "language"} />
        <Blob className="fixed -left-20 -top-10 h-64 w-64 bg-accent_primary blur-[90px] lg:-left-44 lg:h-96 lg:w-96 lg:blur-[120px]" />
        <Blob className="fixed -right-20 bottom-0 h-64 w-64 bg-accent_secondary blur-[90px]   lg:-right-60 lg:h-96 lg:w-96 lg:blur-[120px]" />
      </section>
    </main>
  );
}
