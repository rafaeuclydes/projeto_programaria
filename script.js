function carregaDicionario() {
    var biografias = {        
        bio01: { nome: "Angela Davis", imagem: "angela-davis.png", descricao: "Angela Yvonne Davis é uma professora e filósofa socialista estado-unidense que alcançou notoriedade mundial na década de 1970 como integrante do Partido Comunista dos Estados Unidos, dos Panteras Negras, por sua militância pelos direitos das mulheres e contra a discriminação social e racial nos Estados Unidos e por ser personagem de um dos mais polêmicos e famosos julgamentos criminais da recente história dos Estados Unidos.", citacao: "Não aceito mais as coisas que não posso mudar, estou mudando as coisas que não posso aceitar." },

        bio02: { nome: "Carolina de Jesus", imagem: "carolina-de-jesus.png", descricao: "Carolina Maria de Jesus foi uma escritora brasileira, conhecida por seu livro Quarto de Despejo: Diário de uma Favelada publicado em 1960. Considerada uma das primeiras e mais importantes escritoras negras do Brasil. A autora viveu boa parte de sua vida na favela do Canindé, na zona norte de São Paulo, sustentando a si mesma e seus três filhos como catadora de papéis. Em 1958 tem seu diário publicado sob o nome Quarto de Despejo, com auxílio do jornalista Audálio Dantas. O livro fez um enorme sucesso e chegou a ser traduzido para quatorze línguas.", citacao: "Ah, comigo o mundo vai modificar-se. Não gosto do mundo como ele é." },

        bio03: { nome: "Conceição Evaristo", imagem: "conceicao-evaristo.png", descricao: "Maria da Conceição Evaristo de Brito nasceu em Belo Horizonte, em 1946. De origem humilde, migrou para o Rio de Janeiro na década de 1970. Graduada em Letras pela UFRJ, trabalhou como professora da rede pública de ensino da capital fluminense. É Mestre em Literatura Brasileira pela PUC do Rio de Janeiro, com a dissertação Literatura Negra: uma poética de nossa afro-brasilidade (1996), e Doutora em Literatura Comparada na Universidade Federal Fluminense, com a tese Poemas malungos, cânticos irmãos (2011), na qual estuda as obras poéticas dos afro-brasileiros Nei Lopes e Edimilson de Almeida Pereira em confronto com a do angolano Agostinho Neto.", citacao: "O importante não é ser o primeiro ou primeira, o importante é abrir caminhos." },

        bio04: { nome: "Erika Hilton", imagem: "erika_hilton.jpg", descricao: "Erika Santos Silva, mais conhecida como Erika Hilton (Franco da Rocha, 9 de dezembro de 1992), é uma política, ativista e modelo[1] brasileira. Identificando-se como travesti, Erika atua nas causas voltadas aos direitos das pessoas negras e LGBT. Sua trajetória é marcada por uma forte militância em prol da inclusão e da igualdade, sempre enfatizando a importância da representatividade e da luta contra a discriminação. Erika Hilton é uma voz poderosa que continua a inspirar muitos com sua coragem e determinação em promover mudanças sociais significativas.", citacao: "Esta é minha casa. E, na minha casa, eu não vou tolerar qualquer tipo de ódio, racismo, homofobia, transfobia, xenofobia, misoginia. Este é um espaço de autovalorização, um espaço de liberdade. Todos aqui têm seu próprio valor" },

        bio05: { nome: "Harriet Tubman", imagem: "harriet_tubman.jpg", descricao: "Harriet Tubman foi uma abolicionista americana, ativista pelos direitos civis e humanitários, conhecida por seu papel crucial na Operação Underground Railroad, que ajudou centenas de escravos a escaparem para a liberdade. Nascida como Araminta Ross em uma plantação em Maryland, Tubman escapou da escravidão em 1849 e, apesar dos enormes riscos, retornou ao sul em diversas ocasiões para guiar outros escravos para a liberdade. Durante a Guerra Civil Americana, atuou como espiã, enfermeira e cozinheira para a União, contribuindo significativamente para o esforço de guerra. Após a guerra, continuou a lutar pelos direitos dos afro-americanos e das mulheres. Harriet Tubman é lembrada como uma heroína corajosa e incansável na luta pela justiça e igualdade, simbolizando a resistência e a liberdade.", citacao: "Eu libertei mil escravos. Eu poderia ter libertado mil mais, se eles soubessem que eram escravos." },

        bio06: { nome: "Lélia Gonzalez", imagem: "lelia-gonzalez.png", descricao: "Lélia Gonzalez foi uma intelectual, política, professora e antropóloga brasileira. Ajudou a fundar instituições como o Movimento Negro Unificado (MNU), o Instituto de Pesquisas das Culturas Negras (IPCN), o Coletivo de Mulheres Negras N'Zinga e o Olodum. Sua militância em defesa da mulher negra levou-a ao Conselho Nacional dos Direitos da Mulher (CNDM), no qual atuou de 1985 a 1989. Foi candidata a deputada federal pelo PT, elegendo-se primeira suplente. Nas eleições seguintes, em 1986, candidatou-se a deputada estadual pelo PDT, novamente elegendo-se suplente.", citacao: "A gente não nasce negro, a gente se torna negro. É uma conquista dura, cruel e que se desenvolve pela vida da gente afora." },

        bio07: { nome: "Marielle Franco", imagem: "marielle-franco.png", descricao: "Marielle Francisco da Silva, conhecida como Marielle Franco, foi uma socióloga, feminista, militante dos direitos humanos e política brasileira. Filiada ao Partido Socialismo e Liberdade (PSOL), elegeu-se vereadora do Rio de Janeiro para a Legislatura 2017-2020, durante a eleição municipal de 2016, com a quinta maior votação. Crítica da intervenção federal no Rio de Janeiro e da Polícia Militar, denunciava constantemente abusos de autoridade por parte de policiais contra moradores de comunidades carentes. Em 14 de março de 2018, foi assassinada a tiros.", citacao: "Quantos mais vão precisar morrer para que essa guerra aos pobres acabe?" },

        bio08: { nome: "Marsha P. Johnson", imagem: "marsha_p_johnson.jpg", descricao: "Marsha P. Johnson foi uma mulher trans americana, ativista de direitos LGBTQ+, drag queen, e uma figura central na Revolta de Stonewall de 1969, que marcou o início do movimento moderno pelos direitos LGBTQ+ nos Estados Unidos. Junto com Sylvia Rivera, fundou a Street Transvestite Action Revolutionaries (STAR) para apoiar jovens transgêneros sem-teto. Conhecida por sua personalidade vibrante e resiliência, chegou a ser presa inúmeras vezes e militou também pelo combate e conscientização da AIDS.", citacao: "Você nunca tem completamente seus direitos, individualmente, até que todos tenham direitos." },

        bio09: { nome: "Rosa Parks", imagem: "rosa-parks.png", descricao: "Rosa Louise McCauley, mais conhecida por Rosa Parks, foi uma costureira negra norte-americana, símbolo do movimento dos direitos civis dos negros nos Estados Unidos. Ficou famosa, em 1º de dezembro de 1955, por ter-se recusado frontalmente a ceder o seu lugar no ônibus a um branco, tornando-se o estopim do movimento que foi denominado boicote aos ônibus de Montgomery e posteriormente viria a marcar o início da luta antissegregacionista.", citacao: "Você nunca deve ter medo do que está fazendo quando está certo." },
        
    };

    var content = document.getElementById("content")

    for (var bio in biografias) {
        content.innerHTML +=
        '<div class="card">' + 
        '<img src="' + biografias[bio].imagem + '"/>' + 
        '<details> <summary>' +
        biografias[bio].nome + 
        '</summary>' +
        '<p>' +
        biografias[bio].descricao + 
        '</p>' +
        '<blockquote> <q>' + 
        biografias[bio].citacao + 
       '</q> </blockquote> </details> </div>';
    }
}

carregaDicionario();