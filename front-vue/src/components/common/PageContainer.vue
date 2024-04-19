<script setup lang="ts">
import { Motion } from '@oku-ui/motion'
</script>

<template>
  <Motion
    :initial="{ y: '-200vh' }"
    :animate="{ y: '0%' }"
    :transition="{
      duration: 1
    }"
    class="h-full"
  >
    <div
      class="h-full flex items-center flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48"
    >
      <slot />
    </div>
  </Motion>
</template>
