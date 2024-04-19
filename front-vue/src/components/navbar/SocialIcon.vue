<script setup lang="ts">
import { toRefs } from 'vue'

import { IconNames } from '@/interfaces/navbar'
import IconGithub from '../icons/IconGithub.vue'
import IconGmail from '../icons/IconGmail.vue'
import IconWhatsapp from '../icons/IconWhatsapp.vue'
import IconViber from '../icons/IconViber.vue'
import IconLinkedin from '../icons/IconLinkedin.vue'

const props = defineProps<{
  iconName: string
}>()

const { iconName } = toRefs(props)
</script>

<template>
  <IconGithub v-if="iconName === IconNames.GIT" />
  <IconGmail v-if="iconName === IconNames.GMAIL" />
  <IconLinkedin v-if="iconName === IconNames.LINKEDIN" />
  <IconViber v-if="iconName === IconNames.VIBER" />
  <IconWhatsapp v-if="iconName === IconNames.WHATSAPP" />
</template>
