/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "white": "#FFFFFF",
        "black": "#000000",
        "dark-blue": "#001E3F",
        "light-blue": "#5E81FF",
        "hv-light-blue": '#7392ff',
        "dark-gray": "#717171",
        "slate-gray": "#4B4B4B",
        "light-gray": "#8C8C8C",
        "red": "#C72929",
        "green": "#30C04F",
        "coral": "#EA5455",
        "cyan": "#00CFE8"
      },
      fontFamily: {
        'patua': ['Patua One', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}


