import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Removed ref to page since we are using app router.
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     
    },
  },
  plugins: [],
};
export default config;
