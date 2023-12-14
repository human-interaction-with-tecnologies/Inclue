
interface PersonaCardProps {
    id: number
    name: string
    description: string
    image: string
    characteristics: string[]
}

export default function PersonaCard(props: PersonaCardProps) {
    return (
        <div>
          <h2 className="text-xl font-bold mb-2">{props.name}</h2>
          <p className="text-gray-500 mb-4">{props.description}</p>
          <img src={props.image} alt={props.name} className="w-full mb-4" />
          <h1 className="text-2xl font-bold mb-4">Resumo das Características</h1>
          <ul>
            {props.characteristics.map((characteristic, index) => (
              <li key={index} className="text-gray-700">{characteristic}</li>
            ))}
          </ul>
        </div>
    )
}