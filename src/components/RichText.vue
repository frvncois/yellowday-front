<script setup lang="ts">
import type { StrapiBlocks } from '@/types/content'

defineProps<{ blocks: StrapiBlocks }>()

function renderText(text: string) {
  return text.replace(/\n/g, '<br>')
}
</script>

<template>
  <div>
    <template v-for="(block, i) in blocks" :key="i">
      <component
        v-if="block.type === 'heading'"
        :is="`h${block.level}`"
        v-html="block.children.map(c => renderText(c.text)).join('')"
      />
      <p
        v-else-if="block.type === 'paragraph' && block.children.some(c => c.text)"
        v-html="block.children.map(c => renderText(c.text)).join('')"
      />
    </template>
  </div>
</template>
