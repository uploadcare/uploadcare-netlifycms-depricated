import {getScript} from './getScript'
import {createEditorComponent} from './createEditorComponent'
import CMS from 'netlify-cms'

export default function() {
  const widgetSrc = 'https://ucarecdn.com/libs/widget/3.x/uploadcare.full.js'

  getScript(widgetSrc).then(() => console.log('widget loaded'))

  CMS.registerEditorComponent(createEditorComponent())
}
