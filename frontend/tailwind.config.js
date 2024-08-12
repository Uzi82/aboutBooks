/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    screens: {
      'sm': {'max':'640px'},

      'md': {'max':'925px'},
      'min-md': {'min':'925px'},
      
      'lg': {'max':'1024px'},
      'min-lg': {'min':'1024px'},
      
      'xl': {'min':'1280px'},
      '2xl': {'min':'1536px'},
    },
    
    extend: {
      padding: {
        '36':'clamp(12px,3vw,56px)'
      },

      colors: {
        "white": "#ffffff",
        "gray": "#EAEAEA",
        "blue": "#1682FD",
        "decor": "#1abc9c",
        "black": "#000000",
        "background": '#FAFAFA',
      }
    },
  },
  plugins: [],
}

