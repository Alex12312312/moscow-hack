import { BBadge } from "../BellBadge";

interface IProgressbar{
    nodes:number;
    status:number;
}

export const Progressbar = ({nodes, status}:IProgressbar) => {
    let elems = [];
    for(let i = 0; i < nodes; i++){
        elems.push(<div className={`${(i < status)?"bg-accent-600 text-white":"bg-neutral-100 text-neutral-600"}`}>{i+1}</div>)
    }
    return <div className="flex flex-row h-5 justify-between w-full">
    <div className="relative h-1/2">
    <div className={`h-1/2 w-[${status/nodes}] bg-accent-600`}></div>
    </div>
    </div>
}