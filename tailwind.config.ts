const flowbite = require("flowbite-react/tailwind");
import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      flowbite.content(),
   ],
   theme: {
      extend: {
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            'dark': "linear-gradient(0deg, #2e1746, #2e225f)",
            'orange': " linear-gradient(90deg,rgb(255, 199, 39), rgb(158, 64, 186), rgb(112, 0, 255))",
            'orangeHover': " linear-gradient(90deg,rgba(255, 199, 39, 0.9), rgba(158, 64, 186, 0.9), rgba(112, 0, 255, 0.9))",
            'disable': "linear-gradient(0deg, #9b9a9c, #9b9a9c)"
         },
         colors: {
            "indigo": "rgba(82, 59, 126, 0.6)"
         },
         dropShadow: {
            '3xl': '1px 9px 15px rgba(0, 0, 0, 0.25)',
         }
      },
   },
   plugins: [
      flowbite.plugin(),
   ],
};
export default config;
