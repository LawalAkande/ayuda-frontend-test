/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Salmon: "#FF7465",
        PersianGreen: "#00A09A",
        MountainMist: "#9198A2",
        SoftBlue: "#5785FB",
        CottonSeed: "#BDBDBD",
        BattleshipGrey: "#828282",
        Scampi: "#565AA5",
        Scampi: "#565AA5",
        EbonyClay: "#20253A",
      },
      fontFamily: {
        brown_regular: ["Brown-Regular"],
        ttnormspro_light: ["TTNormsPro-Light"],
        ttnormspro_extra_light: ["TTNormsPro-ExtraLight"],
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "70%": "70%",
        "90%": "90%",
        "100%": "100%",
        16: "4rem",
      },
      container: {
        center: true,
        padding: "1.5rem",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1100px",
        xl: "1100px",
        "2xl": "1100px",
      },
      backgroundImage: {
        "header-one": "url('/src/assets/svgs/header_bg_one.svg')",
        "header-tw": "url('/src/assets/svgs/header_bg_two.svg')",
        "footer-bg-img": "url('/src/assets/svgs/footer-bg.svg')",
      },
    },
  },
  plugins: [],
};
