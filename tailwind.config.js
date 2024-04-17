/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'text': '0 2px 4px #fff',
      },
      costumClass:{'textClass':['absolute z-50 backdrop-blur-lg rounded-2xl text-center px-3 top-1/3 left-1/3 text-4xl text-yellow-300 w-1/3']},
      
      fontFamily: {
        'fa1': ['Amiri', 'serif'],
        'fa2': ['Noto Naskh Arabic', 'serif'],
        'en1': ['Courgette', 'cursive'],
        'en2': ['Lato', 'sans-serif'],
        'en3': ['Delius', 'cursive'],
      },
      colors: {
        'abiTire': '#060047',
        'abiRoshan': '#9399FF',
        'abiRoshan2': '#A9FFFD',
        'goldRoshan': '#F8DE22',
        'goldTire': '#FFB000',
        'banafshTire': '#460C68',
        'banafshRoshan': '#7F167F',
        'suratiTire': '#B3005E',
        'suratiRoshan': '#734d60',
        'suratiRoshan2': '#F6BED6',
        'khakestariRoshan': 'rgb(122, 122, 122)',
        'khakestariTire': '#303030',
      },
      boxShadow: {
        'neoShadow1': '-3px 3px 2px #00000088, inset 3px -3px 5px #000e24af, 3px -3px 5px #ffffffe5, inset -3px 3px 5px #ffffffc5',
      },
      textShadow: {
        'light': '0px 0px 2px #ffffff',
      },
    },
  },
  plugins: [],
}

