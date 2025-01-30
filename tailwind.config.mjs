/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1921px",
      },
      animation: {
        gelatine: "gelatine 0.6s infinite",
        bounceCustom: "bounceCustom 14s ease infinite",
        revolve: "revolve 12s ease infinite",
      },
      keyframes: {
        gelatine: {
          "0%, 100%": { transform: "scale(1, 1)" },
          "25%": { transform: "scale(0.9, 1.1)" },
          "50%": { transform: "scale(1.1, 0.9)" },
          "75%": { transform: "scale(0.95, 1.05)" },
        },
        bounceCustom: {
          "0%": { transform: "translate(0, 0)" },
          "15%": { transform: "translate(-80%, -60%)" },
          "30%": { transform: "translate(-90%, -170%)" },
          "45%": { transform: "translate(200%, -100%)" },
          "60%": { transform: "translate(-110%, -190%)" },
          "75%": { transform: "translate(-140%, -120%)" },
          "90%": { transform: "translate(-150%, -130%)" },
          "100%": { transform: "translate(0, 0)" },
        },
        revolve: {
          "30%": { transform: "translateY(-30%) translateX(0%)" },
          "45%": { transform: "translateY(250%) translateX(50%)" },
          "50%": { transform: "translateY(150%) translateX(-240%)" },
          "60%": { transform: "translateY(-50%) translateX(-250%)" },
          "70%": { transform: "translateY(-100%) translateX(-90%)" },
          "100%": { transform: "translateY(0%) translateX(0%)" },
        },
      },
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
      animation: {
        zoomin: 'zoomin 2s infinite alternate ease-in-out',
        zoomout: 'zoomout 2s infinite alternate ease-in-out',
      },
      keyframes: {
        zoomin: {
          '0%': {
            transform: 'scale(.8)',
            opacity:'0.6'
           },
          '50%': {
            transform: 'scale(1)',
            opacity: '1'
          },
          '100%': {
            transform: 'scale(.7)',
            opacity: '0.7'
          },
        },
        zoomout: {
          '0%': {
            transform: 'scale(.8)',
            opacity: '1'
          },
          '50%': {
            transform: 'scale(.7)',
            opacity: '0.5'
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1'
          },
        },
      },
      fontFamily: {
        kanit: ["kanit", "sans-serif"],
      },
      colors: {
        "aqua-marine": "#51FFAB",
        lemon: "#C7FF51",
        "light-green": "#DFF6F1",
        "dark-green": "#00C934",
        "deep-green": "#00E765",
        green: "#51FFAB",
        "off-white": "#F9F9F9",
        "parrot-green": "#06FF88",
        "bright-green": "#05ED38",
        "deep-gray": "#5A5A5A",
      },
      fontSize: {
        "custom-2xl": "32px",
        "custom-3xl": "40px",
        "custom-4xl": "52px",
        "custom-5xl": "64px",
        "custom-6xl": "84px",
      },
      lineHeight: {
        "custom-xl": "17.71px",
        "custom-2xl": "18px",
        "custom-3xl": "19.5px",
        "custom-4xl": "19.6px",
        "custom-5xl": "20.6px",
        "custom-6xl": "20.24px",
        "custom-8xl": "26.91px",
        "custom-9xl": "30px",
        "custom-10xl": "32.48px",
        "custom-11xl": "45px",
        "custom-12xl": "47.84px",
        "custom-13xl": "50.6px",
        "custom-14xl": "64px",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/images/webp/hero-bg-img.webp')",
        "white-pattern": "url('/assets/images/webp/icon-slider-bg.webp')",
        "pricing-table": "url('/assets/images/webp/pricing-table-bg.webp')",
        "e-commerce": "url('/assets/images/webp/e-commerce-bg.webp')",
      },
    },
  },
  plugins: [],
};
