<script setup lang="ts">
import { ref } from 'vue'

import RouterLinks from './RouterLinks.vue'
import HeaderContainer from '@/components/common/HeaderContainer.vue'
import Logo from './Logo.vue'
import ResponsiveMenu from './ResponsiveMenu.vue'

const isOpen = ref(false)

const setIsOpen = () => {
  isOpen.value = !isOpen.value

  if (isOpen.value) {
    document.body.style.overflowY = 'hidden'
    return
  }

  document.body.style.overflowY = 'auto'
}

const handleMenuClose = () => {
  isOpen.value = false
  document.body.style.overflowY = 'auto'
}
</script>

<template>
  <HeaderContainer>
    <Logo />
    <RouterLinks />

    <ResponsiveMenu :isOpen="isOpen" @setIsOpen="setIsOpen" @handleMenuClose="handleMenuClose" />
  </HeaderContainer>
</template>
