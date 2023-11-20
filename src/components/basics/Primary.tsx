export default function Primary() {
    const content = 'Seja bem vindo(a)!'
    const title = "Primeiro Componente"
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{content}</p>
        </div>
      </div>
    )
}