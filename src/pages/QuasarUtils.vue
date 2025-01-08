<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Date Util</div>
      <q-separator class="q-my-md" />

      <div class="text-h6">
        <p>formatDate - {{ formatDate(new Date(), DATE_FORMAT) }}</p>
        <!-- <p>{{ new Date() }}</p> -->
      </div>
      <div class="text-h6">
        <p>
          addToDate -
          {{ formatDate(addToDate(new Date(), { days: 7 }), DATE_FORMAT) }}
        </p>
      </div>
      <div class="text-h6">
        <p>
          subtractFromDate -
          {{
            formatDate(subtractFromDate(new Date(), { days: 7 }), DATE_FORMAT)
          }}
        </p>
      </div>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">Format Util</div>
      <q-separator class="q-my-md" />

      <div class="text-h6">pad - {{ pad('hello', 10, '#') }}</div>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">Type Chcking Util</div>
      <q-separator class="q-my-md" />

      <div class="text-h6">objA === objB - {{ objA === objB }}</div>
      <div class="text-h6">
        deepEqual(objA, objB) - {{ deepEqual(objA, objB) }}
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { date, format, is } from 'quasar';

const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';
const { formatDate, addToDate, subtractFromDate } = date;
const { pad } = format;
const { deepEqual } = is;

const objA = { name: 'abc', age: 30, hobby: 'game' };
const objB = { name: 'abc', hobby: 'game', age: 30 };
</script>

<style lang="scss" scoped></style>
