
interface PrimaryProps {
    content: string
    title: string
    disabled?: boolean
}

export default function Primary(props: PrimaryProps) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">{props.content}</p>
        </div>
      </div>
    )
}