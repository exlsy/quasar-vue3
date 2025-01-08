import { defineBoot } from '#q-app/wrappers';
import { LocalStorage, Lang } from 'quasar';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli-vite/boot-files
export default defineBoot(async (/* { app, router, ... } */) => {
  // something to do
  const lang = LocalStorage.getItem('lang');
  console.log('boot lang: ', lang);
  import('../../node_modules/quasar/lang/' + lang).then(lang => {
    Lang.set(lang.default);
  });
});
