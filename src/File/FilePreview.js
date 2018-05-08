import React from 'react'

export class FilePreview extends React.Component {
  render() {
    const previewUrl = this.props.cdnUrl + '-/preview/1162x693/-/setfill/ffffff/-/format/jpeg/-/progressive/yes/'

    return <img src={previewUrl} alt={this.props.alt} />
  }
}
