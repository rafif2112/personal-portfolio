interface Skill {
  __typename: string;
  id: string;
  title: string;
  category: "language" | "library" | "tools" | "framework";
  image: {
    __typename: string;
    url: string;
  };
}

interface SkillsData {
  skills: Skill[];
}
