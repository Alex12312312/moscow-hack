interface ICloseButton{
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

}

export const CloseButton = ({
    onClick
}:ICloseButton) =>{
    return <button className="w-6 h-6 text-neutral-600 align-middle text-center
    hover:text-dark-700 focus:text-dark-700 checked:text-dark-700" onClick={onClick}>✕</button>
}