import React from 'react'

export class Preview extends React.Component {
  render() {
    const previewUrl = this.props.cdnUrl + '-/preview/640x480/-/setfill/ffffff/-/format/jpeg/-/progressive/yes/'

    return <img src={previewUrl} alt={this.props.alt} />
  }
}
