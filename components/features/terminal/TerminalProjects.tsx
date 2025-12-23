import Link from "next/link";

type Props = {};

export default function TerminalProjects({ }: Props) {
  return (
    <div className="mb-4">
      <h6 className="text-accent_primary mb-2">Projects :</h6>
      <ul>
        {[
          {
            title: "Rayon Cicurug 2",
            gitHub: "https://github.com/rafif2112/rayon-cicurug2",
            demo: "https://cicurug2.my.id/",
          },
          {
            title: "HRIS App",
            gitHub: "",
            demo: "",
          },
          {
            title: "Portfolio laravel",
            gitHub: "https://github.com/rafif2112/portfolio-laravel",
            demo: "http://muhamadrafif.free.nf/?i=1",
          },
          {
            title: "Rekap Absensi",
            gitHub: "https://github.com/rafif2112/Rekapitulasi-Keterlambatan",
            demo: "",
          },
          {
            title: "Pengaduan Masyarakat",
            gitHub: "https://github.com/rafif2112/pengaduan-masyarakat",
            demo: "",
          },
          {
            title: "Perpustakaan",
            gitHub: "https://github.com/rafif2112/perpus-app",
            demo: "",
          },
          {
            title: "Kantinku",
            gitHub: "https://github.com/rafif2112/kantinku",
            demo: "",
          },
        ].map(({ title, demo, gitHub }) => {
          const href = demo || gitHub || "#";
          return (
            <li key={title}>
              <Link
                href={href}
                className="hover:text-accent_primary"
              >
                {title}
              </Link>
            </li>
          );
        })}
        <li>
          <Link
            href="/projects"
            target="_blank"
            className="hover:text-accent_primary"
          >
            More
          </Link>
        </li>
      </ul>
    </div>
  );
}
