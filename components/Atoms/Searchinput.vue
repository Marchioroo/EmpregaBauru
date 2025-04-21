<script setup lang="ts">
import { ref, defineProps, defineEmits, watch } from 'vue';

const props = defineProps({
    modelValue: String,
    placeholder: {
        type: String,
        default: 'Pesquise...',
    },
    inputClass: {
        type: String,
        default: '',
    },
    textSize: {
        type: String as () => 'lg' | 'xs' | 'sm' | 'md' | 'xl' | '2xl' | '3xl',
        default: 'lg',
    },
    iconClass: {
        type: String,
        default: 'w-6 h-6',
    },
    buttonClass: {
        type: String,
        default: 'absolute right-4 top-6',
    },
});

const emit = defineEmits(['update:modelValue', 'clear']);
const inputValue = ref<string | undefined>('');

watch(
    () => props.modelValue,
    (newVal) => {
        inputValue.value = newVal;
    }
);

const clearInput = () => {
    inputValue.value = '';
    emit('update:modelValue', '');
    emit('clear');
};
</script>

<template>
    <div class="relative w-full  rounded-xl">
        <AtomsDefault name="search" id="search" v-model="inputValue" @input="$emit('update:modelValue', inputValue)"
            :placeholder="placeholder" textColor="black" :textSize="textSize" class="w-full bg-transparent p-2"
            :class="inputClass" type="text" />
        <Button v-if="!inputValue" :class="buttonClass" class="">
            <div class="mb-10">
                <AtomsSearch :class="[iconClass, '-translate-y-2']" />
            </div>
        </Button>
        <button v-else @click="clearInput" :class="buttonClass">
            <AtomsArrowCircle :class="[iconClass, '-translate-y-2']" />
        </button>
    </div>
</template>