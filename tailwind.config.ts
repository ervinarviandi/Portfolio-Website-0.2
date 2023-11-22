import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // backgrounddark: "#0c1222",
        backgrounddark: "#111111",
        backgroundlight: "#fdfefe",
        dark: {
          '100': "#a5aeb8",
          // '200': "#a5aeb8"
        },
        white: {
          '100': "#475569"
        }
        
      },
    },
  },
  plugins: [],
}
export default config
