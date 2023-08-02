<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router';

const router = useRouter();

router.afterEach((current) => {
  if (current.name === 'home') {
    window.Telegram.WebApp.BackButton.hide();
  } else {
    window.Telegram.WebApp.BackButton.show();

    window.Telegram.WebApp.onEvent('backButtonClicked', () => {
      (() => {
        router.go(-1);
      })();
    });
  }
});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
