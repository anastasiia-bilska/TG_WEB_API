<script setup lang="ts">
// import HapticFeedback from '@/components/HapticFeedback/HapticFeedback.vue';
</script>

<template>
  <main class="container links">
    <router-link to="/haptic">HapticFeedback</router-link>
    <router-link to="/main-button">MainButton</router-link>
    <router-link to="/nfc">NFC *</router-link>
  </main>
</template>

<style lang="scss">
.links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
