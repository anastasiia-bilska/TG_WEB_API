<script setup lang="ts">
import { computed, ref } from 'vue';

const isSupported = computed(() => {
  return !!('NDEFReader' in window);
});

const drugStoreNumber = ref<String | null>('');
const adminLastName = ref('');

const handleSelect = (event: Event) => {
  const target = event.target as HTMLSelectElement;

  drugStoreNumber.value = target.value || null;
  console.log(drugStoreNumber.value);
};

try {
  const permissionName = 'nfc' as PermissionName;
  const status = await navigator.permissions.query({ name: permissionName });

  console.log({ status });
} catch (e) {
  console.log({ e });
}

const writeNFC = async () => {
  // const encoder = new TextEncoder();

  if ('NDEFReader' in window) {
    try {
      const permissionName = 'nfc' as PermissionName;
      const status = await navigator.permissions.query({ name: permissionName });

      console.log({ status });
    } catch (e) {
      console.log({ e });
    }

    const ndef = new window.NDEFReader();
    try {
      await ndef.write('hello world', { timeout: 1_000 });

      alert(`write() success!✅`);
    } catch (error) {
      alert(`write() error: ${error}❌`);
    }
  } else {
    alert('Web NFC is not supported.');
  }
};
</script>

<template>
  <section class="container nfc">
    <h2 class="mb-4">Web NFC API</h2>

    <article class="mb-5">
      <h3>NDEFReader</h3>
      <p class="mb-3">
        <i><code>if ("NDEFReader" in window) { ... }</code></i> - a way to detect if Web NFC is
        supported.
      </p>

      <div class="card p-3 shadow-sm d-flex">
        <p
          class="nfc__support p-2 m-0 rounded"
          :class="{ nfc__success: isSupported, nfc__failture: !isSupported }"
        >
          {{ isSupported ? 'NFC is supported! ✅' : 'NFC is not supported ❌' }}
        </p>
      </div>
    </article>

    <article class="mb-5">
      <h3>write()</h3>

      <p class="mb-3">
        <i><code>ndef.write(message)</code></i> - attempts to write an NDEF message to a tag.
      </p>

      <div class="card p-3 shadow-sm d-flex">
        <h4 class="mb-3 fs-6">Record store data:</h4>
        <div class="form-floating mb-3">
          <select
            class="form-select"
            id="floatingSelect"
            aria-label="Floating label select"
            @change="handleSelect"
          >
            <option selected disabled>Open this select menu</option>
            <option value="111">111</option>
            <option value="123">123</option>
            <option value="144">144</option>
          </select>
          <label for="floatingSelect">Select store number</label>
        </div>

        <div class="form-floating mb-4">
          <input
            v-model="adminLastName"
            type="text"
            class="form-control nfc__last-name"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
          <label for="floatingSelect" class="text-secondary">Admin last name</label>
        </div>
        <button
          :disabled="adminLastName.length < 2 || !drugStoreNumber"
          type="button"
          class="nfc__button nfc__button--record"
          :class="{ 'nfc__button--disabled': adminLastName.length < 2 || !drugStoreNumber }"
          @click="writeNFC"
        >
          Record!
        </button>
      </div>
    </article>
  </section>
</template>

<style lang="scss">
@import './NFC.scss';
</style>
