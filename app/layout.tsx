import type { Metadata, Viewport } from "next";
import { Poppins, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import Theme from "@/services/providers/ThemeProvider";
import { cn } from "@/utils/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--firaCode",
});

export const metadata: Metadata = {
  title: {
    template: "%s / Muhamad Rafif",
    default: "Muhamad Rafif - Personal Portfolio",
  },
  description:
    "Frontend developer with a primary focus on React.js, Next.js, Tailwind CSS, and Framer Motion technologies. I am an individual who is diligent and passionate about the learning process, with the ultimate goal of realizing my aspirations as a professional frontend developer.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "",
    "https://asrul.tech/",
  ),
  creator: "Muhamad Rafif",
  publisher: "Muhamad Rafif",
  openGraph: {
    type: "website",
    images: "/opengraph.png",
    title: {
      template: "%s / Rafif",
      default: "Rafif",
    },
  },
  twitter: {
    images: "/opengraph.png",
    title: {
      template: "%s / Rafif",
      default: "Rafif",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c0d11",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="9236e765-3cf2-40fb-9a36-f7b38621acfa"></script>
      </head>
      <body
        className={cn(
          "overflow-x-hidden bg-slate-100 dark:bg-primary ",
          poppins.className,
          firaCode.variable,
        )}
      >
        <Theme>
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
          <div className="fixed bottom-0 left-0 right-0 top-0 -z-10 bg-[url('/grid.svg')]  opacity-[15%] invert dark:invert-0" />
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
