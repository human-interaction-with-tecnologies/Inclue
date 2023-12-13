import AboutCard from '@/components/basics/AboutCard';
import { dummyTeam } from '../../db/dummyTeam';
import { dummyGroup } from '../../db/dummyGroup';
import { dummyAboutReferences } from '../../db/dummyAboutReferences';

import Layout from '@/components/Layout';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <Layout title="Sobre">
            <div className="bg-white text-justify rounded-lg shadow-lg p-4">

                <div className="text-justify">
                    <h1 className="text-2xl font-bold mb-4">Equipe</h1>
                    <div className="grid grid-cols-3 gap-4">
                        {dummyTeam.map((member) => (
                            <AboutCard key={member.id} 
                                        id={member.id}
                                        name={member.name}
                                        description={member.description}
                                        email={member.email}
                                        image={member.image}
                                        />
                        ))}
                    </div>
                </div>
                <br />
                <div>
                    <h1 className="text-2xl font-bold mb-4">Grupo de Pesquisa</h1>
                    <div className="grid grid-cols-3 gap-4">
                        {dummyGroup.map((group) => (
                            <AboutCard key={group.id} 
                                        id={group.id}
                                        name={group.name}
                                        description={group.description}
                                        email={group.email}
                                        image={group.image}
                                        />
                        ))}
                    </div>
                </div>
                <br />
                <div>
                    <h1 className="text-2xl font-bold mb-4">Contato</h1>
                    <div>
                        <p><strong>Endereço</strong></p>
                        <p>Rua Augusto Corrêa - nº 01 – Guamá</p>
                        <p>Belém, Pará, Brasil – CEP: 66075110</p>
                        <br />
                        <img width="600" 
                            src="/images/about/mapa-ihc-ufpa.png" alt="Imagem do mapa do IHC UFPA em Belém" />
                    </div>
                </div>
                <br />
                <div>
                    <h1 className="text-2xl font-bold mb-4">Outras Referências</h1>
                    <ol className="text-justify text-blue-500 underline">
                        {dummyAboutReferences.map((referece) => {
                            return (
                                <li>
                                    <Link href={referece.url} >
                                        {referece.description}
                                    </Link>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </Layout>
    );
}