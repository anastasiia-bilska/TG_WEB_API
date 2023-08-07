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

telegram.WebApp.MainButton.onClick(() => {
  (() => {
    telegram.WebApp.HapticFeedback.notificationOccurred('success');
  })();
});

const setText = () => {
  telegram.WebApp.MainButton.setText(buttonTextCustom.value);
  buttonText.value = telegram.WebApp.MainButton.text;

  buttonTextCustom.value = '';
};

const toggleButton = () => {
  if (!buttonIsVisible.value) {
    telegram.WebApp.MainButton.show();
  } else {
    telegram.WebApp.MainButton.hide();
  }

  buttonIsVisible.value = telegram.WebApp.MainButton.isVisible;
};

const handleCheckmark = (event: Event) => {
  const target = event.target as HTMLInputElement;

  if (target.checked) {
    telegram.WebApp.MainButton.enable();
  } else {
    telegram.WebApp.MainButton.disable();
  }

  buttonIsActive.value = telegram.WebApp.MainButton.isActive;
};

const handleClickEvent = (event: Event) => {
  const target = event.target as HTMLInputElement;

  console.log(telegram.WebApp.MainButton);

  const callback = () => {
    (() => {
      telegram.WebApp.HapticFeedback.notificationOccurred('success');
    })();
  };

  if (target.checked) {
    telegram.WebApp.MainButton.onClick(callback);
  } else {
    telegram.WebApp.MainButton.offClick(callback);
  }
};
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

      <div class="card p-3 shadow-sm d-flex">
        <article class="card p-3 shadow-sm">
          <img
            src="https://biotus.ua/media/catalog/product/cache/fa65709cb924250dcd7e95212b5f977b/3/-/3-5now-now00372-41.jpg-1.jpg"
            alt="vitamin D"
            class="w-50 align-self-center mb-4"
          />
          <h3 class="mb-2">NOW Foods, Vitamin D-3</h3>
          <p class="mb-2">High Potency, 5,000 IU, 120 Softgels</p>
          <p class="mb-3">Price: $6.24</p>
          <button
            class="main-btn__toggle"
            :class="{
              'main-btn__toggle--show': buttonIsVisible,
              'main-btn__toggle--hide': !buttonIsVisible
            }"
            type="button"
            @click="toggleButton"
          >
            <span
              class="main-btn__cart"
              :class="{
                'main-btn__cart--filled': buttonIsVisible,
                'main-btn__cart--unfilled': !buttonIsVisible
              }"
            ></span>
            {{ buttonIsVisible ? 'Remove from cart' : 'Add to cart' }}
          </button>
        </article>
      </div>
    </article>

    <article class="mb-5">
      <p class="mb-3">
        <i><strong>setText(text)</strong></i> - a method to set the button text.
      </p>

      <div class="card p-3 shadow-sm">
        <label class="d-block mb-2 fw-medium" for="main-btn-text"
          >Set new MainButton text (max 64 symbols):</label
        >
        <div class="input-group">
          <input
            v-model="buttonTextCustom"
            type="text"
            id="main-btn-text"
            name="main-btn-text"
            maxlength="64"
            class="form-control"
            placeholder="Type new MainButton text..."
            aria-label="new MainButton text"
          />
          <button
            class="main-btn__input-btn"
            :disabled="buttonTextCustom.length < 1"
            type="button"
            @click="setText"
          >
            change
          </button>
        </div>
      </div>
    </article>

    <article class="mb-5">
      <p class="mb-2">
        <i><strong>enable()</strong></i> - a method to enable the button.
      </p>

      <p class="mb-3">
        <i><strong>disable()</strong></i> - a method to disable the button.
      </p>

      <div class="card p-3 shadow-sm">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
            @change="handleCheckmark"
          />
          <label class="form-check-label" for="flexCheckChecked">
            I agree to the terms & conditions
          </label>
        </div>
      </div>
    </article>

    <article class="mb-5">
      <p class="mb-2">
        <i><strong>offClick(callback)</strong></i> - a method that removes the button press event
        handler. An alias for
        <code class="main-btn__marked"
          >Telegram.WebApp.offEvent('mainButtonClicked', callback)</code
        >
      </p>

      <p class="mb-3">
        <i><strong>onClick(callback)</strong></i> - a method that sets the button press event
        handler. An alias for
        <code class="main-btn__marked">Telegram.WebApp.onEvent('mainButtonClicked', callback)</code>
      </p>

      <div div class="card p-3 shadow-sm">
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            checked
            @change="handleClickEvent"
          />
          <label class="form-check-label" for="flexSwitchCheckChecked">
            Enable vibration on click
          </label>
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

    transition:
      background-color 0.2s ease-in-out,
      opacity 0.2s ease-in-out;

    &[disabled] {
      opacity: 0.6;
    }

    &:active {
      background-color: $color__accent;
    }
  }

  &__toggle {
    display: flex;
    align-items: center;
    justify-content: center;

    &--show {
      @extend %button-heavy;
    }

    &--hide {
      @extend %button-soft;
    }
  }

  &__cart {
    display: inline-block;
    margin-right: 10px;
    padding: 10px;

    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    &--filled {
      background-image: url('@/assets/static/cart-filled.svg');
    }

    &--unfilled {
      background-image: url('@/assets/static/cart-unfilled.svg');
    }
  }

  &__marked {
    display: inline-block;
    padding: 0 6px;

    background-color: $color__warning-light;
    border-radius: 6px;
  }
}
</style>
