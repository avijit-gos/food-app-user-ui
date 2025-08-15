/** @format */

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        appPrimary: "rgb(var(--color-app-primary) / <alpha-value>)",
        disableButton: "rgb(var(--color-disable-button) / <alpha-value>)",
        appPrimary: "rgb(var(--app-primary))",
        darkText: "rgba(var(--dark-text))",
      },
    },
    plugins: [require("tailwind-scrollbar-hide")],
  },
};
