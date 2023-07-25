<script setup lang="ts">
import { ref } from 'vue';
import { HapticType } from '@/types/EnumHaptic';

const chosenHapticNotification = ref<HapticType | null>(null);

const handleHaptic = (hapticType: HapticType) => {
  window.Telegram.WebApp.HapticFeedback.impactOccurred(hapticType);
};

const handleNotification = (hapticType: HapticType) => {
  window.Telegram.WebApp.HapticFeedback.notificationOccurred(hapticType);

  chosenHapticNotification.value = hapticType;
  // // accessing the radio buttons
  // let sucess = document.querySelector('haptic-success') as HTMLInputElement ;
  // let error = document.querySelector('haptic-error') as HTMLInputElement;
  // let warning = document.querySelector('haptic-warning') as HTMLInputElement;
  // // checking if any radio button is selected
  // if (sucess.checked) {
  //   output.innerHTML = 'The radio button with value ' + radio1.value + ' is checked!';
  // }
  // if (radio2.checked) {
  //   output.innerHTML = 'The radio button with value ' + radio2.value + ' is checked!';
  // }
  // if (radio3.checked) {
  //   output.innerHTML = 'The radio button with value ' + radio3.value + ' is checked!';
  // }
};
</script>

<template>
  <section class="haptic">
    <div class="haptic__impact">
      <h2 class="mb-4">HapticFeedback</h2>

      <article class="mb-4">
        <p>
          <i><strong>impactOccurred(style)</strong></i> - a method tells that an impact occurred.
          The Telegram app may play the appropriate haptics based on style value passed. Style can
          be one of these values:
        </p>
        <div class="haptic__impact-buttons card p-3 shadow-sm">
          <button
            type="button"
            class="haptic__button haptic__button--light"
            @click="handleHaptic(HapticType.light)"
          >
            Light
          </button>
          <button
            type="button"
            class="haptic__button haptic__button--medium"
            @click="handleHaptic(HapticType.medium)"
          >
            Medium
          </button>
          <button
            type="button"
            class="haptic__button haptic__button--heavy"
            @click="handleHaptic(HapticType.heavy)"
          >
            Heavy
          </button>
          <button
            type="button"
            class="haptic__button haptic__button--rigid"
            @click="handleHaptic(HapticType.rigid)"
          >
            Rigid
          </button>
          <button
            type="button"
            class="haptic__button haptic__button--soft"
            @click="handleHaptic(HapticType.soft)"
          >
            Soft
          </button>
        </div>
      </article>

      <article>
        <p>
          <i><strong>notificationOccurred(type)</strong></i> - a method tells that a task or action
          has succeeded, failed, or produced a warning. The Telegram app may play the appropriate
          haptics based on type value passed. Type can be one of these values:
        </p>

        <fieldset
          class="card p-3 shadow-sm haptic__fieldset"
          :class="{
            'haptic__fieldset--success': chosenHapticNotification === HapticType.success,
            'haptic__fieldset--error': chosenHapticNotification === HapticType.error,
            'haptic__fieldset--warning': chosenHapticNotification === HapticType.warning
          }"
        >
          <legend>Choose answer:</legend>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="error"
              name="haptic"
              value="error"
              @change="handleNotification(HapticType.error)"
            />
            <label class="form-check-label" for="error">Error</label><br />
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="success"
              name="haptic"
              value="success"
              @change="handleNotification(HapticType.success)"
            />
            <label class="form-check-label" for="success">Success</label><br />
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="warning"
              name="haptic"
              value="warning"
              @change="handleNotification(HapticType.warning)"
            />
            <label class="form-check-label" for="warning">Warning</label>
          </div>
        </fieldset>
      </article>
    </div>
  </section>
</template>

<style lang="scss">
@import '@/assets/sassStyles/colors';
@import '@/assets/sassStyles/placeholders';

.haptic {
  &__impact-buttons {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 10px;
  }

  &__button {
    &--light {
      @extend %button-light;
    }

    &--medium {
      @extend %button-medium;
    }

    &--heavy {
      @extend %button-heavy;
    }

    &--rigid {
      @extend %button-rigid;
    }

    &--soft {
      @extend %button-soft;
    }
  }

  &__fieldset {
    background-color: $color__main;
    transition: background-color 0.3s ease-in-out;

    &--success {
      background-color: $color__success-light;
    }

    &--error {
      background-color: $color__danger-light;
    }

    &--warning {
      background-color: $color__warning-light;
    }
  }
}
</style>
