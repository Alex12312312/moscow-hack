import clsx from 'clsx';
import { ClassValue } from 'clsx';

interface IInput{
    size?: 'sm' | 'md' | 'lg'
    name: string;
    placeholder: string;
    label?: string;
    children?: any
    className?: ClassValue;
    noInline?: boolean;
    value?: any;

}


export const Input: (props:IInput) => JSX.Element = ({
    size,
    name,
    placeholder,
    label,
    children,
    className,
    noInline,
    value
}) => {
    return <input className={clsx(className, size)} placeholder={placeholder}>
        {children}
    </input>
}