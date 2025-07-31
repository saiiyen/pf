import { RssIcon } from "lucide-react";

import { SITE_INFO, SOURCE_CODE_GITHUB_URL } from "@/config/site";
import { cn } from "@/lib/utils";

import { Icons } from "./icons";

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="screen-line-before mx-auto border-x border-edge pt-4 md:max-w-3xl">
        <p className="mb-1 text-center font-mono text-sm text-balance text-muted-foreground">
        
        </p>

        <p className="mb-4 text-center font-mono text-sm text-balance text-muted-foreground">
          by{" "}
          <a
            className="link"
            href="https://www.instagram.com/saiiyen.k/"
            target="_blank"
            rel="noopener"
          >
            saikumar katravath 
          </a>
          | Built with love, caffeine, and the promise of  "just one more revision".
           {/* The source code is available on{" "}
          <a
            className="link"
           // href={SOURCE_CODE_GITHUB_URL}
           
           href="https://github.com/saiiyen"
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          . */}
        </p>

        <div
          className={cn(
            "screen-line-before screen-line-after flex w-full before:z-1 after:z-1",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
          )}
        >
          <div className="mx-auto flex items-center justify-center gap-3 border-x border-edge bg-background px-4">
           

            {/* <Separator />

           

            <Separator /> */}

            
          </div>
        </div>
      </div>
      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-2" />
      </div>
    </footer>
  );
}

function Separator() {
  return <div className="flex h-11 w-px bg-edge" />;
}
