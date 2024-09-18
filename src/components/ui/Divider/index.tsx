import { DivLine } from '../DividerLine'
import { Typography } from '../Typography'
interface IDivider{
    width?: string;
}
export const Divider = ({
    width,
}:IDivider) =>{
    console.log(width)
    return <div className={'h-[20px] flex flex-row content-center justify-between gap-3 ' + `w-[${(width !== undefined)? width: '100%'}]`}>
    <DivLine></DivLine>
    <Typography size="base4" font="semibold" color="text-neutral-600">Or</Typography>
    <DivLine></DivLine>
    </div>
}