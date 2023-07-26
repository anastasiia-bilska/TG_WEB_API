<script setup lang="ts">
import { ref } from 'vue';
import { HapticType } from '@/types/EnumHaptic';

import ScrollPicker from '@/components/ScrollPicker/ScrollPicker.vue';

const chosenHapticNotification = ref<HapticType | null>(null);

const handleHaptic = (hapticType: HapticType) => {
  window.Telegram.WebApp.HapticFeedback.impactOccurred(hapticType);
};

const handleNotification = (hapticType: HapticType) => {
  window.Telegram.WebApp.HapticFeedback.notificationOccurred(hapticType);

  chosenHapticNotification.value = hapticType;
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

      <article class="mb-4">
        <p>
          <i><strong>notificationOccurred(type)</strong></i> - a method tells that a task or action
          has succeeded, failed, or produced a warning. The Telegram app may play the appropriate
          haptics based on type value passed. Type can be one of these values:
        </p>

        <div
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
        </div>
      </article>
    </div>

    <article>
      <p>
        <i><strong>selectionChanged()</strong></i> - a method tells that the user has changed a selection. The Telegram app may play the appropriate haptics.
      </p>
      
      <div class="card shadow-sm">
        <ScrollPicker />
      </div>
    </article>
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
