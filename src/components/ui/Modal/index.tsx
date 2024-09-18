import { Dispatch, SetStateAction, ReactNode } from 'react';
import 'Components/ui/Modal/styles.css'

interface IModal {
    active: boolean // стейт отображение модального окна
    setActive: (state:boolean) => void
    children: ReactNode
}

export const Modal = (props: IModal) => {
    return (
        <div className={props.active ? "modal modalActive" : "modal"} onClick={() => props.setActive(false)}>
            <div className={props.active ? "modalContent modalContentActive" : "modalContent"} onClick={(e) => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    )
}