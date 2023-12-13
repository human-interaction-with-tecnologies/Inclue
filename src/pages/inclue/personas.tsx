import PersonaCard from '@/components/basics/PersonaCard';
import { dummyPersonas } from '../../db/dummyPersonas';
import Layout from '@/components/Layout';

export default function PersonasPage() {
    return (
        <Layout title="Personas">
            <div className="grid grid-cols-3 gap-4">
                {dummyPersonas.map((persona) => (
                    <div key={persona.id} className="bg-white rounded-lg shadow-md p-4">
                        <PersonaCard
                            id={persona.id}
                            name={persona.name}
                            description={persona.description}
                            image={persona.image}
                            characteristics={persona.characteristics}
                        />
                    </div>
                ))}
            </div>
        </Layout>
    );
}