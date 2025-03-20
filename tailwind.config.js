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
        primary: '#66bb6a',
        secondary: '#9ccc65',
        accent: '#f48fb1',
        heading: '#43a047',
        text: '#388e3c',
        background: '#ffdceb'
      },
    },
  },
  plugins: [],
} 