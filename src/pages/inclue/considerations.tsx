import Layout from "@/components/Layout";
import { considerationsByCategory } from "../../db/considerationsByCategory";
import { dummyCategories } from "../../db/dummyCategories";


export default function ConsiderationsPage() {
    return (
      <Layout title="TESTE"> 

        <div>
          {considerationsByCategory(dummyCategories[0]).map((consideration) => {
            return (
              <div>
                <h2>{consideration.title}</h2>
                <p>{consideration.content}</p>
              </div>
            )
            })
          }
        </div>
      </Layout>        
    )
}
