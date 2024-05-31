/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'search-btn-gradient': 'linear-gradient(109.15deg, #FBDA61 0%, #FF5ACD 86.08%)',
        'gradient-custom': 'linear-gradient(109.15deg, #FBDA61 0%, #FF5ACD 86.08%)',
      },
      fontFamily: {
        regular: "Regular",
        medium: "Medium",
        light: "Light",
        bold: "Bold",
        semiBold: "SemiBold"
      }
    },
  },
  plugins: [],
}

