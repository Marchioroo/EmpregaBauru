<template>
    <div class="bg-[#fdf6ec] min-h-screen">
        <!-- Cabeçalho -->


        <!-- Filtros e Pesquisa -->
        <div class="container mx-auto px-4 py-6">


            <!-- Estatísticas -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div class="bg-white p-4 rounded-lg shadow-md">
                    <h3 class="text-lg font-semibold text-[#1a2b4d]">Total de Egressos</h3>
                    <p class="text-3xl font-bold text-[#C8913E]">{{ egressos.length }}</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-md">
                    <h3 class="text-lg font-semibold text-[#1a2b4d]">Empregados</h3>
                    <p class="text-3xl font-bold text-[#C8913E]">{{egressos.filter(e => e.empregado).length}}</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-md">
                    <h3 class="text-lg font-semibold text-[#1a2b4d]">Pós-graduados</h3>
                    <p class="text-3xl font-bold text-[#C8913E]">{{egressos.filter(e => e.posGraduacao).length}}</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-md">
                    <h3 class="text-lg font-semibold text-[#1a2b4d]">Empreendedores</h3>
                    <p class="text-3xl font-bold text-[#C8913E]">{{egressos.filter(e => e.empreendedor).length}}</p>
                </div>
            </div>

            <!-- Lista de Egressos -->
            <div v-if="filteredEgressos.length > 0">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div v-for="egresso in paginatedEgressos" :key="egresso.id"
                        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div class="relative h-48 bg-gray-200">
                            <img :src="egresso.foto" :alt="`Foto de ${egresso.nome}`"
                                class="w-full h-full object-cover" />
                            <div v-if="egresso.empregado"
                                class="absolute top-2 right-2 bg-emerald-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                                Empregado
                            </div>
                        </div>
                        <div class="p-4">
                            <h3 class="text-xl font-bold text-gray-800">{{ egresso.nome }}</h3>
                            <p class="text-gray-600">{{ egresso.curso }} ({{ egresso.anoConclusao }})</p>

                            <div class="mt-3 space-y-2">
                                <div v-if="egresso.empresa" class="flex items-center">
                                    <span class="text-gray-700 font-medium">Empresa:</span>
                                    <span class="ml-2 text-gray-600">{{ egresso.empresa }}</span>
                                </div>
                                <div v-if="egresso.cargo" class="flex items-center">
                                    <span class="text-gray-700 font-medium">Cargo:</span>
                                    <span class="ml-2 text-gray-600">{{ egresso.cargo }}</span>
                                </div>
                                <div v-if="egresso.posGraduacao" class="flex items-center">
                                    <span class="text-gray-700 font-medium">Pós-graduação:</span>
                                    <span class="ml-2 text-gray-600">{{ egresso.posGraduacao }}</span>
                                </div>
                            </div>

                            <div class="mt-4 flex gap-2">
                                <a v-if="egresso.linkedin" :href="egresso.linkedin" target="_blank"
                                    class="text-blue-600 hover:text-blue-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-linkedin">
                                        <path
                                            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                        <rect width="4" height="12" x="2" y="9" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                </a>
                                <a v-if="egresso.email" :href="`mailto:${egresso.email}`"
                                    class="text-red-600 hover:text-red-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-mail">
                                        <rect width="20" height="16" x="2" y="4" rx="2" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Paginação -->
                <div class="mt-8 flex justify-center">
                    <div class="flex space-x-1">
                        <button @click="currentPage = Math.max(1, currentPage - 1)" :disabled="currentPage === 1"
                            class="px-4 py-2 border rounded-md hover:bg-gray-100 disabled:opacity-50">
                            Anterior
                        </button>
                        <button v-for="page in totalPages" :key="page" @click="currentPage = page" :class="[
                            'px-4 py-2 border rounded-md',
                            currentPage === page
                                ? 'bg-emerald-600 text-white'
                                : 'hover:bg-gray-100'
                        ]">
                            {{ page }}
                        </button>
                        <button @click="currentPage = Math.min(totalPages, currentPage + 1)"
                            :disabled="currentPage === totalPages"
                            class="px-4 py-2 border rounded-md hover:bg-gray-100 disabled:opacity-50">
                            Próxima
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mensagem de nenhum resultado -->
            <div v-else class="bg-white p-8 rounded-lg shadow-md text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-search-x mx-auto text-gray-400">
                    <path d="m13.5 8.5-5 5" />
                    <path d="m8.5 8.5 5 5" />
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                </svg>
                <h3 class="mt-4 text-xl font-semibold text-gray-700">Nenhum egresso encontrado</h3>
                <p class="mt-2 text-gray-500">Tente ajustar seus filtros de pesquisa</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

