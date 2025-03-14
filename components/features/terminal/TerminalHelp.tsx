type Props = {};

export default function TerminalHelp({}: Props) {
  return (
    <div className="flex flex-col">
      <span className="text-accent_primary">muhamadrafif.vercel.app</span>
      <span>- - - - - - - -</span>
      <span className="">
        Usage :<span className="text-accent_primary"> next </span>
        [command]
      </span>
      <div className="">
        <span className="text-accent_primary">all Comands:</span>
        <ul className="pl-4">
          <li>about</li>
          <li>skills</li>
          <li>projects</li>
          <li>contact</li>
        </ul>
      </div>
      <div className="mt-2">
        <span className="text-accent_primary">other commands:</span>
        <ul className="pl-4">
          <li>clear</li>
          <li>info</li>
        </ul>
      </div>
    </div>
  );
}
