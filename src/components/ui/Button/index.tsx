import {ITypography, Typography} from '../Typography';
import React, {ReactNode} from 'react';
import {
    miniPrimaryButton,
    miniRoundedPrimaryButton,
    miniRoundedSecondaryButton,
    miniRoundedTertiaryButton,
    miniSecondaryButton,
    miniTertiaryButton,
    primaryButton,
    roundedPrimaryButton,
    roundedSecondaryButton,
    roundedTertiaryButton,
    secondaryButton,
    tertiaryButton
} from 'Components/ui/Button/buttonVariants';

interface IButton {
    buttonVariantStyles?: string
    htmlType?: 'submit' | 'reset' | 'button';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    typographyAttr?: ITypography;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode
    children?: ReactNode;
}

const BaseButton = (props: IButton) => {
    return <button
        className={`${props.className} ${props.buttonVariantStyles}`}
        onClick={props.onClick}
        type={props.htmlType}
    >
        <Typography
            size={props.typographyAttr?.size ?? 'base1'}
            font={props.typographyAttr?.font ?? 'regular'}
        >
            <div className={'flex gap-[12px] justify-center'}>
                {props.leftIcon}
                {props.children}
                {props.rightIcon}
            </div>
        </Typography>
    </button>
};

// primary
export const PrimaryButton = (props: IButton) =>
    <BaseButton buttonVariantStyles={primaryButton} {...props} >{props.children}</BaseButton>
export const RoundedPrimaryButton = (props: IButton) =>
    <BaseButton buttonVariantStyles={roundedPrimaryButton} {...props} >{props.children}</BaseButton>
export const MiniPrimaryButton = (props: IButton) =>
    <BaseButton buttonVariantStyles={miniPrimaryButton} {...props} >{props.children}</BaseButton>
export const MiniRoundedPrimaryButton = (props: IButton) =>
    <BaseButton buttonVariantStyles={miniRoundedPrimaryButton} {...props} >{props.children}</BaseButton>

// secondary
export const SecondaryButton = (props: IButton) =>
    <BaseButton buttonVariantStyles={secondaryButton} {...props} >{props.children}</BaseButton>
export const RoundedSecondaryButton = (props: IButton) =>
    <BaseButton buttonVariantStyles={roundedSecondaryButton} {...props} >{props.children}</BaseButton>
export const MiniSecondaryButton = (props: IButton) =>
    <BaseButton buttonVariantStyles={miniSecondaryButton} {...props} >{props.children}</BaseButton>
export const MiniRoundedSecondaryButton = (props: IButton) =>
    <BaseButton buttonVariantStyles={miniRoundedSecondaryButton} {...props} >{props.children}</BaseButton>

// secondary
export const TertiaryButton = (props: IButton) =>
    <BaseButton buttonVariantStyles={tertiaryButton} {...props} >{props.children}</BaseButton>
export const RoundedTertiaryButton = (props: IButton) =>
    <BaseButton buttonVariantStyles={roundedTertiaryButton} {...props} >{props.children}</BaseButton>
export const MiniTertiaryButton = (props: IButton) =>
    <BaseButton buttonVariantStyles={miniTertiaryButton} {...props} >{props.children}</BaseButton>
export const MiniRoundedTertiaryButton = (props: IButton) =>
    <BaseButton buttonVariantStyles={miniRoundedTertiaryButton} {...props} >{props.children}</BaseButton>
