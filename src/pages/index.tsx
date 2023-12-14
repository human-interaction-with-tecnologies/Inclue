import Layout from "../components/Layout";

export default function Home() {
  return ( 
    <Layout title="Início"> 
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="text-justify">
          <h1 className="text-2xl font-bold mb-4">Bem-vindo a Inclue</h1>
        </div>
        <div className="text-justify">
          <p className="mb-4">A Inclue é uma plataforma que tem como o objetivo fortalecer a inclusão digital de pessoas que historicamente estiveram distantes das evoluções computacionais, chamados de usuários emergentes, e enfrentam barreiras para acesso a sistemas de pagamentos instantâneos.</p>
          <p className="mb-4">A plataforma Inclue é uma abreviação dos significados:</p>
          <ul className="list-disc ml-8 mb-4">
            <li><strong>Incluir:</strong> incluir os usuários emergentes aos sistemas interativos</li>
            <li><strong>Nortear:</strong> nortear os designers sobre as características de interação de usuário</li>
            <li><strong>Conectar:</strong> conectar os Sistemas de Pagamento Instantâneos como uma alternativa de gestão financeira aos usuários emergentes</li>
            <li><strong>Legitimar:</strong> legitimar os usuários emergentes como protagonistas dos serviços digitais e desenvolvimento sustentável</li>
          </ul>
          <p className="mb-4">Desse modo, nessa plataforma você interagirá com:</p>
          <ul className="list-disc ml-8 mb-4">
            <li><strong>Considerações de design</strong> e avaliação para sistemas de pagamento instantâneos</li>
            <li><strong>Personas</strong> que apresentam as características sociais, digitais e financeiras de usuários emergentes</li>
            <li><strong>Perguntas e Respostas</strong> relacionadas às considerações de design e avaliação para usuários emergentes e sistemas de pagamento instantâneo</li>
            <li><strong>Sobre</strong> com a apresentação da equipe de desenvolvimento e os documentos de origem dessa plataforma</li>
          </ul>
          <p>Desde já, agradecemos seu interesse em conhecer essa proposta de um ambiente digital mais inclusivo.</p>
        </div>
      </div>
    </Layout>
  )
}
