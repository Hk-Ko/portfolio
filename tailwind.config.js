export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#34353a",
        secondary: "#31333b",
        info: "#3d3e42",
        warning: "#ffc86b",
        header: "#f9f9f9",
        para: "#ececec",
        tran:"rgba(46, 42, 46, 0.45)"
      },
      fontFamily: {
        roboto: "Roboto",
      },
    },
  },
  plugins: [],
};
