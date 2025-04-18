<script lang="ts" setup>

const logoUni = ref('/images/unisagrado_branca.png');
const logoNEPEN = ref('/images/BRASAO_SEM_FUNDO_BRANCO.png');
const logoNUPHIS = ref('/images/LOGONUPHIS_BRANCA.png');

</script>
<template>
    <div>
        <div class="w-full h-[350px] md:h-[250px] bg-[#363636]  ">

            <div class="w-full h-full md:pl-20">
                <div class="flex w-full justify-between items-center flex-col md:flex-row mt">
                    <div
                        class="w-full flex justify-between gap-10 md:gap-0 mt-10 md:justify-evenly md:mr-20 items-center flex-col md:flex-row">

                        <!-- Logo Uni -->
                        <a href="https://unisagrado.edu.br/" target="_blank">
                            <NuxtImg :src="logoUni" class="max-w-[170px] md:max-w-[250px]" />
                        </a>

                        <!-- Logo NEPEN -->
                        <a href="https://www.instagram.com/nepen.2024/?hl=pt-br" target="_blank">
                            <NuxtImg :src="logoNEPEN" class="max-w-[100px] md:max-w-[150px]" />
                        </a>

                        <div class="flex flex-col items-center md:items-start">
                            <span class="ml-2 text-white hidden lg:block">
                                Instagram
                            </span>
                            <!-- Logo NUPHIS -->
                            <a href="https://www.instagram.com/nuphis.unisagrado/?hl=pt-br" target="_blank">
                                <NuxtImg :src="logoNUPHIS" class="max-w-[150px] md:max-w-[250px] " />
                            </a>
                        </div>

                    </div>
                </div>
                <div class="w-full flex justify-end items-end p-4">
                    <div class="w-full flex justify-end items-end text-xs text-[#C8913E] font-semibold">
                        Developed by •Marchioro |
                        UX/UI •Hugo Moreira
                    </div>

                </div>

            </div>



        </div>
    </div>
</template>