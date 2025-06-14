/** @format */

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        appPrimary: "rgb(var(--color-app-primary) / <alpha-value>)",
        "disable-button": "rgb(var(--color-disable-button) / <alpha-value>)",
        appPrimary: "rgb(var(--app-primary))",
      },
    },
    plugins: [require("tailwind-scrollbar-hide")],
  },
};
