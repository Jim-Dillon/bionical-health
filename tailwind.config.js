/** @type {import('tailwindcss').Config} */
module.exports = {
  "content": ["./dist/**/*.html", "./src/**/*.css", "./src/**/*.js"],
  theme: {
    extend: {
      "fontFamily": {
        "roboto": ["Roboto", "sans-serif"]
      }  
    },
  },
  plugins: [],
}
