<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Brand Colors</div>
      <q-separator class="q-my-md" />
      <div class="bg-primary text-yellow">primary</div>
      <div class="bg-secondary text-white">secondary</div>
      <div class="bg-accent text-white">accent</div>
      <div class="bg-dark text-white">dark</div>
      <div class="bg-positive text-white">positive</div>
      <div class="bg-negative text-white">negative</div>
      <div class="bg-info text-white">info</div>
      <div class="bg-warning text-white">warning</div>
      <q-separator class="q-my-md" />
      <div class="bg-orange-4">orange-4</div>
      <div class="bg-light-green-6">light-green-6</div>
      <div class="bg-blue-grey-1">blue-grey-1</div>
      <q-separator class="q-my-md" />
      <p>Variables</p>
    </section>
  </q-page>
</template>

<script setup></script>

<style lang="scss" scoped>
p {
  color: $red;
  background-color: $grey-5;
}
</style>
