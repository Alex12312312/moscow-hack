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
    return <div id={'block-' + id} className={"w-fit flex flex-row content-center justify-between gap-2 " + className}>
        <Checkbox className={className} checked={checked} name={name} id={id} onChanged={onChanged} value={value}
        disabled={disabled}/>
        <Typography size="base3" font="medium">{text}</Typography>
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
    return <div className={"w-auto flex flex-row content-center justify-between gap-2" + className}>
        <Radiobutton className={className} checked={checked} name={name} id={id} onChanged={onChanged} value={value}
        disabled={disabled}/>
        <Typography size="base3" font="medium">{text}</Typography>
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
    return <div className={"w-auto flex flex-row content-center justify-between gap-2 " + className}>
        <Toggle className={className} checked={checked} name={name} id={id} onChanged={onChanged} value={value}
        disabled={disabled}/>
        <Typography size="base3" font="medium">{text}</Typography>
    </div>
}