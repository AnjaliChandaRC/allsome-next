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
        floatStarTwo: "floatStarTwo 15s ease-in-out infinite",
        floatStarThree: "floatStarThree 14s ease-in-out infinite",
        floatStarFour: "floatStarFour 13s ease-in-out infinite",
        floatStarFive: "floatStarFive 12s ease-in-out infinite",
        floatStarSix: "floatStarSix 14s ease-in-out infinite",
        zoomin: 'zoomin 2s infinite alternate ease-in-out',
        zoomout: 'zoomout 2s infinite alternate ease-in-out',
        'spin-slow': 'spin 20s linear infinite',
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
        zoomin: {
          '0%': {
            transform: 'scale(.8)',
            opacity: '0.6'
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
        floatStarTwo: {
          '0%': {
            transform: 'translateY(30px) translateX(40px)',
          },
          '20%': {
            transform: 'translateY(-20px) translateX(60px)',
          },
          '40%': {
            transform: 'translateY(-50px) translateX(-30px)',
          },
          '60%': {
            transform: 'translateY(10px) translateX(-60px)',
          },
          '80%': {
            transform: 'translateY(40px) translateX(50px)',
          },
          '100%': {
            transform: 'translateY(30px) translateX(40px)',
          },
        },
        floatStarThree: {
          '0%': {
            transform: 'translateY(30px) translateX(40px) scale(1)',
          },
          '25%': {
            transform: 'translateY(-10px) translateX(70px) scale(1.1)',
          },
          '50%': {
            transform: 'translateY(-40px) translateX(-50px) scale(0.95)',
          },
          '75%': {
            transform: 'translateY(20px) translateX(-80px) scale(1.05)',
          },
          '100%': {
            transform: 'translateY(30px) translateX(40px) scale(1)',
          },
        },
        floatStarFour: {
          '0%': {
            transform: 'translateY(30px) translateX(40px) scale(1)',
          },
          '25%': {
            transform: 'translateY(-10px) translateX(70px) scale(1.1)',
          },
          '50%': {
            transform: 'translateY(-40px) translateX(-50px) scale(0.95)',
          },
          '75%': {
            transform: 'translateY(20px) translateX(-80px) scale(1.05)',
          },
          '100%': {
            transform: 'translateY(30px) translateX(40px) scale(1)',
          },
        },
        floatStarFive: {
          '0%': {
            transform: 'translateY(30px) translateX(5px) scale(1)',
          },
          '10%': {
            transform: 'translateY(25px) translateX(8px) scale(1.05)',
          },
          '25%': {
            transform: 'translateY(-20px) translateX(-4px) scale(1)',
          },
          '40%': {
            transform: 'translateY(15px) translateX(6px) scale(1.05)',
          },
          '55%': {
            transform: 'translateY(-10px) translateX(-3px) scale(0.95)',
          },
          '70%': {
            transform: 'translateY(5px) translateX(4px) scale(1.05)',
          },
          '85%': {
            transform: 'translateY(-5px) translateX(-6px) scale(1)',
          },
          '100%': {
            transform: 'translateY(30px) translateX(5px) scale(1)',
          },
        },
        floatStarSix: {
          '0%': {
            transform: 'translateY(30px) translateX(5px) scale(1)',
          },
          '7%': {
            transform: 'translateY(28px) translateX(6px) scale(1.05)',
          },
          '14%': {
            transform: 'translateY(15px) translateX(12px) scale(1.1)',
          },
          '22%': {
            transform: 'translateY(-25px) translateX(-8px) scale(0.95)',
          },
          '30%': {
            transform: 'translateY(8px) translateX(5px) scale(1.05)',
          },
          '42%': {
            transform: 'translateY(10px) translateX(-6px) scale(0.98)',
          },
          '55%': {
            transform: 'translateY(0px) translateX(3px) scale(1.12)',
          },
          '68%': {
            transform: 'translateY(-15px) translateX(-10px) scale(1)',
          },
          '78%': {
            transform: 'translateY(5px) translateX(4px) scale(1.05)',
          },
          '90%': {
            transform: 'translateY(-10px) translateX(8px) scale(1.05)',
          },
          '100%': {
            transform: 'translateY(30px) translateX(5px) scale(1)',
          },
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
