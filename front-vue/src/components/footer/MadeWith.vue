<script setup lang="ts">
import { ref } from 'vue'

const year = ref(new Date().getFullYear())
</script>

<template>
  <p class="flex justify-center flex-wrap gap-2 text-xl">
    <span class="glow font-bold">
      <a href="https://www.upwork.com/agencies/1709532203564163072/" target="_blank" rel="noopener"
        >JACK STUDIO</a
      >
    </span>
    {{ year }} © Made with
    <img class="size-8" src="@/assets/images/heart.jpeg" />
  </p>
</template>

<style>
.glow {
  animation-name: glow;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@keyframes glow {
  0% {
    text-shadow:
      0px 0px 0px #1a5170,
      0px 0px 0px #fff;
  }
  50% {
    text-shadow:
      0px 0px 20px #fff,
      0px 0px 20px #1a5170;
  }
  100% {
    text-shadow:
      0px 0px 0px #1a5170,
      0px 0px 0px #fff;
  }
}
</style>
