<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import LogoVideo from '../navbar/LogoVideo.vue'
import Socials from '../navbar/Socials.vue'
import MadeWith from './MadeWith.vue'
</script>

<template>
  <footer class="flex flex-col items-center gap-8 p-6 mt-10">
    <Socials />
    <MadeWith />
    <LogoVideo />
  </footer>
</template>
