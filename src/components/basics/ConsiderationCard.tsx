import Link from "next/link"

interface ConsiderationCardProps {
    id: number
    title: string
    category: string
    content: string
}

export default function ConsiderationCard(props: ConsiderationCardProps) {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="font-bold text-xl mb-2">
                {props.title}
            </div>
            <div className="bg-primary text-justify text-white rounded-lg">
                <span className="bg-blue-600 text-white rounded-lg" style={{ backgroundColor: "#2b71e6" }}>
                    {props.category}
                </span>
            </div>
            <div className="text-justify">
                {props.content.substring(0, 100) + "..."}
            </div>
            <div className="text-blue-500 underline text-end">
                <Link href={`/inclue/consideration?id=${props.id}`} >
                    Saiba mais
                </Link>
            </div>
        </div>
    )
}