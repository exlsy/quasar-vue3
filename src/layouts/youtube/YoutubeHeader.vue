<template>
  <q-header class="bg-white text-grey-8" height-hint="60">
    <q-toolbar class="border">
      <q-btn flat round dense icon="menu" class="border q-mr-sm"></q-btn>
      <q-avatar rounded class="border">
        <q-img src="/youtube.png" fit="scale-down" />
      </q-avatar>

      <q-toolbar-title
        shrink
        class="q-mx-xs text-subtitle1 text-weight-bold border"
        >Youtube</q-toolbar-title
      >
      <q-space />
      <div class="search row items-center">
        <q-input
          class="col-grow"
          outlined
          square
          dense
          placeholder="검색"
          @focus="isSearchFocus = true"
          @blur="isSearchFocus = false"
        >
          <template v-if="isSearchFocus" #prepend>
            <q-icon name="search"></q-icon>
          </template>
          <template #append>
            <q-icon name="keyboard"></q-icon>
          </template>
        </q-input>
        <q-btn
          class="search-btn"
          icon="search"
          unelevated
          color="grey-3"
          text-color="black"
          square
        ></q-btn>
        <q-btn
          class="q-ml-sm"
          icon="mic"
          round
          color="grey-2"
          text-color="black"
          unelevated
        ></q-btn>
      </div>
      <q-space />
      <q-btn flat round icon="more_vert" class="border q-mr-sm"></q-btn>
      <q-btn
        outline
        rounded
        icon="account_circle"
        color="primary"
        label="로그인"
      ></q-btn>
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { ref } from 'vue';

const isSearchFocus = ref(false);
</script>

<style lang="scss" scoped>
// .border {
//   border: 1px solid $primary;
// }
.q-toolbar {
  height: 56px;
}
.search {
  min-width: 100px;
  max-width: 500px;
  width: 55%;
  &-btn {
    border: solid;
    border-width: 1px 1px 1px 0px;
    border-color: #c9c9c9;
    max-width: 60px;
    width: 100%;
    height: 40px;
  }
}
</style>
