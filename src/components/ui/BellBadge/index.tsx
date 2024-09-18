
interface IBBadge{
    num: number;
}

export const BBadge =({ num }:IBBadge) =>{
    return <div className={'rounded-xl text-white min-w-[21px] h-[21px] w-fit bg-accent-600 text-center leading-tight' + ((num > 99)? ' indent-px': '')}>
        {(num <= 99)? num: '99+'}</div>
}