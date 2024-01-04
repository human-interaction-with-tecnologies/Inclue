import Link from "next/link"

interface ConsiderationCardProps {
    id: number
    title: string
    category: string
    content: string
    images?: []
}

export default function ConsiderationCard(props: ConsiderationCardProps) {
    return (
        <div className="bg-white shadow-md rounded-lg py-5 px-5">
            <h2 className="text-lg font-bold mb-2">{props.title}</h2>
            <span className="bg-blue-500 text-white px-3 py-1 rounded-xl bg-inclue-terciary-color">{props.category}</span>
            <div className="text-gray-600 mt-3 mb-3">
                <span>{props.content}</span>
            </div>
            <span className="text-gray-600 float-right">
                <Link
                    className="underline color-inclue-terciary-color" href={`/inclue/consideration/${props.id}`}>Leia mais</Link>
            </span>
        </div>
    )
}