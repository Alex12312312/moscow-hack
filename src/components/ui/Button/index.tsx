import { ITypography, Typography } from '../Typography';
import React, { ReactNode } from 'react';
import {
    buttonVariants,
    ColorSchemeType,
    JustifySchemeType,
    PaddingSchemeType,
    RoundingSchemeType
} from 'Components/ui/Button/buttonVariants';
import clsx from 'clsx';

interface IButton {
    buttonVariantStyles?: string
    colorScheme?: ColorSchemeType;
    roundingScheme?: RoundingSchemeType;
    paddingScheme?: PaddingSchemeType;
    justifyingScheme?:JustifySchemeType;
    htmlType?: 'submit' | 'reset' | 'button';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    typographyAttr?: ITypography;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode
    children?: ReactNode;
}

export const Button = (props: IButton) => {
    return <button
        className={clsx(
            props.className,
            props.buttonVariantStyles,
            buttonVariants({
                colorScheme: props.colorScheme ?? 'primary',
                padding: props.paddingScheme ?? 'default',
                rounding: props.roundingScheme ?? 'default',
            })
        )}
        onClick={props.onClick}
        type={props.htmlType}
    >
        <Typography
            size={props.typographyAttr?.size ?? 'base1'}
            font={props.typographyAttr?.font ?? 'regular'}
        >
            <div className={`flex gap-[12px] ${buttonVariants({
                justifying: props.justifyingScheme ?? 'default',
            })}`}>
                {props.leftIcon}
                {props.children}
                {props.rightIcon}
            </div>
        </Typography>
    </button>
};