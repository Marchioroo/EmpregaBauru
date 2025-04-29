import { defineStore } from "pinia";

type infomationCedulaType = {
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
  informationMoedaType2?: informationCedulaType2[];
};

type informationCedulaType2 = {
  title: string | null | undefined;
  text?: string | null;
  title2?: string | null;
  text2?: string | null;
  text3?: string | null;
  title3?: string | null;
};

export const useCedulaStore = defineStore("cedulaStore", {
  state: () => ({
    cedulasIdadeMedia: [] as infomationCedulaType[],
    cedulasIdadeModerna: [] as infomationCedulaType[],
    cedulasContemporanea: [] as infomationCedulaType[],
  }),
  actions: {
    getCedulasIdadeMedia() {
      this.cedulasIdadeMedia = [
        {
          id: 1,
          label: "Jiaozi",
          title: "Jiaozi do Reino de Chengdu",
          subtitle: "Sichuan (China), c. 1024 d.C.",
          anverso: "/images/cedula-anverso.png",
          reverso: "/images/cedula-reverso.png",
          textAnverso:
            "Inscrição superior em caracteres chineses: “四川督运转运使司” (Sichuan Duyun Zhuanyun Sisi – “Ofício de Transporte e Redespacho de Sichuan”). Abaixo, indicação do valor facial em “贯” (guàn).",
          textReverso:
            "Carimbo oficial em vermelho com selos imperiais e anotações manuscritas que certificam a validade daquela emissão na província. Ausência de figuras humanas, mais ênfase em caracteres e selos.",
          title2: "Contexto Histórico",
          text2:
            "No início do século XI, o governo do Reino de Chengdu enfrentava escassez de moedas de metal devido à expansão do comércio interno. Para facilitar as transações, autoridades locais passaram a emitir papéis-moeda (jiaozi), antecedendo a adoção nacional pelo Império Song.",
          title3: "Suporte e Impressão",
          text3:
            "Fabricado em papel de fibras de cânhamo e bambu, trazia à mão carimbos de madeira e inscrições manuscritas. Não havia impressão em grandes matrizes metálicas — cada lote tinha pequena variação.",
          title4: "Legado",
          text4:
            "O Jiaozi foi o primeiro papel-moeda a circular regularmente como meio de pagamento, influenciando emissões posteriores na China e, séculos depois, servindo de modelo para o papel-moeda no mundo inteiro.",
          informationMoedaType2: [
            {
              title: "Observações",
              text: "Embora se chamem genericamente jiaozi, as emissões podiam variar em tamanho e forma conforme o ofício emissor.",
              title2: "Especificações da cédula",
              text2:
                "Dimensões: 260 × 150 mm; Peso: ≈1,2 g; Material: fibras de cânhamo e bambu.",
              title3: "Curiosidades",
              text3:
                "Há registros de que o valor facial impresso era “1贯” (uma corda de moedas de bronze), mas o jiaozi acabava valendo mais no comércio de longa distância.",
            },
          ],
        },
      ];

      return this.cedulasIdadeMedia;
    },
    getCedulasIdadeModerna() {
      this.cedulasIdadeModerna = [
        {
          id: 1,
          label: "Jiaozi Modernos",
          title: "Jiaozi do Reino de Chengdu Moderno",
          subtitle: "Sichuan (China), c. 1024 d.C.",
          anverso: "/images/cedula-anverso.png",
          reverso: "/images/cedula-reverso.png",
          textAnverso:
            "Inscrição superior em caracteres chineses: “四川督运转运使司” (Sichuan Duyun Zhuanyun Sisi – “Ofício de Transporte e Redespacho de Sichuan”). Abaixo, indicação do valor facial em “贯” (guàn).",
          textReverso:
            "Carimbo oficial em vermelho com selos imperiais e anotações manuscritas que certificam a validade daquela emissão na província. Ausência de figuras humanas, mais ênfase em caracteres e selos.",
          title2: "Contexto Histórico",
          text2:
            "No início do século XI, o governo do Reino de Chengdu enfrentava escassez de moedas de metal devido à expansão do comércio interno. Para facilitar as transações, autoridades locais passaram a emitir papéis-moeda (jiaozi), antecedendo a adoção nacional pelo Império Song.",
          title3: "Suporte e Impressão",
          text3:
            "Fabricado em papel de fibras de cânhamo e bambu, trazia à mão carimbos de madeira e inscrições manuscritas. Não havia impressão em grandes matrizes metálicas — cada lote tinha pequena variação.",
          title4: "Legado",
          text4:
            "O Jiaozi foi o primeiro papel-moeda a circular regularmente como meio de pagamento, influenciando emissões posteriores na China e, séculos depois, servindo de modelo para o papel-moeda no mundo inteiro.",
          informationMoedaType2: [
            {
              title: "Observações",
              text: "Embora se chamem genericamente jiaozi, as emissões podiam variar em tamanho e forma conforme o ofício emissor.",
              title2: "Especificações da cédula",
              text2:
                "Dimensões: 260 × 150 mm; Peso: ≈1,2 g; Material: fibras de cânhamo e bambu.",
              title3: "Curiosidades",
              text3:
                "Há registros de que o valor facial impresso era “1贯” (uma corda de moedas de bronze), mas o jiaozi acabava valendo mais no comércio de longa distância.",
            },
          ],
        },
      ];

      return this.cedulasIdadeModerna;
    },
    getCedulasContemporanea() {
      this.cedulasContemporanea = [
        {
          id: 1,
          label: "Jiaozi",
          title: "Jiaozi do Reino de Chengdu Cotemporaneo",
          subtitle: "Sichuan (China), c. 1024 d.C.",
          anverso: "/images/cedula-anverso.png",
          reverso: "/images/cedula-reverso.png",
          textAnverso:
            "Inscrição superior em caracteres chineses: “四川督运转运使司” (Sichuan Duyun Zhuanyun Sisi – “Ofício de Transporte e Redespacho de Sichuan”). Abaixo, indicação do valor facial em “贯” (guàn).",
          textReverso:
            "Carimbo oficial em vermelho com selos imperiais e anotações manuscritas que certificam a validade daquela emissão na província. Ausência de figuras humanas, mais ênfase em caracteres e selos.",
          title2: "Contexto Histórico",
          text2:
            "No início do século XI, o governo do Reino de Chengdu enfrentava escassez de moedas de metal devido à expansão do comércio interno. Para facilitar as transações, autoridades locais passaram a emitir papéis-moeda (jiaozi), antecedendo a adoção nacional pelo Império Song.",
          title3: "Suporte e Impressão",
          text3:
            "Fabricado em papel de fibras de cânhamo e bambu, trazia à mão carimbos de madeira e inscrições manuscritas. Não havia impressão em grandes matrizes metálicas — cada lote tinha pequena variação.",
          title4: "Legado",
          text4:
            "O Jiaozi foi o primeiro papel-moeda a circular regularmente como meio de pagamento, influenciando emissões posteriores na China e, séculos depois, servindo de modelo para o papel-moeda no mundo inteiro.",
          informationMoedaType2: [
            {
              title: "Observações",
              text: "Embora se chamem genericamente jiaozi, as emissões podiam variar em tamanho e forma conforme o ofício emissor.",
              title2: "Especificações da cédula",
              text2:
                "Dimensões: 260 × 150 mm; Peso: ≈1,2 g; Material: fibras de cânhamo e bambu.",
              title3: "Curiosidades",
              text3:
                "Há registros de que o valor facial impresso era “1贯” (uma corda de moedas de bronze), mas o jiaozi acabava valendo mais no comércio de longa distância.",
            },
          ],
        },
      ];

      return this.cedulasContemporanea;
    },
  },
});
