
import Layout from "@/components/Layout";
import AboutCard from "@/components/basics/AboutCard";
import { dummyTeam } from "../../db/dummyTeam";
import { dummyGroup } from "../../db/dummyGroup";
import { dummyAboutReferences } from "../../db/dummyAboutReferences";

export default function AboutPage() {
    return (
        <Layout title="Sobre">
            <div className="bg-white rounded-lg shadow-lg p-6 mt-7">
                <h2 className="text-2xl font-bold mb-8">Equipe</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-5 mb-5">
                    {
                    dummyTeam.map((person) => (
                        <AboutCard 
                        id={person.id}
                        name={person.name}
                        description1={person.description}
                        email={person.email}
                        image={person.image}
                        />
                    ))}
                </div>
                
                <h2 className="text-2xl font-bold mt-8 mb-8">Grupo de Pesquisa</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-5 mb-5">
                    {
                    dummyGroup.map((group) => (
                        <AboutCard 
                        id={group.id}
                        name={group.name}
                        description1={group.description}
                        email={group.email}
                        image={group.image}
                        />
                    ))}
                </div>
                <h2 className="text-2xl font-bold mt-8 mb-8">Contato</h2>
                <h3 className="text-lg font-bold mb-2">Endereço</h3>
                <p className="mb-2">Rua Augusto Corrêa - nº 01 – Guamá</p>
                <p className="mb-4">Belém, Pará, Brasil – CEP: 66075110</p>
                <img src="https://maps.googleapis.com/maps/api/staticmap?center=YOUR_LOCATION&zoom=13&size=600x300&maptype=roadmap&key=YOUR_API_KEY" alt="Mapa estático" className="w-full rounded-lg" />
                
                <h2 className="text-2xl font-bold mt-8 mb-8">Outras Referências</h2>
                <ul className="list-disc ml-8" style={{color:"#005A9F"}}>
                    {dummyAboutReferences.map((reference) => (
                        <li key={reference.id} className="mb-2">
                            <a className="underline" target="_blanck" href={reference.url}>
                                {reference.description}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    )
}

