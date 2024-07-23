/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: 'Inter'
    },
    backgroundImage: {
        'space-gradient': 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)', // degradê
      },
  },
  },
  plugins: [],
}