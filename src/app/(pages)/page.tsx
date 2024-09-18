'use client'
import { useSession } from 'next-auth/react';
import { Events } from 'Components/events';

export default function Home() {
    const { data: session, status } = useSession()
    return <>
        <Events
            title={'Рекомендуем'}
        />
        {/*<Header/>*/}
        {/*<Slide>*/}
        {/*    <div className={'flex-col flex'}>*/}
        {/*        <Typography size={'h1'} font={'semibold'}>*/}
        {/*            Участие*/}
        {/*        </Typography>*/}

        {/*        <div className={'flex gap-[16px]'}>*/}
        {/*            <EventCard*/}
        {/*                title={'Title'}*/}
        {/*                subTitle={'subTitle'}*/}
        {/*                status={'Завершен'}*/}
        {/*                userCount={1245}*/}
        {/*                date={'date'}*/}
        {/*                time={'time'}*/}
        {/*                place={'location'}*/}
        {/*            />*/}
        {/*            <EventCard*/}
        {/*                title={'Title'}*/}
        {/*                subTitle={'subTitle'}*/}
        {/*                status={'Завершен'}*/}
        {/*                userCount={1245}*/}
        {/*                date={'date'}*/}
        {/*                time={'time'}*/}
        {/*                place={'location'}*/}
        {/*            />*/}
        {/*            <EventCard*/}
        {/*                title={'Title'}*/}
        {/*                subTitle={'subTitle'}*/}
        {/*                status={'Завершен'}*/}
        {/*                userCount={1245}*/}
        {/*                date={'date'}*/}
        {/*                time={'time'}*/}
        {/*                place={'location'}*/}
        {/*            />*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</Slide>*/}

    </>
}