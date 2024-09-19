import { Input } from 'Components/ui/Input';
import { MockIcon } from 'Components/mockIcon';
import { CoinsIcon, FavoritesIcon, Logo, NotificationsIcon } from 'Components/icons';
import { Typography } from 'Components/ui/Typography';
import { FormProvider, useForm } from 'react-hook-form';
import { MockAvatar } from 'Components/mockAvatar';
import { useRouter } from 'next/navigation';

interface IHeaderIcons {
    isUser: boolean;
    coinsCount: number;
    className?: string;
}

interface ICoinsHeaderIcon {
    coins?: number
}

const CoinsHeaderIcon = (props: ICoinsHeaderIcon) => {
    return <div
        className={'flex pl-3 pr-3 pt-3 align-middle mb-[15px] gap-[8px] border-[1px] rounded-full border-neutral-200 border-solid'}>
        <CoinsIcon className={''}/>
        <Typography size={'base3'} font={'medium'} className={''}>
            {props.coins}
        </Typography>
    </div>
}

export const HeaderIcons = (props: IHeaderIcons) => {
    const nav = useRouter()

    return <div className={`flex gap-[16px] ${props.className}`}>
        {/*{props.isUser ??*/}
        <CoinsHeaderIcon coins={props.coinsCount}/>
        {/*}*/}
        <FavoritesIcon/>
        <NotificationsIcon/>
        <MockAvatar onClick={() => nav.push('/profile')} />
    </div>
}
export const Header = () => {
    const fm = useForm()
    return <div className={'flex flex-col justify-center pt-[36px] pb-[36px] pl-[7%] pr-[7%]'}>
        <div className={'flex'}>
            <div className={'flex gap-[8px]'}>
                <Logo />
                <Typography size={'h3'} color={'text-dark-600'} font={'bold'} className={'flex'}>
                    Береги афиша
                </Typography>
            </div>
            <FormProvider {...fm}>
                <Input name={'search'} colorScheme={'gray'} contentClassName={'ml-[25.5%] w-[23%]'}
                       placeholder={'🔍   Поиск...'} roundingScheme={'rounded'} leftIcon={<MockIcon/>}/>
            </FormProvider>
            <HeaderIcons coinsCount={123} className={'ml-[20.2%]'} isUser={true}/>
        </div>
    </div>
}