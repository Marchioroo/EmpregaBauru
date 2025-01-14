<script lang="ts" setup>
import { defineProps, computed } from 'vue';

// Definir props
const props = defineProps({
    direction: {
        type: String,
        default: 'right', // Direção padrão
        validator: (value: string) => ['right', 'left', 'up', 'down'].includes(value),
    },
    color: {
        type: String,
        default: 'currentColor', // Cor padrão: herda do contexto
    },
});

// Computar a classe de rotação baseada na direção
const rotationClass = computed(() => {
    switch (props.direction) {
        case 'right':
            return 'rotate-0';
        case 'left':
            return 'rotate-180';
        case 'up':
            return '-rotate-90';
        case 'down':
            return 'rotate-90';
        default:
            return 'rotate-0';
    }
});
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :fill="color" class="transform transition-transform"
        :class="rotationClass">
        <path
            d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11H8V13H12V16L16 12L12 8V11Z">
        </path>
    </svg>
</template>
