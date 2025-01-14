<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';
import 'swiper/css';
import 'swiper/css/effect-cards';

// Import required modules
import { EffectCards } from 'swiper/modules';

// Define Swiper modules
const modules = ref([EffectCards]);

// Referência para o contêiner rolável (manual)
const scrollContainer = ref<HTMLDivElement | null>(null);

// Função para rolar à esquerda
const scrollLeft = () => {
    if (scrollContainer.value) {
        scrollContainer.value.scrollBy({ left: -200, behavior: 'smooth' });
    }
};

// Função para rolar à direita
const scrollRight = () => {
    if (scrollContainer.value) {
        scrollContainer.value.scrollBy({ left: 200, behavior: 'smooth' });
    }
};

// Referência para o Swiper
const swiperRef = ref(null);

// Funções de navegação do Swiper
const slideNext = () => {
    if (swiperRef.value) {
        swiperRef.value.swiper.slideNext();
    }
};

const slidePrev = () => {
    if (swiperRef.value) {
        swiperRef.value.swiper.slidePrev();
    }
};
</script>

<template>
    <div class="flex flex-col h-[600px] md:h-[500px] w-screen bg-white">

        <div
            class="subtitle text-lg text-center md:text-4xl mt-16 px-1 md:px-4 flex flex-row text-[#00A868] font-semibold w-full items-center justify-center">
            Aqui você encontra as melhores oportunidades de Bauru e região
        </div>

        <div class="button flex items-center justify-center mt-10 md:mt-8">
            <button class="bg-green-600 hover:bg-green-500 transition-all  text-white font-bold py-3 px-10 rounded-2xl">
                Buscar vagas
            </button>
        </div>

        <div class="title flex justify-center items-center">
            <span class=" text-center mt-6 font-semibold text-lg text-black"> Vagas mais procuradas</span>
        </div>
        <div class="card flex flex-row items-center  justify-center w-full relative">

            <!-- Botão de Navegação Esquerda do Swiper -->
            <button @click="slidePrev" class="absolute left-1/3 z-10 hidden md:block">
                <AtomsArrowBlack class="w-6 h-6" direction="left" color="gray" />
            </button>

            <!-- Swiper -->
            <swiper ref="swiperRef" :grabCursor="true" :effect="'creative'" :creativeEffect="{
                prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                },
                next: {
                    translate: ['100%', 0, 0],
                },
            }" :modules="modules" class="mySwiper w-[100%] md:w-[30%]">
                <!-- Slide 1 -->
                <swiper-slide>
                    <div class="px-4 py-3 mt-1 mb-5 max-w-[350px] md:max-w-[700px] rounded-2xl mx-auto">
                        <n-card title="Mecânico Auxiliar" class="max">
                            <template #header-extra>
                                Mecânica e Manutenção
                            </template>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aspernatur nemo ipsum doloribus
                            quisquam
                            perspiciatis consequatur excepturi est! Eaque consectetur eius odit id illo nemo recusandae
                            amet officiis
                            tempore beatae.
                            <template #footer>

                            </template>
                            <template #action>
                                <div class="relative w-full px-3">
                                    <!-- Botão de Navegação Manual -->
                                    <div class="w-full flex gap-2">
                                        <n-button size="tiny">Bauru</n-button>
                                        <n-button size="tiny">Diurno</n-button>
                                        <n-button size="tiny">6 x 1</n-button>
                                        <n-button size="tiny">Presencial</n-button>
                                    </div>

                                </div>
                            </template>
                        </n-card>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="px-4 py-3 mt-1 max-w-[350px] md:max-w-[600px] rounded-2xl mx-auto">
                        <n-card title="Mecânico Auxiliar" class="max">
                            <template #header-extra>
                                Mecânica e Manutenção
                            </template>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aspernatur nemo ipsum doloribus
                            quisquam
                            perspiciatis consequatur excepturi est! Eaque consectetur eius odit id illo nemo recusandae
                            amet officiis
                            tempore beatae.
                            <template #footer>

                            </template>
                            <template #action>
                                <div class="relative w-full px-3">
                                    <!-- Botão de Navegação Manual -->
                                    <div class="w-full flex gap-2">
                                        <n-button size="tiny">Bauru</n-button>
                                        <n-button size="tiny">Diurno</n-button>
                                        <n-button size="tiny">6 x 1</n-button>
                                        <n-button size="tiny">Presencial</n-button>
                                    </div>

                                </div>
                            </template>
                        </n-card>
                    </div>
                </swiper-slide>
            </swiper>

            <!-- Botão de Navegação Direita do Swiper -->
            <button @click="slideNext" class="absolute right-1/3 z-10 hidden md:block">
                <AtomsArrowBlack class="w-6 h-6" direction="right" color="gray" />
            </button>
        </div>
    </div>

    <div class="side h-[120px] w-screen bg-[#008E5A] flex mt-6 md:mt-16 justify-center md:justify-start items-center">
        <span class="text-white font-bold text-3xl md:ml-10"> Vagas disponíveis hoje</span>
    </div>
</template>
