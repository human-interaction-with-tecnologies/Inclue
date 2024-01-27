export const dummyConsiderations = [
    {
        id: 1,
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
        id: 2,
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

    //TODO: Terminar o conteúdo das considerações
    {
        id: 29,
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