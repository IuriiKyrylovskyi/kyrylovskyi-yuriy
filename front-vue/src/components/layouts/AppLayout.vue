<script setup lang="ts">
import PageContainer from '../common/PageContainer.vue'
import Footer from '../footer/Footer.vue'
import HeaderNavbar from '../navbar/HeaderNavbar.vue'
</script>

<template>
  <HeaderNavbar />

  <main class="min-h-screen pt-[90px] flex items-center">
    <PageContainer>
      <RouterView />
      <slot />
    </PageContainer>
  </main>

  <Footer />
</template>
