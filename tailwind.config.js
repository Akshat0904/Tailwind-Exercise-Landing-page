/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        2: "2px",
        10: "10px",
        11: "11px",
        20: "20px",
        17: "17px",
        19: "19px",
        29: "29px",
        22: "22px",
        24: "24px",
        40: "40px",
        44: "44px",
        50: "50px",
        52: "52px",
        60: "60px",
        68: "68px",
        69: "69px",
        75: "75px",
        77: "77px",
        85: "85px",
        94: "94px",
        100: "100px",
        102: "102px",
        107: "107px",
        116: "116px",
        123: "123px",
        124: "124px",
        132: "132px",
        158: "158px",
        169: "169px",
        187: "187px",
        195: "195px",
        207: "207px",
        221: "221px",
        250: "250px",
        253: "253px",
        266: "266px",
        284: "284px",
        310: "310px",
        323: "323px",
        325: "325px",
        334: "334px",
        350: "350px",
        351: "351px",
        356: "356px",
        358: "358px",
        383: "383px",
        452: "452px",
        494: "494px",
        552: "552px",
        582: "582px",
        584: "584px",
        607: "607px",
        686: "686px",
        736: "736px",
        749: "749px",
        1024: "1024px",
        1160: "1160px",
        1440: "1440px",
      },
      colors: {
        "at-primary-blue": "#0D154B",
        "at-primary-white": "#F7F8FD",
        "at-gray-100": "#8E8FA5",
        "at-gray-200": "#383A4D",
        "at-gray-300": "#79757F",
        "at-gray-500": "#252739",
        "at-white-100": "#E6E0EC",
        "at-white-50": "#FFF",
        "at-blue-100": "#56C6E7",
        "at-purple-100": "#8A6CF9",
      },
      blur: {
        "5xl": "200px",
        100: "100px",
      },
      backgroundImage: {
        "h1-gradient":
          "linear-gradient(90deg, #6F48FC 21.63%, #D07EF6 60.55%, #56C6E7 79.11%)",
        "h2-gradient":
          "linear-gradient(270deg, #56C6E7 53.82%, #9747FF 74.83%, #0D154B 103.57%)",
        "h3-gradient":
          "linear-gradient(90deg, #9747FF 20.88%, #9747FF 34.85%, #56C6E7 58.8%)",
      },
      rotate: {
        20: "20deg",
      },
    },
    // fontSize: {
    //   57: "57px",
    // },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    boxShadow: {
      "white-bottom-shadow":
        "0px 1px 1px 0px rgba(0, 0, 0, 0.10), 0px 2px 2px 0px rgba(0, 0, 0, 0.09), 0px 5px 3px 0px rgba(0, 0, 0, 0.05), 0px 9px 4px 0px rgba(0, 0, 0, 0.01), 0px 14px 4px 0px rgba(0, 0, 0, 0.00)",
      "dark-blue-shadow":
        " 0px 5px 11px 0px rgba(0, 0, 0, 0.10), 0px 20px 20px 0px rgba(0, 0, 0, 0.09), 0px 46px 28px 0px rgba(0, 0, 0, 0.05), 0px 82px 33px 0px rgba(0, 0, 0, 0.01), 0px 128px 36px 0px rgba(0, 0, 0, 0.00)",
      "white-full-shadow":
        " 0px 37px 80px 0px rgba(0, 0, 0, 0.10), 0px 146px 146px 0px rgba(0, 0, 0, 0.09), 0px 329px 198px 0px rgba(0, 0, 0, 0.05), 0px 585px 234px 0px rgba(0, 0, 0, 0.01), 0px 915px 256px 0px rgba(0, 0, 0, 0.00)",
      "white-card-shadow":
        "0px 14px 30px 0px rgba(0, 0, 0, 0.05), 0px 54px 54px 0px rgba(0, 0, 0, 0.04), 0px 122px 73px 0px rgba(0, 0, 0, 0.03), 0px 217px 87px 0px rgba(0, 0, 0, 0.01), 0px 339px 95px 0px rgba(0, 0, 0, 0.00)",
    },

    borderRadius: {
      lg: "10px",
      12: "12px",
      99: "99px",
      310: "310px",
      552: "552px",
    },
    // borderWidth: {
    //   10: "10px",
    // },
    letterSpacing: {
      small: "-0.25px",
    },
    lineHeight: {
      32: "32px",
      36: "36px",
      40: "40px",
      52: "52px",
      64: "64px",
    },
  },
  plugins: [],
};
