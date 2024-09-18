import { useRouter } from 'next/navigation'

interface ILink {
    path: string,
    text: string,
    disabled?: boolean,
}

export const Link = ({
                         path,
                         text,
                         disabled,
                     }: ILink) => {
    const nav = useRouter();
    return <button className="w-fit h-fit font-semibold text-accent-700 cursor-pointer
    hover:text-accent-500 focus:text-accent-800 disabled:text-[#474747]" disabled={disabled} onClick={() => {
        nav.push(path)
    }}>{text}</button>
}