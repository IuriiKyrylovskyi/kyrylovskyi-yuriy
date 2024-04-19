<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue'

import { IconNames } from '@/interfaces/navbar'

import SocialLink from './SocialLink.vue'

const socialLinks = ref([
  {
    href: 'https://github.com/IuriiKyrylovskyi',
    target: '_blank',
    rel: 'noreferrer',
    iconName: IconNames.GIT
  },
  { href: 'mailto:iurii712@gmail.com', target: '', rel: '', iconName: IconNames.GMAIL },
  {
    href: 'https://www.linkedin.com/in/iurii-kyrylovskyi',
    target: '_blank',
    rel: 'noreferrer',
    iconName: IconNames.LINKEDIN
  },
  { href: 'viber://add?number=+380662053544', target: '', rel: '', iconName: IconNames.VIBER },
  {
    href: 'https://api.whatsapp.com/send?phone=380662053544',
    target: '_blank',
    rel: 'noreferrer',
    iconName: IconNames.WHATSAPP
  }
])
</script>

<template>
  <div className="links-container social-links hidden justify-end md:flex gap-4">
    <SocialLink
      v-for="s in socialLinks"
      :key="s.href"
      :href="s.href"
      :target="s.target"
      :rel="s.rel"
      :iconName="s.iconName"
    />
  </div>
</template>
