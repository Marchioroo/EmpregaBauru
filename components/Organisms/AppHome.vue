<script lang="ts" setup>

const logo = ref('/images/logoAtual.png');
const toOpenID = ref()
const toOpen = ref(false)


const menu = computed(() => [

    {
        id: 1,
        name: 'Moedas',
        title: 'Catálogo de moedas',
        image: '',
        text: 'Explore moedas que atravessam séculos de história desde a Antiguidade até o mundo contemporâneo. Este espaço foi criado para apresentar exemplares que revelam aspectos políticos, culturais e artísticos de diferentes épocas e sociedades, permitindo uma nova forma de observar a história por meio da numismática. ',
        itens: ['Antiguidade', 'Idade Média', 'Idade Moderna', 'Idade Contemporânea']
    },
    {
        id: 2,
        name: 'Cédulas',
        title: 'Catálogo de cédulas',
        image: '',
        text: 'Conheça cédulas que marcaram diferentes contextos sociais, políticos e econômicos ao longo da história. Este espaço propõe uma leitura crítica do papel do papel-moeda como suporte de símbolos, narrativas e disputas de poder, revelando como os Estados constroem identidades, legitimam governos e representam suas culturas por meio da imagem impressa. ',
        itens: ['Idade Média', 'Idade Moderna', 'Idade Contemporânea']
    },
    {
        id: 3,
        name: 'Medalhas',
        title: 'Catálogo de cédulas',
        image: '',
        text: 'Medalhas comemorativas e históricas permitem a análise de eventos, homenagens, campanhas e datas marcantes. A partir desses objetos, é possível compreender relações de poder, construções de identidade, estratégias de legitimação e usos públicos da memória em diferentes contextos históricos. ',
        itens: ['Idade Média', 'Idade Moderna', 'Idade Contemporânea']
    },

]);

const openInformations = (id: number) => {
    if (toOpenID.value === id) {
        toOpenID.value = null
        return;
    }
    toOpenID.value = id;

}
const routesMap: Record<string, string> = {
    Antiguidade: '/moedas/antiguidade',
    'Idade Contemporânea': '/moedas/idade-conteporanea',
    'Idade Média': '/moedas/idade-media',
    'Idade Moderna': '/moedas/idade-moderna'

};

const redirectTo = (item: string) => {
    const route = routesMap[item];
    if (route) {
        navigateTo(route);
    }
};

</script>

<template>
    <div class=" w-full h-full flex items-center justify-center bg-[#fdf6ec] flex-col ">
        <div class=" w-full md:w-3/4 h-full flex-col ">
            <div class="w-full md:h-[150px] h-[120px]  ">
                <NuxtImg :src="logo" class="md:w-40 md:h-40 w-28 h-28 !p-0 " />
            </div>

            <div class="w-full h-full md:mt-20 my-10 px-9 ">
                <div class="flex flex-col gap-2 ">
                    <span class="text-3xl md:h-[50px] mb-6 h-full font-bold">
                        <p class="text-[#011640]  w-full  cursor-pointer hover:text-[#76849c] transition-all">
                            NEPEN - Núcleo de
                            Estudos
                            e
                            Pesquisa em
                            Numismática</p>
                    </span>

                    <div class="text-[#011640] h-full text-lg  md:max-w-[600px] w-full mb-10 ">
                        Somos um grupo que desenvolve pesquisas e atividades acadêmicas científicas,
                        caracterizado pela relação interdisciplinar entre História, Letras e Antropologia, com foco
                        especial no estudo das diferentes expressões, hábitos sociais e fenômenos como o
                        multiculturalismo e as transformações sociais e culturais contemporâneas. A partir de
                        metodologias multidisciplinares dos estudos históricos, literários e culturais, buscamos
                        possibilitar a leitura e análise dos fenômenos artísticos e antropológicos essenciais para a
                        compreensão da história, língua, literatura, etnologia, etnografia e cultura de massa.
                        Assim, estabelecemos um diálogo interdisciplinar na construção de referenciais
                        epistemológicos e abordagens metodológicas voltadas para o estudo das Histórias e
                        Culturas dos Povos Indígenas e de Matriz Africana no Brasil.

                    </div>

                </div>
            </div>

        </div>
        <div class="w-full h-full md:mt-18  ">
            <div v-for="list in menu" class="w-full ">
                <p @click="openInformations(list.id)"
                    class="text-6xl w-2/3 md:pl-64 font-semibold px-8 hover:text-[#76849c] transition-all cursor-pointer mb-10">
                    {{ list.name }}</p>

                <transition name="reveal-down">
                    <div v-if="toOpenID === list.id"
                        class=" flex items-center overflow-hidden h-auto flex-col md:px-10  justify-center bg-[#011640] ">


                        <div class="w-3/4 text-[#fdf6ec] flex flex-col gap-5 pt-14">
                            <span class="md:text-lg text-2xl break-words font-extrabold">
                                {{ list.title }}
                            </span>
                            <span class="break-words mt-4">
                                {{ list.text }}
                            </span>
                        </div>

                        <div class="w-3/4 flex flex-col md:flex-row justify-between items-starts  my-10 md:py-4 ">
                            <div v-for="item in list.itens" :key="item"
                                class="text-[#C8913E] w-[250px] text-lg font-semibold cursor-pointer md:p-4 py-4 "
                                @click="redirectTo(item)">
                                {{ item }}
                            </div>
                        </div>

                    </div>
                </transition>
                <br>

            </div>


        </div>

    </div>
</template>


<style scoped>
.reveal-down-enter-active,
.reveal-down-leave-active {
    transition: max-height 1s ease, opacity 1s ease;
}

.reveal-down-enter-from,
.reveal-down-leave-to {
    max-height: 0;
    opacity: 0;
}

.reveal-down-enter-to,
.reveal-down-leave-from {
    max-height: 1000px;
}
</style>