import { cn } from "@/utils/utils";
import { ArrowRight } from "lucide-react";

type Props = {
  customStyles?: string;
};

export default function TerminalHeader({ customStyles = "" }: Props) {
  return (
    <div
      className={cn(
        `mb-2 flex h-5 w-full justify-between px-3 ${customStyles}`,
      )}
    >
      <p className="text-accent_primary flex items-center gap-1 text-sm">
        <ArrowRight size={15} className="text-accent_3 " />
        rafif@<span className="text-accent_3">next</span>~
      </p>
      <p className=" text-accent_primary flex items-center gap-2 text-sm font-light">
        <span className="-accent_primary flex h-4 w-4 items-center justify-center rounded-full border border text-xs">
          N
        </span>{" "}
        {process.env.NEXT_PUBLIC_NEXT_VERSION}
      </p>
    </div>
  );
}
