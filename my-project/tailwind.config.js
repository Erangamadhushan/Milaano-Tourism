/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'bg-mainColor':'#222',
        'coral':"coral"
      },
      borderColor:{
        'border-mainColor':'#222'
      },
      backgroundSize:{
        'custom':'860px'
      },
      colors:{
        'coral':'coral'
      }
    },
  },
  plugins: [],
}

