import { boot } from 'quasar/wrappers';
import Codemirror from 'vue-codemirror';
import { basicSetup } from 'codemirror'

export default boot(({ app }) => {
  // Set VueCodemirror  instance on app

  app.use(Codemirror, {
    // optional default global options
    componentName: 'Codemirror',
    autofocus: true,
    disabled: false,
    indentWithTab: true,
    tabSize: 2,
    placeholder: 'Code goes here...',
    extensions: [basicSetup],
  })
});
