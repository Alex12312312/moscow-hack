interface IIcon {
    width?: string
    height?: string
    color?: string
}

export const InfoIcon = (props: IIcon) => {
    return <svg width={props.width ?? '20'} height={props.height ?? '20'}
                viewBox={`0 0 ${props.width ?? '20'} ${props.height ?? '20'}`} fill="none"
                xmlns="http://www.w3.org/2000/svg">
        <path
            d="M9.99999 1.66667C5.40499 1.66667 1.66666 5.405 1.66666 10C1.66666 14.595 5.40499 18.3333 9.99999 18.3333C14.595 18.3333 18.3333 14.595 18.3333 10C18.3333 5.405 14.595 1.66667 9.99999 1.66667ZM9.99999 16.6667C6.32416 16.6667 3.33332 13.6758 3.33332 10C3.33332 6.32417 6.32416 3.33333 9.99999 3.33333C13.6758 3.33333 16.6667 6.32417 16.6667 10C16.6667 13.6758 13.6758 16.6667 9.99999 16.6667Z"
            fill={props.color ?? '#292929'}/>
        <path d="M9.16666 9.16667H10.8333V14.1667H9.16666V9.16667ZM9.16666 5.83333H10.8333V7.5H9.16666V5.83333Z"
              fill={props.color ?? '#292929'}/>
    </svg>

}