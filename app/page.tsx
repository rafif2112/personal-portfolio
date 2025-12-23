import ExperienceSection from "@/components/sections/home/ExperienceSection";
import MainSection from "@/components/sections/home/MainSection";
import ProjectSection from "@/components/sections/home/ProjectSection";
import StatSection from "@/components/sections/home/StatSection";

export default function Home() {
	return (
		<main className="px-container py-container max-w-full overflow-hidden xl:py-36 space-y-20 flex flex-col ">
			<MainSection />

			<StatSection />

			<ExperienceSection />

			<ProjectSection />
		</main>
	);
}
