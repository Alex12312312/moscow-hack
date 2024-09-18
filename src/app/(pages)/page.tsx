'use client'
import { Button } from 'Components/ui/Button';
import { useState } from 'react';
import { Typography } from 'Components/ui/Typography';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Input } from 'Components/ui/Input';
import { ExtraStatesType } from 'Components/ui/Input/inputVarinats';

export default function Home() {
    const [count, setCount] = useState(0)
    const [extraState, setExtraState] = useState<ExtraStatesType>('warn')
    const { data: session, status } = useSession()

    return <>
        <div className={'flex flex-col'}>
            <Typography size={'base1'} font={'regular'}>
                {count}
            </Typography>
            <Button
                className={'w-1/2'}
                colorScheme={'primary'}
                onClick={() => setCount(count + 1)}
                leftIcon={<div>Left</div>}
                rightIcon={<div>Right</div>}
            >
                Primary
            </Button>
            <Button
                colorScheme={'secondary'}
                className={'w-1/2'}
                onClick={() => setCount(count + 1)}
                leftIcon={<div>Left</div>}
                rightIcon={<div>Right</div>}
            >
                Secondary
            </Button>
            <Button
                colorScheme={'tertiary'}
                className={'w-1/2'}
                onClick={() => setCount(count + 1)}
                leftIcon={<div>Left</div>}
                rightIcon={<div>Right</div>}
            >
                Tertiary
            </Button>

            <Button
                onClick={() => signIn('google')}
                colorScheme={'secondary'}
                roundingScheme={'rounded'}
            >
                Sign In
            </Button>
            <Button
                onClick={() => signOut()}
                colorScheme={'secondary'}
                roundingScheme={'rounded'}
            >
                Sign Out
            </Button>

            <div className={'pl-8 w-1/2'}>
                <Input
                    leftIcon={<div/>}
                    title={'Title'}
                    subTitle={'subTitle'}
                    placeholder={'placeholder'}
                    extraState={extraState}
                />
            </div>
            <Button onClick={() => setExtraState('success')}>change to success</Button>
            {extraState}
        </div>
    </>
}