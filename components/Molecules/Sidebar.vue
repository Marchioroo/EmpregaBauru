<template>
    <div class=" w-full md:w-3/4 h-full flex-col">
        <div>
            <div class="w-full md:h-[150px] h-[0px]  ">
                <NuxtImg src="/images/logoAtual.png" @click="navigateTo('/')"
                    class="md:w-60 md:h-60 w-40 h-40 !p-0 cursor-pointer " />
            </div>
        </div>

        <div class="md:mt-28 mt-40  ml-6 md:ml-11 ">
            <span
                class="font-semibold flex flex-row items-center cursor-pointer text-[#C8913E] hover:text-[#76849c]  transition-all "
                @click="navigateTo('/')">
                <AtomsArrow direction="left" class="w-8 h-8" /> voltar
            </span>
        </div>
    </div>
</template>