module.exports = {
    content: [
      "./_layouts/**/*.html",
      "./_projects/**/*.md",
      "./index.html"
    ],
    theme: {
      extend: {
        colors: {
          primary: "#005f80",
          secondary: "#fdb515",
          accent: "#e5e7eb"
        },
        fontFamily: {
          sans: ["Inter", "system-ui", "sans-serif"]
        }
      }
    },
    plugins: []
  }