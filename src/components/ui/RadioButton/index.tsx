interface IRadio{
    className?:string;
    checked?:boolean;
    name?: string;
    id?: string;
    onChanged?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    disabled?: boolean
}

export const Radiobutton = ({
    className,
    checked,
    name,
    id,
    onChanged,
    value,
    disabled,
}:IRadio) => {
    return <input id={id} value={value} onChange={onChanged} name={name} checked={checked} type="radio" className="w-[20px] h-[20px] border rounded-full appearance-none flex justify-center content-center cursor-pointer
    default:border-[#EBEBEB] 
    hover:border-[#292929]
    checked:border-accent-600 checked:after:bg-accent-600 checked: text-white
    after:rounded-[9998px] after:relative after:text-white after:flex after:justify-center after:content-start after:align-top after:h-[18px] after:w-[18px] after:leading-4
    after:text-xs
    checked:after:content-['⚪']
    disabled:bg-[#EBEBEB] disabled:border-[#EBEBEB]
    disabled:after:content-['⚪']"
    disabled={disabled}></input>
}