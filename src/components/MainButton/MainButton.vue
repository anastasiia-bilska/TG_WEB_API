<script lang="ts" setup>
import { ref } from 'vue';

const buttonText = ref<String>(window.Telegram.MainButton.text);

const changeMainButton = (option: String) => {

}
</script>

<template>
  <section class="container">
    <h2 class="mb-4">MainButton</h2>

    <article class="mb-4">
      <p>
        <i><strong>MainButton</strong></i> - this <i>object</i> controls the main button, which is displayed at the bottom of the Web App in the Telegram interface.
      </p>

      <p>{{ buttonText }}</p>

    </article>
  </section>
</template>

<style lang="scss"></style>
