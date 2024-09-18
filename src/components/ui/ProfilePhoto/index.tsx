

interface IPPhoto{
    url: string;
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const ProfilePhoto = ({url, onClick}:IPPhoto) => {
    return <div className="rounded cursor-pointer bg-cover size-[176px] hover:brightness-50" style={{backgroundImage:`url(${url})`}} onClick={onClick}>
    </div>
}