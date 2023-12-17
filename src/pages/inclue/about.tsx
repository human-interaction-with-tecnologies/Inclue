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
                        <iframe title="Google Maps"
                            style={{width:"100%", height:"400px"}} loading="lazy"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.497609398409!2d-48.458639825915505!3d-1.4742696985118746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48dbe8d60aec1%3A0xfcadc7d40fe3a62d!2sHIT%20-%20Human%20Interaction%20with%20Technologies%20Research%20Group!5e0!3m2!1spt-BR!2sbr!4v1702479132014!5m2!1spt-BR!2sbr" ></iframe>
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