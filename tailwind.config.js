module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Epilogue", "sans-serif;"],
      },
      test: {
        text10: "text-sm font-bold",
      },
      colors: {
        primary: "#1DC071",
        primaryExtra2: "#F1FBF7",
        secondary: "#6F49FD",
        text1: "#171725",
        text2: "#4B5264",
        text3: "#808191",
        text4: "#B2B3BD",
        "icon-color": "#A2A2A8",
        white: "#FFFFFF",
        whiteSoft: "#FCFBFF",
        graySoft: "#FCFCFC",
        stroke: "#F1F1F3",
        lite: "#FCFCFD",
        error: "#EB5757",
        red2: "#422C32",
        redSoft: "#F9E3E3",
        "dark-bg": "#13131A",
        darkSecondary: "#1C1C24",
        softDark: "#22222C",
        darkSoft: "#24242C",
        darkStroke: "#3A3A43",
        darkRed: "#422C32",
      },
    },
  },
  plugins: [],
};
