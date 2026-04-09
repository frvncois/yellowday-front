<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import RichText from './RichText.vue'
import { strapiMediaUrl } from '@/lib/strapi'
import type { StrapiBlocks, Partner } from '@/types/content'

gsap.registerPlugin(ScrollTrigger)

defineProps<{
  donationDetails: StrapiBlocks
  partners: readonly Partner[]
}>()

const detailsRef = ref<HTMLElement | null>(null)
const partnersRef = ref<HTMLElement | null>(null)

onMounted(() => {
  gsap.from([detailsRef.value, partnersRef.value], {
    y: '0.25em',
    opacity: 0,
    duration: 2,
    stagger: 0.15,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: detailsRef.value,
      start: 'top 75%',
    },
  })
})
</script>

<template>
  <section class="bg-neutral-100">
    <div class="w-full max-w-4xl mx-auto py-16 md:py-36 px-6 lg:px-0 flex flex-col gap-16">
      <div class="flex flex-col justify-center m-auto [&_p]:mb-4 gap-16">
        <div ref="detailsRef">
          <RichText class="flex flex-col md:flex-row gap-8 md:gap-16 [&_p:first-child]:md:flex-1 [&_p:first-child]:text-[1.15em] [&_p:last-child]:text-sm [&_p:last-child]:md:flex-[0.75]" :blocks="donationDetails" />
        </div>
      </div>
      <div ref="partnersRef" class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div class="flex flex-col items-center" v-for="partner in partners" :key="partner.id">
          <h3 class="font-heading uppercase">{{ partner.PartnerTitle }}</h3>
          <img class="w-18" v-if="partner.PartnerLogo" :src="strapiMediaUrl(partner.PartnerLogo.url)" :alt="partner.PartnerLogo.alternativeText ?? partner.PartnerTitle" />
        </div>
      </div>
    </div>
  </section>
</template>
