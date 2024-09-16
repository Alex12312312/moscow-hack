import {tv} from 'tailwind-variants';

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
    custom: string;
}

interface TVProps {
    background: ColorScheme;
    textColor: ColorScheme;
    padding: PaddingScheme;
    rounding: RoundingScheme;
}

export const buttonVariants = tv<TVProps, any, any, any>({
    variants: {
        background: {
            primary: 'bg-accent-600 hover:bg-accent-700 focus:bg-accent-800',
            secondary: 'bg-accent-100 hover:bg-accent-200 focus:bg-accent-300',
            tertiary: 'bg-white hover:bg-neutral-200 focus:hover:bg-neutral-300',
            disabled: 'bg-neutral-200',
        },
        textColor: {
            primary: 'text-white',
            secondary: 'text-accent-600',
            tertiary: 'text-black',
            disabled: 'text-neutral-400',
        },
        padding: {
            default: 'pt-3 pb-3 pl-8 pr-8',
            mini: 'pt-3 pb-3 pl-3 pr-3'
        },
        rounding: {
            default: 'rounded-xl',
            custom: 'rounded-full'
        }
    }
});

export type ColorSchemeType = keyof ColorScheme
export type RoundingSchemeType = keyof RoundingScheme
export type PaddingSchemeType = keyof PaddingScheme