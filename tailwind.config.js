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
          "primary": "#8bc6ed",
          "secondary": "#7972f9",
          "accent": "#bbf7f7",
          "neutral": "#15161E",
          "base-100": "#513C53",
          "info": "#8B9CEA",
          "success": "#18C3A1",
          "warning": "#CA9716",
          "error": "#F75983",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

