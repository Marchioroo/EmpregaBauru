<script setup>
import 'swiper/swiper-bundle.css';
</script>

<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Roboto:wght@400;700&family=Montserrat:wght@400;700&display=swap"
    rel="stylesheet">

  <div>
    <!-- Componente para controle de acessibilidade ao navegar entre rotas -->
    <NuxtRouteAnnouncer />

    <!-- Renderiza a página atual baseada na rota -->
    <NuxtPage />
  </div>
</template>
