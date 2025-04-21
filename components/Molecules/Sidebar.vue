<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()

const back = () => {
    if (window.history.length > 1) {
        router.go(-1)
    } else {
        router.push('/') 
    }
}

</script>

<template>
    <div class=" w-full md:w-3/4 h-full flex-col">
        <div>
            <div class="w-full md:h-[150px] h-[0px]  ">
                <NuxtImg src="/images/logoAtual.png" @click="back()"
                    class="md:w-60 md:h-60 w-40 h-40 !p-0 cursor-pointer " />
            </div>
        </div>

        <div class="md:mt-28 mt-40  ml-6 md:ml-11 ">
            <span
                class="font-semibold flex flex-row items-center cursor-pointer text-[#C8913E] hover:text-[#76849c]  transition-all "
                @click="back()">
                <AtomsArrow direction="left" class="w-8 h-8" /> voltar
            </span>
        </div>
    </div>
</template>