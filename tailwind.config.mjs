/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"VT323"', 'monospace'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        background: '#0D0D0F',
        surface: '#1A1A1E',
        vhs: '#050506',
        neonCyan: '#04D9FF',
        neonPink: '#FF4FD8',
        neonPurple: '#9E4AFF',
        amber: '#FEC20B',
        machineGreen: '#00FF7F',
        plcBlue: '#1F75FF',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(4,217,255,0.6)',
        'neon-pink': '0 0 20px rgba(255,79,216,0.6)',
      },
      animation: {
        'cursor-blink': 'cursor-blink 1.1s step-end infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'hero-glow': 'hero-glow 8s ease-in-out infinite',
      },
      keyframes: {
        'cursor-blink': {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        'hero-glow': {
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
