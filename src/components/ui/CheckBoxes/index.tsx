import { useFormContext } from 'react-hook-form';

interface ICheckbox {
    className?: string;
    checked?: boolean;
    name: string;
    id?: string;
    onChanged?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    disabled?: boolean;
}

export const Checkbox = ({
                             className,
                             checked,
                             name,
                             id,
                             onChanged,
                             value,
                             disabled,
                         }: ICheckbox) => {
    const { register, formState } = useFormContext()
    return <input id={id} {...register(name)} type="checkbox" value={value} checked={checked}
                  onChange={onChanged}
                  className="w-[20px] h-[20px] border rounded appearance-none flex justify-center content-center cursor-pointer
    default:border-[#EBEBEB] 
    hover:border-[#292929]
    checked:border-accent-600 checked:after:bg-accent-600 checked: text-white
    after:rounded-[3px] after:relative after:text-white after:flex after:justify-center after:content-start after:align-top after:h-[18px] after:w-[18px] after:leading-4
    checked:after:content-['✓']
    disabled:bg-[#EBEBEB] disabled:border-[#EBEBEB]
    disabled:after:content-['✓']"
                  disabled={disabled}/>
}
