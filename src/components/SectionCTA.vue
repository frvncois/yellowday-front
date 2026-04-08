<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MainLogo from '@/assets/MainLogo.vue'
import RichText from './RichText.vue'
import type { StrapiBlocks } from '@/types/content'

gsap.registerPlugin(ScrollTrigger)

defineProps<{
  ctaTitle: string
  ctaIntro: StrapiBlocks
  ctaDetails: StrapiBlocks
}>()

const titleRef = ref<HTMLElement | null>(null)
const introRef = ref<HTMLElement | null>(null)
const detailsRef = ref<HTMLElement | null>(null)
const ctaRef = ref<HTMLElement | null>(null)

onMounted(() => {
  gsap.from([titleRef.value, introRef.value, detailsRef.value, ctaRef.value], {
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
  <section class="bg-black text-white">
    <div class="w-full max-w-4xl mx-auto py-16 md:py-36 px-6 lg:px-0 flex flex-col gap-8 items-center text-center">
      <h3 ref="titleRef" class="text-4xl md:text-6xl font-heading uppercase text-yellow-300">{{ ctaTitle }}</h3>
      <div ref="introRef"><RichText class="text-4xl md:text-6xl uppercase font-heading" :blocks="ctaIntro" /></div>
      <div ref="detailsRef"><RichText class="w-full md:w-xl py-8 px-4 md:py-16" :blocks="ctaDetails" /></div>
      <a ref="ctaRef" href="#" class="bg-yellow-300 p-6 px-8 md:px-24 text-center uppercase font-heading text-xl rounded-md text-black">Lets learn</a>
      <MainLogo class="w-48 h-auto pt-16"/>
    </div>
  </section>
</template>
