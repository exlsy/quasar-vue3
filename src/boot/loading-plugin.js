import { defineBoot } from '#q-app/wrappers';
import { Loading } from 'quasar';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli-vite/boot-files
export default defineBoot(async (/* { app, router, ... } */) => {
  // something to do
  Loading.setDefaults({
    delay: 0,
    message: '로 딩 중 ...',
    spinnerSize: 40,
    spinnerColor: 'red',
  });
});
