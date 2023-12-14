interface AboutCardProps {
  id: number;
  name: string;
  description: string;
  email: string;
  image: string;
}

export default function AboutCard(props: AboutCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 items-center text-center">
      <img src={props.image} alt={props.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
      <h2 className="text-xl font-bold mb-2">{props.name}</h2>
      <p className="text-gray-600">{props.description}</p>
      <p className="text-blue-500">{props.email}</p>
    </div>
  );
}