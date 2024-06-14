import { getIconCollections, iconsPlugin } from "@egoist/tailwindcss-icons";
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import aria from "tailwindcss-react-aria-components";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "system-ui"],
        mono: ["Fira Code Variable", "momospace"],
      },
    },
  },
  plugins: [
    aria,
    animate,
    iconsPlugin({ collections: getIconCollections(["tabler"]) }),
  ],
} satisfies Config;
