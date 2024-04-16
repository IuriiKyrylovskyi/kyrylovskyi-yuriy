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
    <div class="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div class="h-1/2 lg:h-full lg:w-1/2 relative">
        <img src="@/assets/images/hero.png" alt="" fill class="object-contain" />
      </div>
      <div class="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        <h1 class="text-4xl md:text-6xl font-bold">
          Crafting Digital Experiences, Designing Tomorrow.
        </h1>
        <p class="md:text-xl">
          Welcome to my digital canvas, where innovation and creativity converge. With a keen eye
          for aesthetics and a mastery of code, my portfolio showcases a diverse collection of
          projects that reflect my commitment to excellence.
        </p>
        <div class="w-full flex gap-4">
          <button class="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
          <button class="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
        </div>
      </div>
    </div>
  </Motion>
</template>
