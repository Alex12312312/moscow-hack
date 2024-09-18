'use client'
import { useSession } from 'next-auth/react';
import { EventCard } from 'Components/eventCard';
import { Header } from 'Components/header';
import { Slide } from 'Components/slide';

export default function Home() {
    const { data: session, status } = useSession()
    return <>
        <Header/>
        <Slide>
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
        </Slide>

    </>
}