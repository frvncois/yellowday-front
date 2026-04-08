<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { strapiMediaUrl } from '@/lib/strapi'
import type { StrapiMedia } from '@/types/content'

gsap.registerPlugin(ScrollTrigger)

defineProps<{
  videoURL: string
  videoCover: StrapiMedia | null
}>()

const aRef = ref<HTMLElement | null>(null)

onMounted(() => {
  gsap.from(aRef.value, {
    clipPath: 'inset(0% 0% 100% 0%)',
    duration: 1,
    ease: 'power4.inOut',
    scrollTrigger: {
      trigger: aRef.value,
      start: 'top 75%',
    },
  })
})
</script>

<template>
  <section class="bg-white">
    <div class="w-full max-w-4xl mx-auto px-6 lg:px-0">
      <a ref="aRef" :href="videoURL" target="_blank" rel="noopener" class="block transition-transform duration-300 hover:scale-101">
        <img v-if="videoCover" :src="strapiMediaUrl(videoCover.url)" :alt="videoCover.alternativeText ?? ''" class="overflow-hidden rounded-md"/>
      </a>
    </div>
  </section>
</template>
