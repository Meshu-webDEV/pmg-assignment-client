/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      poppins: ["Poppins"],
      montserrat: ["Montserrat"],
    },
    extend: {
      colors: {
        purple_light: "#8150E9",
        purple_dark: "#6434CA",
        pink_light: "#FF5287",
        pink_dark: "#FA3278",
        teal_light: "#25E0BE",
        teal_dark: "#03B797",
        blue_dark: "#040B13",
        blue_light: "#091828",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
