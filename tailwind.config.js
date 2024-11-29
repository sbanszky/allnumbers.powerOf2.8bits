/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          mint: '#2FFFA0',
          blue: '#4A90E2',
          purple: '#6B4FBB',
        },
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 10px #2FFFA0' },
          '50%': { textShadow: '0 0 20px #4A90E2' },
          '100%': { textShadow: '0 0 30px #6B4FBB' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px #2FFFA0' },
          '50%': { boxShadow: '0 0 40px #6B4FBB' },
        },
      },
    },
  },
  plugins: [],
};