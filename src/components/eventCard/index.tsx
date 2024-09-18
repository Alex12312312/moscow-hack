import { Typography } from 'Components/ui/Typography';
import { TailwindColorText } from 'Lib/css';
import { MockedPhotoForEvent } from 'Components/ui/MockedPhotoForEvent';
import { CalendarIcon, DotIcon, LikeIcon, LocationIcon, TimerIcon } from 'Components/icons';
import React from 'react';

interface IEventCard {
    imageUrl?: string
    title?: string
    subTitle?: string
    date?: string
    time?: string
    place?: string
    userCount?: number
    status?: string
}

export const EventCard = (props: IEventCard) => {
    const renderPhoto = () => {
        if (props.imageUrl != undefined) {
            {/*<Image src={props.imageUrl} alt={'image'} className={'relative'}>*/
            }
            {/*    <div>Like</div>*/
            }
            {/**/
            }
            {/*</Image>*/
            }
        } else {
            return <MockedPhotoForEvent
                likeIcon={<LikeIcon color={'black'}/>}
                tags={[
                    { title: '0+', color: 'white' },
                    { title: 'Tag', color: 'white' }
                ]}
            />
        }
    }

    const declineParticipants = (number) => {
        const cases = [2, 0, 1, 1, 1, 2];
        const titles = ['участник', 'участника', 'участников'];

        const index = (number % 100 > 4 && number % 100 < 20) ? 2 : cases[Math.min(number % 10, 5)];
        return `${number} ${titles[index]}`;
    }

    return <div className={'flex flex-col bg-neutral-100 rounded-2xl'}>
        {renderPhoto()}
        <div className={'mt-[16px] pl-4 pb-5'}>
            <Typography size={'h4'} font={'semibold'}>
                {props.title}
            </Typography>
            <Typography size={'base3'} font={'medium'} className={'mt-[8px]'} color={'text-neutral-600'}>
                {props.subTitle}
            </Typography>
            <div className={'mt-[8px] flex gap-[4px]'}>
                <div className={'flex flex-col justify-center'}>
                    <CalendarIcon/>
                </div>
                <div className={'flex flex-col justify-center'}>
                    <Typography font={'medium'} size={'base3'}>
                        {props.date}
                    </Typography>
                </div>
                <div className={'flex flex-col justify-center'}>
                    <DotIcon/>
                </div>
                <div className={'flex flex-col justify-center'}>
                    <TimerIcon/>
                </div>
                <div className={'flex flex-col justify-center'}>
                    <Typography font={'medium'} size={'base3'}>
                        {props.time}
                    </Typography>
                </div>
                <div className={'flex flex-col justify-center'}>
                    <DotIcon/>
                </div>
                <div className={'flex flex-col justify-center'}>
                    <LocationIcon/>
                </div>
                <div className={'flex flex-col justify-center'}>
                    <Typography font={'medium'} size={'base3'}>
                        {props.place}
                    </Typography>
                </div>
            </div>
            <div className={'flex mt-[8px] gap-[8px]'}>
                <div className={'flex flex-col justify-center'}>
                    <Typography size={'base3'} font={'medium'}
                                color={'text-neutral-600'}>{declineParticipants(props.userCount)}</Typography>
                </div>
                <div className={'flex flex-col justify-center'}>
                    <DotIcon />
                </div>
                <div className={'flex flex-col justify-center'}>
                    <Typography
                        color={(props.status == 'Завершен' ? 'text-error-200' : 'text-error-200') as TailwindColorText}
                        size={'base3'} font={'medium'}>
                        {props.status}
                    </Typography>
                </div>
            </div>
        </div>
    </div>
}