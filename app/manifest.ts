import { type MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => ({
  name: "rafif",
  short_name: "rafif",
  description: "A Personal portfolio website",
  background_color: "#0c0d11",
  theme_color: "#0c0d11",
  categories: ["portfolio", "personal", "projects", "resume", "contact"],
  display: "standalone",
  start_url: "/",
  lang: "en",
  icons: [
    {
      src: "/public/icon.png",
      sizes: "any",
      type: "image/x-icon",
      purpose: "any",
    },
  ],
});

export default manifest;
