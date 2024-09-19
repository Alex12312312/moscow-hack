import { useState } from 'react'
import { CheckBlock } from '../Controls';
import { Typography } from '../Typography';

interface ICheckboxList{
    titles: string[],
}

export const CheckboxList = ({
    titles,
}:ICheckboxList) => {
    const [isOpen, ChangeVisibility] = useState(false);
    const elements = [];
    if(titles.length > 2){
    for(let i = 1; i < titles.length; i++){
        // @ts-ignore
        elements.push(<CheckBlock id={`cb-${i}`} text={titles[i]} className="mr-7 mt-3" name={'name'}><></></CheckBlock>)
    }
    }
    return <div className="flex flex-col mr-3 mt-3 ml-7">
        <div className="flex flex-row gap-2">
        <input type="checkbox" className="flex appearance-none after:content-['+'] checked:after:content-['-']" onChange={()=>{ChangeVisibility(!isOpen)}}></input>
        <Typography size="base3" font="medium">{titles[0]}</Typography>
        </div>
        {isOpen? elements: ''}
    </div>
}