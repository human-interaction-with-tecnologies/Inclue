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
        references: []
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
            "Saída de Dados",
            "Visual"
        ],
        content: "Após finalizar o cadastro de uma nova chave, apresente um botão para redirecionar o usuário à tela de receber via Pix. Pois a falta desse recurso gera maiores ações a serem realizadas pelos usuários.",
        images: [],
        videos: [],
        audios: [],
        references: []
    },
    {
        id: "6",
        title: `Apresente ilustrações animadas que sejam de fácil entendimento para o usuário`,
        category: [
            "Saída de Dados",
            "Visual"
        ],
        content: "As ilustrações devem ser mais próximas de um objeto real e do contexto do usuário. Assim, deve-se utilizar cores, texturas e animações que facilitem a compreensão dos usuários. Por exemplo, o Banco em um formato estático parece com uma casa, mas uma ilustração de moeda dourada sobre este objeto pode facilitar a compreensão do usuário. Nesse contexto, as ilustrações que não estejam de acordo com essas características geram dificuldades para interpretação de seus significados pelos usuários emergentes.",
        images: [
            { id: 1, url: "/images/considerations/c6-1.png", text: "Tela de boas-vindas apresentando uma ilustração de ajuda para ativar o recurso de saída de áudio." },
            { id: 2, url: "/images/considerations/c6-2.gif", text: "Animação de Pix e transferência via Pix." },
            { id: 3, url: "/images/considerations/c6-3.png", text: "Tela de boas-vindas com ilustração de ativar e desativar recurso de áudio." },
            { id: 4, url: "/images/considerations/c6-4.gif", text: "Animação de ativar e desativar recurso de áudio." },
            { id: 5, url: "/images/considerations/c6-5.png", text: "Tela de cadastro de segurança do aplicativo, indicando que o usuário deve finalizar o cadastro em um caixa eletrônico." },
            { id: 6, url: "/images/considerations/c6-6.gif", text: "Animação de cadastro de dispositivo de segurança em um caixa eletrônico." }
        ],
        videos: [],
        audios: [],
        references: [
            {
                id: 2,
                title: "Capra et al. (2021)",
                url: "https://doi.org/10.21439/conexoes.v15i0.2087"
            },
            {
                id: 1,
                title: "Srivastava Ayushi e Kapania (2021)",
                url: "https://doi.org/10.1145/3449210"
            }
        ]
    },
    {
        id: "7",
        title: `Mostre comprovantes que simulem o documento físico`,
        category: [
            "Saída de Dados",
            "Visual"
        ],
        content: "Os comprovantes de envio do Pix podem facilitar o entendimento do usuário na finalização de uma tarefa. Essa interface pode simular um comprovante de pagamento em papel e devem conter informações essenciais para o usuário, contendo os dados do recebedor, valor e mensagem.",
        images: [
            { id: 1, url: "/images/considerations/c7-1.png", text: "Tela de boas-vindas apresentando uma ilustração de ajuda para ativar o recurso de saída de áudio." }
       ],
        videos: [],
        audios: [],
        references: [
            {
                id: 1,
                title: "Capra et al. (2021)",
                url: "https://doi.org/10.21439/conexoes.v15i0.2087"
            },
            {
                id: 2,
                title: "Srivastava Ayushi e Kapania (2021)",
                url: "https://doi.org/10.1145/3449210"
            }
        ]
    },
    {
        id: "8",
        title: `Personalize o som da notificação do aplicativo com assistente de voz`,
        category: [
            "Saída de Dados",
            "Áudio"
        ],
        content: "Caso o usuário deseje personalizar seu recurso de notificação, pode-se ativar interfaces de saídas relacionadas a alertas de voz que notifiquem um recebimento de Pix. Assim, o usuário estará ciente que recebeu um valor durante suas atividades profissionais.",
        images: [],
        videos: [],
        audios: [],
        references: [
            {
                id: 1,
                title: "Capra et al. (2021)",
                url: "https://doi.org/10.21439/conexoes.v15i0.2087"
            },
            {
                id: 2,
                title: "Srivastava Ayushi e Kapania (2021)",
                url: "https://doi.org/10.1145/3449210"
            }
        ]
    },
    {
        id: "9",
        title: `Forneça títulos e legendas com fontes grandes, com poucos caracteres e palavra-chave destacada em todo aplicativo`,
        category: [
            "Saída de Dados",
            "Visual"
        ],
        content: "Forneça textos com quantidades de caracteres pequenos e fontes grandes para, assim, melhorar a visualização e compreensão dos usuários nas ações a serem realizadas. Caso isso não seja seguido, as fontes pequenas podem dificultar a localização, compreensão e execução das tarefas dos usuários.",
        images: [
            { id: 1, url: "/images/considerations/c9-1.png", text: "Tela de Receber com o Pix, solicitando que o usuário insira a chave de pagamento." }
        ],
        videos: [],
        audios: [],
        references: [
            {
                id: 1,
                title: "Capra et al. (2021)",
                url: "https://doi.org/10.21439/conexoes.v15i0.2087"
            },
            {
                id: 2,
                title: "Srivastava Ayushi e Kapania (2021)",
                url: "https://doi.org/10.1145/3449210"
            }
        ]
    },
    {
        id: "10",
        title: `Forneça feedback de voz para indicar os botões do teclado pressionadas pelos usuários`,
        category: [
            "Saída de Dados",
            "Visual"
        ],
        content: "•	Inclua suporte do recurso de saída de voz nos campos de entradas de valores de texto, para indicar quais números ou letras estão sendo digitados pelos usuários em tempo real. Logo, os usuários entenderão se estão digitando os números corretamente e corrigirão possíveis desvios de inserções. A falta desse recurso pode fazer com que os usuários informem dados equivocados, ao não inspecionar um valor inserido no campo de entrada de dados e, por exemplo, realizar um pagamento equivocado.",
        images: [],
        videos: [],
        audios: [],
        references: [
            {
                id: 1,
                title: "Capra et al. (2021)",
                url: "https://doi.org/10.21439/conexoes.v15i0.2087"
            },
            {
                id: 2,
                title: "Srivastava Ayushi e Kapania (2021)",
                url: "https://doi.org/10.1145/3449210"
            }
        ]
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