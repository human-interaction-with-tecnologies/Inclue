import { considerationsByCategory } from "../../db/considerationsByCategory";
import { dummyCategories } from "../../db/dummyCategories";

export default function ConsiderationsPage() {
    return (
    
        <div className="w-full md:w-1/4 bg-gray-200">
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
    )
}
