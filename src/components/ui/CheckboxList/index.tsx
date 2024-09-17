import { useState } from "react"
import { CheckBlock } from "../Controls";
import { Typography } from "../Typography";

interface ICheckboxList{
    titles: string[],
}

export const CheckboxList = ({
    titles,
}:ICheckboxList) => {
    const [isOpen, ChangeVisibility] = useState(false);
    let elements = [];
    if(titles.length > 2){
    for(var i = 1; i < titles.length; i++){
        elements.push(<CheckBlock id={`cb-${i}`} text={titles[i]} className="mr-7 mt-3"></CheckBlock>)
    }
    }
    return <div className="flex flex-col">
        <div className="flex flex-row gap-2">
        <input type="checkbox" className="flex appearance-none after:content-['+'] checked:after:content-['-']" onChange={()=>{ChangeVisibility(!isOpen)}}></input>
        <Typography size="base3" font="medium">{titles[0]}</Typography>
        </div>
        {isOpen? elements: ""}
    </div>
}