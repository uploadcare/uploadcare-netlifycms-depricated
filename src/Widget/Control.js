import React from 'react'
import Uploader from './Uploader'
import './Control.pcss'

export class Control extends React.Component {
  onUploadComplete(fileInfo) {
    this.props.onChange(fileInfo.cdnUrl)
  }

  render() {
    const widgetOptions = {
      imagesOnly: true,
      multiple: false,
    }

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
