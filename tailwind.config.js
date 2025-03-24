/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'earth-brown': '#8B4513',
        'beige': '#F5F5DC',
        'safari-green': '#228B22',
        'safari-gold': '#FFD700',
      },
      fontFamily: {
        'safari': ['Adventure', 'sans-serif'],
        'body': ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/hero/hero-bg.jpg')",
      },
      cursor: {
        'safari': 'url(/src/assets/cursors/safari-cursor.png), pointer',
      },
    },
  },
  plugins: [],
}