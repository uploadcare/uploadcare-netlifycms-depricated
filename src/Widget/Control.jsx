import React from 'react'
import './Control.pcss'
import Uploader from '../Uploader'

export class Control extends React.Component {
  onUploadComplete(fileInfo) {
    this.props.onChange(fileInfo)
  }

  render() {
    const widgetOptions = this.props.field.get('options').toJS()
    const fileInfo = this.props.value
    const cdnUrl = fileInfo && fileInfo.cdnUrl

    return (
      <div className='nc-controlPane-widget nc-imageControl-imageUpload'>
        <span className='nc-imageControl-message'>
          <Uploader options={widgetOptions} value={cdnUrl} onUploadComplete={this.onUploadComplete.bind(this)} />
        </span>
      </div>
    )
  }
}
