/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        '26': '26rem',
        'custom': 'calc(100vh - 4rem)', 
      },
    },
  },
  plugins: [],
}

