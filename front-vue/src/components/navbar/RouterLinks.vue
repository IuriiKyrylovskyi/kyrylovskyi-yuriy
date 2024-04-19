<script setup lang="ts">
import { appLinks } from '@/utils/constants'
</script>

<template>
  <nav className="links-container hidden md:flex gap-4">
    <RouterLink
      v-for="l in appLinks"
      :to="l.url"
      :key="l.title"
      class="px-2 py-1 rounded transition linear duration-300"
      >{{ l.title }}</RouterLink
    >
  </nav>
</template>

<style scoped>
a.router-link-exact-active {
  color: #000000;
  background-color: #ffffff;
}

@media (hover: hover) {
  a:hover {
    color: #000000;
    background-color: hsla(0, 0%, 100%, 0.8);
  }
}
</style>
