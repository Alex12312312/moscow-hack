'use client'
import {PrimaryButton, RoundedSecondaryButton, SecondaryButton, TertiaryButton} from '@/components/ui/Button';
import {useState} from 'react';
import {Typography} from 'Components/ui/Typography';
import {signIn, signOut, useSession} from 'next-auth/react';
import { Checkbox } from '@/components/ui/CheckBoxes';
import { Radiobutton } from '@/components/ui/RadioButton';
import { Toggle } from '@/components/ui/Toggle';
import { CheckboxList } from '@/components/ui/CheckboxList';

export default function Home() {
    const [count, setCount] = useState(0)
    const {data: session, status} = useSession()
    let texts = ["text", "text", "text"];
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
            <Checkbox></Checkbox>
            <Radiobutton name="1"></Radiobutton>
            <Radiobutton name="1"></Radiobutton>
            <Toggle></Toggle>
            <CheckboxList titles={texts}></CheckboxList>
            {JSON.stringify(session)}
        </div>
    </>
}