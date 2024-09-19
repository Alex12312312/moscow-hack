'use client'
import { Button } from '@/components/ui/Button';
import { CheckBlock } from '@/components/ui/Controls';
import { Input } from '@/components/ui/Input';
import { Link } from '@/components/ui/Link';
import { Typography } from '@/components/ui/Typography';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import REGISTER from '@/app/lib/apollo/schemas/auth/reg.gql'
import { DocumentNode, useMutation } from '@apollo/client';
import { setCookie } from 'cookies-next'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

export default function RegForm() {
    const nav = useRouter();
    const [eulaAccepted, setEulaAccept] = useState(false);
    const [error, setError] = useState('');
    const [regCompleted, completeReg] = useState(false);

    const schemeReg = yup.object().shape({
        email: yup.string().email('Введите почту').min(3).required('Введите почту'),
        password: yup.string().min(8, 'Пароль должен содержать минимум 8 символов').required(),
        passwordRepeat: yup.string().min(8, 'Пароль должен содержать минимум 8 символов').required()
    })

    const fm = useForm({ resolver: yupResolver(schemeReg) })

    const [AUTH] = useMutation(REGISTER as DocumentNode, {
        onCompleted: data => {
            console.log(data)
            if (data['post']['StatusCode'] === 200) {
                setCookie('access_token', data['post']['Response']['token'])
                nav.push('/')
            } else {
                setError('Аккаунт на эту почти уже зареган')
            }
        },
        onError: error => {
            console.log(error)
        }
    });

    const handleSubmit = (data: any) => {
        setError('')
        if (data!.password != data!.passwordRepeat) {
            setError('Пароли должны совпадать')
            return
        }
        console.log(data)
        AUTH({
            variables: data
        }).then()
    }

    return <FormProvider {...fm}>
        <form className="flex flex-row flex-wrap content-center justify-center bg-neutral-600 w-[100dvw] h-[100dvh]"
              onSubmit={fm.handleSubmit(data => handleSubmit(data))}>
            <div className="rounded-[5%] flex flex-col gap-4 w-[35%] h-fit p-4 bg-white">
                {regCompleted ? <>
                        <div className="flex flex-row justify-start">
                            <Typography size="base3">Почти готово...</Typography>
                        </div>
                        <Typography size="base4" color="text-neutral-600">Чтобы завершить регистрацию, введите своё ФИО и
                            придумайте пароль для аккаунта.</Typography>
                        <div className="flex flex-col gap-2 h-[20%] w-full">
                            <Typography size="base4">ФИО</Typography>
                            <Input name={'fullName'} className="w-full" leftIcon="" placeholder="Введите ФИО"></Input>
                        </div>
                        <div className="flex flex-col gap-2 h-[20%] w-full">
                            <Typography size="base4">Дата рождения</Typography>
                            <Input name={'birthdate'} className="w-full" leftIcon=""
                                   placeholder="Введите дату рождения"></Input>
                        </div>
                        <div className="flex flex-col gap-2 h-[20%] w-full">
                            <Typography size="base4">Пароль</Typography>
                            <Input name={'password'} className="w-full" leftIcon="" placeholder="Введите пароль"></Input>
                        </div>
                        <div className="flex flex-col gap-2 h-[20%] w-full">
                            <Typography size="base4">Повторите пароль</Typography>
                            <Input name={'passwordRepeat'} className="w-full" leftIcon=""
                                   placeholder="Повторите пароль"></Input>
                        </div>
                        <div className="flex gap-2 h-[20%] w-full">
                            <Button className="w-[49%]" colorScheme="secondary" onClick={() => {
                                completeReg(false)
                            }}>Назад</Button>
                            <Button className="w-[49%]"
                                    onClick={() => {
                                    }}>Продолжить</Button>
                        </div>
                        <Typography font={'semibold'} size={'base3'} color={'text-error-200'}>
                            {error}
                        </Typography>
                        <div className="flex gap-1">
                            <Typography size="base3">Уже есть аккаунт?</Typography>
                            <Link path="./login" text="Войти"></Link>
                        </div>
                    </> :
                    <>
                        <div className="flex flex-row justify-start">
                            <Typography size="base3">Создать аккаунт</Typography>
                        </div>
                        <Typography size="base4" color="text-neutral-600">Чтобы создать аккаунт, вам потребуется
                            специальный
                            код. Вы можете отправить его себе на почту.</Typography>
                        <div className="flex flex-col gap-2 h-[20%] w-full">
                            <Typography size="base4">Почта</Typography>
                            <Input name={'email'} type={'email'} className="w-full" leftIcon=""
                                   placeholder="Введите почту"></Input>
                        </div>
                        <CheckBlock name={'accept'} onChanged={() => {
                            setEulaAccept(!eulaAccepted)
                        }}>
                            <Typography size="base4">Я принимаю</Typography>
                            <Link path="../" text="пользовательское соглашение">
                            </Link>
                        </CheckBlock>
                        <div className="flex justify-between">
                            <Button className="w-[49%]" colorScheme="secondary" onClick={() => {
                                nav.back()
                            }}>Назад</Button>
                            <Button className="w-[49%]" htmlType={'submit'}
                                    onClick={() => {
                                        completeReg(true);
                                    }}>Продолжить</Button>
                        </div>
                        <div className="flex gap-1">
                            <Typography size="base3">Уже есть аккаунт?</Typography>
                            <Link path="./login" text="Войти"></Link>
                        </div>
                    </>}
            </div>
        </form>
    </FormProvider>
}