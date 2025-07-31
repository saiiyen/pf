import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: SITE_INFO.name,
    name: SITE_INFO.name,
    description: SITE_INFO.description,
    icons: [
      {
        src: "https://pub-b9f1ea6eba4648bc86b786e948113865.r2.dev/Assets/Rin.jpeg",
        type: "image/svg+xml",
        sizes: "any",
        purpose: "any",
      },
      {
        src: "https://pub-b9f1ea6eba4648bc86b786e948113865.r2.dev/Assets/Rin.jpeg",
        type: "image/png",
        sizes: "192x192",
        purpose: "any",
      },
      {
        src: "https://pub-b9f1ea6eba4648bc86b786e948113865.r2.dev/Assets/Rin.jpeg",
        type: "image/png",
        sizes: "512x512",
        purpose: "any",
      },
      {
        src: "https://pub-b9f1ea6eba4648bc86b786e948113865.r2.dev/Assets/Rin.jpeg",
        type: "image/png",
        sizes: "512x512",
        purpose: "maskable",
      },
    ],
    id: "/?utm_source=pwa",
    start_url: "/?utm_source=pwa",
    display: "standalone",
    scope: "/",
    screenshots: [
     
      {
        src: "https://pub-b9f1ea6eba4648bc86b786e948113865.r2.dev/Assets/Darkpf.png",
        type: "image/webp",
        sizes: "1920x1080",
        form_factor: "wide",
      },
      {
        src: "https://pub-b9f1ea6eba4648bc86b786e948113865.r2.dev/Assets/Brightpf.png",
        type: "image/webp",
        sizes: "1920x1080",
        form_factor: "wide",
      },
    ],
  };
}
