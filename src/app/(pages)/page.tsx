'use client'
import { signIn, signOut, useSession } from 'next-auth/react';
import { Events } from 'Components/events';
import { Button } from 'Components/ui/Button';
import { LoginButton } from '@telegram-auth/react';

export default function Home() {
    const { data: session, status } = useSession()
    return <>
        <Events
            title={'Рекомендуем'}
        />
        <Button onClick={() => signIn('myAuth', {
            "email": "user123fwewgfrb@example.com",
            "password": "string",
            redirect: false
        })}>
            Test
        </Button>
        <Button onClick={() => signOut()}>
            ddw
        </Button>
        {JSON.stringify(session)}
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