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

const buttonVariants = tv<TVProps, any, any, any>({
    variants: {
        background: {
            primary: 'bg-accent-600 hover:bg-accent-500 focus:bg-accent-700',
            secondary: 'bg-accent-100 hover:bg-accent-200 focus:bg-accent-300',
            tertiary: 'bg-neutral-100 hover:bg-neutral-300 focus:hover:bg-neutral-500',
            disabled: 'bg-neutral-200',
        },
        textColor: {
            primary: 'text-neutral-300 hover:text-neutral-400 focus:text-neutral-100',
            secondary: 'text-accent-500 hover:text-accent-500 focus:text-accent-600',
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

// primary button styles
const basePrimaryButton = (padding: keyof PaddingScheme | undefined, rounding: keyof RoundingScheme | undefined) => buttonVariants({
    background: 'primary',
    textColor: 'primary',
    padding: padding,
    rounding: rounding,
});

export const primaryButton = basePrimaryButton('default', 'default');

export const roundedPrimaryButton = basePrimaryButton('default', 'custom');

export const miniPrimaryButton = basePrimaryButton('mini', 'default');

export const miniRoundedPrimaryButton = basePrimaryButton('mini', 'custom');

// secondary button styles
const baseSecondaryButton = (padding: keyof PaddingScheme | undefined, rounding: keyof RoundingScheme | undefined) => buttonVariants({
    background: 'secondary',
    textColor: 'secondary',
    padding: padding,
    rounding: rounding,
});

export const secondaryButton = baseSecondaryButton('default', 'default');

export const roundedSecondaryButton = baseSecondaryButton('default', 'custom');

export const miniSecondaryButton = baseSecondaryButton('mini', 'default');

export const miniRoundedSecondaryButton = baseSecondaryButton('mini', 'custom');

// tertiary button styles
const baseTertiaryButton = (padding: keyof PaddingScheme | undefined, rounding: keyof RoundingScheme | undefined) => buttonVariants({
    background: 'tertiary',
    textColor: 'tertiary',
    padding: padding,
    rounding: rounding,
});

export const tertiaryButton = baseTertiaryButton('default', 'default');

export const roundedTertiaryButton = baseTertiaryButton('default', 'custom');

export const miniTertiaryButton = baseTertiaryButton('mini', 'default');

export const miniRoundedTertiaryButton = baseTertiaryButton('mini', 'custom');
