/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundColor : {
        gradient : "linear-gradient (to right , #7C48C2 ,88A0DD,E4DF59)"
      },
    
      colors: {
        primary: "#141517",
        secondary: "#7C48C2",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        circle:"#E72727",
        gradient : "linear-gradient (to right , #7C48C2 ,#88A0DD,#E4DF59)",
        
      },
      fontFamily: {
        Hanuman: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      xs: "370px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
