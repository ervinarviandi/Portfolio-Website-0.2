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
        backgrounddark: "#0c0c0c", 
        // bg-default
        // backgrounddark: "#060b13",

        backgroundlight: "#fdfefe",
        dark: {
          '100': "#818181",
          // '100': "#95A0B2",

        },
        white: {
          // '100': "#848484"
          '100': "#2f2f2f"
        }
        
      },
    },
   
  },
  plugins: [],
}
export default config
