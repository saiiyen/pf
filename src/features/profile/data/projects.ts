import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
 
  {
    id: "saiiyendotcom",
    title: "saiiyen.com",
    period: {
      start: "01.2025",
    },
    link: "https://github.com/saiiyen/pf",
    skills: [
      "Open Source",
      "Next.js 15",
      "Tailwind CSS v4",
      "Radix UI",
      "Motion",
      "shadcn/ui",
      "Component Registry",
      "Vercel",
    ],
    description: `saiiyen.com is my portfolio website, showcasing my work and experience as a Software Developer & web dev engineer.
- Elegant & Minimalistic UI: Clean and modern design
- Dark Mode: Supports light and dark themes for a better user experience
- vCard Integration: Digital business card with contact details
- SEO Optimization: [JSON-LD](https://json-ld.org) schema, sitemap, robots
- AI-friendly [/llms.txt](https://llmstxt.org): Adds a \`/llms.txt\` file to help AI models identify and interact with site content.
- Email Protection: Obfuscation to prevent spam
- Installable PWA
- Next.js 15: Latest React framework for optimized performance and scalability
- Tailwind CSS v4: Modern utility-first CSS framework for styling

Blog Features:
- MDX & Markdown support
- Syntax Highlighting for better readability
- RSS Feed for easy content distribution
- Dynamic OG Images for rich previews`,
    logo:"https://pub-b9f1ea6eba4648bc86b786e948113865.r2.dev/Assets/saiiyendotkom.png",
    //https://pub-b9f1ea6eba4648bc86b786e948113865.r2.dev/Assets/saiiyendotcom.png",
    
    isExpanded: true,
  },
  {
    id: "saiiyendotcom",
    title: "Tidybeast",
    period: {
      start: "07.2025",
      end: "09.2025",
    },
    link: "https://github.com/saiiyen/TidyBeast.git",
    skills: [
      "Open Source",
       "Creativity",
           "Responsive Webapps",
          "React",
          "Typescript",
          "Javascript",
      "shadcn/ui",
      "CI/CD",
      "Vercel",
    ],
    description: `Tidy Beast is a home services firm established in Hyderabad that is revolutionizing the Indian cleaning market with its network of screened professionals and technology-driven solutions,For both residential and commercial clients, the company provides high-quality, environmentally friendly cleaning services with an emphasis on dependability, accessibility, and transparency.
- Minimalistic UI: Clean and modern design
- Real-Time Pricing : Dynamic cost calculations across service types using BHK, area and quantity-based models
- Robust State Management :TanStack Query and React Context guarantee data integrity and pricing consistency
- Modular Architecture : Reusable TypeScript components and clean architecture patterns for scalable, maintainable code
`,
    logo:"https://pub-b9f1ea6eba4648bc86b786e948113865.r2.dev/Assets/tidybeast-logo.png",
    
    
    isExpanded: true,
  },
  
 ];
