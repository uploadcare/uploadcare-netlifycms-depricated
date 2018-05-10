import {getScript} from './getScript'

function loadWidget(options) {
  const widgetSrc = `https://ucarecdn.com/libs/widget/${WIDGET_VERSION}/uploadcare.full.min.js`

  return getScript(widgetSrc).then(() => {
    window.UPLOADCARE_PUBLIC_KEY = options.widgetOptions.publicKey
  })
}

function loadEffectsTab() {
  const effectsTabSrc = `https://ucarecdn.com/libs/widget-tab-effects/${EFFECTS_TAB_VERSION}/uploadcare.tab-effects.min.js`

  return getScript(effectsTabSrc).then(() => {
    uploadcare.registerTab('preview', uploadcareTabEffects)
  })
}

export function initializeUploadcare(options) {
  return loadWidget(options).then(() => options.effectsTab && loadEffectsTab())
}
