<script lang="ts" setup>
import { toRefs, reactive } from 'vue';

const props = defineProps({
  buttonText: {type: String, required: true },
  buttonColor: {type: String, required: true},
  buttonTextColor: {type: String, required: true},
  buttonIsVisible: {type: Boolean, required: true},
  buttonIsActive: {type: Boolean, required: true},
  buttonIsProgressVisible: {type: Boolean, required: true},
});

// const buttonText = ref<string>(telegram.WebApp.MainButton.text);
// const buttonColor = ref<string>(telegram.WebApp.MainButton.color);
// const buttonTextColor = ref<string>(telegram.WebApp.MainButton.textColor);
// const buttonIsVisible = ref<boolean>(telegram.WebApp.MainButton.isVisible);
// const buttonIsActive = ref<boolean>(telegram.WebApp.MainButton.isActive);
// const buttonIsProgressVisible = ref<boolean>(telegram.WebApp.MainButton.isProgressVisible);

// onUpdated(() => {
//   buttonText.value = telegram.WebApp.MainButton.text;
// buttonColor.value = telegram.WebApp.MainButton.color;
// buttonTextColor.value = telegram.WebApp.MainButton.textColor;
// buttonIsVisible.value = telegram.WebApp.MainButton.isVisible;
// buttonIsActive.value = telegram.WebApp.MainButton.isActive;
// buttonIsProgressVisible.value = telegram.WebApp.MainButton.isProgressVisible;
// })
</script>

<template>
      <article class="main-btn__main-btn-options main-btn-options">
      <p class="mb-3">
        <i><strong>MainButton</strong></i> - this <i>object</i> controls the main button, which is
        displayed at the bottom of the Web App in the Telegram interface.
      </p>

      <ul class="mb-4">
        <li class="mb-2">
          <i><strong>MainButton.text</strong></i> - <span>{{'<String>'}}</span> - current button text. Set to <i class="main-btn-options__marked">CONTINUE</i> by default.
        </li>

        <li class="mb-2">
          <i><strong>MainButton.color</strong></i> - <span>{{'<String>'}}</span> - current button color. Set to <i class="main-btn-options__marked">themeParams.button_color</i> by default.
        </li>

        <li class="mb-2">
          <i><strong>MainButton.textColor</strong></i> - <span>{{'<String>'}}</span> - current button text color. Set to <i class="main-btn-options__marked">themeParams.button_text_color</i>by default.
        </li>

        <li class="mb-2">
          <i><strong>MainButton.isVisible</strong></i> - <span>{{'<Boolean>'}}</span> - shows whether the button is visible. Set to 
            <i class="main-btn-options__marked">
              false
            </i>
            by default.
        </li>

        <li class="mb-2">
          <i><strong>MainButton.isActive</strong></i> - <span>{{'<Boolean>'}}</span> - shows whether the button is active. Set to
            <i class="main-btn-options__marked">
              true
            </i>
            by default.
        </li>

        <li class="mb-2">
          <i><strong>MainButton.isProgressVisible</strong></i> - <span>{{'<Boolean Readonly>'}}</span> - shows whether the button is displaying a loading indicator.
        </li>
      </ul>

      <div class="card p-3 shadow-sm">
        <h3 class="mb-4 fs-5 text-center fw-bold">Current MainButton</h3>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Key</th>
              <th scope="col">Value</th>
              <th scope="col">Demo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">text</th>
              <td>{{ props.buttonText }}</td>
              <td>-</td>
            </tr>
            <tr>
              <th scope="row">color</th>
              <td>{{ props.buttonColor }}</td>
              <td>
                <span
                  class="main-btn-options__table-color"
                  :style="{ 'background-color': buttonColor }"
                ></span>
              </td>
            </tr>
            <tr>
              <th scope="row">textColor</th>
              <td>{{ props.buttonTextColor }}</td>
              <td><span class="main-btn-options__table-color"></span></td>
            </tr>
            <tr>
              <th scope="row">isVisible</th>
              <td>{{ props.buttonIsVisible }}</td>
              <td>-</td>
            </tr>
            <tr>
              <th scope="row">isActive</th>
              <td>{{ props.buttonIsActive }}</td>
              <td>-</td>
            </tr>
            <tr>
              <th scope="row">isProgressVisible</th>
              <td>{{ props.buttonIsProgressVisible }}</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
</template>

<style lang="scss">
@import '@/assets/sassStyles/colors';
.main-btn-options {
  &__marked {
    display: inline-block;
    padding: 0 6px;

    background-color: $color__warning-light;
    border-radius: 6px;
  }

  &__table-color {
    display: inline-block;
    height: 20px;
    width: 100%;

    vertical-align: middle;

    border-radius: 5px;
    border: 1px solid $color__primary;
  }
}
</style>