/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true, // Centers the container
      padding: '2rem', // Adds custom padding to the container
      screens: {
        sm: '100%',
        md: '720px',
        lg: '960px',
        xl: '1140px',
      },
    },
  },
  plugins: [],
}
