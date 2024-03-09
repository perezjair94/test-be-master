import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        appear: {
          '0%': { opacity: '0', top: '10px' },
          '100%': { opacity: '1', top: '0' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
