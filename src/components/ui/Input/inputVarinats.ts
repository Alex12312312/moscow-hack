import { tv } from 'tailwind-variants';

interface ColorScheme {
    white: string;
    gray: string;
}

interface RoundingScheme {
    default: string;
    rounded: string;
}

interface ExtraStates {
    warn: string
    error: string
    success: string

}

interface TVInputProps {
    colorScheme: ColorScheme;
    roundingScheme: RoundingScheme;
}

interface TVInputTextProps {
    colorScheme: ColorScheme;
}

export const inputVariants = tv<TVInputProps, any, any, any, string>({
    base: 'pt-3 pb-3 pl-4 pr-4',
    variants: {
        colorScheme: {
            white: 'border border-white custom-border bg-white transition-all duration-200' +
                'hover:border-1 hover:border-solid hover:border-neutral-600 ' +
                'focus:border-solid focus:border-1 peer-focus:border-1',
            gray: 'border border-white bg-neutral-200 border-1 border-solid ' +
                'hover:border-neutral-600 hover:border-solid hover:border-1 ' +
                'focus:border-solid focus:border-1 peer-focus:border-1'
        },
        roundingScheme: {
            default: 'rounded-xl',
            rounded: 'rounded-full'
        }
    }
});

export type ColorSchemeType = keyof ColorScheme
export type RoundedSchemeType = keyof RoundingScheme
export type ExtraStatesType = keyof ExtraStates