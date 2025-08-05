module.exports = {
    content: [
      "./_layouts/**/*.html",
      "./_projects/**/*.md",
      "./index.html"
    ],
    theme: {
      extend: {
        colors: {
          primary: "#000000",
          secondary: "#ffffff",
          secondary_spring_summer: "#DF4601",
          secondary_summer_fall: "#241773",
          secondary_fall_winter: "#E03A3E",
          accent: "#666666",
          accent_spring_summer: "#000000",
          accent_summer_fall: "#000000",
          accent_fall_winter: "#FFD520"
        },
        fontFamily: {
          sans: ["Inter", "system-ui", "sans-serif"]
        }
      }
    },
    plugins: []
  }