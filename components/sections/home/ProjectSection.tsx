import ProjectSkeleton from "@/components/features/projectsList/ProjectSkeleton";
import { Button } from "@/components/ui/button";
import { projects } from "@/constants/dummy";
import { Link } from "lucide-react";
import dynamic from "next/dynamic";
const DynamicProjectCard = dynamic(() => import("@/components/features/projectsList/ProjectCard"), {
    loading: () => <ProjectSkeleton />,
});

type Props = {};

export default function ProjectSection({ }: Props) {
    return (
        <section className="flex mx-auto w-full max-w-7xl flex-col">
            <div className="flex justify-between items-center gap-3 mb-12">
                <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">Projects</h2>
                <a href="/projects" className="text-sm font-medium text-accent_primary hover:underline flex items-center gap-1">
                    View More
                </a>
            </div>
            {/* list projects grid */}
            <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                {projects?.slice(0, 3).map((project: any) => (
                    <DynamicProjectCard
                        title={project.title}
                        image={project.image}
                        tags={project.tags}
                        github={project.gitHub}
                        visit={project.demo}
                        key={project.title}
                    >
                        {project.tags.map((tag: string, index: number) => {
                            if (index <= 2) {
                                return (
                                    <span
                                        key={tag}
                                        className="rounded-lg bg-accent_primary px-2 py-1 text-xs font-medium text-dark"
                                    >
                                        {tag}
                                    </span>
                                );
                            } else if (index === 3) {
                                return (
                                    <span
                                        key={tag}
                                        className="rounded-lg bg-accent_primary px-2 py-1 text-xs font-medium text-dark"
                                    >
                                        {project.tags.length - 3} + more
                                    </span>
                                );
                            }
                        })}
                    </DynamicProjectCard>
                ))}
            </div>
        </section>
    )
}