import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen ${inter.className}`}>
      <div className="w-full md:w-1/4 bg-gray-200">
        teste1
        {/* Aqui você pode adicionar o conteúdo do menu lateral */}
      </div>
      <div className="w-full md:w-3/4 bg-white">
        teste 2
        {/* Aqui você pode adicionar o conteúdo principal */}
      </div>
    </main>
  )
}
