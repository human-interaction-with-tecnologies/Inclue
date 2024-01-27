import Link from "next/link"

interface ConsiderationCardProps {
    id: number
    title: string
    category: string[]
    content: string
    images?: []
}

export default function ConsiderationCard(props: ConsiderationCardProps) {
    return (
        <div className="bg-white shadow-md rounded-lg py-5 px-5">
            <h2 className="text-lg font-bold mb-2">{props.title}</h2>
            {
                <div className="flex flex-wrap flex-1 gap-1.5">
                    {
                        props.category.map(
                            (item) => (<span key={crypto.randomUUID()} className="bg-blue-500 text-white px-3 py-1 rounded-xl bg-inclue-terciary-color">{item}</span>)
                        )
                    }
                </div>
            }
            <div className="text-gray-600 mt-3 mb-3 text-justify">
                <span>{props.content.length > 250 ? `${ props.content.substring(0,150) }...` : props.content }</span>
            </div>
            <span className="text-gray-600 float-right">
                <Link
                    className="underline color-inclue-terciary-color" href={`/inclue/consideration/${props.id}`}>Leia mais</Link>
            </span>
        </div>
    )
}