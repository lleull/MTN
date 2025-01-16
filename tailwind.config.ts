import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        bgcustom: '#0B1D26',
        orangeLine: '#FBD784',
      },
      fontFamily: {
        chronic: ['Chronicle'], // Add your custom font
      },
    },
  },
  plugins: [],
} satisfies Config
