<template>
  <q-page padding>
    <section class="content">
      <div class="row q-col-gutter-x-md q-col-gutter-y-xl">
        <div v-for="n in 16" :key="n" class="col-12 col-sm-6 col-md-4 col-lg-3">
          <article>
            <q-img
              :ratio="16 / 9"
              src="https://cdn.quasar.dev/img/mountains.jpg"
              class="rounded-borders"
            />
            <div class="row q-col-gutter-x-sm q-mt-sm flex-center">
              <div class="col-auto">
                <q-avatar size="md">
                  <q-img src="https://cdn.quasar.dev/img/avatar.png" />
                </q-avatar>
              </div>
              <div class="col">
                <div
                  class="text-subtitle1 text-weight-bold"
                  :style="{ lineHeight: '1.1em' }"
                >
                  퀘이사 강의 | Quasar Lecture
                </div>
                <div class="text-caption text-grey-9 q-mt-xs">
                  이코딩 LEE Coding
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <q-page-sticky expand position="top">
      <q-toolbar class="toolbar">
        <q-space />
        <q-btn
          v-for="title in filters"
          :key="title"
          outline
          rounded
          class="q-mx-xs"
          color="primary"
          size="14px"
          :label="title"
        ></q-btn>
        <q-space />
      </q-toolbar>
    </q-page-sticky>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const filters = ref(['전체', '실시간', '게임', '음악', '요리']);
</script>

<style lang="scss" scoped>
.border {
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  // border-color: #c9c9c9;
  border-color: black;
}
.content {
  margin-top: 50px;
}
.toolbar {
  background-color: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
