import Layout from "@/components/Layout";
import PersonaCard from "@/components/basics/PersonaCard";
import { dummyPersonas } from "../../db/dummyPersonas";

export default function PersonasPage() {
    return (
        <Layout title="Personas">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-7 mb-5">
                {dummyPersonas.map((personas) => (
                    <PersonaCard 
                        key={personas.id}
                        id={personas.id}
                        name={personas.name}
                        image={personas.image}
                        description={personas.description}
                        characteristics={personas.characteristics}
                    />
                ))}
            </div>
        </Layout>
    )
}