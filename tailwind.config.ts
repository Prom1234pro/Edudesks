import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'custom-lg': '0px 0px 12px 0px rgba(0, 0, 0, 0.10)', // Custom shadow
        'form-shadow': '0px 1px 2px 0px rgba(16, 24, 40, 0.03)',
      },
      fontFamily: {
        "Open-Sans": ["Open Sans", "sans-serif"],
      }
    }
  },
  plugins: [],
};
export default config;
