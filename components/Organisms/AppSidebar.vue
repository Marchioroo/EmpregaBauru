<script lang="ts" setup>

const logoUni = ref('images/logo_unisagrado.png');
const logoNEPEN = ref('images/BRASAO_SEM_FUNDO_BRANCO.png');
const logoNUPHIS = ref('images/LOGONUPHIS.png');

</script>
<template>
    <div>
        <div class="w-full h-[350px] md:h-[250px] bg-slate-600  ">

            <div class="w-full h-full grid md:grid-cols-3 grid-cols-1 p-4  ">
                <div class="flex w-full justify-center items-center ">
                    <div class="w-full flex  justify-center md:justify-end md:mr-20 items-center  ">
                        <NuxtImg :src="logoUni" class="max-w-[170px] md:max-w-[250px]" />
                    </div>
                </div>
                <div class="flex items-center justify-center gap-6 mt-4 flex-row  ">
                    <a href="https://www.instagram.com/nepen.2024/?hl=pt-br " target="_blank"
                        class="flex items-center gap-2">
                        <AtomsIconInstagram /> <span class="text-white font-medium">Instagram</span>
                    </a>

                    <a href="https://www.facebook.com/profile.php?id=61561323278354" target="_blank"
                        class="flex items-center gap-2">
                        <AtomsIconFacebook />
                        <span class="text-white font-medium">Facebook</span>
                    </a>
                </div>


                <div class="flex w-full justify-center items-center">
                    <div class="w-full flex justify-center md:ml-16 items-center flex-row md:flex-row gap-4 md:gap-0">
                        <NuxtImg :src="logoNEPEN" class="max-w-[70px] md:max-w-[100px]" />
                        <NuxtImg :src="logoNUPHIS" class="max-w-[150px] md:max-w-[250px] hidden  lg:block" />
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>