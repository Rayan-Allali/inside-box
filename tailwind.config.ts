import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        sidebar: [
          "0 0px 139px rgba(0, 0, 0, 0.0)",
          "0 0px 89px rgba(0, 0, 0, 0.01)",
          "0 0px 50px rgba(0, 0, 0, 0.03)",
          "0 0px 22px rgba(0, 0, 0, 0.04)",
          "0 0px 6px rgba(0, 0, 0, 0.05)",
        ],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'gray-light': '#d6d6d6',
      },
      colors:{
        primaryBleu:"#07A2F3",
        'primary-black': '#1B1B1B',
        'green-primary': '#38CFBA',
        'red-primary': '#F00',
        'blue-text': '#896DDB',
        'gray-text': '#333333b7',
      },
      boxShadow: {
        sidebar: '0px 6px 12px 0px rgba(0, 0, 0, 0.05), 0px 22px 22px 0px rgba(0, 0, 0, 0.04), 0px 50px 30px 0px rgba(0, 0, 0, 0.03), 0px 89px 36px 0px rgba(0, 0, 0, 0.01), 0px 139px 39px 0px rgba(0, 0, 0, 0.00)'
      },
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif']
      }
    },
  },
  plugins: [],
}
export default config
