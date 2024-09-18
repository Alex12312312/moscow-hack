export type TailwindColor =
  | `${'dark' | 'neutral' | 'accent'}-${
      | 100
      | 200
      | 300
      | 400
      | 500
      | 600
      | 700
      | 800}`
  | `${'error' | 'success' | 'info' | 'warning'}-${100 | 200 | 300 | 400}` | 'white' | 'black';

export type TailwindColorText = `text-${TailwindColor}`;
export type TailwindColorBg = `bg-${TailwindColor}`;
export type TailwindColorFill = `fill-${TailwindColor}`;
