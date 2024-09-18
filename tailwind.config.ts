import type {Config} from "tailwindcss";

const config = {
    plugins: [],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx,css,scss}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx,css,scss}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx,css,scss}",
    ],
    theme: {
        extend: {
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
            },
            colors: {
                black: 'var(--color-black)',
                white: 'var(--color-white)',
                accent: {
                    100: 'var(--color-accent-100)',
                    200: 'var(--color-accent-200)',
                    300: 'var(--color-accent-300)',
                    400: 'var(--color-accent-400)',
                    500: 'var(--color-accent-500)',
                    600: 'var(--color-accent-600)',
                    700: 'var(--color-accent-700)',
                    800: 'var(--color-accent-800)',
                },
                dark: {
                    100: 'var(--color-dark-100)',
                    200: 'var(--color-dark-200)',
                    300: 'var(--color-dark-300)',
                    400: 'var(--color-dark-400)',
                    500: 'var(--color-dark-500)',
                    600: 'var(--color-dark-600)',
                    700: 'var(--color-dark-700)',
                    800: 'var(--color-dark-800)',
                },
                neutral: {
                    100: 'var(--color-neutral-100)',
                    200: 'var(--color-neutral-200)',
                    300: 'var(--color-neutral-300)',
                    400: 'var(--color-neutral-400)',
                    500: 'var(--color-neutral-500)',
                    600: 'var(--color-neutral-600)',
                    700: 'var(--color-neutral-700)',
                    800: 'var(--color-neutral-800)',
                },
                error: {
                    100: 'var(--color-error-100)',
                    200: 'var(--color-error-200)',
                    300: 'var(--color-error-300)',
                    400: 'var(--color-error-400)',
                },
                success: {
                    100: 'var(--color-success-100)',
                    200: 'var(--color-success-200)',
                    300: 'var(--color-success-300)',
                    400: 'var(--color-success-400)',
                },
                warning: {
                    100: 'var(--color-warning-100)',
                    200: 'var(--color-warning-200)',
                    300: 'var(--color-warning-300)',
                    400: 'var(--color-warning-400)',
                },
                info: {
                    100: 'var(--color-info-100)',
                    200: 'var(--color-info-200)',
                    300: 'var(--color-info-300)',
                    400: 'var(--color-info-400)',
                },
            },
            padding: {
                1: 'var(--padding-1x)',
                2: 'var(--padding-2x)',
                3: 'var(--padding-3x)',
                4: 'var(--padding-4x)',
                5: 'var(--padding-5x)',
                6: 'var(--padding-6x)',
                7: 'var(--padding-7x)',
                8: 'var(--padding-8x)',
                9: 'var(--padding-9x)',
                10: 'var(--padding-10x)',
                11: 'var(--padding-11x)',
                12: 'var(--padding-12x)',
                13: 'var(--padding-13x)',
                14: 'var(--padding-14x)',
                15: 'var(--padding-15x)',
                16: 'var(--padding-16x)',
            }
        },
    }
};
export default config;
