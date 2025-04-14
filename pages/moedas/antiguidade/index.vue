<script lang="ts" setup>
const informations = [
    {
        id: 1,
        title: 'Tetradracma de Macrinus',
        subtitle: 'Arados, região da Fenícia (atualmente território da Síria), entreos anosde 217 e 218 d.C.',

        textAnverso: 'Inscrição: ΑΥΤ Κ ΜΑ Ο CΕ ΜΑΚΡΙΝΟC; Transliteração: AYT K MA O CE MAKΡINOΣ; Tradução: "Imperador César Marco Opélio Severo Macrino" O busto de Macrino exibe uma barba espessa e cabelo crespo, coroado por uma laurea, símbolo de sua autoridade imperial. Ele veste um paludamentum, reforçando sua posição como líder militar e governante.',
        textReverso: ' moeda apresenta uma águia de asas abertas, segurando uma coroa no bico, um elemento característico das emissões da província da Síria-Fenícia. A inscrição ΗΜΑX Ε ΥΑΤΟC Α, pode ser traduzida como "Tetrarquia da cidade sagrada e autônoma", reforçando o status especial da cidade emissora. ',
        title2: 'Personagem Histórico',
        text2: 'Macrino (Marcus Opellius Severus Macrinus) foi imperador romano por pouco tempo, de abril de 217 a junho de 218 d.C. Ele foi o primeiro a chegar ao trono sem ser de famíliasenatorial, vindo de uma origem mais simples na Mauritânia (atual Argélia ou Marrocos). Antes de ser imperador, era comandante da guarda pretoriana e pode ter participado da morte de Caracala, seu antecessor. No governo, tentou economizar dinheiro e fez um acordo de paz com os partas, o que irritou os soldados, acostumados com aumentos e saques. Isso levou à revolta que colocou Elagábalo no trono, apoiado por sua avó Júlia Mesa. Macrino foi derrotado em uma batalha, preso e morto em 218 d.C. ' +
            ' No governo, tentou economizar dinheiro e fez um acordo de paz com os partas, o que irritou os soldados, acostumados com aumentos e saques. Isso levou à revolta que colocou Elagábalo no trono, apoiado por sua avó Júlia Mesa. Macrino foi derrotado em uma batalha, preso e morto em 218 d.C. ',
        title3: 'Padrão monetário',
        text3: 'TETRADRACMA: Moeda de prata usada amplamente no mundo grego e nas províncias orientais do Império Romano. Seu nome vem do grego "tetra" (quatro) + "drachma", indicando que valia quatro dracmas, a unidade monetária padrão da Grécia Antiga.',
        title4: 'Período político: ',
        text4: 'O Império Romano (27 a.C. – 476 d.C. no Ocidente) foi o período da história de Roma em que o poder esteve centralizado nas mãos de um imperador. Teve início com Otaviano, que recebeu o título de Augusto em 27 a.C., após o fim da República. O regime imperial manteve algumas instituições republicanas, mas o imperador passou a deter autoridade máxima sobre o exército, a política e a administração. O Império viveu momentos de grande expansão territorial, estabilidade e prosperidade, como durante a Pax Romana, mas também enfrentou crises e divisões. No Ocidente, terminou em 476 d.C. com a deposição do último imperador; no Oriente, continuou como Império Bizantino até 1453. '

    }
]
const anverso = ref('/images/ANVERSO.png')
const reverso = ref('/images/REVERSO.png')

