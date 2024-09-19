interface IPage {
    id
}
export default function ({params}: IPage) {
    return <>
        {params.id}
    </>
}