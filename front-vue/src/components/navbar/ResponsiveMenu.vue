<script setup lang="ts">
import { toRefs } from 'vue'
import { Motion } from '@oku-ui/motion'
import { RouterLink } from 'vue-router'
import { appLinks } from '@/utils/constants'
import {
  bottomVariants,
  centerVariants,
  listItemVariants,
  listVariants,
  topVariants
} from './variants'

const emit = defineEmits<{
  (e: 'setIsOpen'): void
  (e: 'handleMenuClose'): void
}>()

const setIsOpen = () => {
  emit('setIsOpen')
}
const handleMenuClose = () => {
  emit('handleMenuClose')
}

const props = defineProps<{
  isOpen: boolean
}>()

const { isOpen } = toRefs(props)
</script>

<template>
  <div className="md:hidden">
    <!-- {/* MENU BUTTON */} -->
    <button class="w-10 h-8 flex flex-col justify-between z-50 relative" @click="setIsOpen">
      <Motion
        :animate="isOpen ? topVariants.opened : topVariants.closed"
        class="w-10 h-1 bg-white rounded origin-left"
      ></Motion>
      <Motion
        :animate="isOpen ? centerVariants.opened : centerVariants.closed"
        class="w-10 h-1 bg-white rounded"
      ></Motion>
      <Motion
        :animate="isOpen ? bottomVariants.opened : bottomVariants.closed"
        class="w-10 h-1 bg-white rounded origin-left"
      ></Motion>
    </button>
    <!-- {/* MENU LIST */} -->
    <Motion
      v-if="isOpen"
      :initial="listVariants.closed"
      :animate="listVariants.opened"
      class="absolute top-0 left-0 w-screen h-screen bg-white text-black flex flex-col items-center justify-center gap-8 text-4xl z-40"
    >
      <Motion
        v-for="link in appLinks"
        :initial="listItemVariants.closed"
        :animate="listItemVariants.opened"
        class=""
        :key="link.title"
      >
        <RouterLink :to="link.url" @click="handleMenuClose">{{ link.title }}</RouterLink>
      </Motion>
    </Motion>
  </div>
</template>
