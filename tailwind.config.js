/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },



      screens: {
        'sm': '448px',
        'md': '728px',
        'lg': '1200px',
      },


      variants: {
        extend: {
          display: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
        },
      },
    },
  },


 
  plugins: [],
};
