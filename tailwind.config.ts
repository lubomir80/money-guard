import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            'dark': "linear-gradient(0deg, #2e1746, #2e225f)",
            'disable': "linear-gradient(0deg, #9b9a9c, #9b9a9c)"
         },
      },
   },
   plugins: [],
};
export default config;
