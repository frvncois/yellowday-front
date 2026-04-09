<script setup lang="ts">
import MainLogo from '@/assets/MainLogo.vue';
import type { Locale } from '@/types/content'

defineProps<{
  locale: Locale
  locales: Locale[]
}>()

defineEmits<{
  switch: [locale: Locale]
}>()
</script>

<template>
  <header class="flex fixed z-100 items-center justify-between w-full px-4 md:px-8 py-4">
    <MainLogo class="w-16 h-auto"/>
    <nav class="flex gap-4 text-yellow-400">
      <button
          v-for="loc in locales"
        :key="loc"
        :class="['transition-opacity', loc === locale ? 'opacity-100' : 'opacity-50']"
        @click="$emit('switch', loc)"
      >{{ loc.toUpperCase() }}</button>
    </nav>
  </header>
</template>