</script>
<template>
    <div class="w-full h-full flex items-center justify-center bg-[#fdf6ec] flex-col">
        <MoleculesSidebar />

        <div class="flex flex-row w-full justify-center md:mt-20 gap-6 px-4 md:px-8 pb-20">

            <div class="md:w-3/5 px-8 mt-20 ">

                <div class=" w-full h-full flex flex-col gap-2">
                    <span class="text-4xl font-extrabold">{{ informations[0].title }}</span>
                    <span class=" text-base md:text-xl text-[#76849c]">{{ informations[0].subtitle }}
                    </span>


                    <div class="images flex flex-col items-center mt-20 ">
                        <div class="w-full flex flex-row items-center justify-around">
                            <div class="flex flex-col items-center">
                                <NuxtImg :src="anverso" class="md:w-40 md:h-40 w-28 h-28 !p-0 " />
                                <p class="text-xs text-[#C8913E] mr-2"> Anverso</p>
                            </div>

                            <div class="flex flex-col items-center">
                                <NuxtImg :src="reverso" class="md:w-40 md:h-40 w-32 h-32 !p-0 " />
                                <p class="text-xs text-[#C8913E] mb-3 md:mb-0"> Reverso</p>
                            </div>
                        </div>

                        <!-- Setas alinhadas com o grid -->
                        <div class=" grid-cols-2 w-full -mb-2 mt-2 hidden md:grid">
                            <div class="flex justify-center">
                                <div
                                    class="w-0 h-0 border-l-[16px] border-r-[16px] border-b-[16px] border-l-transparent border-r-transparent border-b-[#1a2b4d]">
                                </div>
                            </div>

                            <div class="flex justify-center">
                                <div
                                    class="w-0 h-0 border-l-[16px] border-r-[16px] border-b-[16px] border-l-transparent border-r-transparent border-b-[#1a2b4d]">
                                </div>
                            </div>
                        </div>

                        <!-- Grid com colunas -->
                        <div class="w-full grid grid-cols-1 lg:grid-cols-2  h-[150px] gap-4 bg-[#fdf6ec]  rounded-2xl">
                            <div
                                class="flex flex-col text-[#fdf6ec] items-center justify-center shadow-2xl bg-[#1a2b4d] rounded-2xl p-6 text-sm">
                                <span class="md:hidden">Anverso<br><br></span>
                                {{ informations[0].textAnverso }}
                            </div>
                            <div
                                class="flex flex-col text-[#fdf6ec] items-center justify-center shadow-2xl bg-[#1a2b4d] rounded-2xl p-6 text-sm">
                                <span class="md:hidden">Reverso<br><br></span>
                                {{ informations[0].textReverso }}
                            </div>
                        </div>


                    </div>

                    <div class=" w-full h-full flex flex-col gap-2 mt-60 pt-50 md:mt-10 ">
                        <span class="text-4xl font-extrabold mt-60 md:mt-20 ">{{ informations[0].title2 }}</span>
                        <span class=" text-base md:text-xl text-[#1a2b4d] mt-6">{{ informations[0].text2 }}
                        </span>
                    </div>
                    <div class="mt-16">
                        <div class=" w-full h-full flex flex-col gap-2  ">
                            <div class="flex flex-col gap-2">
                                <span class="text-4xl font-extrabold">{{ informations[0].title3 }}</span>
                                <span
                                    class=" text-lg  text-[#fdf6ec] bg-[#1a2b4d] flex flex-col gap-2 rounded-xl p-4 ">{{
                                        informations[0].text3 }}
                                </span>
                            </div>
                        </div>

                    </div>

                    <div class=" w-full h-full flex flex-col gap-2   pt-16  ">
                        <span class="text-4xl font-extrabold">{{ informations[0].title4 }}</span>
                        <span class=" text-base md:text-xl text-[#1a2b4d] mt-6">{{ informations[0].text4 }}
                        </span>
                    </div>



                </div>



            </div>

            <div class="hidden lg:flex w-[250px] mt-20 bg-[#E5E5E5] text-white rounded-2xl p-4 shadow-lg h-full">
                <div>
                    <span class="border-b-2 text-[#C8913E] font-semibold"> Observações</span>
                    <div>
                        <p class="mt-4 text-[#1a2b4d] font-semibold">
                            Arados era uma importante cidade portuária fenícia que emitiu várias moedas provinciais
                            para diferentes imperadores romanos.
                        </p>


                        <div class="mt-6 ">
                            <span class=" text-[#C8913E] font-semibold">Especificações da moeda:</span>
                            <div class="text-[#1a2b4d] font-semibold mt-6"> Diâmetro: 27 mm
                                Espessura: 2 mm
                                Massa: 13,87g
                                Material: prata (AR – argentum)</div>

                        </div>

                        <div>
                            <div class="mt-6 text-base text-[#C8913E] font-semibold"> Macrinus na cultura popular:
                            </div>

                            <div class="mt-6 text-[#1a2b4d] font-semibold ">Gladiador 2 é a sequência do aclamado filme
                                Gladiador (2000), dirigido por
                                Ridley Scott.
                                Lançado nos cinemas em 14 de novembro de 2024.
                                A história se passa anos após os eventos do primeiro filme, acompanhando Lúcio (Paul
                                Mescal), que, após testemunhar a morte de Máximo, enfrenta novos desafios ao ser
                                forçado a lutar no Coliseu para sobreviver e restaurar a honra de Roma.
                                O elenco conta com Paul Mescal como Lúcio, Pedro Pascal, Connie Nielsen reprisando seu
                                papel como Lucila e Denzel Washington interpretando Macrinus.</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <OrganismsAppSidebar />

</template>