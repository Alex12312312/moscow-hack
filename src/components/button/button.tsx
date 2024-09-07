
interface IButton{
    size?: 'sm',
    disabled: boolean,
    htmlType?: 'submit' | 'reset' | 'button' 
}

export default function Button(props:IButton){
    return <button className={`flex bg-red-600 w-11 h-14`}>

    </button>
}