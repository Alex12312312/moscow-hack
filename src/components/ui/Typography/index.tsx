// import React from 'react';
// import clsx, { ClassValue } from 'clsx';
// import { colors } from 'Lib/utils/css';
// import type { TailwindColor, TailwindColorText } from 'Lib/utils/css';
// import { Manrope } from 'next/font/google';
// import { tv } from 'tailwind-variants';

import {
  TailwindColorText,
  TailwindColor as TailwindColorTexT,
} from "@/lib/css";
import { tv } from "tailwind-variants";

// const manrope = Manrope({
//   subsets: ['latin'],
//   style: 'normal',
//   weight: ['200', '400', '600', '700'],
// });

// function typographyToStyle(type: ITypographyTypes) {
//   const value = type as string;

//   const [size, font] = value.split('_');

//   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//   // @ts-expect-error
//   return typography({ size, font });
// }

// type ITypographyTypes =
//   | `p${1 | 2 | 3 | 4}_${'regular' | 'medium' | 'semibold' | 'bold'}`
//   | `h${1 | 2 | 3 | 4}`;

// export interface ITypography {
//   type?: ITypographyTypes;
//   color?: TailwindColorText;
//   blockColor?: boolean;
//   className?: ClassValue;
//   deepClasses?: ClassValue;
//   onClick?: (...args: any) => void;
//   noInline?: boolean;
//   position?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
//   left?: (args: any) => React.ReactNode;
//   right?: (args: any) => React.ReactNode;
//   children?: any;
// }

// export const Typography: (props: ITypography) => JSX.Element = ({
//   type = 'p1_regular',
//   color = 'text-dark-600',
//   onClick,
//   className,
//   noInline,
//   position = 'start',
//   left,
//   right,
//   blockColor,
//   deepClasses,
//   children,
// }) => {
//   return (
//     <>
//       <div
//         className={clsx(
//           typographyToStyle(type),
//           manrope.className,
//           color,
//           className,
//         )}
//         tabIndex={-1}
//         role={!!onClick ? 'button' : ''}
//         onClick={() => onClick && onClick()}
//       >
//         {left && <div className="pr-2 flex">{left({ color })}</div>}
//         <div className={clsx(deepClasses || '')}>{children}</div>
//         {right && <div className="pr-2 flex">{right({ color })}</div>}
//       </div>
//     </>
//   );
// };

type TypographySize = `p${1 | 2 | 3 | 4}` | `h${1 | 2 | 3 | 4}`;
type TypographyFont = "regular" | "medium" | "semibold" | "bold";

const variants = tv({
  variants: {
    size: {
      p1: "text-[12px] leading-6",
      p2: "text-[14px] leading-6",
      p3: "text-[16px] leading-6",
      p4: "text-[18px] leading-6",
      h1: "text-[36px] leading-8",
      h2: "text-[28px] leading-7",
      h3: "text-[24px] leading-7",
      h4: "text-[20px] leading-7",
    },
    font: {
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
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

export const Typography = (props: ITypography) => {
  const { size, font, color } = props;
  return (
    <div
      className={`${variants({
        size: size ?? "p1",
        font: font ?? "regular",
      })} ${color}`}
    >
      {props.children}
    </div>
  );
};
