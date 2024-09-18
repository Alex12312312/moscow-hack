import React, { ReactNode, useCallback, useState } from "react"
import { CloseButton } from "../CloseButton"
import { Typography } from "../Typography"
import { Modal } from "../Modal"
import { Button } from "../Button"
import { Divider } from "../Divider"
import { Link } from "../Link"

interface IModal {
    active: boolean // стейт отображение модального окна
    setActive: (state:boolean) => void
    children?: ReactNode
}

export const AuthModal = ({active, setActive, children}:IModal) =>{
    const handleActive = useCallback((state: boolean) => setActive(state), []);
    return <Modal active={active} setActive={handleActive}>
    <div className="flex flex-col m-4 gap-4">
    <div className="flex flex-row justify-between align-top">
    <Typography size="base2">Войти</Typography>
    <CloseButton onClick={()=>handleActive(false)}>
    </CloseButton>
    </div>
    <Typography size="base4" color="text-neutral-600">Вход позволит получить доступ к дополнительным функциям и уникальному опыту на сайте.</Typography>
    <Button colorScheme="secondary" justifyingScheme="start">Войти через Yandex</Button>
    <Button colorScheme="secondary" justifyingScheme="start">Войти через Вконтакте</Button>
    <Button colorScheme="secondary" justifyingScheme="start">Войти через Телеграмм</Button>
    <Button colorScheme="secondary" justifyingScheme="start">Войти через Мос.ру</Button>
    <Divider></Divider>
    <Button>Войти по почте</Button>
    <div className="flex flex-row gap-1">
        <Typography size="base3">Нет аккаунта?</Typography>
        <Link path="auth/reg" text="Создать аккаунт"></Link>
    </div>
    </div>
    </Modal>
}