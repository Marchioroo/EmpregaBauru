<script lang="ts" setup>
import { useMoedaStore } from '~/stores/moedasStore'

const moedas = useMoedaStore()
const route = useRoute()
const moedasAntigas = ref(moedas.GetMoedasAntiguidade())


const id = route.params.id
const moeda = moedasAntigas.value.find((moeda) => moeda.id === Number(id))
const image = 'https://images.vexels.com/media/users/3/264365/isolated/preview/f7957ff3afc8723bf194a13447a40c88-doodle-de-moedas.png'

</script>
<template>
    <div class="w-full h-full flex items-center justify-center bg-[#fdf6ec] flex-col">
        <MoleculesSidebar />

        <div class="flex flex-row w-full justify-center md:mt-20 gap-6 px-4 md:px-8 pb-20">

            <div class="md:w-3/5 px-8 mt-10 ">

                <div class=" w-full h-full flex flex-col gap-2">
                    <span class="text-4xl font-extrabold text-justify">{{ moeda?.title }}</span>
                    <span class=" text-base md:text-xl text-[#76849c] text-justify">{{ moeda?.subtitle }}
                    </span>


                    <div class="images flex flex-col items-center mt-20 ">
                        <div class="w-full flex md:flex-row items-center flex-col justify-around ">
                            <div class="flex flex-col items-center">
                                <NuxtImg :src="moeda?.anverso ?? image" class="md:w-80 md:h-80 w-72 h-72 !p-0 ml-8 " />
                            </div>

                            <div class="flex flex-col items-center">
                                <NuxtImg :src="moeda?.reverso ?? image" class="md:w-96 md:h-96 w-80 h-80 !p-0 " />
                            </div>
                        </div>

                        <!-- Setas alinhadas com o grid -->
                        <div class=" grid-cols-2 w-full -mt-12  hidden md:grid ">
                            <div class="flex justify-center ">
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
                        <div
                            class="w-full grid grid-cols-1 lg:grid-cols-2 -mt-2 h-[150px] gap-4 bg-[#fdf6ec]  rounded-2xl">
                            <div
                                class="flex flex-col text-[#fdf6ec] items-center justify-center shadow-2xl bg-[#1a2b4d] rounded-2xl p-6 text-sm text-justify">
                                <span class="">Anverso<br><br></span>
                                {{ moeda?.textAnverso }}
                            </div>
                            <div
                                class="flex flex-col text-[#fdf6ec] items-center justify-center shadow-2xl bg-[#1a2b4d] rounded-2xl p-6 text-sm text-justify">
                                <span class="">Reverso<br><br></span>
                                {{ moeda?.textReverso }}
                            </div>
                        </div>


                    </div>

                    <div class=" w-full h-full flex flex-col gap-2 mt-60 pt-50 md:mt-10 ">
                        <span class="text-4xl font-extrabold mt-60 md:mt-20 text-justify">{{ moeda?.title2
                            }}</span>
                        <span class=" text-base md:text-xl text-[#1a2b4d] mt-6 text-justify">{{ moeda?.text2 }}
                        </span>
                    </div>
                    <div class="mt-16">
                        <div class=" w-full h-full flex flex-col gap-2  ">
                            <div class="flex flex-col gap-2">
                                <span class="text-4xl font-extrabold text-justify">{{ moeda?.title3 }}</span>
                                <span
                                    class=" text-base text-[#fdf6ec] bg-[#1a2b4d] flex flex-col gap-2 rounded-xl p-4 text-justify">{{
                                        moeda?.text3 }}
                                </span>
                            </div>
                        </div>

                    </div>

                    <div class=" w-full h-full flex flex-col gap-2 pt-16 text-justify">
                        <span class="text-4xl font-extrabold text-justify">{{ moeda?.title4 }}</span>
                        <span class=" text-base md:text-xl text-[#1a2b4d] mt-6 text-justify">{{ moeda?.text4 }}
                        </span>
                    </div>



                </div>



            </div>

            <div v-if="moeda?.informationMoedaType2"
                class="hidden lg:flex w-[250px] mt-20 bg-[#E5E5E5] text-white rounded-2xl p-4 shadow-lg h-full">
                <div>
                    <span class="border-b-2 text-[#C8913E] font-semibold">{{ moeda?.informationMoedaType2[0]?.title
                    }}</span>
                    <div>
                        <p class="mt-4 text-[#1a2b4d] font-semibold text-justify">
                            {{ moeda?.informationMoedaType2[0]?.text
                            }}
                        </p>


                        <div class="mt-6 ">
                            <span class=" text-[#C8913E] font-semibold text-justify"> {{
                                moeda?.informationMoedaType2[0]?.title2
                            }}</span>
                            <div class="text-[#1a2b4d] font-semibold mt-6 "> {{ moeda?.informationMoedaType2[0]?.text2
                                }} </div>

                        </div>
                    </div>

                    <div>
                        <div class="mt-6 text-base text-[#C8913E] font-semibold">
                            {{ moeda?.informationMoedaType2[0]?.title3
                            }}
                        </div>

                        <div class="mt-6 text-[#1a2b4d] font-semibold text-justify">{{
                            moeda?.informationMoedaType2[0]?.text3
                            }}</div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <OrganismsAppSidebar />

</template>