export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-hover': '#D29A5A', 
        'custom-active': '#D29A5A' ,        
        'heading' : "#D29A5A"
      },
      width: {
        'main-content-width': 'calc(100vw - 90px)', 
      } ,
      fontFamily: {
         poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        'large': '1900px',
        'mid' : '925px' ,
        'small' : '700px',
        'verysmall' : '620px' ,
        'mobile' : '412px'
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.common-menu-item': {
          '@apply font-poppins font-normal px-2 py-3 text-white cursor-pointer hover:text-custom-hover transition-colors duration-200 ease-in': {},
        },
        '.currentlyActive': {
          '@apply text-custom-active': {}, // Text color when active
        }
      });
    },
  ],
}