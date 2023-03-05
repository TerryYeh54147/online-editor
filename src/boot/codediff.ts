import { boot } from 'quasar/wrappers';
// import CodeDiff from 'v-code-diff';

import VueDiff from 'vue-diff';
import 'vue-diff/dist/index.css';

export default boot(({ app }) => {
  // Set VueDiff  instance on app
  app.use(VueDiff, {
    componentName: 'CodeDiff',
  });
});
