interface IMPhoto{
    path:string;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const MiniPhoto = ({ path, onClick }:IMPhoto) =>{
    return <div className={`rounded-full bg-center bg-cover h-11 w-11
         ${(onClick != undefined)? 'hover:brightness-50 cursor-pointer':''}`} 
    style={{ backgroundImage:`url(${path})` }} onClick={onClick}></div>
}