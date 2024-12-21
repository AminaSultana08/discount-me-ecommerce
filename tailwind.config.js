/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        IbmPlexSans: "ibm-plex-sans",
        Figtree: "figtree",
      },
    },
  },
  plugins: [],
};
