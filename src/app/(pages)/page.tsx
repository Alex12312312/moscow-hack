'use client'
import {PrimaryButton, RoundedSecondaryButton, SecondaryButton, TertiaryButton} from '@/components/ui/Button';
import {useState} from 'react';
import {Typography} from 'Components/ui/Typography';
import {signIn, signOut, useSession} from 'next-auth/react';

export default function Home() {
    const [count, setCount] = useState(0)
    const {data: session, status} = useSession()

    return <>
        <div className={'flex flex-col'}>
            <Typography size={'base1'} font={'regular'}>
                {count}
            </Typography>
            <PrimaryButton
                className={'w-1/2'}
                onClick={() => setCount(count + 1)}
                leftIcon={<div>Left</div>}
                rightIcon={<div>Right</div>}
            >
                Primary
            </PrimaryButton>
            <SecondaryButton
                className={'w-1/2'}
                onClick={() => setCount(count + 1)}
                leftIcon={<div>Left</div>}
                rightIcon={<div>Right</div>}
            >
                Secondary
            </SecondaryButton>
            <TertiaryButton
                className={'w-1/2'}
                onClick={() => setCount(count + 1)}
                leftIcon={<div>Left</div>}
                rightIcon={<div>Right</div>}
            >
                Tertiary
            </TertiaryButton>

            <RoundedSecondaryButton onClick={() => signIn('google')}>
                Sign In
            </RoundedSecondaryButton>
            <RoundedSecondaryButton onClick={() => signOut()}>
                Sign Out
            </RoundedSecondaryButton>

            {JSON.stringify(session)}
        </div>
    </>
}