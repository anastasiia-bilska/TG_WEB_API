<script setup lang="ts">
import { HapticType } from '@/types/EnumHaptic';

const handleHaptic = (hapticType: HapticType) => {
  window.Telegram.WebApp.HapticFeedback.impactOccurred(hapticType);
};
</script>

<template>
  <div class="haptic">
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
</template>

<style lang="scss">
@import '@/assets/sassStyles/colors';

.haptic {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  &__button {
    padding: 6px 20px;
    font-size: 16px;
    font-weight: 500;
    border: none;
    border-radius: 8px;

    &--light {
      color: $color__main;
      background-color: $color__telegram;
      border: 1px solid $color__accent;

      transition: background-color 0.3s ease-in-out;

      &:active {
        background-color: $color__accent;
      }
    }

    &--medium {
      color: $color__primary;
      background-color: $color__warning-light;
      border: 1px solid $color__warning;

      transition: background-color 0.3s ease-in-out;

      &:active {
        background-color: $color__warning;
      }
    }

    &--heavy {
      color: $color__main;
      background-color: $color__button;
      border: 1px solid #c07d00;

      transition: background-color 0.3s ease-in-out;

      &:active {
        background-color: #c07d00;
      }
    }

    &--rigid {
      color: $color__primary;
      background-color: $color__background;
      border: 1px solid $color__secondary;

      transition: background-color 0.3s ease-in-out;

      &:active {
        background-color: $color__secondary;
      }
    }

    &--soft {
      color: $color__primary;
      background-color: $color__sucess-light;
      border: 1px solid $color__success;

      transition: background-color 0.3s ease-in-out;

      &:active {
        background-color: $color__success;
      }
    }
  }
}
</style>
