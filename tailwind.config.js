module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "32px",
    },

    extend: {
      colors: {
        primary: {
          DEFAULT: "#3d5a80",
          50: "#e0fbfc",
          100: "#98c1d9",
        },
        secondary: "#ee6c4d",
        tertiary: {
          DEFAULT: "#6b7280",
          50: "#f8fafc",
          100: "#9ca3af",
        },
        light: { DEFAULT: "#f3f4f6", 50: "#f8fafc" },
        dark: { DEFAULT: "#293241", 50: "#2f3a4a" },
      },

      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
