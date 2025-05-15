<script lang="ts" setup>
import { useCedulaStore } from '~/stores/cedulasStore'
import { useRouter } from 'vue-router'
import { ref, computed, watch } from 'vue'
import { debounce } from 'lodash'
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

const router = useRouter()
const cedulaStore = useCedulaStore()
const listCedulas = cedulaStore.getCedulasIdadeMedia()
const isLoading = ref(false)
const searchTerm = ref('')

const performSearch = debounce(() => {
    isLoading.value = false //
}, 500)

const filteredCedulas = computed(() => {
    if (searchTerm.value) {
        return listCedulas.filter((cedula) =>
            cedula?.title?.toLowerCase().includes(searchTerm.value.toLowerCase())
        )
    } else {
        return listCedulas
    }
})

watch(searchTerm, () => {
    isLoading.value = true
    performSearch()
})

const redirecTo = (id: number) => {
    router.push({
        name: 'cedulas-idade-media-id',
        params: { id },
    })
}
</script>

<template>
    <div class="w-full h-full flex items-center justify-center bg-[#fdf6ec] flex-col">
        <MoleculesSidebar />

        <div class="w-3/4 flex flex-col items-center justify-center p-4 ">
            <div class=" w-full flex items-end justify-end  ">
                <AtomsSearchinput class="!w-[300px] " v-model="searchTerm" />
            </div>
            <div class="w-full flex items-center justify-center p-4 ">
                <div class=" text-4xl font-semibold"> Idade Média</div>
            </div>

            <div v-if="isLoading" class="w-full flex items-center justify-center py-20">
                <AtomsSpinner />
            </div>

            <div v-else-if="filteredCedulas.length > 0"
                class="w-full h-auto grid md:grid-cols-4 grid-cols-2 items-center justify-center gap-6 md:px-4 py-20">
                <div v-for="cedula, index in filteredCedulas" :data-aos="'fade-right'" :data-aos-delay="index * 100"
                    data-aos-duration="1500"
                    class="text-[#C8913E] text-xl font-semibold text-start px-1 break-words cursor-pointer hover:text-[#76849c] transition-all duration-300 ease-in-out">
                    <p @click="redirecTo(Number(cedula.id))">{{ cedula.title }}</p>
                </div>
            </div>
            <div v-else>
                <div class="flex items-center justify-center w-full h-auto py-10">
                    <p class="text-[#1a2b4d] text-xl w-full font-semibold text-center px-4 break-words ">
                        Nenhum resultado encontrado
                    </p>
                </div>
            </div>
        </div>
    </div>
    <OrganismsAppSidebar />
</template>