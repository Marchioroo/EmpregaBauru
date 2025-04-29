<script lang="ts" setup>
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
    AOS.init({
        duration: 1200, // Duração das animações
        easing: 'ease', // Efeito de transição
        once: true,     // A animação acontece apenas uma vez
        offset: 100,    // Distância do topo para começar a animação
    });
});

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
        text: 'Conheça cédulas que marcaram diferentes contextos sociais, políticos e econômicos ao longo da história. Este espaço propõe uma leitura crítica do papel do papel-moeda como suporte de símbolos, narrativas e disputas de poder, revelando como os Estados constroem identidades, legitimam governos e representam suas culturas por meio da imagem impressa.  ',
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
// 1) Defina um objeto de rotas por categoria e sub-item
const routesMap: Record<string, Record<string, string>> = {
    Moedas: {
        Antiguidade: '/moedas/antiguidade',
        'Idade Média': '/moedas/idade-media',
        'Idade Moderna': '/moedas/idade-moderna',
        'Idade Contemporânea': '/moedas/idade-contemporanea',
    },
    Cédulas: {
        'Idade Média': '/cedulas/idade-media',
        'Idade Moderna': '/cedulas/idade-moderna',
        'Idade Contemporânea': '/cedulas/idade-contemporanea',
    },
    Medalhas: {
        Antiguidade: '/medalhas/antiguidade',
        'Idade Média': '/medalhas/idade-media',
        'Idade Moderna': '/medalhas/idade-moderna',
        'Idade Contemporânea': '/medalhas/idade-contemporanea',
    },
}

// 2) Atualize a função para receber também a categoria pai
const redirectTo = (category: string, item: string) => {
    const route = routesMap[category]?.[item];
    if (route) {
        navigateTo(route);
    } else {
        console.warn(`Rota não encontrada para ${category} → ${item}`);
    }
};




</script>

<template>
    <div class=" w-full h-full flex items-center justify-center bg-[#fdf6ec] flex-col ">
        <video autoplay muted loop id="video-background"
            class="absolute  top-0 left-0 w-full  h-[120%] md:h-[95%] object-cover">
            <source src="/public/images/video-nepen.mp4" type="video/mp4">
            Seu navegador não suporta o formato de vídeo.
        </video>
        <div data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200"
            class=" w-full md:w-3/4 h-full flex-col ">
            <div class="w-full md:h-[250px] h-[160px]  ">
                <NuxtImg :src="logo" class="md:w-60 md:h-60 w-40 h-40 md:-ml-4 cursor-pointer " />
            </div>

            <div class="w-full h-full md:mt-24 my-10 px-9 ">
                <div class="flex flex-col gap-2 ">
                    <span class="text-3xl md:h-[50px] mb-6 h-full font-bold">
                        <p
                            class="text-[#000]   text-4xl w-full  cursor-pointer hover:text-[#fff] transition-all text-justify">
                            NEPEN - Núcleo de
                            Estudos
                            e
                            Pesquisa em
                            Numismática</p>
                    </span>

                    <div class="text-[#000] h-full  font-semibold text-lg  md:max-w-[600px] w-full mb-10 text-justify">
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
        <div class="w-full h-full md:mt-">
            <div v-for="(list, index) in menu" :key="list.id" class="w-full">
                <!-- Título com transição do AOS -->
                <p @click="openInformations(list.id)"
                    class="text-6xl w-2/3 md:pl-64 font-semibold px-8 hover:text-[#76849c] transition-all cursor-pointer mb-10"
                    :data-aos="'fade-right'" :data-aos-delay="index * 200" data-aos-duration="1500">
                    {{ list.name }}
                </p>

                <!-- Conteúdo que aparece quando o item é clicado -->
                <transition name="reveal-down">
                    <div v-if="toOpenID === list.id"
                        class="flex items-center overflow-hidden h-auto flex-col md:px-10 justify-center bg-[#011640]">
                        <div class="w-3/4 text-[#fdf6ec] flex flex-col gap-5 pt-14">
                            <span class="md:text-lg text-2xl break-words font-extrabold">
                                {{ list.title }}
                            </span>
                            <span class="break-words mt-4">
                                {{ list.text }}
                            </span>
                        </div>

                        <!-- Itens de navegação -->
                        <div class="w-3/4 flex flex-col md:flex-row justify-between items-start my-10 md:py-4">
                            <div v-for="item in list.itens" :key="item"
                                class="text-[#C8913E] w-[250px] text-lg font-semibold cursor-pointer md:p-4 py-4"
                                @click="redirectTo(list.name, item)">
                                {{ item }}
                            </div>
                        </div>

                    </div>
                </transition>
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