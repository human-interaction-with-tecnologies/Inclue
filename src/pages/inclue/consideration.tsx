import Layout from "@/components/Layout";
import Link from "next/link";
import { useRouter } from 'next/router'
import { dummyConsiderations } from "../../db/dummyConsiderations";
import Image from 'next/image'

export default function ConsiderationDetailPage() {

    const { query } = useRouter()
    var id = query.id 
    var consideration =  dummyConsiderations.find((consideration) => consideration.id === parseInt(id))

    return (
        <Layout title="Considerações de Design e Avaliação"> 
            <div className="text-justify">
                <Link className="flex" href="/inclue/considerations">
                    <div  className="flex rounded-lg shadow-lg p-2 mb-3 gap-2 items-center bg-white ">
                        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.351562 6.60156L6.60156 0.351562C6.86198 0.117188 7.16146 0 7.5 0C7.83854 0 8.13802 0.117188 8.39844 0.351562C8.63281 0.611979 8.75 0.911458 8.75 1.25C8.75 1.58854 8.63281 1.88802 8.39844 2.14844L4.25781 6.25H16.25C16.6146 6.25 16.9141 6.36719 17.1484 6.60156C17.3828 6.83594 17.5 7.13542 17.5 7.5C17.5 7.86458 17.3828 8.16406 17.1484 8.39844C16.9141 8.63281 16.6146 8.75 16.25 8.75H4.25781L8.39844 12.8516C8.63281 13.112 8.75 13.4115 8.75 13.75C8.75 14.0885 8.63281 14.388 8.39844 14.6484C8.13802 14.8828 7.83854 15 7.5 15C7.16146 15 6.86198 14.8828 6.60156 14.6484L0.351562 8.39844C0.117188 8.13802 0 7.83854 0 7.5C0 7.16146 0.117188 6.86198 0.351562 6.60156Z" fill="#284B63"/>
                        </svg>
                        Voltar
                    </div>
                </Link>
            </div>
            <br />
            <div className="text-justify bg-white rounded-lg shadow-lg p-6">
                <div>
                    <h1 className="text-2xl font-bold mb-4">{consideration?.title}</h1>
                    <div className="bg-primary text-white rounded-lg">
                        <span className="bg-blue-600 text-white rounded-lg" style={{ backgroundColor: "#2b71e6" }}>
                        {consideration?.category}
                        </span>
                    </div>
                    <br />
                    <p className="mb-4">{consideration?.content}</p>
                </div>
                <br />
                <div>
                    <ul className="flex space-x-4">
                        {consideration?.images.map((image) => {
                            return (
                                <li>
                                    <Image  src={image.url} 
                                            width={250}
                                            height={250}
                                            alt={image.text} 
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <br />
                <div>
                    <h1 className="text-2xl font-bold mb-4">Outras Referências</h1>
                    <ol className="text-justify text-blue-500 underline">
                        {consideration?.references.map((referece) => {
                            return (
                                <li>
                                    <Link href={referece.url} >
                                        {referece.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </Layout>        
    )
}