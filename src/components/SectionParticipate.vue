<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import RichText from './RichText.vue'
import Underline from '@/assets/Underline.vue'
import type { StrapiBlocks } from '@/types/content'

gsap.registerPlugin(ScrollTrigger)

defineProps<{
  participationTitle: StrapiBlocks
  participationIntro: StrapiBlocks
  participationDetails: StrapiBlocks
}>()

const titleRef = ref<HTMLElement | null>(null)
const introRef = ref<HTMLElement | null>(null)
const detailsRef = ref<HTMLElement | null>(null)

onMounted(() => {
  gsap.from([titleRef.value, introRef.value, detailsRef.value], {
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
  <section class="bg-white">
    <div class="flex flex-col gap-8 md:gap-16 w-full max-w-4xl mx-auto py-16 md:py-36 px-6 lg:px-0">
      <div ref="titleRef" class="flex justify-center text-center font-heading  text-6xl uppercase leading-12 md::leading-14 [&_p]:text-yellow">
        <RichText :blocks="participationTitle" />
      </div>
      <div class="w-[1px] h-20 bg-yellow m-auto"></div>
      <div class="flex justify-center">
        <img class="w-25" src="@/assets/shirt.svg"/>
      </div>
      <div ref="introRef" class="flex justify-center text-center [&_p]:font-heading [&_p]:text-4xl md:[&_p]:text-4xl [&_p]:uppercase [&_p]:leading-8 md:[&_p]:leading-8">
        <RichText :blocks="participationIntro" />
      </div>
      <div class="w-[1px] h-20 bg-yellow m-auto"></div>
      <div class="flex justify-center">
        <img class="w-75" src="@/assets/post.svg"/>
      </div>
      <div ref="detailsRef" class="text-center w-full md:w-xl mx-auto [&_h2]:text-yellow [&_h2]:text-3xl [&_h2]:font-heading [&_h2]:uppercase [&_h2]:leading-none [&_h2]:mb-4 [&_p]:mb-4 [&_p:last-child]:text-2xl md:[&_p:last-child]:text-4xl [&_p:last-child]:font-heading [&_p:last-child]:uppercase [&_p:last-child]:leading-none [&_p:last-child]:pt-10">
        <RichText :blocks="participationDetails" />
      <Underline ref="underlineRef" class="w-full m-auto md:w-xs text-yellow"/>
      </div>
    </div>
  </section>
</template>
