<script lang="ts" setup>
import { ref } from 'vue';
import MainButtonOptions from '@/components/MainButton/MainButtonOptions/MainButtonOptions.vue';

const telegram = (window as any).Telegram;

const buttonTextCustom = ref('');

const buttonText = ref<string>(telegram.WebApp.MainButton.text);
const buttonColor = ref<string>(telegram.WebApp.MainButton.color);
const buttonTextColor = ref<string>(telegram.WebApp.MainButton.textColor);
const buttonIsVisible = ref<boolean>(telegram.WebApp.MainButton.isVisible);
const buttonIsActive = ref<boolean>(telegram.WebApp.MainButton.isActive);
const buttonIsProgressVisible = ref<boolean>(telegram.WebApp.MainButton.isProgressVisible);

const setText = () => {
  telegram.WebApp.MainButton.setText(buttonTextCustom.value);
  buttonText.value = telegram.WebApp.MainButton.text;

  buttonTextCustom.value = '';
};

const showButton = () => {
  telegram.WebApp.MainButton.show();
  buttonIsVisible.value = telegram.WebApp.MainButton.isVisible;
}

const hideButton = () => {
  telegram.WebApp.MainButton.hide();
  buttonIsVisible.value = telegram.WebApp.MainButton.isVisible;
}
</script>

<template>
  <section class="main-btn container">
    <h2 class="mb-4">MainButton</h2>

    <MainButtonOptions
      :buttonText="buttonText"
      :buttonColor="buttonColor"
      :buttonTextColor="buttonTextColor"
      :buttonIsVisible="buttonIsVisible"
      :buttonIsActive="buttonIsActive"
      :buttonIsProgressVisible="buttonIsProgressVisible"
    />

    <article class="mb-5">
      <p class="mb-2">
        <i><strong>show()</strong></i> - a method to make the button visible.
      </p>

      <p class="mb-3">
        <i><strong>hide()</strong></i> - a method to hide the button.
      </p>

      <div class="card p-3 shadow-sm">
        <button class="mb-2 main-btn__show" type="button" @click="showButton">Show the MainButton</button>
        <button type="button" class="main-btn__hide" @click="hideButton">Hide the MainButton</button>
      </div>
    </article>

    <article class="mb-5">
      <p class="mb-3">
        <i><strong>setText(text)</strong></i> - a method to set the button text.
      </p>

      <div class="card p-3 shadow-sm">
        <label class="d-block mb-2 fw-medium" for="main-btn-text">Set new MainButton text:</label>
        <div class="input-group">
          <input
            v-model="buttonTextCustom"
            type="text"
            id="main-btn-text"
            name="main-btn-text"
            class="form-control"
            placeholder="Type new MainButton text..."
            aria-label="new MainButton text"
          />
          <button class="main-btn__input-btn" :disabled="buttonTextCustom.length < 1" type="button" @click="setText">change</button>
        </div>
      </div>
    </article>
  </section>
</template>

<style lang="scss">
@import '@/assets/sassStyles/colors';
@import '@/assets/sassStyles/placeholders';

.main-btn {
  &__main-btn-options {
    margin-bottom: 40px;
  }

  &__input-btn {
    padding: 10px;
    color: $color__main;
    background-color: $color__telegram;
    border: 1px solid transparent;
    border-radius: 0 0.375rem 0.375rem 0;

    transition: background-color 0.2s ease-in-out, opacity 0.2s ease-in-out;

    &[disabled] {
      opacity: 0.6;
    }

    &:active {
      background-color: $color__accent;
    }
  }

  &__show {
    @extend %button-soft;
  }

  &__hide {
    @extend %button-heavy;
  }
}
</style>
