<script setup lang="ts">
import { useRoute } from 'vue-router'
import MainLogo from '@/assets/MainLogo.vue'
import type { Locale } from '@/types/content'

const route = useRoute()
const locales: Locale[] = ['en', 'fr', 'es']
</script>

<template>
  <header class="flex fixed z-100 items-center justify-between w-full px-4 md:px-8 py-4">
    <MainLogo class="w-16 h-auto"/>
    <nav class="flex gap-4 text-yellow">
      <RouterLink
        v-for="loc in locales"
        :key="loc"
        :to="`/${loc}`"
        :class="['transition-opacity', route.params.locale === loc ? 'opacity-100' : 'opacity-50']"
      >{{ loc.toUpperCase() }}</RouterLink>
    </nav>
  </header>
</template>
