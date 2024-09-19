interface IMockAvatar {
    onClick: any
}
export const MockAvatar = (props: IMockAvatar) => {
    return <div onClick={props.onClick} className={'rounded-full w-[44px] h-[44px] bg-neutral-600'}>

    </div>
}