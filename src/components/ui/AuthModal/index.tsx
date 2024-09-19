import React, { ReactNode, useCallback, useState } from 'react'
import { Typography } from '../Typography'
import { Modal } from '../Modal'
import { Button } from '../Button'
import { Divider } from '../Divider'
import { Link } from '../Link'
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { CloseIcon } from 'Components/icons';
import { CloseButton } from 'Components/ui/CloseButton';

interface IModal {
    active: boolean // стейт отображение модального окна
    setActive: (state: boolean) => void
    children?: ReactNode
}

export const AuthModal = ({ active, setActive, children }: IModal) => {
    const handleActive = useCallback((state: boolean) => setActive(state), []);
    const [emailRegistration, setEmailRegistration] = useState(false)
    const firstPage = () => {
        return <div active={active} setActive={handleActive}>
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
                <Button>Войти по почте</Button>
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

    const fm = useForm({ resolver: yupResolver(loginForm) })
    const secondPage = () => <FormProvider {...fm}>
        <form className={'flex flex-col'}>
            <div className={'flex justify-between'}>
                <Typography>
                    Войти
                </Typography>
                <CloseButton />
            </div>
        </form>
    </FormProvider>

    return (
        <>
            {!emailRegistration && firstPage()}
            {emailRegistration && secondPage()}
        </>
    )
}