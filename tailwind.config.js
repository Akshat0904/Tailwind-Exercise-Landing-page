/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        17: "17px",
        19: "19px",
        29: "29px",
        24: "24px",
        44: "44px",
        50: "50px",
        52: "52px",
        60: "60px",
        69: "69px",
        77: "77px",
        94: "94px",
        100: "100px",
        123: "123px",
        124: "124px",
        132: "132px",
        158: "158px",
        187: "187px",
        195: "195px",
        207: "207px",
        284: "284px",
        310: "310px",
        351: "351px",
        356: "356px",
        552: "552px",
        584: "584px",
        749: "749px",
        607: "607px",
        1440: "1440px",
      },
      colors: {
        "at-primary-blue": "#0D154B",
        "at-primary-white": "#F7F8FD",
        "at-gray-100": "#8E8FA5",
        "at-gray-200": "#383A4D",
        "at-gray-500": "#252739",
        "at-white-100": "#E6E0EC",
        "at-white-50": "#FFF",
        "at-blue-100": "#56C6E7",
        "at-purple-100": "#8A6CF9",
      },
      blur: {
        "5xl": "200px",
      },
      backgroundImage: {
        "h1-gradient":
          "linear-gradient(90deg, #6F48FC 21.63%, #D07EF6 60.55%, #56C6E7 79.11%)",
      },
    },
    // fontSize: {
    //   57: "57px",
    // },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    boxShadow: {
      dropShadow:
        "0px 1px 1px 0px rgba(0, 0, 0, 0.10), 0px 2px 2px 0px rgba(0, 0, 0, 0.09), 0px 5px 3px 0px rgba(0, 0, 0, 0.05), 0px 9px 4px 0px rgba(0, 0, 0, 0.01), 0px 14px 4px 0px rgba(0, 0, 0, 0.00)",
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
      64: "64px",
    },
  },
  plugins: [],
};
