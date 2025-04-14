<template>
    <div class=" w-full md:w-3/4 h-full flex-col">
        <div>
            <div class="w-full md:h-[150px] h-[120px]  ">
                <NuxtImg src="/images/logoAtual.png" class="md:w-40 md:h-40 w-28 h-28 !p-0 " />
            </div>
        </div>

        <div class="mt-6 ml-7 ">
            <span
                class="font-semibold flex flex-row items-center cursor-pointer text-[#C8913E] hover:text-[#76849c]  transition-all "
                @click="navigateTo('/')">
                <AtomsArrow direction="left" class="w-8 h-8" /> voltar
            </span>
        </div>
    </div>
</template>