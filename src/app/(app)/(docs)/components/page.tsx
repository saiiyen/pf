import type { Metadata } from "next";
import Link from "next/link";

import{CalWidget} from "@/components/cal-widget";


//import { Icons } from "@/components/icons";
//import { getPostsByCategory } from "@/data/blog";

export const metadata: Metadata = {
  title: "Lets Connect!! ",
  description: "I'd love to hear from you! Let's create something extraordinary together.",
};

export default function Page() {
  //const posts = getPostsByCategory("components");

  return (
    <div className="h-screen flex flex-col">
      {/* Top section - White background - Exactly 50% */}
      <div className="bg-white px-6 py-16 md:px-16 md:py-24 flex-1 flex items-center">
        <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center">
          {/* Left content */}
          <div className="lg:max-w-2xl">
            <p className="text-sm text-gray-600 mb-4">I'd love to hear from you!</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-gray-400">
              Let's create something extraordinary together.
            </h1>
          </div>

          {/* Right widget */}
          <div className="mt-12 lg:mt-0 lg:ml-12">
            <CalWidget />
          </div>
        </div>
      </div>

      {/* Bottom section - Black background - Exactly 50% */}
      <div className="bg-black text-white px-6 py-16 md:px-16 md:py-24 flex-1 flex items-center">
        <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center">
          {/* Left content */}
          <div className="lg:max-w-2xl">
            <p className="text-sm text-gray-400 mb-8">Let's Connect</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
              I'm always up for exciting projects!
            </h2>
          </div>

          {/* Right links */}
          <div className="flex flex-col space-y-4 mt-12 lg:mt-0 lg:ml-12">
            <Link
              href="https://www.linkedin.com/in/saiiyen/"
              target="_blank"
              className="flex items-center justify-between text-lg font-medium hover:underline group"
            >
              <span>LinkedIn</span>
              <span className="ml-4 group-hover:translate-x-1 transition-transform">↗</span>
            </Link>
            <Link
              href="mailto:kumarkatravath.01@gmail.com"
              className="flex items-center justify-between text-lg font-medium hover:underline group"
            >
              <span>Email</span>
              <span className="ml-4 group-hover:translate-x-1 transition-transform">↗</span>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1Gbs2_2JyUYhYpqOoLsis2f5A3-eBs8kw/view"
              
              target="_blank"
              className="flex items-center justify-between text-lg font-medium hover:underline group"
            >
              <span>Resume</span>
              <span className="ml-4 group-hover:translate-x-1 transition-transform">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
    // <div className="min-h-svh [--color-react:#087EA4] dark:[--color-react:#58C4DC]">
    //   <div className="screen-line-after px-4">
    //     <h1 className="text-3xl font-semibold">Lets Connect !!</h1>
    //   </div>

    //   <div className="screen-line-after p-4">
    //     <p className="font-mono text-sm text-balance text-muted-foreground">
    //       {metadata.description}
    //     </p>
    //   </div>

    //   {posts.map((post) => (
    //     <Link
    //       key={post.slug}
    //       href={`/components/${post.slug}`}
    //       className="group/post flex items-center border-b border-edge pr-4"
    //     >
    //       <Icons.react
    //         className="mx-4 size-5 shrink-0 text-(--color-react)"
    //         aria-hidden
    //       />

    //       <div className="border-l border-dashed border-edge p-4">
    //         <h2 className="leading-snug font-medium text-balance underline-offset-4 group-hover/post:underline">
    //           {post.metadata.title}
    //         </h2>
    //       </div>

    //       {post.metadata.new && (
    //         <span
    //           className="shrink-0 rounded-md bg-info px-1.5 font-mono text-sm font-medium text-white text-shadow-xs"
    //           aria-hidden
    //         >
    //           New
    //         </span>
    //       )}
    //     </Link>
    //   ))}

    //   <div className="h-4" />
    // </div>
    //1---------------------------------------
    // <div className="min-h-screen flex flex-col">
    //   {/* Top spacer */}
    //   <div className="h-8" />

    //   {/* Main content */}
    //   <div className="flex-1 px-6 py-12 md:px-16 md:py-24">
    //     {/* Subject line */}
    //     <p className="text-sm text-muted-foreground mb-2">
    //       I’d love to hear from you!
    //     </p>

    //     {/* Big subheading */}
    //     <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-12">
    //       Let’s create something extraordinary together.
    //     </h1>

    //     {/* Links section */}
    //     <div className="flex flex-col sm:flex-row sm:space-x-12 mb-16">
    //       {/* LinkedIn */}
    //       <Link
    //         href="https://www.linkedin.com/in/saiiyen/"
    //         target="_blank"
    //         className="flex items-center text-lg font-medium hover:underline mb-6 sm:mb-0"
    //       >
    //         {/* Inline LinkedIn SVG */}
    //         <svg
    //           width="24"
    //           height="24"
    //           viewBox="0 0 256 256"
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="mr-3"
    //         >
    //           <path
    //             d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
    //             fill="#0A66C2"
    //           />
    //         </svg>
    //         LinkedIn
    //         {/* External link arrow */}
    //         <span className="ml-2">↗</span>
    //       </Link>

    //       {/* Email */}
    //       <Link
    //         href="mailto:kumarkatravath.01@gmail.com"
    //         className="flex items-center text-lg font-medium hover:underline mb-6 sm:mb-0"
    //       >
    //         {/* Inline Email SVG */}
    //         <svg
    //           width="24"
    //           height="24"
    //           viewBox="0 49.4 512 399.42"
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="mr-3"
    //         >
    //           <g fill="none" fillRule="evenodd">
    //             <g fillRule="nonzero">
    //               <path
    //                 fill="#4285f4"
    //                 d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z"
    //               />
    //               <path
    //                 fill="#34a853"
    //                 d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z"
    //               />
    //               <path
    //                 fill="#fbbc04"
    //                 d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z"
    //               />
    //             </g>
    //             <path
    //               fill="#ea4335"
    //               d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z"
    //             />
    //             <path
    //               fill="#c5221f"
    //               fillRule="nonzero"
    //               d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z"
    //             />
    //           </g>
    //         </svg>
    //         Email
    //         <span className="ml-2">↗</span>
    //       </Link>

    //       {/* Resume */}
    //       <Link
    //         href="https://drive.google.com/file/d/13HT6BGaxUHQ_04qQ4g6lke0PtXHxPvPq/view?usp=sharing"
    //         target="_blank"
    //         className="flex items-center text-lg font-medium hover:underline"
    //       >
    //         {/* Simple document icon (text) */}
    //         <span className="mr-3">📄</span>
    //         Resume
    //         <span className="ml-2">↗</span>
    //       </Link>
    //     </div>

    //     {/* Bottom heading */}
    //     <h2 className="text-3xl md:text-4xl font-semibold">
    //       I’m always up for exciting projects!
    //     </h2>
    //   </div>
    // </div>
    //2---------------------------------------
    // <div className="min-h-screen">
    //   {/* Top section - Light background */}
    //   <div className="bg-white px-6 py-16 md:px-16 md:py-24">
    //     <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
    //       {/* Left content */}
    //       <div className="lg:max-w-2xl">
    //         <p className="text-sm text-gray-600 mb-4">I'd love to hear from you!</p>
    //         <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-gray-400">
    //           Let's create something extraordinary together.
    //         </h1>
    //       </div>

    //       {/* Right links */}
    //       <div className="flex flex-col space-y-4 mt-12 lg:mt-0 lg:ml-12">
    //         <Link
    //           href="https://www.linkedin.com/in/saiiyen/"
    //           target="_blank"
    //           className="flex items-center justify-between text-lg font-medium hover:underline group"
    //         >
    //           <span>LinkedIn</span>
    //           <span className="ml-4 group-hover:translate-x-1 transition-transform">↗</span>
    //         </Link>

    //         <Link
    //           href="mailto:kumarkatravath.01@gmail.com"
    //           className="flex items-center justify-between text-lg font-medium hover:underline group"
    //         >
    //           <span>Email</span>
    //           <span className="ml-4 group-hover:translate-x-1 transition-transform">↗</span>
    //         </Link>

    //         <Link
    //           href="https://drive.google.com/file/d/13HT6BGaxUHQ_04qQ4g6lke0PtXHxPvPq/view?usp=sharing"
    //           target="_blank"
    //           className="flex items-center justify-between text-lg font-medium hover:underline group"
    //         >
    //           <span>Resume</span>
    //           <span className="ml-4 group-hover:translate-x-1 transition-transform">↗</span>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Bottom section - Dark background */}
    //   <div className="bg-black text-white px-6 py-16 md:px-16 md:py-24">
    //     <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
    //       {/* Left content */}
    //       <div className="lg:max-w-2xl">
    //         <p className="text-sm text-gray-400 mb-8">Let's Connect</p>
    //         <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
    //           I'm always up for exciting projects!
    //         </h2>
    //       </div>

    //       {/* Right links */}
    //       <div className="flex flex-col space-y-4 mt-12 lg:mt-0 lg:ml-12">
    //         <Link
    //           href="https://www.linkedin.com/in/saiiyen/"
    //           target="_blank"
    //           className="flex items-center justify-between text-lg font-medium hover:underline group"
    //         >
    //           <span>LinkedIn</span>
    //           <span className="ml-4 group-hover:translate-x-1 transition-transform">↗</span>
    //         </Link>

    //         <Link
    //           href="mailto:kumarkatravath.01@gmail.com"
    //           className="flex items-center justify-between text-lg font-medium hover:underline group"
    //         >
    //           <span>Email</span>
    //           <span className="ml-4 group-hover:translate-x-1 transition-transform">↗</span>
    //         </Link>

    //         <Link
    //           href="https://drive.google.com/file/d/13HT6BGaxUHQ_04qQ4g6lke0PtXHxPvPq/view?usp=sharing"
    //           target="_blank"
    //           className="flex items-center justify-between text-lg font-medium hover:underline group"
    //         >
    //           <span>Resume</span>
    //           <span className="ml-4 group-hover:translate-x-1 transition-transform">↗</span>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
