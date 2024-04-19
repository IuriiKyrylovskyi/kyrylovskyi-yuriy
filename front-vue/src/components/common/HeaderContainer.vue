<script setup lang="ts"></script>

<template>
  <header class="absolute top-0 left-0 w-full">
    <div
      className="header-wrap h-full flex items-center justify-between px-4 py-3 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl"
    >
      <slot />
    </div>
  </header>
</template>

<style>
.links-container {
  flex: 0 0 calc(50% - 50px);
}
</style>
