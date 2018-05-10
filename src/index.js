import {createEditorComponent} from './createEditorComponent'
import CMS from 'netlify-cms'
import {getScript} from './getScript'
import * as Widget from './Widget'
import _ from 'lodash'

function loadWidget(options) {
  const widgetSrc = 'https://ucarecdn.com/libs/widget/3.x/uploadcare.full.min.js'

  return getScript(widgetSrc).then(() => {
    window.UPLOADCARE_PUBLIC_KEY = options.widgetOptions.publicKey
  })
}

function loadEffectsTab() {
  const effectsTabSrc = 'https://ucarecdn.com/libs/widget-tab-effects/1.x/uploadcare.tab-effects.min.js'

  return getScript(effectsTabSrc).then(() => {
    uploadcare.registerTab('preview', uploadcareTabEffects)
  })
}

function registerPlugin(options) {
  Widget.register()

  /* Dirty hack to remove default image widget */
  /* eslint-disable*/
  const comps = CMS.getEditorComponents()
  comps._root.entries = []
  comps.size = 0
  /* eslint-enable*/

  CMS.registerEditorComponent(createEditorComponent(options))
}

const defaultOpts = {
  effectsTab: true,
  widgetOptions: {
    publicKey: 'demopublickey',
    imagesOnly: true,
    multiple: false,
  },
}

export default function(userOptions) {
  const options = _.merge(defaultOpts, userOptions)

  loadWidget(options)
    .then(() => options.effectsTab && loadEffectsTab())
    .then(() => registerPlugin(options))
}
