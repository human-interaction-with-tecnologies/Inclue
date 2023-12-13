import Layout from "@/components/Layout";
import Link from "next/link";
import { dummyConsiderations } from "../../../db/dummyConsiderations";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function ConsiderationDetailPage() {
    const router = useRouter();
    const [consideration, setConsideration] = useState(dummyConsiderations.find((consideration) => `${consideration.id}` === `${router.query.id}`));

    useEffect(() => {
        const selectedConsideration =  dummyConsiderations.find((consideration) => `${consideration.id}` === `${router.query.id}`);
        setConsideration(selectedConsideration);
    }, [router.query.id]);

    return (
        <Layout title="Consideração de Design e Avaliação"> 
            <Link className="underline flex items-center gap-1 mt-3 mb-3" href="/inclue/considerations">
                <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.351562 6.60156L6.60156 0.351562C6.86198 0.117188 7.16146 0 7.5 0C7.83854 0 8.13802 0.117188 8.39844 0.351562C8.63281 0.611979 8.75 0.911458 8.75 1.25C8.75 1.58854 8.63281 1.88802 8.39844 2.14844L4.25781 6.25H16.25C16.6146 6.25 16.9141 6.36719 17.1484 6.60156C17.3828 6.83594 17.5 7.13542 17.5 7.5C17.5 7.86458 17.3828 8.16406 17.1484 8.39844C16.9141 8.63281 16.6146 8.75 16.25 8.75H4.25781L8.39844 12.8516C8.63281 13.112 8.75 13.4115 8.75 13.75C8.75 14.0885 8.63281 14.388 8.39844 14.6484C8.13802 14.8828 7.83854 15 7.5 15C7.16146 15 6.86198 14.8828 6.60156 14.6484L0.351562 8.39844C0.117188 8.13802 0 7.83854 0 7.5C0 7.16146 0.117188 6.86198 0.351562 6.60156Z" fill="#284B63"/>
                </svg>
                Voltar
            </Link>
            {consideration ? (
                <div className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-2">
                    <h2 className="text-xl font-bold mb-2">
                        {consideration.title}
                    </h2>
                    <span style={{ backgroundColor: "#005A9F" }}
                          className="bg-blue-500 text-white px-2 py-1 rounded-md w-fit mb-2">
                        {consideration.category}
                    </span>
                    <span className="mb-3">{consideration.content}</span>
                    <div className="mb-4">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
                            {consideration.images.map((image, index) => (
                                <li key={index}>
                                    <img src={image.url} alt={image.text} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">Outras Referências:</h3>
                        <ul style={{color: "#005A9F"}} className="list-disc ml-6">
                            {consideration.references.map((reference, index) => (
                                <li key={index}>
                                    <a className="underline"
                                       target="_blanck"
                                       href={reference.url}
                                    >
                                        {reference.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </Layout>        
    )
}