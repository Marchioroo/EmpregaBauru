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
const listCedulas = cedulaStore.getCedulasContemporanea()
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
        name: 'cedulas-idade-contemporanea-id',
        params: { id },
    })
}
</script>

<template>
    <div class="w-full h-full flex items-center justify-center bg-[#fdf6ec] flex-col">
        <MoleculesSidebar />
    </div>
    <div>
        <OrganismsEgressos />
    </div>
    <OrganismsAppSidebar />
</template>