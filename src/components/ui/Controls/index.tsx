import { Checkbox } from "../CheckBoxes";
import { Radiobutton } from "../RadioButton";
import { Toggle } from "../Toggle";
import { Typography } from "../Typography";

interface IBlock{
    className?:string;
    checked?:boolean;
    name?:string;
    id?:string;
    onChanged?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    disabled?: boolean;
    text: string;
}

export const CheckBlock = ({
    className,
    checked,
    name,
    id,
    onChanged,
    value,
    disabled,
    text
}:IBlock) =>{
    return <div className="flex-row content-center justify-between gap-2">
        <Checkbox className={className} checked={checked} name={name} id={id} onChanged={onChanged} value={value}
        disabled={disabled}/>
        <Typography>{text}</Typography>
    </div>
}

export const RadioBlock = ({
    className,
    checked,
    name,
    id,
    onChanged,
    value,
    disabled,
    text
}:IBlock) =>{
    return <div className="flex-row content-center justify-between gap-2">
        <Radiobutton className={className} checked={checked} name={name} id={id} onChanged={onChanged} value={value}
        disabled={disabled}/>
        <Typography>{text}</Typography>
    </div>
}

export const ToggleBlock = ({
    className,
    checked,
    name,
    id,
    onChanged,
    value,
    disabled,
    text
}:IBlock) =>{
    return <div className="flex-row content-center justify-between gap-2">
        <Toggle className={className} checked={checked} name={name} id={id} onChanged={onChanged} value={value}
        disabled={disabled}/>
        <Typography>{text}</Typography>
    </div>
}