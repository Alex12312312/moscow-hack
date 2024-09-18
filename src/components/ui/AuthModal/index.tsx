import React from "react"
import { CloseButton } from "../CloseButton"
import { Typography } from "../Typography"

export const AuthModal = () =>{
    return <div className="flex flex-col rounded w-[400px] h-[548px]">
        <div className="flex flex-row justify-between">
            <Typography size="base2">Войти</Typography>
            <CloseButton></CloseButton>
        </div>
    </div>
}