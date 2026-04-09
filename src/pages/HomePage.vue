<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useContent } from '@/composables/useContent'
import type { Locale } from '@/types/content'
import SharedHeader from '@/components/SharedHeader.vue'
import SectionHero from '@/components/SectionHero.vue'
import SectionIntro from '@/components/SectionIntro.vue'
import SectionVideo from '@/components/SectionVideo.vue'
import SectionParticipate from '@/components/SectionParticipate.vue'
import SectionDonate from '@/components/SectionDonate.vue'
import SectionResources from '@/components/SectionResources.vue'
import SectionCTA from '@/components/SectionCTA.vue'

const route = useRoute()
const { content, loadContent } = useContent()

watch(
  () => route.params.locale as Locale,
  (loc) => loadContent(loc),
  { immediate: true }
)
</script>

<template>
  <SharedHeader />
  <main v-if="content">
    <SectionHero
      :heroTitle="content.HeroTitle"
      :heroLogo="content.HeroLogo"
      :heroCover="content.HeroCover"
    />
    <SectionIntro
      :introTitle="content.IntroTitle"
      :introSubtitle="content.IntroSubtitle"
      :introContent="content.IntroContent"
    />
    <SectionVideo
      :videoURL="content.VideoURL"
      :videoCover="content.VideoCover"
    />
    <SectionParticipate
      :participationTitle="content.ParticipationTitle"
      :participationIntro="content.ParticipationIntro"
      :participationDetails="content.ParticipationDetails"
    />
    <SectionDonate
      :donationDetails="content.DonationDetails"
      :partners="content.Partners"
    />
    <SectionResources
      :resourcesTitle="content.ResourcesTitle"
      :resourcesDetails="content.ResourcesDetails"
      :resourcesBackground="content.ResourcesBackground"
    />
    <SectionCTA
      :ctaTitle="content.CTATitle"
      :ctaIntro="content.CTAIntro"
      :ctaDetails="content.CTADetails"
    />
  </main>
</template>
