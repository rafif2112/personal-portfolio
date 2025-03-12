import FilterButton from "./FilterButton";
import { skillsLanguage, skillsLibrary, skillsTools, skillsFramework } from "@/constants/dummy";
import SkillsCard from "./SkillsCard";

type Props = {
  filter: "language" | "library" | "tools" | "framework";
};

export default function SkillsTabs({ filter }: Props) {
  // Choose which skill array to use based on the filter
  const skillsToDisplay = 
    filter === "language" ? skillsLanguage :
    filter === "library" ? skillsLibrary :
    filter === "framework" ? skillsFramework : 
    skillsTools;

  return (
    <div className="flex w-full flex-col items-center gap-10">
      <FilterButton filter={filter} />
      <div className="grid w-full grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {skillsToDisplay.map((skill, index) => (
          <SkillsCard
            key={index}
            title={skill.title}
            logo={`/${skill.logo}`}
          />
        ))}
      </div>
    </div>
  );
}