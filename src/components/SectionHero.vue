<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import RichText from './RichText.vue'
import { strapiMediaUrl } from '@/lib/strapi'
import type { StrapiBlocks, StrapiMedia } from '@/types/content'
import Underline from '@/assets/Underline.vue'

defineProps<{
  heroTitle: StrapiBlocks
  heroLogo: StrapiMedia | null
  heroCover: StrapiMedia | null
}>()

const sectionRef = ref<HTMLElement | null>(null)
const logoRef = ref<HTMLImageElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const underlineRef = ref<{ $el: HTMLElement } | null>(null)
const coverRef = ref<HTMLImageElement | null>(null)

const onScroll = () => {
  if (!coverRef.value) return
  coverRef.value.style.opacity = String(Math.max(0, 1 - window.scrollY / window.innerHeight))
}

onMounted(() => {
  const tl = gsap.timeline()

  tl.from(sectionRef.value, {
    clipPath: 'inset(0% 0% 100% 0%)',
    duration: 1,
    ease: 'power4.inOut',
  }).from(
    [logoRef.value, titleRef.value],
    {
      y: '1em',
      opacity: 0,
      duration: 0.75,
      stagger: 0.25,
      ease: 'power4.out',
    },
    '-=0.3'
  ).from(
    underlineRef.value!.$el,
    {
      clipPath: 'inset(0% 50% 0% 50%)',
      duration: 0.6,
      ease: 'power4.out',
    },
    '-=0.3'
  )

  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <section ref="sectionRef" class="bg-black sticky top-0 -z-1 relative h-screen overflow-hidden flex items-center pointer-events-none">
    <div class="relative z-2 flex flex-col items-center w-full px-6 md:w-xl md:px-0 text-white text-center gap-8 md:gap-16">
      <img ref="logoRef" class="w-24 md:w-xs" v-if="heroLogo" :src="strapiMediaUrl(heroLogo.url)" :alt="heroLogo.alternativeText ?? ''" />
      <span ref="titleRef" class="[&_h2:nth-child(2)]:text-yellow-400 [&_h2:nth-child(2)]:text-2xl md:[&_h2:nth-child(2)]:text-4xl gap-4 flex flex-col">
        <RichText class="text-xl md:text-3xl font-heading uppercase" :blocks="heroTitle" />
        <Underline ref="underlineRef" class="w-full md:w-xs text-yellow-400 m-auto"/>
      </span>
    </div>
    <img ref="coverRef" class="absolute inset-0 z-1 w-screen h-screen object-cover" v-if="heroCover" :src="strapiMediaUrl(heroCover.url)" :alt="heroCover.alternativeText ?? ''" />
  </section>
</template>
