<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Rust experimentations</template>

    <p>Here is a cross platform crypto client.</p>

    <ul>
      <li>Rust backend</li>
      <li>Rust WASM</li>
      <li>Vue 3 frontend</li>
      <li>TypeScript</li>
      <li>Vite</li>
    </ul>
  </WelcomeItem>
</template>
