/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'bg-mainColor':'#222'
      },
      borderColor:{
        'border-mainColor':'#222'
      }
    },
  },
  plugins: [],
}

