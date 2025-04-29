<script lang="ts" setup>
import { useCedulaStore } from '~/stores/cedulasStore'

const cedulaStore = useCedulaStore()
const route = useRoute()
const cedulasAntigas = ref(cedulaStore.getCedulasIdadeMedia())


const id = route.params.id
const cedula = cedulasAntigas.value.find((e) => e.id === Number(id))
const image = 'https://images.vexels.com/media/users/3/264365/isolated/preview/f7957ff3afc8723bf194a13447a40c88-doodle-de-moedas.png'

const isModalOpen = ref(false);
const modalImage = ref('');
const isMobileView = computed(() => windowWidth.value <= 768);
const windowWidth = ref(0);
function openModal(imageType: string) {
    modalImage.value = imageType;
    isModalOpen.value = true;
}

function closeModal() {
    isModalOpen.value = false;
}

function handleResize() {
    windowWidth.value = window.innerWidth;
}

onMounted(() => {
    windowWidth.value = window.innerWidth;

    window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
});


</script>
<template>
    <div class="w-full h-full flex items-center justify-center bg-[#fdf6ec] flex-col">
        <MoleculesSidebar />

        <div class="flex flex-row w-full justify-center md:mt-20 gap-6 px-4 md:px-8 pb-20">

            <div class="md:w-3/5 px-8 mt-10 ">

                <div class=" w-full h-full flex flex-col gap-2">
                    <span class="text-4xl font-extrabold text-justify">{{ cedula?.title }}</span>
                    <span class=" text-base md:text-xl text-[#76849c] text-justify">{{ cedula?.subtitle }}
                    </span>


                    <div class="images flex flex-col items-center mt-20 ">
                        <!-- Exibição da imagem Anverso -->
                        <div class="w-full flex flex-col items-center mb-8">
                            <NuxtImg :src="cedula?.anverso ?? image" class="w-full  !p-0 cursor-pointer"
                                @click="openModal(String(cedula?.anverso))" />
                            <div class="flex justify-center mt-4">
                                <div
                                    class="w-0 h-0 border-l-[16px] border-r-[16px] border-b-[16px] border-l-transparent border-r-transparent border-b-[#1a2b4d]">
                                </div>
                            </div>
                            <div
                                class="flex flex-col text-[#fdf6ec] items-center justify-center -mt-1 shadow-2xl bg-[#1a2b4d] rounded-2xl p-6 text-sm text-justify w-full md:w-[80%]">
                                <span><strong>Anverso</strong><br /><br /></span>
                                {{ cedula?.textAnverso }}
                            </div>
                        </div>

                        <!-- Exibição da imagem Reverso -->
                        <div class="w-full flex flex-col items-center">
                            <NuxtImg :src="cedula?.reverso ?? image" class="w-full !p-0 cursor-pointer"
                                @click="openModal(String(cedula?.reverso))" />
                            <div class="flex justify-center mt-4">
                                <div
                                    class="w-0 h-0 border-l-[16px] border-r-[16px] border-b-[16px] border-l-transparent border-r-transparent border-b-[#1a2b4d]">
                                </div>
                            </div>
                            <div
                                class="flex flex-col text-[#fdf6ec] items-center justify-center shadow-2xl -mt-1 bg-[#1a2b4d] rounded-2xl p-6 text-sm text-justify w-full md:w-[80%]">
                                <span><strong>Reverso</strong><br /><br /></span>
                                {{ cedula?.textReverso }}
                            </div>
                        </div>
                    </div>

                    <!-- Modal para visualização expandida -->
                    <div v-if="isModalOpen"
                        class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                        @click="closeModal">
                        <div class="relative flex justify-center items-center w-full h-full">
                            <!-- Imagem expandida com padding e rotação no mobile -->
                            <NuxtImg :src="modalImage ?? image" class="object-contain" :class="{
                                'w-full h-full p-4 modal-image': isMobileView,
                                'w-auto h-auto': !isMobileView
                            }" />
                            <button class="absolute top-4 right-4 text-white text-2xl" @click.stop="closeModal">
                                &times; <!-- Ícone de fechar -->
                            </button>
                        </div>
                    </div>


                    <div class=" w-full h-full flex flex-col gap-2  pt-30 md:mt-10 ">
                        <span class="text-4xl font-extrabold mt-28 md:mt-20 ">{{ cedula?.title2
                            }}</span>
                        <span class=" text-base md:text-xl text-[#1a2b4d] mt-6 text-justify">{{ cedula?.text2 }}
                        </span>
                    </div>
                    <div class="mt-16">
                        <div class=" w-full h-full flex flex-col gap-2  ">
                            <div class="flex flex-col gap-2">
                                <span class="text-4xl font-extrabold mb-6 ">{{ cedula?.title3 }}</span>
                                <span
                                    class=" text-base text-[#fdf6ec] bg-[#1a2b4d] flex flex-col gap-2 rounded-xl p-4 text-justify">{{
                                        cedula?.text3 }}
                                </span>
                            </div>
                        </div>

                    </div>

                    <div class=" w-full h-full flex flex-col gap-2 pt-16 text-justify">
                        <span class="text-4xl font-extrabold text-justify">{{ cedula?.title4 }}</span>
                        <span class=" text-base md:text-xl text-[#1a2b4d] mt-6 text-justify">{{ cedula?.text4 }}
                        </span>
                    </div>



                </div>



            </div>

            <div v-if="cedula?.informationMoedaType2"
                class="hidden lg:flex w-[250px] mt-20 bg-[#E5E5E5] text-white rounded-2xl p-4 shadow-lg h-full">
                <div>
                    <span class="border-b-2 text-[#C8913E] font-semibold">{{ cedula?.informationMoedaType2[0]?.title
                    }}</span>
                    <div>
                        <p class="mt-4 text-[#1a2b4d] font-semibold text-justify">
                            {{ cedula?.informationMoedaType2[0]?.text
                            }}
                        </p>


                        <div class="mt-6 ">
                            <span class=" text-[#C8913E] font-semibold text-justify"> {{
                                cedula?.informationMoedaType2[0]?.title2
                            }}</span>
                            <div class="text-[#1a2b4d] font-semibold mt-6 "> {{ cedula?.informationMoedaType2[0]?.text2
                                }} </div>

                        </div>
                    </div>

                    <div>
                        <div class="mt-6 text-base text-[#C8913E] font-semibold">
                            {{ cedula?.informationMoedaType2[0]?.title3
                            }}
                        </div>

                        <div class="mt-6 text-[#1a2b4d] font-semibold text-justify">{{
                            cedula?.informationMoedaType2[0]?.text3
                            }}</div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <OrganismsAppSidebar />

</template>
<style scoped>
/* Estilos adicionais para o modal e as imagens */
img {
    cursor: pointer;
}

button {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: white;
}

.object-contain {
    size: 120%;
}

.fixed.inset-0 {
    margin: 0;
    padding: 0;
}

.modal-image {
    object-fit: contain;
    /* A imagem vai manter a proporção dentro do espaço */
    width: 100%;
    /* Garante que a imagem ocupe 100% da largura do modal */
    height: 100%;
    /* Garante que a imagem ocupe 100% da altura do modal */
    transform: scale(1.2);
    /* Aumenta a imagem em 20% */
    transform-origin: center center;
    /* Garante que o aumento seja feito a partir do centro */
}
</style>