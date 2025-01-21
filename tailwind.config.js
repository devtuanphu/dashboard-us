/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom left, #2F2E2E 31%, #1A1A1A 62%)",
      },
      screens: {
        desktop: "1440px",
        laptop: "1024px",
        tablet: "744px",
        mobile: "360px",
      },
    },
  },
  plugins: [],
};
