import { ReactNode } from 'react';
import { Typography } from 'Components/ui/Typography';
import { Italiana } from 'next/dist/compiled/@next/font/dist/google';
import { TailwindColorText } from 'Lib/css';

export interface ITag {
    color?: string
    title: ReactNode
}
export const Tag = (props: ITag) => {
    return <div className={`pl-3 pr-3 bg-${props.color ?? 'white'} rounded-md`}>
        <Typography className={'align-middle translate-x-[1px] -translate-y-[0.7px]'} size={'base3'} font={'medium'} color={(props.color != 'white' ? 'text-white' : 'text-dark-700') as TailwindColorText}>
            {props.title}
        </Typography>
    </div>
}
