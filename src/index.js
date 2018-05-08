import {createEditorComponent} from './createEditorComponent'
import CMS from 'netlify-cms'
import {getScript} from './getScript'
import * as File from './File'

function loadWidget() {
  const widgetSrc = 'https://ucarecdn.com/libs/widget/3.x/uploadcare.full.js'

  return getScript(widgetSrc)
}

function registerPlugin() {
  File.register()

  const comps = CMS.getEditorComponents()

  /* Dirty hack to remove default image component */
  /* eslint-disable*/
  comps._root.entries = []
  comps.size = 0
  /* eslint-enable*/

  CMS.registerEditorComponent(createEditorComponent())
}

export default function() {
  window.UPLOADCARE_PUBLIC_KEY = 'demopublickey'

  loadWidget().then(registerPlugin)
}
