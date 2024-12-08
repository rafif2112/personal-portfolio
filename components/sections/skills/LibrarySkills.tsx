import SkillSkeleton from "@/components/features/skillsList/SkillSkeleton";
import { getClient } from "@/services/graphql/ApolloClient";
import { GET_LIBRARY_SKILL } from "@/services/graphql/hygraph-gql";
import dynamic from "next/dynamic";

const SkillsCard = dynamic(
  () => import("@/components/features/skillsList/SkillsCard"),
  {
    loading: () => <SkillSkeleton />,
  },
);

export default async function LibrarySkills() {
  try {
    const { data } = await getClient().query<SkillsData>({
      query: GET_LIBRARY_SKILL,
    });
    return (
      <>
        {data.skills.map((skill) => (
          <SkillsCard
            key={skill.id}
            title={skill.title}
            logo={skill?.image?.url}
          />
        ))}
      </>
    );
  } catch (error) {
    console.error("Error fetching library skills:", error);
    return <p>Failed to load skills.</p>;
  }
}
