<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue'
import SkillBox from './SkillBox.vue'
import { Skills, type ISkill } from '@/interfaces/skill'

// set images into public folder
const skills = ref([
  {
    logoAlt: Skills.REACT,
    logoPath: './skills/reactjs.svg',
    link: 'https://react.dev/'
  },
  {
    logoAlt: Skills.REDUX,
    logoPath: './skills/redux.svg',
    link: 'https://redux.js.org/'
  },
  {
    logoAlt: Skills.JS,
    logoPath: './skills/javascript.svg',
    link: 'https://www.javascript.com/'
  },
  {
    logoAlt: Skills.TS,
    logoPath: './skills/typescriptlang.svg',
    link: 'https://www.typescriptlang.org/'
  },
  {
    logoAlt: Skills.CSS,
    logoPath: './skills/css.svg',
    link: 'https://css3.com/'
  },
  {
    logoAlt: Skills.NEST_JS,
    logoPath: './skills/nestjs.svg',
    link: 'https://nestjs.com/'
  },
  {
    logoAlt: Skills.NEXT_JS,
    logoPath: './skills/nextjs.svg',
    link: 'hhttps://nextjs.org/'
  },
  {
    logoAlt: Skills.HTML5,
    logoPath: './skills/html5.svg',
    link: 'https://html5.org/'
  },
  {
    logoAlt: Skills.TAILWIND,
    logoPath: './skills/tailwindcss.svg',
    link: 'hhttps://tailwindcss.com/'
  },
  {
    logoAlt: Skills.GATSBY_JS,
    logoPath: './skills/gatsby.svg',
    link: 'https://www.gatsbyjs.com/'
  }
] as ISkill[])
</script>

<template>
  <div class="flex gap-4 flex-wrap">
    <SkillBox v-for="s in skills" :key="s.link" :skill="s" />
  </div>
</template>
