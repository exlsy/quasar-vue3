import { defineBoot } from '#q-app/wrappers';
import { createI18n } from 'vue-i18n';
import { LocalStorage } from 'quasar';
import messages from 'src/i18n';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli-vite/boot-files
export default defineBoot(async ({ app }) => {
  const locale = LocalStorage.getItem('lang') || 'ko-KR';
  const i18n = createI18n({
    locale,
    legacy: false, // comment this out if not using Composition API
    messages,
  });
  app.use(i18n);
});
