import clsx from "clsx"
import { ClassValue } from "clsx"
import { ButtonHTMLAttributes } from "react"

interface IButton{
    size?: 'sm' | 'md' | 'lg',
    disabled: boolean,
    htmlType?: 'submit' | 'reset' | 'button' 
    onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'],
    className?: ClassValue,
    children?: any
}

export const Button:(props:IButton) => JSX.Element = ({
    size,
    disabled,
    htmlType,
    onClick,
    className,
    children
}) =>{
    return <button type={htmlType} className={clsx(className, size)} onClick={onClick} disabled={disabled}>
    {children}
    </button>
}