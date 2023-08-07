<script lang="ts" setup>
import { ref } from 'vue';
import MainButtonOptions from '@/components/MainButton/MainButtonOptions/MainButtonOptions.vue';
import { sleep } from '@/helpers/sleep';

const telegram = (window as any).Telegram;

const buttonTextCustom = ref('');

const buttonText = ref<string>(telegram.WebApp.MainButton.text);
const buttonColor = ref<string>(telegram.WebApp.MainButton.color);
const buttonTextColor = ref<string>(telegram.WebApp.MainButton.textColor);
const buttonIsVisible = ref<boolean>(telegram.WebApp.MainButton.isVisible);
const buttonIsActive = ref<boolean>(telegram.WebApp.MainButton.isActive);
const buttonIsProgressVisible = ref<boolean>(telegram.WebApp.MainButton.isProgressVisible);

const changeOptions = ref({
  text: buttonText.value,
  color: buttonColor.value,
  text_color: buttonTextColor.value,
  is_active: buttonIsActive.value,
  is_visible: buttonIsVisible.value
});

const callback = () => {
  (() => {
    telegram.WebApp.HapticFeedback.notificationOccurred('success');
  })();
};

telegram.WebApp.MainButton.onClick(callback);

const setText = () => {
  telegram.WebApp.MainButton.setText(buttonTextCustom.value);
  buttonText.value = telegram.WebApp.MainButton.text;
  changeOptions.value.text = telegram.WebApp.MainButton.text;

  buttonTextCustom.value = '';
};

const toggleButton = () => {
  if (!buttonIsVisible.value) {
    telegram.WebApp.MainButton.show();
  } else {
    telegram.WebApp.MainButton.hide();
  }

  buttonIsVisible.value = telegram.WebApp.MainButton.isVisible;
  changeOptions.value.is_visible = telegram.WebApp.MainButton.isVisible;
};

const handleCheckmark = (event: Event) => {
  const target = event.target as HTMLInputElement;

  if (target.checked) {
    telegram.WebApp.MainButton.enable();
  } else {
    telegram.WebApp.MainButton.disable();
  }

  buttonIsActive.value = telegram.WebApp.MainButton.isActive;
  changeOptions.value.is_active = telegram.WebApp.MainButton.isActive;
};

const handleClickEvent = (event: Event) => {
  const target = event.target as HTMLInputElement;

  console.log(telegram.WebApp.MainButton);

  if (target.checked) {
    telegram.WebApp.MainButton.onClick(callback);
  } else {
    telegram.WebApp.MainButton.offClick(callback);
  }
};

const login = async () => {
  telegram.WebApp.MainButton.showProgress();
  await sleep(2000);
  telegram.WebApp.MainButton.hideProgress();
};

const changeMainBtn = () => {
  console.log(changeOptions.value);
  telegram.WebApp.MainButton.setParams(changeOptions.value);

  buttonText.value = telegram.WebApp.MainButton.text;
  buttonColor.value = telegram.WebApp.MainButton.color;
  buttonTextColor.value = telegram.WebApp.MainButton.textColor;
  buttonIsVisible.value = telegram.WebApp.MainButton.isVisible;
  buttonIsActive.value = telegram.WebApp.MainButton.isActive;
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
            {{ buttonIsVisible ? 'Remove from the cart' : 'Add to the cart' }}
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
            id="vibration-switch"
            checked
            @change="handleClickEvent"
          />
          <label class="form-check-label" for="vibration-switch"> Enable vibration on click </label>
        </div>
      </div>
    </article>

    <article class="mb-5">
      <p class="mb-2">
        <i><strong>showProgress(leaveActive)</strong></i> - a method to show a loading indicator on
        the button. It is recommended to display loading progress if the action tied to the button
        may take a long time. By default, the button is disabled while the action is in progress. If
        the parameter
        <code class="main-btn__marked">leaveActive=true</code>
        is passed, the button remains enabled.
      </p>

      <p class="mb-3">
        <i><strong>hideProgress()</strong></i> - a method to hide the loading indicator.
      </p>

      <div div class="card p-3 shadow-sm">
        <button @click="login" class="main-btn__login" type="button">Login</button>
      </div>
    </article>

    <article>
      <p class="mb-3">
        <i><strong>setParams(params)</strong></i> - method to set the button parameters. The params
        parameter is an object containing one or several fields that need to be changed:
      </p>

      <div div class="card p-3 shadow-sm">
        <h3 class="mb-4">Playground 🛝</h3>

        <div class="main-btn__group">
          <label for="btn-text" class="fw-medium fs-6 fst-italic">text</label>
          <input
            v-model="changeOptions.text"
            type="text"
            id="btn-text"
            name="btn-text"
            maxlength="64"
            class="form-control"
            placeholder="Type new MainButton text..."
            aria-label="new MainButton text"
          />
        </div>

        <div class="main-btn__group">
          <label for="color-background" class="fw-medium fs-6 fst-italic">color </label>
          <input
            type="color"
            class="form-control form-control-color"
            id="color-background"
            v-model="changeOptions.color"
            title="Choose your color"
          />
        </div>

        <div class="main-btn__group">
          <label for="color-text" class="fw-medium fs-6 fst-italic">text_color</label>
          <input
            type="color"
            class="form-control form-control-color"
            id="color-text"
            v-model="changeOptions.text_color"
            title="Choose your color"
          />
        </div>

        <div class="main-btn__group">
          <label for="flexCheckChecked" class="fw-medium fs-6 fst-italic"> is_active</label>
          <input
            class="form-check-input"
            type="checkbox"
            v-model="changeOptions.is_active"
            :checked="changeOptions.is_active"
            id="flexCheckChecked"
          />
        </div>

        <div class="main-btn__group mb-4">
          <label class="fw-medium fs-6 fst-italic" for="flexCheckChecked"> is_visible </label>
          <input
            class="form-check-input"
            type="checkbox"
            v-model="changeOptions.is_visible"
            :checked="changeOptions.is_visible"
            id="flexCheckChecked"
          />
        </div>

        <button
          :disabled="changeOptions.text.length < 1"
          @click="changeMainBtn"
          type="button"
          class="main-btn__change"
        >
          Change MainButton
        </button>
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

  &__login {
    @extend %button-medium;
  }

  &__group {
    display: flex;
    align-items: center;
    gap: 15px;

    padding: 10px;

    border-bottom: 1px solid #b5b9bc;

    &:first-of-type {
      border-top: 1px solid #b5b9bc;
    }
  }

  &__change {
    @extend %button-soft;
    transition: opacity 0.2s ease-in-out;

    &[disabled] {
      pointer-events: none;
      opacity: 0.6;
    }
  }
}
</style>
