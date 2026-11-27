export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#98577E', secondary: '#753653', plum: '#521D3C', burgundy: '#350D27',
        accent: '#B7799B', soft: '#E9D6E2',
        // palette printed on the "Thank You" slide
        ink: '#270317', wine: '#430d28', grape: '#5e1e42', blush: '#cca7bc',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Oswald', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
        alt: ['Inter', 'sans-serif'],
      },
      boxShadow: { glass: '0 10px 40px -10px rgba(20,0,12,.55)' },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        drift: { to: { strokeDashoffset: '-600' } },
        twinkle: { '0%,100%': { opacity: '.15' }, '50%': { opacity: '.8' } },
      },
      animation: { float: 'float 7s ease-in-out infinite', drift: 'drift 40s linear infinite', twinkle: 'twinkle 5s ease-in-out infinite' },
    },
  },
  plugins: [],
}
