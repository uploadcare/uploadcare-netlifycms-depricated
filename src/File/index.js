import {FileControl} from './FileControl'
import {FilePreview} from './FilePreview'
import CMS from 'netlify-cms'

export function register() {
  CMS.registerWidget('uploadcare_file', FileControl, FilePreview)
}

export const Preview = FilePreview
export const Control = FileControl
