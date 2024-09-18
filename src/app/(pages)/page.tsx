'use client'

import { EventCard } from 'Components/eventCard';
import { Header } from 'Components/header';

export default function Home() {
    return <>
        <Header />
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