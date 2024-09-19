import { ReactNode } from 'react';
import { ITypography, Typography } from 'Components/ui/Typography';
import { CalendarLiteIcon, CalendarStar, CloseIcon, Exit, NewsIcon, ShoppingIcon } from 'Components/icons';
import { Button } from 'Components/ui/Button';
import { signOut } from 'next-auth/react';

interface ISlide {
    children?: ReactNode
}

export const Slide = (props: ISlide) => {
    return <div className={'flex ml-[6.25%]'}>
        <div className={'w-[15.6%] flex flex-col justify-between'}>
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
            <div className={'flex flex-col w-[80%]'}>
                <div className={'bg-neutral-100 p-4 flex-col flex rounded-2xl mt-[356px]'}>
                    <div className={'flex justify-between align-middle'}>
                        <Typography color={'text-dark-600'} font={'medium'} size={'base4'}>
                            Вы организатор?
                        </Typography>
                        <CloseIcon/>
                    </div>
                    <div className={'flex justify-between align-middle'}></div>
                    <Button className={'mt-[16px]'} typographyAttr={{
                        font: 'medium',
                        size: 'base4',
                    } as ITypography}>
                        Верифицироваться
                    </Button>
                </div>
                <div></div>
            </div>
            <button className={'pt-[12px] pb-[12px] pl-[16px] gap-[12px] flex hover:bg-neutral-100 w-[224px] h-[44px] mb-64'} onClick={() => signOut()}>
                <Exit/> <Typography className='ml-3' color={'text-neutral-600'} font={'medium'} size={'base3'}>Выйти</Typography>
            </button>
        </div>
        {props.children}
    </div>
}