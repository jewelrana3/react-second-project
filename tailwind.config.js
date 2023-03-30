/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          

 
          "primary": "#a7d655",
                    
          
           
          "secondary": "#aa293c",
                    
          
           
          "accent": "#eabc9f",
                    
          
           
          "neutral": "#1D1E30",
                    
          
           
          "base-100": "#EAEBEB",
                    
          
           
          "info": "#72A0EE",
                    
          
           
          "success": "#155645",
                    
          
           
          "warning": "#F4D35D",
                    
          
           
          "error": "#F25065",
                    },
      },
    ],
  },
  plugins: [require("daisyui")],
}

