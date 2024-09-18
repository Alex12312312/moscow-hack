import { ReactNode } from 'react';
import { Typography } from 'Components/ui/Typography';
import { CalendarLiteIcon, CalendarStar, CloseIcon, NewsIcon, ShoppingIcon } from 'Components/icons';

interface ISlide {
    children?: ReactNode
}

export const Slide = (props: ISlide) => {
    return <div className={'flex ml-[6.25%]'}>
        <div className={'w-[15.6%] flex flex-col'}>
            <div className={'flex flex-col gap-[8px] pr-[12px] justify-between'}>
                <div>
                    <div className={'pt-[12px] pb-[12px] pl-[16px] gap-[12px] flex hover:bg-neutral-100'}>
                        <CalendarLiteIcon/>
                        <Typography color={'text-neutral-600'} font={'medium'} size={'base3'}>
                            Ивенты
                        </Typography>
                    </div>
                    <div className={'pt-[12px] pb-[12px] pl-[16px] gap-[12px] flex  hover:bg-neutral-100'}>
                        <NewsIcon/>
                        <Typography color={'text-neutral-600'} font={'medium'} size={'base3'}>
                            Новости
                        </Typography>
                    </div>
                    <div className={'pt-[12px] pb-[12px] pl-[16px] gap-[12px] flex  hover:bg-neutral-100'}>
                        <CalendarStar/>
                        <Typography color={'text-neutral-600'} font={'medium'} size={'base3'}>
                            Участие
                        </Typography>
                    </div>
                    <div className={'pt-[12px] pb-[12px] pl-[16px] gap-[12px] flex hover:bg-neutral-100'}>
                        <ShoppingIcon/>
                        <Typography color={'text-neutral-600'} font={'medium'} size={'base3'}>
                            Магазин
                        </Typography>
                    </div>
                </div>
            </div>
            <div className={'flex flex-col'}>
                <div className={'bg-neutral-100 p-4 flex-col flex rounded-2xl'}>
                    <div className={'flex justify-between align-middle'}>
                        <Typography color={'text-dark-600'} font={'medium'} size={'base4'}>
                            Вы организатор?
                        </Typography>
                        <CloseIcon/>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
        {props.children}
    </div>
}