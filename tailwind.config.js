/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'blue', // Add your custom color (e.g., blue)
        secondary: 'blue', // Another custom color
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',  // Vibrant radial gradient
        'gradient-linear': 'linear-gradient(90deg, rgba(72,85,99,1) 0%, rgba(30,64,175,1) 100%)', // Deep blue linear gradient
        'gradient-interactive': 'linear-gradient(135deg, rgba(255,0,150,1) 0%, rgba(0,204,255,1) 100%)', // Hot pink to cyan gradient
      },
      
    },
  },
  plugins: [],
};
