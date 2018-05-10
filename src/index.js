import _ from 'lodash'
import CMS from 'netlify-cms'
import * as Widget from './Widget'
import {createSingle} from './Toolbar/createSingle'
import {createMultiple} from './Toolbar/createMultiple'
import {initializeUploadcare} from './initializeUploadcare'

function registerPlugin(options) {
  Widget.register()

  /* eslint-disable*/
  // hack to remove default image widget
  const comps = CMS.getEditorComponents()
  comps._root.entries = []
  comps.size = 0
  /* eslint-enable*/

  CMS.registerEditorComponent(createSingle(options))
  CMS.registerEditorComponent(createMultiple(options))
}

function detectCMSVersion() {
  // hack to detect NetlifyCMS version from it's source code
  const unknown = 'unknown'

  try {
    const regex = /\"Netlify CMS version ([\d\.]*)\"/m
    const match = window.initCMS.toString().match(regex)

    return match ? match[1] : unknown
  }
  catch (e) {
    return unknown
  }
}

function getIntegrationOption() {
  var cmsVersion = detectCMSVersion()
  var pluginVerion = PLUGIN_VERSION

  return `NetlifyCMS/${cmsVersion}; Uploadcare-NetlifyCMS/${pluginVerion}`
}

const defaultOpts = {
  effectsTab: true,
  widgetOptions: {
    publicKey: 'demopublickey',
    integration: getIntegrationOption(),
  },
}

export default function(userOptions) {
  const options = _.merge(defaultOpts, userOptions)

  initializeUploadcare(options).then(() => registerPlugin(options))
}
