<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/me">Me</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />

    <slot />
  </main>

  <footer>footer</footer>
</template>

<script setup lang="ts"></script>

<style scoped>
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}
</style>
