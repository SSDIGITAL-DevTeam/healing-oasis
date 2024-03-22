import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#716040',
                secondary: '#A67951',
                highlight: '#EADDCF',
                light: '#FFFBF8',
            },
            container: {
                center: true,
                padding: '2rem',
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1200px',
                    '2xl': '1280px',
                },
            },
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
            },
        },
    },
    darkMode: 'class',
    plugins: [nextui()],
}
export default config
