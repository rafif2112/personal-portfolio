import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  PhoneIcon,
} from "lucide-react";
import React from "react";

type Props = {};

export default function TerminalContact({}: Props) {
  return (
    <div className="mb-4">
      <h6 className="text-accent_primary mb-2">Contact :</h6>
      <ul>
        <li>
          <a
            href="https://wa.me/6281283330396"
            target="_blank"
            className="hover:text-accent_primary flex items-center gap-2"
          >
            <PhoneIcon size={15} />
            <p>Whatsapp</p>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/rafiff.21/"
            target="_blank"
            className="hover:text-accent_primary flex items-center gap-2"
          >
            <InstagramIcon size={15} />
            <p>Instagram</p>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/muhamad-rafif22/"
            target="_blank"
            className="hover:text-accent_primary flex items-center gap-2"
          >
            <LinkedinIcon size={15} />
            <p>LinkedIn</p>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/rafif2112"
            target="_blank"
            className="hover:text-accent_primary flex items-center gap-2"
          >
            <GithubIcon size={15} />
            <p>Github</p>
          </a>
        </li>
      </ul>
    </div>
  );
}
