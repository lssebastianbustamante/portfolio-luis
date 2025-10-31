import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "portfolio-blue": "#0d6efd",
        "portfolio-gray-light": "#e6e5e5",
        "portfolio-gray-normal": "#ececec",
        "portfolio-gray": "#e0e0e0",
        "portfolio-dark": "#212529",
        "portfolio-orange": "#fb733c",
      },
      fontSize: {
        "14": ["14px", "23px"],
        "16": ["16px", "25px"],
        "17": ["17px", "26px"],
        "20": ["20px", "30px"],
        "25": ["25.6px", "30px"],
        "32": ["32px", "37px"],
      },
      maxWidth: {
        "screen-lg": "1320px",
      },
      backgroundImage: {
        "icon-icocall": "url('/images/icons/icocall.png')",
      },
      backgroundColor: theme => ({
        'alertCard': 'rgba(255,255,255,.75)',
        'alertCardBlack': 'rgba(0,0,0,.7)',
      }),
      boxShadow: {
        alertCard: "0px 0px 25px rgba(0,0,0,.25)",
      },
      backdropBlur: {
        alerCardBlur: "10px",
      },
      backgroundSize: {
        '23': '23px'
      }
    },
  },
  plugins: [],
};
export default config;