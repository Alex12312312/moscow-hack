import { Input } from 'Components/ui/Input';

interface IHeaderIcons {
    isUser: boolean;
    coinsCount: number;
}

export const HeaderIcons = (props: IHeaderIcons) => {
    return <div>

    </div>
}
export const Header = () => {
    return <div className={'h-[116px] flex flex-col justify-center'}>
        <div className={'grid grid-cols-[2fr_48px_10fr_48px_2fr]'}>
            <div></div>
            <Input leftIcon={<></>}/>
            <HeaderIcons   coinsCount={1} isUser={true}/>
        </div>
    </div>
}