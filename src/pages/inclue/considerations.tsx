import { useState } from "react";
import Layout from "@/components/Layout";
import { considerationsByCategory } from "../../db/considerationsByCategory";
import { dummyCategories } from "../../db/dummyCategories";
import ConsiderationCard from "@/components/basics/ConsiderationCard";
import Link from "next/link";
import { useRouter } from 'next/router';

export default function ConsiderationsPage() {
  const { query } = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  var filter = query.filter;

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredConsiderations = considerationsByCategory(filter).filter(
    (consideration) =>
      consideration.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      consideration.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout title="Considerações de Design e Avaliação">
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="text-justify">
          <h1 className="text-2xl font-bold mb-4">Filtro</h1>
        </div>
        <div className="text-justify">
          <label htmlFor="searchInput" className="p-2">Pesquisar</label>
          <input
            type="text"
            id="searchInput"
            placeholder="Pesquisar"
            className="border border-gray-300 rounded-lg p-2 mb-4"
            value={searchTerm}
            onChange={handleSearch}
            name="Pesquisar"
          />
        </div>
        <ul className="flex space-x-4">
          {dummyCategories.map((category) => {
            return (
              <li className="bg-primary text-justify text-white rounded-lg">
                <Link href={`/inclue/considerations?filter=${category}`} >
                  <span className="bg-blue-600 text-white rounded-lg" style={{ backgroundColor: "#2b71e6" }}>
                    {category}
                  </span>
                </Link>
              </li>
            );
          })}
          <li className="bg-primary text-justify text-white rounded-lg">
            <Link href={`/inclue/considerations`} >
              <span className="bg-blue-600 text-white rounded-lg" style={{ backgroundColor: "#2b71e6" }}>
                Todos
              </span>
            </Link>
          </li>
        </ul>
      </div>  
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredConsiderations.map((consideration) => {
          return (
            <div className="bg-white rounded-lg shadow-md p-4">
              <ConsiderationCard 
                key={consideration.id}
                id={consideration.id}
                title={consideration.title}
                category={consideration.category}
                content={consideration.content} />
            </div>
          );
        })}
      </div>
    </Layout>        
  );
}
