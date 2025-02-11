/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'win98': {
                    'desktop': '#008080',
                    'taskbar': '#c0c0c0',
                    'window': {
                        'border': '#dfdfdf',
                        'border-dark': '#404040',
                        'title': '#000080',
                        'title-text': '#ffffff',
                    },
                    'button': {
                        'face': '#c0c0c0',
                        'highlight': '#ffffff',
                        'shadow': '#808080',
                        'text': '#000000',
                    }
                }
            },
            spacing: {
                'taskbar': '2.5rem',
            },
            boxShadow: {
                'win98-btn': 'inset -1px -1px #0a0a0a,inset 1px 1px #ffffff,inset -2px -2px #808080,inset 2px 2px #dfdfdf',
                'win98-btn-pressed': 'inset -1px -1px #ffffff,inset 1px 1px #0a0a0a,inset -2px -2px #dfdfdf,inset 2px 2px #808080',
            },
            keyframes: {
                'window-open': {
                    '0%': {
                        transform: 'scale(0.95)',
                        opacity: '0'
                    },
                    '100%': {
                        transform: 'scale(1)',
                        opacity: '1'
                    }
                }
            },
            animation: {
                'window-open': 'window-open 0.15s ease-out'
            }
        },
    },
    plugins: [],
}