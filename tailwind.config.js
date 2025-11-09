/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'reimei-blue': '#003f87',
        'reimei-light-blue': '#00a7e1',
        'reimei-green': '#6b7c3c',
        'reimei-orange': '#f5a623',
      },
    },
  },
  plugins: [],
}
