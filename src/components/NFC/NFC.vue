<script setup lang="ts">
import { computed } from 'vue';

const isSupported = computed(() => {
  return !!('NDEFReader' in window);
});
</script>

<template>
  <section class="container nfc">
    <h2 class="mb-4">Web NFC API</h2>

    <article class="mb-5">
      <h3>NDEFReader</h3>
      <p>Detecting if Web NFC is supported can be done by checking the NDEFReader object.</p>

      <p class="mb-3">
        <i><code>if ("NDEFReader" in window) { ... }</code></i> - a way to detect if Web NFC is
        supported.
      </p>

      <div class="card p-3 shadow-sm d-flex">
        <p
          class="nfc__support p-2 m-0 rounded"
          :class="{ 'nfc__success': isSupported, 'nfc__failture': !isSupported }"
        >
          {{ isSupported ? 'NFC is supported! ✅' : 'NFC is not supported ❌' }}
        </p>
      </div>
    </article>
  </section>
</template>

<style lang="scss">
@import './NFC.scss';
</style>
