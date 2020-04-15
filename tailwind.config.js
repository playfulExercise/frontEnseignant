module.exports = {
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#535353", //Gris
      secondary: "#ffed4a", //Rouge
      danger: "#e3342f", // Other & custom..
    }),
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
};
