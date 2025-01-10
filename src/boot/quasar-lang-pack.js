import { defineBoot } from '#q-app/wrappers';
import { LocalStorage, Lang, Quasar } from 'quasar';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli-vite/boot-files
export default defineBoot(async (/* { app, router, ... } */) => {
  // something to do
  const lang = LocalStorage.getItem('lang') || Quasar.lang.isoName;
  console.log('boot lang: ', lang);
  import(`../../node_modules/quasar/lang/${lang}.js`).then(lang => {
    Lang.set(lang.default);
  });
});
