<script setup lang="ts">
import { appLinks } from '@/utils/constants'
</script>

<template>
  <nav className="hidden md:flex gap-4">
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
a {
  border: 1px solid #000000;
}

a.router-link-exact-active {
  color: #000000;
  background-color: #ffffff;
}

/* // help Ukraine */
a:last-child {
  color: rgb(0, 115, 255);
  background-color: yellow;
  font-weight: bold;
}

a[href='/help'].router-link-exact-active {
  border: 1px solid white;
  color: yellow;
  background-color: rgb(0, 115, 255);
}

@media (hover: hover) {
  a:hover {
    color: #000000;
    background-color: hsla(0, 0%, 100%, 0.8);
  }

  a:last-child:hover {
    color: yellow;
    background-color: rgb(0, 115, 255);
  }
}
</style>
