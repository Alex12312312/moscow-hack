import { tv } from 'tailwind-variants';

interface ColorScheme {
    primary: string;
    secondary: string;
    tertiary: string;
    disabled: string;
}

interface PaddingScheme {
    default: string;
    mini: string;
}

interface RoundingScheme {
    default: string;
    rounded: string;
}

interface TVProps {
    colorScheme: ColorScheme;
    padding: PaddingScheme;
    rounding: RoundingScheme;
}

export const buttonVariants = tv<TVProps, any, any, any>({
    variants: {
        colorScheme: {
            primary: 'bg-accent-600 hover:bg-accent-700 focus:bg-accent-800 text-white',
            secondary: 'bg-accent-100 hover:bg-accent-200 focus:bg-accent-300 text-accent-600',
            tertiary: 'bg-white hover:bg-neutral-200 focus:hover:bg-neutral-300 text-black',
            disabled: 'bg-neutral-200 text-neutral-400',
        },
        padding: {
            default: 'pt-3 pb-3 pl-8 pr-8',
            mini: 'pt-3 pb-3 pl-3 pr-3'
        },
        rounding: {
            default: 'rounded-xl',
            rounded: 'rounded-full'
        }
    }
});

export type ColorSchemeType = keyof ColorScheme
export type RoundingSchemeType = keyof RoundingScheme
export type PaddingSchemeType = keyof PaddingScheme