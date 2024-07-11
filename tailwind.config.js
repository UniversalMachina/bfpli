/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        antiquewhite: "#e9e4cb",
        red: "#ff0000",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        "rounded-mplus-1c-bold": "'Rounded Mplus 1c Bold'",
      },
    },
    fontSize: {
      inherit: "inherit",
    },
    screens: {
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
