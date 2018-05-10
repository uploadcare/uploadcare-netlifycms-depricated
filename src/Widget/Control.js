import React from 'react'
import './Control.pcss'
import Uploader from './Uploader'

export class Control extends React.Component {
  onUploadComplete(fileInfo) {
    this.props.onChange(fileInfo.cdnUrl)
  }

  render() {
    const widgetOptions = this.props.field.get('options').toJS()

    return (
      <div className='nc-controlPane-widget nc-imageControl-imageUpload'>
        <span className='nc-imageControl-message'>
          <Uploader
            options={widgetOptions}
            value={this.props.value}
            onUploadComplete={this.onUploadComplete.bind(this)}
          />
        </span>
      </div>
    )
  }
}
