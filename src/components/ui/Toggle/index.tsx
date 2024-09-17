interface IToggle{
    className?:string;
    checked?:boolean;
    name?: string;
    id?: string;
    onChanged?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    disabled?: boolean
}


export const Toggle = ({
    className,
    checked,
    name,
    id,
    onChanged,
    value,
    disabled
}:IToggle) => {
    return <label id={id} className="relative inline-flex items-center cursor-pointer w-[38px] h-5">
        <input type="checkbox" disabled={disabled} name={name} value={value} checked={checked} className="sr-only peer" onChange={onChanged}/>
        <span className="w-9 h-5 border-[#EBEBEB]
        peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 
         peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
        after:bg-white after:border-[#EBEBEB] after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-accent-600
        peer-checked:peer-disabled:bg-[#EBEBEB]"></span>
        </label>
}