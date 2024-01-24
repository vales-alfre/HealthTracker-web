/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pomegranate: {      /* paleta de colores de la escala de rojo */
          '50': '#fff2ed',
          '100': '#ffe1d4',
          '200': '#ffc0a8',
          '300': '#ff9370',
          '400': '#ff5b37',
          '500': '#ff4122',
          '600': '#f01706',
          '700': '#c70b07',
          '800': '#9e0e11',
          '900': '#7f0f10',
          '950': '#450508',
        },
        java: {                     /* paleta de colores de la escala de rojo aqua */
          '50': '#eefffc',
          '100': '#c6fff9',
          '200': '#8efff4',
          '300': '#4dfbee',
          '400': '#19e8de',
          '500': '#00c3bd',
          '600': '#00a4a3',
          '700': '#028383',
          '800': '#086567',
          '900': '#0c5455',
          '950': '#003134',
        },
        'curious-blue': {                        /* paleta de colores de la escala de rojo celeste */
          '50': '#f0f8ff',
          '100': '#e1f0fd',
          '200': '#bbe1fc',
          '300': '#80c9f9',
          '400': '#3caef4',
          '500': '#1290de',
          '600': '#0675c3',
          '700': '#065d9e',
          '800': '#0a4f82',
          '900': '#0e426c',
          '950': '#092a48',
      },
      'big-stone': {                                /* paleta de colores de la escala de rojo azul */  
        '50': '#eef8ff',
        '100': '#dcf2ff',
        '200': '#b2e7ff',
        '300': '#6dd4ff',
        '400': '#20bfff',
        '500': '#00a7ff',
        '600': '#0085df',
        '700': '#0069b4',
        '800': '#005995',
        '900': '#00497a',
        '950': '#00213a',
    }, 
    'Black-White': {                                           /* paleta de colores de la escala de rojo negro */
      '50': '#ffffff',
      '100': '#efefef',
      '200': '#dcdcdc',
      '300': '#bdbdbd',
      '400': '#989898',
      '500': '#7c7c7c',
      '600': '#656565',
      '700': '#525252',
      '800': '#464646',
      '900': '#3d3d3d',
      '950': '#292929',
  },
  

      },
    },
  },
  plugins: [],
}
