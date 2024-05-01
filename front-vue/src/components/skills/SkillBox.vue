<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { toRefs, ref } from 'vue'

import { type ISkill } from '@/interfaces/skill'

const props = defineProps<{
  skill: ISkill
}>()

const { skill } = toRefs(props)

const isLink = ref(skill.value.link && !!skill.value.logoPath)
</script>

<template>
  <div>
    <a
      v-if="isLink"
      class="repative flex h-16 bg-white rounded-sm transition overflow-hidden hover:scale-[1.1] border-4 border-white"
      :href="skill.link"
      target="_blank"
      rel="noopener"
    >
      <img :src="skill.logoPath" :alt="skill.logoAlt" :srcset="skill.logoPath" />
    </a>
  </div>
</template>

<style></style>
