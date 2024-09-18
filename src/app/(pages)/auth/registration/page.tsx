'use client'
import { Button } from '@/components/ui/Button';
import { CheckBlock } from '@/components/ui/Controls';
import { Input } from '@/components/ui/Input';
import { Link } from '@/components/ui/Link';
import { Typography } from '@/components/ui/Typography';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function RegForm(){
    const nav = useRouter();
    const [eulaAccepted, setEulaAccept] = useState(false);
    const [regCompleted, completeReg] = useState(false);
    const [email, SetEmail] = useState('');
    const [birthDate, SetBDate] = useState('');
    const [fio, SetFio] = useState('');
    const [password, setPass] = useState('');
    const firstStage = () =>{
        return <>
        <div className="flex flex-row justify-start">
                <Typography size="base3">Создать аккаунт</Typography>
            </div>
            <Typography size="base4" color="text-neutral-600">Чтобы создать аккаунт, вам потребуется специальный код. Вы можете отправить его себе на почту.</Typography>
            <div className="flex flex-col gap-2 h-[20%] w-full">
                <Typography size="base4">Почта</Typography>
                <Input className="w-full" leftIcon="" placeholder="Введите почту"></Input>
            </div>
            <CheckBlock onChanged={()=>{setEulaAccept(!eulaAccepted)}}>
                <Typography size="base4">Я принимаю</Typography>
                <Link path="../" text="пользовательское соглашение">
                </Link>
            </CheckBlock>
            <div className="flex justify-between">
                <Button className="w-[49%]" colorScheme="secondary" onClick={() => {nav.back()}}>Назад</Button>
                <Button className="w-[49%]" disabled={(!eulaAccepted && email == '')} onClick={() =>{
                    completeReg(true);
                }}>Продолжить</Button>
            </div>
            <div className="flex gap-1">
                <Typography size="base3">Уже есть аккаунт?</Typography>
                <Link path="./login" text="Войти"></Link>
            </div>
        </>
    }
    return <div className="flex flex-row flex-wrap content-center justify-center bg-neutral-600 w-[100dvw] h-[100dvh]">
        <div className="rounded-[5%] flex flex-col gap-4 w-[35%] h-fit p-4 bg-white">
            {regCompleted?<>
        <div className="flex flex-row justify-start">
                <Typography size="base3">Почти готово...</Typography>
            </div>
            <Typography size="base4" color="text-neutral-600">Чтобы завершить регистрацию, введите своё ФИО и придумайте пароль для аккаунта.</Typography>
            <div className="flex flex-col gap-2 h-[20%] w-full">
                <Typography size="base4">ФИО</Typography>
                <Input className="w-full" leftIcon="" placeholder="Введите ФИО"></Input>
            </div>
            <div className="flex flex-col gap-2 h-[20%] w-full">
                <Typography size="base4">Дата рождения</Typography>
                <Input className="w-full" leftIcon="" placeholder="Введите дату рождения"></Input>
            </div>
            <div className="flex flex-col gap-2 h-[20%] w-full">
                <Typography size="base4">Пароль</Typography>
                <Input className="w-full" leftIcon="" placeholder="Введите пароль"></Input>
            </div>
            <div className="flex flex-col gap-2 h-[20%] w-full">
                <Typography size="base4">Повторите пароль</Typography>
                <Input className="w-full" leftIcon="" placeholder="Повторите пароль"></Input>
            </div>
            <div className="flex gap-2 h-[20%] w-full">
                <Button className="w-[49%]" colorScheme="secondary" onClick={() => {completeReg(false)}}>Назад</Button>
                <Button className="w-[49%]" disabled={!eulaAccepted} onClick={() =>{
                    nav.push('../');
                }}>Продолжить</Button>
            </div>
            <div className="flex gap-1">
                <Typography size="base3">Уже есть аккаунт?</Typography>
                <Link path="./login" text="Войти"></Link>
            </div>
        </>:
        <>
        <div className="flex flex-row justify-start">
                <Typography size="base3">Создать аккаунт</Typography>
            </div>
            <Typography size="base4" color="text-neutral-600">Чтобы создать аккаунт, вам потребуется специальный код. Вы можете отправить его себе на почту.</Typography>
            <div className="flex flex-col gap-2 h-[20%] w-full">
                <Typography size="base4">Почта</Typography>
                <Input className="w-full" leftIcon="" placeholder="Введите почту"></Input>
            </div>
            <CheckBlock onChanged={()=>{setEulaAccept(!eulaAccepted)}}>
                <Typography size="base4">Я принимаю</Typography>
                <Link path="../" text="пользовательское соглашение">
                </Link>
            </CheckBlock>
            <div className="flex justify-between">
                <Button className="w-[49%]" colorScheme="secondary" onClick={() => {nav.back()}}>Назад</Button>
                <Button className="w-[49%]" disabled={!eulaAccepted} onClick={() =>{
                    completeReg(true);
                }}>Продолжить</Button>
            </div>
            <div className="flex gap-1">
                <Typography size="base3">Уже есть аккаунт?</Typography>
                <Link path="./login" text="Войти"></Link>
            </div>
        </>}
        </div>
    </div>
}