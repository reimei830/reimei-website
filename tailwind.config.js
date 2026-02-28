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
        // Dark theme tokens
        'dark-bg': '#0a0a0f',
        'dark-bg-secondary': '#111827',
        'dark-card': '#1a1a2e',
        'dark-border': '#1e293b',
        'neon-blue': '#00a7e1',
        'neon-blue-dim': '#0077a3',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 167, 225, 0.3)',
        'neon-strong': '0 0 40px rgba(0, 167, 225, 0.5)',
        'neon-text': '0 0 10px rgba(0, 167, 225, 0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 167, 225, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 167, 225, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
