import React from 'react'

export class Preview extends React.Component {
  render() {
    const {cdnUrl, name} = this.props.fileInfo
    const previewUrl = cdnUrl

    return <img src={previewUrl} alt={name} />
  }
}
