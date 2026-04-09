<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import RichText from './RichText.vue'
import { strapiMediaUrl } from '@/lib/strapi'
import { useI18n } from '@/i18n'
import type { StrapiBlocks, StrapiMedia } from '@/types/content'

const { t } = useI18n()

gsap.registerPlugin(ScrollTrigger)

defineProps<{
  resourcesTitle: StrapiBlocks
  resourcesDetails: StrapiBlocks
  resourcesBackground: StrapiMedia | null
}>()

const titleRef = ref<HTMLElement | null>(null)
const detailsRef = ref<HTMLElement | null>(null)
const ctaRef = ref<HTMLElement | null>(null)

onMounted(() => {
  gsap.from([titleRef.value, detailsRef.value, ctaRef.value], {
    y: '0.25em',
    opacity: 0,
    duration: 2,
    stagger: 0.15,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: titleRef.value,
      start: 'top 75%',
    },
  })
})
</script>

<template>
  <section class="relative overflow-hidden px-6 py-16 md:px-24 md:py-36 bg-white">
    <div class="relative z-2 w-full md:w-xl flex flex-col gap-16">
      <div ref="titleRef">
        <RichText class="[&_h2]:font-heading [&_h2]:text-4xl md:[&_h2]:text-6xl [&_h2]:uppercase [&_h2]:leading-10 md:[&_h2]:leading-12" :blocks="resourcesTitle" />
      </div>
      <div ref="detailsRef">
        <RichText class="[&_p]:mb-4 [&_p:first-child]:text-[1.15em] [&_p:last-child]:text-sm" :blocks="resourcesDetails" />
      </div>
      <a ref="ctaRef" href="#" class="bg-white p-6 text-center uppercase font-heading text-xl rounded-md">{{ t('visitResourceHub') }}</a>
    </div>
    <img class="absolute inset-0 z-1 w-full h-full object-cover opacity-50" v-if="resourcesBackground" :src="strapiMediaUrl(resourcesBackground.url)" :alt="resourcesBackground.alternativeText ?? ''" />
  </section>
</template>
