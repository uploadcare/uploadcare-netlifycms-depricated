import CMS from 'netlify-cms'
import {Control} from './Control'
import {Preview} from './Preview'

export function register() {
  CMS.registerWidget('uploadcare', Control, Preview)
}

export {Control, Preview}
