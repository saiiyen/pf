import type { Registry } from "shadcn/registry";

export const components: Registry["items"] = [

  {
    name: "flip-sentences",
    type: "registry:component",
    title: "Flip Sentences",
    author: "saiiyen.k <k@saiiyen.com>",
    dependencies: ["motion"],
    registryDependencies: ["<registryBaseUrl>/utils.json"],
    files: [
      {
        path: "flip-sentences/flip-sentences.tsx",
        type: "registry:component",
      },
    ],
  },
  
    
 ];
