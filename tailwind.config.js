/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        29: "29px",
        24: "24px",
        52: "52px",
        100: "100px",
        584: "584px",
        1440: "1440px",
      },
      colors: {
        "at-primary-blue": "#0D154B",
        "at-gray-100": "#8E8FA5",
        "at-white-100": "#E6E0EC",
        "at-white-50": "#FFF",
      },
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    boxShadow: {
      dropShadow:
        "0px 1px 1px 0px rgba(0, 0, 0, 0.10), 0px 2px 2px 0px rgba(0, 0, 0, 0.09), 0px 5px 3px 0px rgba(0, 0, 0, 0.05), 0px 9px 4px 0px rgba(0, 0, 0, 0.01), 0px 14px 4px 0px rgba(0, 0, 0, 0.00)",
    },
    borderRadius: {
      10: "10px",
    },
  },
  plugins: [],
};
