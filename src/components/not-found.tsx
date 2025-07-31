import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function NotFound({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-[calc(100svh-5.5rem)] flex-col items-center justify-center",
        className
      )}
    >
      
      <Image
        src="https://pub-b9f1ea6eba4648bc86b786e948113865.r2.dev/Assets/tabhead.png"
        alt="not found"
        width= {900}
        //{256}                          
        height={900}
        //{256}
        className= "h-90 w-auto"
        //"h-28 w-auto"              
        priority                             
      />
      
      <h1 className="mt-8 mb-6 text-8xl font-medium">404</h1>

      <Button variant="link" asChild>
        <Link href="/">
          Go to Home 🫵🏼 🛖
          <ArrowRightIcon />
        </Link>
      </Button>
    </div>
  );
}
