import { defineStore } from "pinia";

type infomationMoedaType = {
  id: number | null;
  label: string | null;
  title: string | null;
  subtitle: string | null;
  textAnverso: string | null;
  textReverso: string | null;
  title2?: string | null;
  text2?: string | null;
  anverso?: string | null | undefined;
  reverso?: string | null | undefined;
  title3?: string | null;
  text3?: string | null;
  title4?: string | null;
  text4?: string | null;
  informationMoedaType2?: informationMoedaType2[];
};

type informationMoedaType2 = {
  title: string | null | undefined;
  text?: string | null;
  title2?: string | null;
  text2?: string | null;
  text3?: string | null;
  title3?: string | null;
};

export const useMoedaStore = defineStore("moedaStore", {
  state: () => ({
    moedasAntiguidade: [] as infomationMoedaType[],
    moedasIdadeMedia: [] as infomationMoedaType[],
    moedasModerna: [] as infomationMoedaType[],
    moedasContemporanea: [] as infomationMoedaType[],
  }),
  actions: {
    GetMoedasAntiguidade() {
      this.moedasAntiguidade = [
        {
          id: 1,
          label: "Tetadracma",
          title: "Tetradracma de Macrinus",
          subtitle:
            "Arados, região da Fenícia (atualmente território da Síria), entre os anos de 217 e 218 d.C.",
          anverso: "/images/ANVERSO.png",
          reverso: "/images/REVERSO.png",
          textAnverso:
            'Inscrição: ΑΥΤ Κ ΜΑ Ο CΕ ΜΑΚΡΙΝΟC; Transliteração: AYT K MA O CE MAKΡINOΣ; Tradução: "Imperador César Marco Opélio Severo Macrino" O busto de Macrino exibe uma barba espessa e cabelo crespo, coroado por uma laurea, símbolo de sua autoridade imperial. Ele veste um paludamentum, reforçando sua posição como líder militar e governante.',
          textReverso:
            ' A cunhagem apresenta uma águia de asas abertas, segurando uma coroa no bico, um elemento característico das emissões da província da Síria-Fenícia. A inscrição ΗΜΑX Ε ΥΑΤΟC Α, pode ser traduzida como "Tetrarquia da cidade sagrada e autônoma", reforçando o status especial da cidade emissora. ',
          title2: "Personagem Histórico",
          text2:
            "Macrino (Marcus Opellius Severus Macrinus) foi imperador romano por pouco tempo, de abril de 217 a junho de 218 d.C. Ele foi o primeiro a chegar ao trono sem ser de família senatorial, vindo de uma origem mais simples na Mauritânia (atual Argélia ou Marrocos). Antes de ser imperador, era comandante da guarda pretoriana e pode ter participado da morte de Caracala, seu antecessor. No governo, tentou economizar dinheiro e fez um acordo de paz com os partas, o que irritou os soldados, acostumados com aumentos e saques. Isso levou à revolta que colocou Elagábalo no trono, apoiado por sua avó Júlia Mesa. Macrino foi derrotado em uma batalha, preso e morto em 218 d.C. " +
            " No governo, tentou economizar dinheiro e fez um acordo de paz com os partas, o que irritou os soldados, acostumados com aumentos e saques. Isso levou à revolta que colocou Elagábalo no trono, apoiado por sua avó Júlia Mesa. Macrino foi derrotado em uma batalha, preso e morto em 218 d.C. ",
          title3: "Padrão monetário",
          text3:
            'TETRADRACMA: Moeda de prata usada amplamente no mundo grego e nas províncias orientais do Império Romano. Seu nome vem do grego "tetra" (quatro) + "drachma", indicando que valia quatro dracmas, a unidade monetária padrão da Grécia Antiga.',
          title4: "Período político ",
          text4:
            "O Império Romano (27 a.C. – 476 d.C. no Ocidente) foi o período da história de Roma em que o poder esteve centralizado nas mãos de um imperador. Teve início com Otaviano, que recebeu o título de Augusto em 27 a.C., após o fim da República. O regime imperial manteve algumas instituições republicanas, mas o imperador passou a deter autoridade máxima sobre o exército, a política e a administração. O Império viveu momentos de grande expansão territorial, estabilidade e prosperidade, como durante a Pax Romana, mas também enfrentou crises e divisões. No Ocidente, terminou em 476 d.C. com a deposição do último imperador; no Oriente, continuou como Império Bizantino até 1453. ",
          informationMoedaType2: [
            {
              title: " Observações",
              text: " Arados era uma importante cidade portuária fenícia que emitiu várias moedas provinciais para diferentes imperadores romanos.",
              title2: "Especificações da moeda",
              text2:
                "Diâmetro: 27 mm Espessura: 2 mm Massa: 13,87g Material: prata (AR – argentum)",
              title3: "Macrinus na cultura popular:",
              text3:
                "Gladiador 2 é a sequência do aclamado filme Gladiador (2000), dirigido por Ridley Scott. Lançado nos cinemas em 14 de novembro de 2024. A história se passa anos após os eventos do primeiro filme, acompanhando Lúcio (PaulMescal), que, após testemunhar a morte de Máximo, enfrenta novos desafios ao ser forçado a lutar no Coliseu para sobreviver e restaurar a honra de Roma. O elenco conta com Paul Mescal como Lúcio, Pedro Pascal, Connie Nielsen reprisando seu papel como Lucila e Denzel Washington interpretando Macrinus.",
            },
          ],
        },

        {
          id: 2,
          label: "Dracma",
          title: "Dracma de Alexandre, o Grande",
          anverso: "/images/ANVERSO.png",
          reverso: "/images/REVERSO.png",
          subtitle:
            "Emitida entre 336 e 323 a.C., durante o reinado de Alexandre III da Macedônia (Alexandre, o Grande).",
          textAnverso:
            "A moeda traz a efígie de Hércules, representado com a pele do leão da Nemeia, simbolizando força e heroísmo, características atribuídas ao próprio Alexandre.",
          textReverso:
            'No reverso, Zeus está sentado em um trono segurando uma águia na mão direita e um cetro na esquerda, acompanhado pela inscrição grega "ALEXANDROY", significando "de Alexandre".',
          title2: "Personagem Histórico",
          text2:
            "Alexandre, o Grande (356–323 a.C.), rei da Macedônia, é um dos maiores conquistadores da história antiga, conhecido por ter expandido seu império desde a Grécia até o Egito, Pérsia e Índia. Seu legado difundiu a cultura helênica por todo o mundo antigo, resultando no período helenístico.",
          title3: "Padrão monetário",
          text3:
            "DRACMA: Moeda de prata, padrão monetário básico do mundo grego antigo, amplamente utilizada para o comércio e o pagamento de soldados.",
          title4: "Período político",
          text4:
            "Período Helênico (323–31 a.C.): Caracterizado pela expansão da cultura grega pelo Mediterrâneo e Oriente Médio, após as conquistas de Alexandre.",
        },
        {
          id: 3,
          label: "Denário",
          title: "Denário de Júlio César",
          anverso: "/images/ANVERSO.png",
          reverso: "/images/REVERSO.png",
          subtitle:
            "Emitido entre 49 e 44 a.C., período da ascensão política e militar de Júlio César na República Romana.",
          textAnverso:
            'Retrato de Júlio César com a inscrição "CAESAR DICT PERPETVO", ou "César, Ditador Perpétuo", enfatizando seu poder absoluto.',
          textReverso:
            "Figura de Vênus segurando uma Vitória alada na mão direita e um cetro na mão esquerda, simbolizando a descendência divina reivindicada por César através da deusa Vênus.",
          title2: "Personagem Histórico",
          text2:
            "Júlio César (100–44 a.C.) foi um dos maiores líderes militares e políticos da história romana, marcando o fim da República e iniciando as bases para a criação do Império. Seu assassinato em 44 a.C. desencadeou uma série de guerras civis que resultaram no surgimento do Império Romano sob Augusto.",
          title3: "Padrão monetário",
          text3:
            "DENÁRIO: Principal moeda romana em prata, usada amplamente durante a República e o Império Romano, valorizada pela sua estabilidade econômica.",
          title4: "Período político",
          text4:
            "República Romana Tardia (133–27 a.C.): Época de conflitos sociais, expansão territorial e crise política, culminando no estabelecimento do Império Romano.",
        },
        {
          id: 4,
          label: "Solidus-de-coinstanino",
          title: "Solidus de Constantino, o Grande",
          anverso: "/images/ANVERSO.png",
          reverso: "/images/REVERSO.png",
          subtitle:
            "Emitido entre 312 e 337 d.C., durante o reinado de Constantino I, primeiro imperador romano cristão.",
          textAnverso:
            'Retrato do imperador Constantino usando um diadema, com a inscrição "CONSTANTINVS P F AVG", significando "Constantino, Pio e Feliz Augusto".',
          textReverso:
            "Representa uma figura da Vitória segurando um troféu militar e um ramo de palma, com a legenda romana indicando vitória e estabilidade imperial.",
          title2: "Personagem Histórico",
          text2:
            "Constantino, o Grande (272–337 d.C.), imperador romano famoso por adotar o cristianismo como religião oficial, fundar Constantinopla (atual Istambul) e estabelecer reformas políticas e econômicas profundas no Império.",
          title3: "Padrão monetário",
          text3:
            "SOLIDUS: Moeda de ouro introduzida por Constantino em 309 d.C., tornando-se o padrão monetário do Império Romano Tardio e do Império Bizantino, notável por sua estabilidade e pureza.",
          title4: "Período político",
          text4:
            "Império Romano Tardio (284–476 d.C.): Caracterizado por reorganizações administrativas, cristianização do império e divisões internas, culminando na queda do Império Romano do Ocidente em 476 d.C.",
        },
        {
          id: 5,
          label: "Tetradracma-de-Atenas",
          title: "Tetradracma de Atenas",
          anverso: "",
          reverso: "/images/atenas_reverso.png",
          subtitle:
            "Forjada em Atenas entre os séculos V e IV a.C., durante o auge da democracia ateniense e das Guerras do Peloponeso.",
          textAnverso:
            "A face mostra a deusa Atena com capacete ático decorado com folhas de oliveira e grifo alado. Atena era a padroeira da cidade de Atenas, símbolo de sabedoria, estratégia militar e protetora da pólis. O detalhe da joia e da armadura simboliza poder e autoridade espiritual sobre a cidade.",
          textReverso:
            "O reverso exibe uma coruja (símbolo de Atena) voltada para a frente com cabeça de perfil, ao lado de um ramo de oliveira e uma meia-lua. Ao lado está a inscrição ‘ΑΘΕ’ (abreviação de ‘Athens’ em grego antigo). A composição representa conhecimento, vigilância e prosperidade.",
          title2: "Personagem Mitológica",
          text2:
            "Atena, deusa grega da sabedoria e da guerra justa, era filha de Zeus, nascida da cabeça do pai completamente armada. Reverenciada em toda a Grécia, tinha em Atenas seu centro de culto. A coruja, seu animal sagrado, simboliza inteligência e visão noturna, remetendo à sua capacidade de enxergar o que os outros não veem.Atena, deusa grega da sabedoria e da guerra justa, era filha de Zeus, nascida da cabeça do pai completamente armada. Reverenciada em toda a Grécia, tinha em Atenas seu centro de culto. A coruja, seu animal sagrado, simboliza inteligência e visão noturna, remetendo à sua capacidade de enxergar o que os outros não veem.TETRADRACMA: Moeda de prata que equivalia a quatro dracmas. Muito usada em transações comerciais em todo o mundo helênico. O Tetradracma ateniense era especialmente confiável por sua pureza e peso, tornando-se uma moeda padrão internacional durante o século V a.C.TETRADRACMA: Moeda de prata que equivalia a quatro dracmas. Muito usada em transações comerciais em todo o mundo helênico. O Tetradracma ateniense era especialmente confiável por sua pureza e peso, tornando-se uma moeda padrão internacional durante o século V a.C.TETRADRACMA: Moeda de prata que equivalia a quatro dracmas. Muito usada em transações comerciais em todo o mundo helênico. O Tetradracma ateniense era especialmente confiável por sua pureza e peso, tornando-se uma moeda padrão internacional durante o século V a.C.",
          title3: "Padrão monetário",
          text3:
            "TETRADRACMA: Moeda de prata que equivalia a quatro dracmas. Muito usada em transações comerciais em todo o mundo helênico. O Tetradracma ateniense era especialmente confiável por sua pureza e peso, tornando-se uma moeda padrão internacional durante o século V a.C.TETRADRACMA: Moeda de prata que equivalia a quatro dracmas. Muito usada em transações comerciais em todo o mundo helênico. O Tetradracma ateniense era especialmente confiável por sua pureza e peso, tornando-se uma moeda padrão internacional durante o século V a.C.TETRADRACMA: Moeda de prata que equivalia a quatro dracmas. Muito usada em transações comerciais em todo o mundo helênico. O Tetradracma ateniense era especialmente confiável por sua pureza e peso, tornando-se uma moeda padrão internacional durante o século V a.C.TETRADRACMA: Moeda de prata que equivalia a quatro dracmas. Muito usada em transações comerciais em todo o mundo helênico. O Tetradracma ateniense era especialmente confiável por sua pureza e peso, tornando-se uma moeda padrão internacional durante o século V a.C.",
          title4: "Período político",
          text4:
            "Período Clássico Grego (c. 480–323 a.C.): Época de máximo esplendor da cidade de Atenas, marcada pela democracia direta, florescimento das artes, filosofia, teatro e expansão marítima. Ao mesmo tempo, Atenas enfrentava rivalidades com Esparta, o que culminou nas Guerras do Peloponeso.TETRADRACMA: Moeda de prata que equivalia a quatro dracmas. Muito usada em transações comerciais em todo o mundo helênico. O Tetradracma ateniense era especialmente confiável por sua pureza e peso, tornando-se uma moeda padrão internacional durante o século V a.C.TETRADRACMA: Moeda de prata que equivalia a quatro dracmas. Muito usada em transações comerciais em todo o mundo helênico. O Tetradracma ateniense era especialmente confiável por sua pureza e peso, tornando-se uma moeda padrão internacional durante o século V a.C.TETRADRACMA: Moeda de prata que equivalia a quatro dracmas. Muito usada em transações comerciais em todo o mundo helênico. O Tetradracma ateniense era especialmente confiável por sua pureza e peso, tornando-se uma moeda padrão internacional durante o século V a.C.",
        },
      ];
      return this.moedasAntiguidade;
    },
    GetMoedasIdadeMedia() {
      this.moedasIdadeMedia = [
        {
          id: 1,
          label: "Soldo-Justiniano",
          title: "Soldo de Justiniano I",
          anverso: "/images/justiniano_anverso.png",
          reverso: "/images/justiniano_reverso.png",
          subtitle:
            "Emitido durante o reinado de Justiniano I (527–565 d.C.), no auge do Império Bizantino.",
          textAnverso:
            "Retrato frontal de Justiniano usando coroa e segurando o globo crucífero, com a inscrição “DN IVSTINIANVS PP AVG”.",
          textReverso:
            "Anjo de pé segurando cruz longa e globo, símbolo do cristianismo e do poder espiritual do imperador.",
          title2: "Personagem Histórico",
          text2:
            "Justiniano I foi um dos mais importantes imperadores bizantinos. Promoveu a codificação das leis romanas (Corpus Juris Civilis), reconquistou partes do antigo Império Romano do Ocidente e patrocinou grandes obras, como a Hagia Sophia em Constantinopla.",
          title3: "Padrão monetário",
          text3:
            "SOLDO: Moeda de ouro criada por Constantino, mas usada amplamente durante o Império Bizantino. Tinha grande estabilidade e servia como moeda internacional no comércio medieval.",
          title4: "Período político",
          text4:
            "Império Bizantino (330–1453): Continuação oriental do Império Romano, com sede em Constantinopla. Na época de Justiniano, viveu uma fase de esplendor cultural, militar e religioso.",
        },
        {
          id: 2,
          label: "Denier-Carlos-Magno",
          title: "Denier de Carlos Magno",
          anverso: "/images/carlosmagno_anverso.png",
          reverso: "/images/carlosmagno_reverso.png",
          subtitle:
            "Moeda cunhada entre os séculos VIII e IX, durante o reinado de Carlos Magno no Império Carolíngio.",
          textAnverso:
            "Inscrição “CARLVS REX FR” com cruz central, simbolizando Carlos Magno como rei dos Francos e defensor do cristianismo.",
          textReverso:
            "Inscrição “XPISTIANA RELIGIO” em volta de um monograma de Cristo, exaltando a fé cristã como base do poder imperial.",
          title2: "Personagem Histórico",
          text2:
            "Carlos Magno (742–814) foi o primeiro imperador do Sacro Império Romano-Germânico. Unificou vastas áreas da Europa Ocidental e incentivou a educação e a religião cristã, sendo coroado imperador em 800 d.C. pelo Papa Leão III.",
          title3: "Padrão monetário",
          text3:
            "DENIER: Moeda de prata leve criada na reforma monetária de Carlos Magno. Tornou-se a base do sistema monetário medieval europeu (livre, sou e denier).",
          title4: "Período político",
          text4:
            "Império Carolíngio (séculos VIII–IX): Período de reunificação territorial e impulso cultural após a queda do Império Romano do Ocidente. Precedeu o surgimento do Sacro Império Romano-Germânico.",
          informationMoedaType2: [
            {
              title: " Observações",
              text: " Arados era uma importante cidade portuária fenícia que emitiu várias moedas provinciais para diferentes imperadores romanos.",
              title2: "Especificações da moeda",
              text2:
                "Diâmetro: 27 mm Espessura: 2 mm Massa: 13,87g Material: prata (AR – argentum)",
              title3: "Macrinus na cultura popular:",
              text3:
                "Gladiador 2 é a sequência do aclamado filme Gladiador (2000), dirigido por Ridley Scott. Lançado nos cinemas em 14 de novembro de 2024. A história se passa anos após os eventos do primeiro filme, acompanhando Lúcio (PaulMescal), que, após testemunhar a morte de Máximo, enfrenta novos desafios ao ser forçado a lutar no Coliseu para sobreviver e restaurar a honra de Roma. O elenco conta com Paul Mescal como Lúcio, Pedro Pascal, Connie Nielsen reprisando seu papel como Lucila e Denzel Washington interpretando Macrinus.",
            },
          ],
        },
        {
          id: 3,
          label: "Dirham-Omíada",
          title: "Dirham Omíada",
          anverso: "/images/dirham_anverso.png",
          reverso: "/images/dirham_reverso.png",
          subtitle:
            "Moeda de prata usada amplamente no Califado Omíada, cunhada por volta de 696 d.C., durante o reinado do califa Abd al-Malik ibn Marwan.",
          textAnverso:
            "Inscrição em árabe: 'Não há divindade além de Deus, único, sem parceiros', com borda circular citando versículos do Alcorão.",
          textReverso:
            "Inscrição: 'Muhammad é o Mensageiro de Deus' e data em Hijri, com menção à cidade onde foi cunhada.",
          title2: "Personagem Histórico",
          text2:
            "Abd al-Malik ibn Marwan (646–705) foi califa Omíada conhecido por reformas administrativas e pela introdução do primeiro sistema monetário islâmico independente de símbolos bizantinos ou persas.",
          title3: "Padrão monetário",
          text3:
            "DIRHAM: Moeda de prata do mundo islâmico, baseada no sistema sassânida, padronizada por Abd al-Malik. Foi amplamente usada no comércio entre Europa, Ásia e Norte da África.",
          title4: "Período político",
          text4:
            "Califado Omíada (661–750): Primeiro grande império islâmico após a morte de Maomé. Sediado em Damasco, expandiu-se por três continentes e estabeleceu a base política e cultural da civilização islâmica medieval.",
        },
      ];
      return this.moedasIdadeMedia;
    },
    GetMoedasIdadeModerna() {
      this.moedasModerna = [
        {
          id: 1,
          label: "Soldo-Justiniano",
          title: "Soldo de Justiniano I",
          anverso: "/images/justiniano_anverso.png",
          reverso: "/images/justiniano_reverso.png",
          subtitle:
            "Emitido durante o reinado de Justiniano I (527–565 d.C.), no auge do Império Bizantino.",
          textAnverso:
            "Retrato frontal de Justiniano usando coroa e segurando o globo crucífero, com a inscrição “DN IVSTINIANVS PP AVG”.",
          textReverso:
            "Anjo de pé segurando cruz longa e globo, símbolo do cristianismo e do poder espiritual do imperador.",
          title2: "Personagem Histórico",
          text2:
            "Justiniano I foi um dos mais importantes imperadores bizantinos. Promoveu a codificação das leis romanas (Corpus Juris Civilis), reconquistou partes do antigo Império Romano do Ocidente e patrocinou grandes obras, como a Hagia Sophia em Constantinopla.",
          title3: "Padrão monetário",
          text3:
            "SOLDO: Moeda de ouro criada por Constantino, mas usada amplamente durante o Império Bizantino. Tinha grande estabilidade e servia como moeda internacional no comércio medieval.",
          title4: "Período político",
          text4:
            "Império Bizantino (330–1453): Continuação oriental do Império Romano, com sede em Constantinopla. Na época de Justiniano, viveu uma fase de esplendor cultural, militar e religioso.",
        },
        {
          id: 2,
          label: "Denier-Carlos-Magno",
          title: "Denier de Carlos Magno",
          anverso: "/images/carlosmagno_anverso.png",
          reverso: "/images/carlosmagno_reverso.png",
          subtitle:
            "Moeda cunhada entre os séculos VIII e IX, durante o reinado de Carlos Magno no Império Carolíngio.",
          textAnverso:
            "Inscrição “CARLVS REX FR” com cruz central, simbolizando Carlos Magno como rei dos Francos e defensor do cristianismo.",
          textReverso:
            "Inscrição “XPISTIANA RELIGIO” em volta de um monograma de Cristo, exaltando a fé cristã como base do poder imperial.",
          title2: "Personagem Histórico",
          text2:
            "Carlos Magno (742–814) foi o primeiro imperador do Sacro Império Romano-Germânico. Unificou vastas áreas da Europa Ocidental e incentivou a educação e a religião cristã, sendo coroado imperador em 800 d.C. pelo Papa Leão III.",
          title3: "Padrão monetário",
          text3:
            "DENIER: Moeda de prata leve criada na reforma monetária de Carlos Magno. Tornou-se a base do sistema monetário medieval europeu (livre, sou e denier).",
          title4: "Período político",
          text4:
            "Império Carolíngio (séculos VIII–IX): Período de reunificação territorial e impulso cultural após a queda do Império Romano do Ocidente. Precedeu o surgimento do Sacro Império Romano-Germânico.",
        },
        {
          id: 3,
          label: "Dirham-Omíada",
          title: "Dirham Omíada",
          anverso: "/images/dirham_anverso.png",
          reverso: "/images/dirham_reverso.png",
          subtitle:
            "Moeda de prata usada amplamente no Califado Omíada, cunhada por volta de 696 d.C., durante o reinado do califa Abd al-Malik ibn Marwan.",
          textAnverso:
            "Inscrição em árabe: 'Não há divindade além de Deus, único, sem parceiros', com borda circular citando versículos do Alcorão.",
          textReverso:
            "Inscrição: 'Muhammad é o Mensageiro de Deus' e data em Hijri, com menção à cidade onde foi cunhada.",
          title2: "Personagem Histórico",
          text2:
            "Abd al-Malik ibn Marwan (646–705) foi califa Omíada conhecido por reformas administrativas e pela introdução do primeiro sistema monetário islâmico independente de símbolos bizantinos ou persas.",
          title3: "Padrão monetário",
          text3:
            "DIRHAM: Moeda de prata do mundo islâmico, baseada no sistema sassânida, padronizada por Abd al-Malik. Foi amplamente usada no comércio entre Europa, Ásia e Norte da África.",
          title4: "Período político",
          text4:
            "Califado Omíada (661–750): Primeiro grande império islâmico após a morte de Maomé. Sediado em Damasco, expandiu-se por três continentes e estabeleceu a base política e cultural da civilização islâmica medieval.",
        },
      ];
      return this.moedasModerna;
    },
    GetMoedasContemporanea() {
      this.moedasContemporanea = [
        {
          id: 1,
          label: "Soldo-Justiniano",
          title: "Soldo de Justiniano I",
          anverso: "/images/justiniano_anverso.png",
          reverso: "/images/justiniano_reverso.png",
          subtitle:
            "Emitido durante o reinado de Justiniano I (527–565 d.C.), no auge do Império Bizantino.",
          textAnverso:
            "Retrato frontal de Justiniano usando coroa e segurando o globo crucífero, com a inscrição “DN IVSTINIANVS PP AVG”.",
          textReverso:
            "Anjo de pé segurando cruz longa e globo, símbolo do cristianismo e do poder espiritual do imperador.",
          title2: "Personagem Histórico",
          text2:
            "Justiniano I foi um dos mais importantes imperadores bizantinos. Promoveu a codificação das leis romanas (Corpus Juris Civilis), reconquistou partes do antigo Império Romano do Ocidente e patrocinou grandes obras, como a Hagia Sophia em Constantinopla.",
          title3: "Padrão monetário",
          text3:
            "SOLDO: Moeda de ouro criada por Constantino, mas usada amplamente durante o Império Bizantino. Tinha grande estabilidade e servia como moeda internacional no comércio medieval.",
          title4: "Período político",
          text4:
            "Império Bizantino (330–1453): Continuação oriental do Império Romano, com sede em Constantinopla. Na época de Justiniano, viveu uma fase de esplendor cultural, militar e religioso.",
        },
        {
          id: 2,
          label: "Denier-Carlos-Magno",
          title: "Denier de Carlos Magno",
          anverso: "/images/carlosmagno_anverso.png",
          reverso: "/images/carlosmagno_reverso.png",
          subtitle:
            "Moeda cunhada entre os séculos VIII e IX, durante o reinado de Carlos Magno no Império Carolíngio.",
          textAnverso:
            "Inscrição “CARLVS REX FR” com cruz central, simbolizando Carlos Magno como rei dos Francos e defensor do cristianismo.",
          textReverso:
            "Inscrição “XPISTIANA RELIGIO” em volta de um monograma de Cristo, exaltando a fé cristã como base do poder imperial.",
          title2: "Personagem Histórico",
          text2:
            "Carlos Magno (742–814) foi o primeiro imperador do Sacro Império Romano-Germânico. Unificou vastas áreas da Europa Ocidental e incentivou a educação e a religião cristã, sendo coroado imperador em 800 d.C. pelo Papa Leão III.",
          title3: "Padrão monetário",
          text3:
            "DENIER: Moeda de prata leve criada na reforma monetária de Carlos Magno. Tornou-se a base do sistema monetário medieval europeu (livre, sou e denier).",
          title4: "Período político",
          text4:
            "Império Carolíngio (séculos VIII–IX): Período de reunificação territorial e impulso cultural após a queda do Império Romano do Ocidente. Precedeu o surgimento do Sacro Império Romano-Germânico.",
        },
        {
          id: 3,
          label: "Dirham-Omíada",
          title: "Dirham Omíada",
          anverso: "/images/dirham_anverso.png",
          reverso: "/images/dirham_reverso.png",
          subtitle:
            "Moeda de prata usada amplamente no Califado Omíada, cunhada por volta de 696 d.C., durante o reinado do califa Abd al-Malik ibn Marwan.",
          textAnverso:
            "Inscrição em árabe: 'Não há divindade além de Deus, único, sem parceiros', com borda circular citando versículos do Alcorão.",
          textReverso:
            "Inscrição: 'Muhammad é o Mensageiro de Deus' e data em Hijri, com menção à cidade onde foi cunhada.",
          title2: "Personagem Histórico",
          text2:
            "Abd al-Malik ibn Marwan (646–705) foi califa Omíada conhecido por reformas administrativas e pela introdução do primeiro sistema monetário islâmico independente de símbolos bizantinos ou persas.",
          title3: "Padrão monetário",
          text3:
            "DIRHAM: Moeda de prata do mundo islâmico, baseada no sistema sassânida, padronizada por Abd al-Malik. Foi amplamente usada no comércio entre Europa, Ásia e Norte da África.",
          title4: "Período político",
          text4:
            "Califado Omíada (661–750): Primeiro grande império islâmico após a morte de Maomé. Sediado em Damasco, expandiu-se por três continentes e estabeleceu a base política e cultural da civilização islâmica medieval.",
        },
      ];
      return this.moedasContemporanea;
    },
  },
});
