import Image from 'next/image'
import { Inter } from 'next/font/google'
import { dummyConsiderations } from "../db/dummyConsiderations";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen ${inter.className}`}>
      <div className="w-full md:w-1/4 bg-gray-200">
        teste1
        {dummyConsiderations.map((consideration) => {
          return (
            <div>
              <h2>{consideration.title}</h2>
              <p>{consideration.content}</p>
            </div>
          )
          })
        }
      </div>
      <div className="w-full md:w-3/4 bg-white">
        teste 2
        {/* Aqui você pode adicionar o conteúdo principal */}
      </div>
    </main>
  )
}
