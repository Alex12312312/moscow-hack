'use client'
import { Button } from "@/components/ui/Button";
import { CheckBlock } from "@/components/ui/Controls";
import { Input } from "@/components/ui/Input";
import { Link } from "@/components/ui/Link";
import { Typography } from "@/components/ui/Typography";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegForm(){
    const nav = useRouter();
    const [eulaAccepted, setEulaAccept] = useState(false);
    return <div className="flex flex-row flex-wrap content-center justify-center bg-neutral-600 w-[100dvw] h-[100dvh]">
        <div className="rounded-[5%] flex flex-col gap-4 w-[35%] h-fit p-4 bg-white">
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
                <Button className="w-[49%]" disabled={!eulaAccepted} >Отправить код</Button>
            </div>
            <div className="flex gap-1">
                <Typography size="base3">Уже есть аккаунт?</Typography>
                <Link path="./login" text="Войти"></Link>
            </div>
        </div>
    </div>
}