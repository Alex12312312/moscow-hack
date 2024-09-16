import {
    TailwindColorText,
} from '@/lib/css';
import {tv} from 'tailwind-variants';
import React from 'react';

type TypographySize = `base${1 | 2 | 3 | 4}` | `h${1 | 2 | 3 | 4}`;
type TypographyFont = 'regular' | 'medium' | 'semibold' | 'bold';

const variants = tv({
    variants: {
        size: {
            base4: 'text-[12px] leading-5',
            base3: 'text-[14px] leading-5',
            base2: 'text-[16px] leading-6',
            base1: 'text-[18px] leading-6',
            h1: 'text-[32px] leading-8',
            h2: 'text-[28px] leading-8',
            h3: 'text-[24px] leading-8',
            h4: 'text-[20px] leading-6',
        },
        font: {
            regular: 'font-normal',
            medium: 'font-medium',
            semibold: 'font-semibold',
            bold: 'font-bold',
        },
    },
});

export interface ITypography {
    size?: TypographySize;
    font?: TypographyFont;
    color?: TailwindColorText;
    className?: string;
    children: React.ReactNode;
}

export const Typography = ({
                               size,
                               font,
                               color,
                               className,
                               children
                           }: ITypography) => {
    return (
        <div
            className={`${variants({
                size: size ?? 'base1',
                font: font ?? 'regular',
            })} ${color} ${className}`}
        >
            {children}
        </div>
    );
};
