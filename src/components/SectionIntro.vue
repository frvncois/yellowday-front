<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

defineProps<{
  introTitle: string
  introSubtitle: string
  introContent: string
}>()

const h4LeftRef = ref<HTMLElement | null>(null)
const h4RightRef = ref<HTMLElement | null>(null)
const pRef = ref<HTMLElement | null>(null)

onMounted(() => {
  gsap.from([h4LeftRef.value, h4RightRef.value, pRef.value], {
    y: '0.25em',
    opacity: 0,
    duration: 2,
    stagger: 0.15,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: h4LeftRef.value,
      start: 'top 75%',
    },
  })
})
</script>

<template>
  <section class="bg-white">
    <div class="w-full max-w-4xl mx-auto py-16 md:py-36 px-6 lg:px-0 flex flex-col md:flex-row gap-8 md:gap-14">
      <div class="flex flex-col gap-8 flex-1">
        <h4 ref="h4LeftRef" class="font-heading text-4xl md:text-6xl uppercase leading-10 md:leading-12">{{ introTitle }}</h4>
        <p ref="pRef">{{ introContent }}</p>
      </div>
      <div class="flex-1">
        <h4 ref="h4RightRef" class="font-heading text-2xl md:text-3xl leading-7 md:leading-8">{{ introSubtitle }}</h4>
      </div>
    </div>
  </section>
</template>
