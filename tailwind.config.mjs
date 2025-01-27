/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1172px",
        },
      },
      fontFamily: {
        kanit: ["kanit", "sans-serif"]
      },
      colors: {
        'aqua-marine': "#51FFAB",
        'lemon': "#C7FF51",
        'light-green': "#DFF6F1",
        'dark-green': "#00C934",
        'deep-green': "#00E765",
        'green': "#51FFAB",
        'ghost-white':"#F9F9F9",
      },
      fontSize: {
        'custom-2xl': "32px",
        'custom-3xl': "40px",
        'custom-4xl': "52px",
        'custom-5xl': "64px",
        'custom-6xl': "84px",
      },
      lineHeight: {
        'custom-xl': "17.71px",
        'custom-2xl': "18px",
        'custom-3xl': "19.5px",
        'custom-4xl': "19.6px",
        'custom-5xl': "20.6px",
        'custom-6xl': "20.24px",
        'custom-7xl': "21px",
        'custom-8xl': "26.91px",
        'custom-9xl': "30px",
        'custom-10xl': "32.48px",
        'custom-11xl': "45px",
        'custom-12xl': "47.84px",
        'custom-13xl': "50.6px",
        'custom-14xl': "52px",
        'custom-15xl': "64px",
        'custom-16xl': "72px",
        'custom-17xl': "84px",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/images/webp/hero-bg-img.webp')",
        "pricing-table": "url('/assets/images/webp/pricing-table-bg.webp')",
      },
      dropShadow:{
        'custom-1': '25px -20px 60px 0px #0000001A',
        
      }
    },
  },
  plugins: [],
};
