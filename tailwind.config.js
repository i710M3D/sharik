/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'smn': '500px',
      'mdn': '600px',
      'lgn': '1024px',
      'xln': '1300px',
        'md':{'max' : '770px' } ,
        'mdm':{'min' : '771px' } ,
        'lg':{'max' : '978px' } ,
        'lgm':{'min' : '979px' }
    },
    extend: { fontFamily: {
      jost:['Jost'],
      mon:['Montserrat'],
      pop:['Poppins']
    }
    
    },
  },
  plugins: [],
}
