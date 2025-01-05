import { defineBoot } from '#q-app/wrappers';
import { LocalStorage, Dark } from 'quasar';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli-vite/boot-files
export default defineBoot(async (/* { app, router, ... } */) => {
  console.log('### initialization');
  // 1) Dark 모드 설정
  const darkMode = LocalStorage.getItem('darkMode');
  console.log('darkMode', darkMode);
  // console.log('darkMode', typeof darkMode);
  Dark.set(darkMode);
});
