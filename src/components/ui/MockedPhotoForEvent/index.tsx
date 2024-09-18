import img from 'assets/mockImg.png'
import Image from 'next/image';
import React, { ReactNode } from 'react';
import { ITag, Tag } from 'Components/tag';

interface IMockedPhotoForEvent {
    tags?: Array<ITag>
    likeIcon: ReactNode
}

export const MockedPhotoForEvent = (props: IMockedPhotoForEvent) => (
    <div className={'relative rounded-2xl w-[368px] h-[208px]'}>
        <Image
            className={'z-0 absolute rounded-2xl'}
            src={img as string}
            alt={'ast'}
            width={'368'}
            height={'208'}
        />
        <div className={'absolute right-0'}>
            {props.likeIcon}
        </div>
        <div className={'flex gap-[4px] absolute bottom-0 ml-2 mb-2'}>
            {props.tags?.map(tag => <Tag color={tag.color} title={tag.title} />)}
        </div>
    </div>
)