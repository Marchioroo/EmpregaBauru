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
            d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
    </svg>
</template>