// Estado
const egressos = ref([
    {
        id: 1,
        nome: 'Ana Silva',
        foto: '/placeholder.svg?height=200&width=300',
        curso: 'Ciência da Computação',
        anoConclusao: 2020,
        empresa: 'Google',
        cargo: 'Desenvolvedora Frontend',
        empregado: true,
        posGraduacao: 'Mestrado em IA',
        empreendedor: false,
        linkedin: 'https://linkedin.com/in/anasilva',
        email: 'ana.silva@email.com'
    },
    {
        id: 2,
        nome: 'Carlos Oliveira',
        foto: '/placeholder.svg?height=200&width=300',
        curso: 'Engenharia de Software',
        anoConclusao: 2019,
        empresa: 'Microsoft',
        cargo: 'Desenvolvedor Backend',
        empregado: true,
        posGraduacao: null,
        empreendedor: false,
        linkedin: 'https://linkedin.com/in/carlosoliveira',
        email: 'carlos.oliveira@email.com'
    },
    {
        id: 3,
        nome: 'Mariana Costa',
        foto: '/placeholder.svg?height=200&width=300',
        curso: 'Sistemas de Informação',
        anoConclusao: 2021,
        empresa: 'TechStart',
        cargo: 'CEO',
        empregado: true,
        posGraduacao: 'MBA em Gestão de Negócios',
        empreendedor: true,
        linkedin: 'https://linkedin.com/in/marianacosta',
        email: 'mariana.costa@email.com'
    },
    {
        id: 4,
        nome: 'Pedro Santos',
        foto: '/placeholder.svg?height=200&width=300',
        curso: 'Ciência da Computação',
        anoConclusao: 2018,
        empresa: 'Amazon',
        cargo: 'Engenheiro de Dados',
        empregado: true,
        posGraduacao: 'Doutorado em Ciência de Dados',
        empreendedor: false,
        linkedin: 'https://linkedin.com/in/pedrosantos',
        email: 'pedro.santos@email.com'
    },
    {
        id: 5,
        nome: 'Juliana Lima',
        foto: '/placeholder.svg?height=200&width=300',
        curso: 'Engenharia de Software',
        anoConclusao: 2020,
        empresa: 'Facebook',
        cargo: 'UX Designer',
        empregado: true,
        posGraduacao: null,
        empreendedor: false,
        linkedin: 'https://linkedin.com/in/julianalima',
        email: 'juliana.lima@email.com'
    },
    {
        id: 6,
        nome: 'Rafael Mendes',
        foto: '/placeholder.svg?height=200&width=300',
        curso: 'Sistemas de Informação',
        anoConclusao: 2019,
        empresa: 'DevTech',
        cargo: 'CTO',
        empregado: true,
        posGraduacao: 'MBA em Tecnologia',
        empreendedor: true,
        linkedin: 'https://linkedin.com/in/rafaelmendes',
        email: 'rafael.mendes@email.com'
    },
    {
        id: 7,
        nome: 'Fernanda Alves',
        foto: '/placeholder.svg?height=200&width=300',
        curso: 'Ciência da Computação',
        anoConclusao: 2021,
        empresa: null,
        cargo: null,
        empregado: false,
        posGraduacao: 'Mestrado em Segurança da Informação',
        empreendedor: false,
        linkedin: 'https://linkedin.com/in/fernandaalves',
        email: 'fernanda.alves@email.com'
    },
    {
        id: 8,
        nome: 'Lucas Ferreira',
        foto: '/placeholder.svg?height=200&width=300',
        curso: 'Engenharia de Software',
        anoConclusao: 2018,
        empresa: 'Apple',
        cargo: 'iOS Developer',
        empregado: true,
        posGraduacao: null,
        empreendedor: false,
        linkedin: 'https://linkedin.com/in/lucasferreira',
        email: 'lucas.ferreira@email.com'
    },
    {
        id: 9,
        nome: 'Camila Rodrigues',
        foto: '/placeholder.svg?height=200&width=300',
        curso: 'Sistemas de Informação',
        anoConclusao: 2020,
        empresa: 'TechInova',
        cargo: 'Fundadora',
        empregado: true,
        posGraduacao: 'MBA em Inovação',
        empreendedor: true,
        linkedin: 'https://linkedin.com/in/camilarodrigues',
        email: 'camila.rodrigues@email.com'
    }
]);

// Filtros
const searchQuery = ref('');
const cursoFilter = ref('');
const anoFilter = ref('');
const currentPage = ref(1);
const itemsPerPage = ref(6);

// Dados derivados para filtros
const cursos = computed(() => {
    const cursosUnicos = new Set(egressos.value.map(e => e.curso));
    return [...cursosUnicos];
});

const anos = computed(() => {
    const anosUnicos = new Set(egressos.value.map(e => e.anoConclusao));
    return [...anosUnicos].sort((a, b) => b - a);
});

// Egressos filtrados
const filteredEgressos = computed(() => {
    return egressos.value.filter(egresso => {
        const matchesSearch = searchQuery.value === '' ||
            egresso.nome.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            (egresso.empresa && egresso.empresa.toLowerCase().includes(searchQuery.value.toLowerCase())) ||
            (egresso.cargo && egresso.cargo.toLowerCase().includes(searchQuery.value.toLowerCase()));

        const matchesCurso = cursoFilter.value === '' || egresso.curso === cursoFilter.value;
        const matchesAno = anoFilter.value === '' || egresso.anoConclusao === parseInt(anoFilter.value);

        return matchesSearch && matchesCurso && matchesAno;
    });
});

// Paginação
const totalPages = computed(() => {
    return Math.ceil(filteredEgressos.value.length / itemsPerPage.value);
});

const paginatedEgressos = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage.value;
    const endIndex = startIndex + itemsPerPage.value;
    return filteredEgressos.value.slice(startIndex, endIndex);
});

// Métodos
const filterEgressos = () => {
    currentPage.value = 1; // Reset para a primeira página ao filtrar
};

// Lifecycle hooks
onMounted(() => {
    // Aqui você poderia fazer uma chamada API para buscar os dados reais
    console.log('Componente montado');
});
</script>