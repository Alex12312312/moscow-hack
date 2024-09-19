'use client'

import React, { useState } from 'react';
import { Typography } from 'Components/ui/Typography';
import { Button } from 'Components/ui/Button';
import { Divider } from 'Components/ui/Divider';
import { Link } from 'Components/ui/Link';
import * as yup from 'yup';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CloseButton } from 'Components/ui/CloseButton';
import { Input } from 'Components/ui/Input';
import { CheckBlock } from 'Components/ui/Controls';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
    const nav = useRouter()
    const [emailRegistration, setEmailRegistration] = useState(false)
    const [error, setError] = useState('')
    const firstPage = () => {
        return <div className={'bg-white pb-[8px] pt-[8px] rounded-2xl'}>
            <div className="flex flex-col m-4 gap-4">
                <div className="flex flex-row justify-between align-top">
                    <Typography size="base2">Создать аккаунт</Typography>
                </div>
                <Typography size="base4" color="text-neutral-600">Чтобы создать аккаунт, вам потребуется специальный
                    код. Вы
                    можете отправить его себе на почту.</Typography>
                <Button colorScheme="secondary" justifyingScheme="start">Войти через Yandex</Button>
                <Button colorScheme="secondary" justifyingScheme="start">Войти через Вконтакте</Button>
                <Button colorScheme="secondary" justifyingScheme="start">Войти через Телеграмм</Button>
                <Button colorScheme="secondary" justifyingScheme="start">Войти через Мос.ру</Button>
                <Divider></Divider>
                <Button onClick={() => setEmailRegistration(true)}>Войти по почте</Button>
                <div className="flex flex-row gap-1">
                    <Typography size="base3">Нет аккаунта?</Typography>
                    <Link path="./registration" text="Создать аккаунт"></Link>
                </div>
            </div>
        </div>
    }

    const loginForm = yup.object().shape({
        email: yup.string().email('Введите почту').required('Введите почту'),
        password: yup.string().min(8, 'Пароль должен содержать минимум 8 символов')
    });

    const handleSubmit = (data: any) => {
        setError('')
        signIn('myAuth', {
            ...data,
            redirect: false
        }).then((r ) =>{
            const res = r as {
                status: number
            };

            if (res.status != 200) {
                setError('Неправильный логин или пароль')
                return
            }

            nav.push('/')
        }).catch(() => setError('Неправильный логин или пароль'))
    }

    const fm = useForm({ resolver: yupResolver(loginForm) })
    const secondPage = () => <FormProvider {...fm}>
        <form className={'flex flex-col bg-white pt-[16px] rounded-2xl pl-4 pr-4 pb-5'}
        onSubmit={fm.handleSubmit(data => handleSubmit(data))}>
            <div className={'flex justify-between'}>
                <Typography size={'base2'} font={'medium'}>
                    Войти
                </Typography>
                <CloseButton onClick={() => setEmailRegistration(false)}/>
            </div>
            <Typography className={'mt-[4px]'} font={'medium'} color={'text-neutral-600'} size={'base4'}>
                Вход позволит получить доступ к дополнительным функциям и уникальному опыту на сайте.
            </Typography>
            <Input
                title={'Почта'}
                contentClassName={'mt-[16px]'}
                className={'w-[100%] border-neutral-600'}
                colorScheme={'white'}
                name={'email'}
                type={'email'}
                placeholder={'Введите почту'}
                leftIcon={<></>}
            />
            <Input
                title={'Почта'}
                contentClassName={'mt-[16px]'}
                className={'w-[100%] border-neutral-600'}
                colorScheme={'white'}
                name={'password'}
                type={'password'}
                placeholder={'Введите почту'}
                leftIcon={<></>}
            />
            <div className={'mt-[16px] flex justify-between'}>
                <CheckBlock name={'remember'}>
                    Запомнить меня
                </CheckBlock>
                <Link path={''} text={'Забыли пароль?'} />
            </div>
            <div className={'mt-[16px] flex w-100 gap-[8px]'}>
                <Button colorScheme={'secondary'} className={'w-[50%]'}>
                    Назад
                </Button>
                <Button className={'w-[50%]'} htmlType={'submit'}>
                    Войти
                </Button>
            </div>
            <Typography color={'text-error-200'} size={'base3'} font={'medium'}>
                {error}
            </Typography>
            <div className={'mt-[16px] gap-[4px] flex'}>
                <Typography color={'text-dark-600'} font={'medium'} size={'base3'}>
                    Нет аккаунт?
                </Typography>
                <Link path={'auth/registration'} text={'Создать аккаунт'} />
            </div>
        </form>
    </FormProvider>

    return (
        <div className={`bg-neutral-600 flex justify-center h-[100vh] align-middle`}>
            <div className={'flex flex-col justify-center w-[30%]'}>
                <div className={''}>
                    {!emailRegistration && firstPage()}
                    {emailRegistration && secondPage()}
                </div>
            </div>
        </div>
    )
}