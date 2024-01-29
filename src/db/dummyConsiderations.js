export const dummyConsiderations = [
    {
        id: "1",
        title: "Adapte a máscara de um campo de dados conforme sua entrada",
        category: [
            "Entrada de Dados",
            "Visual"
        ],
        content: "O campo de entrada de dados deve centralizar diferentes tipos de informações, caso o formulário forneça mais de uma entrada de dados. Por exemplo, o usuário pode informar uma chave Pix de e-mail, cpf ou Telefone de um recebedor em um mesmo campo de entrada de dados. Todavia, a máscara e a ilustração devem acompanhar a interação de entrada deste usuário.",
        images: [
            { id: 1, url: "/images/considerations/c1-1.jpg", text: "Tela de pagamento com o Pix, apresentando um campo de entrada de dados que centraliza as opções de pagamento e uma lista com recebores recentes." }
            
        ],
        videos: [],
        audios: [],
        references: [
            {
                id: 1,
                title: "First Reference",
                url: "https://www.google.com"
            },
            {
                id: 2,
                title: "Second Reference",
                url: "https://www.google.com"
            }
        ]
    },
    {
        id: "2",
        title: "Acione o comando de voz por meio de botões ou ao pronunciar palavras-chave de ativação",
        category: [
            "Entrada de Dados",
            "Áudio"
        ],
        content: "Recursos de comandos de voz são importantes para os usuários e devem ser utilizados durante a realização de suas tarefas no sistema. Em relação ao Pix, essas interfaces devem, primeiramente, ensinar os usuários como e quais tarefas são realizadas para esse serviço. Contudo, a ativação do serviço deve ser por meio da tela principal do aplicativo, ao tocar no botão de comando de voz, ou em qualquer outra tela do aplicativo com uma ativação de voz genérica, como, por exemplo, “Celular, quero pagar com Pix!”, “Celular, quero receber um Pix!”, “Celular, quero criar uma chave Pix”, “Celular, quero cancelar uma chave Pix!”, dentre outros.",
        images: [
            { id: 1, url: "/images/considerations/c2-1.jpg", text: "Tela de pagamento com o Pix, apresentando um campo de entrada de dados que centraliza as opções de pagamento e uma lista com recebores recentes." }
            
        ],
        videos: [
            { id: 1, url: "/videos/considerations/c2-1.mp4", type:"video/mp4" }
        ],
        audios: [],
        references: [
            {
                id: 1,
                title: "Thies (2015)",
                url: "https://doi.org/10.1561/1100000047"
            }
        ]
    },
    {
        id: "3",
        title: "Apresente o teclado correspondente à entrada de dados",
        category: [
            "Entrada de Dados",
            "Visual"
        ],
        content: "Quando utilizar máscaras em campos que aceitam dados numéricos, lembre-se de apresentar teclado numérico. Isso é interessante para mantém o design minimalista do teclado, onde serão apresentados somente os símbolos que são necessários para uma determinada inserção.",
        images: [
            { id: 1, url: "/images/considerations/c3-1.jpg", text: "Tela de pagar com o Pix, contendo o campo de dados para preenchimento da chave de telefone." }
        ],
        videos: [],
        audios: [],
        references: []
    },
    {
        id: "4",
        title: "Use o botão de confirmação do teclado para prosseguir em uma tarefa",
        category: [
            "Entrada de Dados",
            "Visual"
        ],
        content: "Utilize o botão de confirmação do teclado (avançar ou check) para realizar a ação de prosseguir em uma determinada tarefa do sistema.",
        images: [
            { id: 1, url: "/images/considerations/c4-1.jpg", text: "Tela de pagar com o Pix, contendo o teclado com o botão de avançar." }
        ],
        videos: [],
        audios: [],
        references: []
    },
    {
        id: "5a",
        title: "Apresente uma lista com as chaves Pix criadas",
        category: [
            "Saída de Dados",
            "Visual"
        ],
        content: "No recurso de receber com o Pix, apresente as chaves criadas anteriormente pelo usuário. Caso isso não seja feito, os usuários terão que adicionar novamente a chave na tarefa de receber via Pix, devido não apresentar uma lista com as chaves registradas anteriormente no sistema.",
        images: [
            { id: 1, url: "/images/considerations/c5-1.jpg", text: "Tela de pagar com o Pix, contendo o teclado com o botão de avançar." }
        ],
        videos: [],
        audios: [],
        references: []
    },
    {
        id: "5b",
        title: `Após concluir a criação de uma chave Pix, adicione à tela um botão de "Receber via Pix"`,
        category: [
            "Entrada de Dados",
            "Visual"
        ],
        content: "Após finalizar o cadastro de uma nova chave, apresente um botão para redirecionar o usuário à tela de receber via Pix. Pois a falta desse recurso gera maiores ações a serem realizadas pelos usuários.",
        images: [],
        videos: [],
        audios: [],
        references: []
    },
    //TODO: Terminar o conteúdo das considerações
    {
        id: "29",
        title: "Use assistentes de voz e animações para auxiliar os usuários em suas tarefas",
        category: [
            "Entrada de Dados",
            "Saída de Dados",
            "Visual",
            "Áudio"
        ],
        content: "utilize recursos de voz e ilustrações animadas para auxiliar os usuários em determinadas tarefas. Estes recursos são mais acessíveis para o consumo de dados em comparação com vídeos e mais compreensíveis em relação aos textos descritivos na tela ou em seções de ajuda.",
        images: [],
        videos: [],
        audios: [
            { id: 1, url: "/audios/considerations/c29-1.mp3", type:"audio/mp3" },
            { id: 2, url: "/audios/considerations/c29-2.mp3", type:"audio/mp3" },
            { id: 3, url: "/audios/considerations/c29-3.mp3", type:"audio/mp3" },
            { id: 3, url: "/audios/considerations/c29-4.mp3", type:"audio/mp3" }
        ],
        references: [
            {
                id: 1,
                title: "Thies (2015)",
                url: "https://doi.org/10.1561/1100000047"
            }
        ]
    }
];