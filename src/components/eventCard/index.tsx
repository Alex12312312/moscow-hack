import { Typography } from 'Components/ui/Typography';
import { TailwindColorText } from 'Lib/css';
import { MockedPhotoForEvent } from 'Components/ui/MockedPhotoForEvent';
import { CalendarIcon, DotIcon, LikeIcon, LocationIcon, TimerIcon } from 'Components/icons';
import React from 'react';
import { ITag, Tag } from 'Components/tag';
import Image from 'next/image';
import TO_FAVORITE from '@/app/lib/apollo/schemas/events/toFavourite.gql'
import { DocumentNode, useMutation } from '@apollo/client';

interface IEventCard {
    id?: string
    imageUrl?: string
    title?: string
    subTitle?: string
    date?: string
    time?: string
    place?: string
    userCount?: number
    status?: string
    tags?: Array<ITag>
    className?: string
}

export const EventCard = (props: IEventCard) => {

    const [TO_FAVORITE_HANDLE] = useMutation(TO_FAVORITE as DocumentNode, {
        onCompleted: data => console.log(data),
        onError: error => console.log(error)
    })
    const handleToLike = (id: string) => {
        TO_FAVORITE_HANDLE({
            variables: {
                id: id
            }
        }).then(r => {
            const res = r as {
                status: number
            }
        }).catch(err => err)
    }
    const renderPhoto = () => {
        if (props.imageUrl != undefined && props.imageUrl.toLowerCase() != 'string') {
            const src = props.imageUrl
            return <div className={'relative rounded-2xl overflow-hidden w-[368px] h-[208px]'}>
                <Image
                    className={'z-0 absolute rounded-2xl'}
                    src={src}
                    alt={'ast'}
                    width={'368'}
                    height={'208'}
                />
                <div className={'absolute right-0'}>
                    {<LikeIcon onClick={() => handleToLike(props.id!)} />}
                </div>
                <div className={'flex gap-[4px] absolute bottom-0 ml-2 mb-2'}>
                    {props.tags?.map((tag, index) => <Tag key={index} color={tag.color} title={tag.title}/>)}
                </div>
            </div>
        } else {
            return <MockedPhotoForEvent
                likeIcon={<LikeIcon color={'black'} onClick={() => handleToLike(props.id!)}/>}
                tags={props.tags}
            />
        }
    }

    const declineParticipants = (number: number | undefined) => {
        const cases = [2, 0, 1, 1, 1, 2];
        const titles = ['участник', 'участника', 'участников'];

        const index = ((number ?? 0) % 100 > 4 && (number ?? 0) % 100 < 20) ? 2 : cases[Math.min((number ?? 0) % 10, 5)];
        return `${number} ${titles[index]}`;
    }

    return <div className={`flex flex-col bg-neutral-100 rounded-2xl ${props.className}`}>
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
                        color={(props.status == 'Завершено' ? 'text-error-200' : 'text-success-200') as TailwindColorText}
                        size={'base3'} font={'medium'}>
                        {props.status}
                    </Typography>
                </div>
            </div>
        </div>
    </div>
}