<script setup lang="ts">
import type { PropType } from 'vue'

const model = defineModel()
const props = defineProps({
    id: {
        type: String,
        required: false,
    },
    type: {
        type: String,
        required: false,
    },
    placeholder: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: false,
    },
    textColor: {
        type: String,
        default: 'black',
    },
    textSize: {
        type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'>,
        default: 'md',
    },
    error: {
        type: Boolean,
        default: false,
    },
    errorMessage: {
        type: String,
        default: null,
    },
    disabled: {
        type: Boolean,
        default: false,
    },

    /*
    Exemplo de máscara
    Para telefone: '(##) #####-####'
    Para data de nascimento: '##/##/####'
  */
    maxLength: {
        type: Number,
        default: null,
    },
    mask: {
        type: [String, Array] as PropType<string | string[]>,
        default: '',
    },
})
const inputRef = ref<HTMLElement | null>(null)
const characterCount = ref(0)
defineExpose({
    focus: () => inputRef.value?.focus(),
    blur: () => inputRef.value?.blur(),
}) // Expõe os métodos blur e focus

const emit = defineEmits(['update:modelValue']) // Emitindo o evento de atualização de valor padrão

watch(model, (novoValor: any) => {
    emit('update:modelValue', novoValor)
    characterCount.value = novoValor ? novoValor.length : 0
})
</script>

<template>
    <div class="flex flex-col">
        <!--
    NOTA:
      Tive que duplicar o elemento de input devido à mascara,
      não é possível passar null, undefined ou uma string vazia.
      A lib vue-the-mask me obriga a passar uma máscara caso haja o atributo v-mask no componente.
    -->

        <input v-if="props.mask !== ''" v-bind="$attrs" v-mask="props.mask" v-model="model" :id="props.id"
            :name="props.name" ref="inputRef" :disabled="props.disabled" :type="props.type"
            :placeholder="props.placeholder" :maxlength="props.maxLength" :class="{
                'text-black': props.textColor === 'black',
                'text-awesome-600': props.textColor === 'pink',
                'text-xs': props.textSize === 'xs',
                'text-sm': props.textSize === 'sm',
                'text-md': props.textSize === 'md',
                'text-lg': props.textSize === 'lg',
                'text-xl': props.textSize === 'xl',
                'text-2xl': props.textSize === '2xl',
                'text-3xl': props.textSize === '3xl',
            }"
            class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 border-b border-gray-400 focus:border-licorice ps-0 form-input rounded-none placeholder-gray-400 px-2.5 py-1.5 bg-transparent focus:ring-0 focus:shadow-none" />
        <input v-bind="$attrs" v-if="props.mask === ''" :disabled="props.disabled" ref="inputRef" v-model="model"
            :id="props.id" :name="props.name" :type="props.type" :placeholder="props.placeholder"
            :maxlength="props.maxLength" :class="{
                'text-text-black': props.textColor === 'black',
                'text-awesome-600': props.textColor === 'pink',
                'text-xs': props.textSize === 'xs',
                'text-sm': props.textSize === 'sm',
                'text-md': props.textSize === 'md',
                'text-lg': props.textSize === 'lg',
                'text-xl': props.textSize === 'xl',
                'text-2xl': props.textSize === '2xl',
                'text-3xl': props.textSize === '3xl',
            }"
            class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 border-b border-gray-400 focus:border-licorice ps-0 form-input rounded-none placeholder-gray-400 px-2.5 py-1.5 bg-transparent focus:ring-0 focus:shadow-none text-ellipsis" />
        <p v-if="props.error && props.errorMessage" ref="inputRef" class="text-sm text-red-500 pt-1.5">
            {{ props.errorMessage }}
        </p>
        <p v-if="props.maxLength" class="text-sm text-gray-500 pt-1.5">
            {{ characterCount }} / {{ props.maxLength }}
        </p>
    </div>
</template>
