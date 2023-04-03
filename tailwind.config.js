/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "white": "#FFFFFF",
        "black": "#000000",
        "dark-blue": "#001E3F",
        "card-blue": "#17A2B8",
        "light-blue": "#5E81FF",
        "cardbtn-blue": "##60bac8",
        "hv-light-blue": '#7392ff',
        "dark-gray": "#717171",
        "slate-gray": "#4B4B4B",
        "light-gray": "#8C8C8C",
        "hv-gray":"#e6e6e6",
        "soft-gray": "#DFDFDF",
        "red": "#C72929",
        "card-red": "#C53838",
        "cardbtn-red": "#dc8888",
        "hv-red" : "#cc3737",
        "green": "#30C04F",
        "card-green": "#28A745",
        "cardbtn-green": "#5ebc74",
        "coral": "#EA5455",
        "cyan": "#00CFE8",
        "hv-cyan": "#0dd7ef"
      },
      fontFamily: {
        'patua': ['Patua One', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'roboto-mono': ['Roboto Mono', 'monospace']
      },
    },
  },
  plugins: [],
}


