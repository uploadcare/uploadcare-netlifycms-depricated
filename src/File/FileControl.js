import React from 'react'
import Uploader from './Uploader'

export class FileControl extends React.Component {
  onUploadComplete(fileInfo) {
    this.props.onChange(fileInfo.cdnUrl)
  }

  render() {
    return (
      <div className='nc-controlPane-widget nc-imageControl-imageUpload'>
        <span className='nc-imageControl-message'>
          <Uploader value={this.props.value} onUploadComplete={this.onUploadComplete.bind(this)} />
        </span>
      </div>
    )
  }
}
