// import React, { AriaRole, ButtonHTMLAttributes } from 'react';
// import { ITypography, Typography } from '../DeprecatedTypography';
// import clsx, { ClassValue } from 'clsx';
// import fp from 'lodash/fp';

import { TailwindColorText } from "@/lib/css";
import { ITypography } from "../Typography";
import { tv } from "tailwind-variants";

// import styles from './styles.module.scss';
// import { colors } from 'Lib/utils/css';

// interface IButton {
//   colorBehavior: 'main_blue' | 'main_blue_outline' | 'locked_val';
//   colorText?: keyof typeof colors;
//   htmlType?: 'submit' | 'reset' | 'button';
//   onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
//   role?: AriaRole;
//   disabled?: boolean;
//   className?: ClassValue;
//   typographyAttr?: ITypography;
//   leftIcon?: (...args: any) => React.ReactNode;
//   rightIcon?: (...args: any) => React.ReactNode;
//   size?: 'sm';
//   children: any;
// }

const variants = tv({
  base: "border-solid rounded-none", // base styles
  variants: {
    locked_val: {
      true: {
        is_outline: false,
        text: "text-red-500",
        border: "border-blue-500",
        background: "bg-green-500",
        hover: "hover:bg-blue-500",
        hover_border: "hover:border-red-500",
        active: "active:bg-yellow-500",
        active_border: "active:border-pink-500",
        disabled_border: "border-black",
        disabled: "bg-gray-500",
        disabled_text: "text-black",
      },
    },
    locked_val_outline: {
      true: {
        is_outline: true,
        border: "border-red-500",
        hover_border: "hover:border-green-500",
        active_border: "active:border-pink-500",
        disabled_border: "border-green-500",
        disabled: "bg-yellow-500",
        disabled_text: "text-black",
      },
    },
    main_blue: {
      true: {
        is_outline: false,
        text: "text-white",
        border: "border-primary-500",
        background: "bg-primary-500",
        hover: "hover:bg-primary-700",
        hover_border: "hover:border-primary-700",
        active: "active:bg-primary-900",
        active_border: "active:border-primary-900",
        disabled_border: "border-black",
        disabled: "bg-gray-500",
        disabled_text: "text-black",
      },
    },
    main_blue_outline: {
      true: {
        is_outline: true,
        text: "text-primary-500",
        border: "border-primary-500",
        hover: "hover:bg-primary-700",
        hover_border: "hover:border-primary-500",
        hover_text: "hover:text-white",
        active: "active:bg-primary-900",
        active_border: "active:border-primary-500",
        disabled_border: "border-black",
        disabled: "bg-gray-500",
        disabled_text: "text-black",
      },
    },
  },
});

type ButtonVariant =
  | "main_blue_outline"
  | "main_blue"
  | "locked_val_outline"
  | "locked_val";

interface IButton {
  colorText?: TailwindColorText;
  variant?: ButtonVariant;
  htmlType?: "submit" | "reset" | "button";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  role?: string;
  disabled?: boolean;
  className?: string;
  typographyAttr?: ITypography;
  children?: React.ReactNode;
}

export const Button = (props: IButton) => {
  return (
    <button
      className={`${variants({ [props.variant as string]: true })} ${
        props.colorText ?? "text-primary-600"
      }`}
    >
      {props.children}
    </button>
  );
};

// export const Button: (props: IButton) => JSX.Element = ({
//   colorBehavior,
//   htmlType,
//   onClick,
//   role,
//   disabled,
//   className,
//   leftIcon,
//   rightIcon,
//   colorText,
//   children,
//   typographyAttr,
//   size = '',
// }) => {
//   return (
//     <button
//       className={clsx(
//         styles.base,
//         styles[`size_${size}`],
//         styles[`btn_${colorBehavior}`],
//         className || '',
//       )}
//       disabled={!!disabled}
//       role={role!}
//       onClick={onClick as any}
//       type={fp.isString(htmlType) ? htmlType : ('button' as any)}
//     >
//       <Typography
//         left={leftIcon!}
//         right={rightIcon!}
//         color={colorText || 'white'}
//         blockColor
//         {...typographyAttr}
//       >
//         {children}
//       </Typography>
//     </button>
//   );
// };
