import { skillsLanguage, skillsLibrary } from "@/constants/dummy";

type Props = {};

export default function TerminalSkills({}: Props) {
  return (
    <div>
      <div className="mb-4">
        <h6 className="text-accent_primary mb-2">Language :</h6>
        <ul>
          {skillsLanguage.map((skill, index) => (
            <li key={index}>{skill.title}</li>
          ))}
        </ul>
      </div>
      <div className="">
        <h6 className="text-accent_primary mb-2">Library :</h6>
        <ul>
          {skillsLibrary.map((skill, index) => (
            <li key={index}>{skill.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}