'use client'
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Typography } from 'Components/ui/Typography';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Checkbox } from '@/components/ui/CheckBoxes';
import { Radiobutton } from '@/components/ui/RadioButton';
import { Toggle } from '@/components/ui/Toggle';
import { CheckboxList } from '@/components/ui/CheckboxList';
import { Divider } from '@/components/ui/Divider';
import { Link } from '@/components/ui/Link';
import { Input } from 'Components/ui/Input';
import { ExtraStatesType } from 'Components/ui/Input/inputVarinats';
import { MiniPhoto } from '@/components/ui/MiniPhoto';

export default function Home() {
    const [count, setCount] = useState(0)
    const [extraState, setExtraState] = useState<ExtraStatesType>('warn')
    const { data: session, status } = useSession()
    const texts = ['text', 'text', 'text'];
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
            <Checkbox></Checkbox>
            <Radiobutton name="1"></Radiobutton>
            <Radiobutton name="1"></Radiobutton>
            <Toggle></Toggle>
            <CheckboxList titles={texts}></CheckboxList>
            <Divider width='174px'></Divider>
            <Link text="link" path="/auth/login" disabled={false}></Link>
            <MiniPhoto path="https://i06.fotocdn.net/s205/94a92d5ade84ce23/public_pin_l/2362727257.jpg"></MiniPhoto>
            {JSON.stringify(session)}
        </div>
    </>
}