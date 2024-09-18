'use client'

import { EventCard } from 'Components/eventCard';

export default function Home() {
    return <>
        {/*<EventCard imageUrl={''}*/}
        {/*           title={'title'}*/}
        {/*           date={'s'}*/}
        {/*           place={'d'}*/}
        {/*           status={'Завершен'}*/}
        {/*           subTitle={'dsddsfdf'}*/}
        {/*           userCount={123}*/}
        {/*           time={'2'}*/}
        {/*/>*/}
        {/*<MockedPhotoForEvent*/}
        {/*    likeIcon={<LikeIcon color={'black'}/>}*/}
        {/*    tags={[*/}
        {/*        { title: '0+', color: 'white' },*/}
        {/*        { title: 'Tag', color: 'white'}*/}
        {/*    ]}*/}
        {/*/>*/}
        <div className={'flex gap-[16px]'}>
            <EventCard
                title={'Title'}
                subTitle={'subTitle'}
                status={'Завершен'}
                userCount={1245}
                date={'date'}
                time={'time'}
                place={'location'}
            />
            <EventCard
                title={'Title'}
                subTitle={'subTitle'}
                status={'Завершен'}
                userCount={1245}
                date={'date'}
                time={'time'}
                place={'location'}
            />
            <EventCard
                title={'Title'}
                subTitle={'subTitle'}
                status={'Завершен'}
                userCount={1245}
                date={'date'}
                time={'time'}
                place={'location'}
            />
        </div>
    </>
}