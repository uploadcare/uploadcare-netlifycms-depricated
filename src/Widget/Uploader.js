import _ from 'lodash'
import React, {Component} from 'react'

class Uploader extends Component {
  componentDidMount() {
    const widget = uploadcare.Widget(this.uploader)
    const {value, onChange, onUploadComplete} = this.props

    if (typeof value !== 'undefined') {
      widget.value(value)
    }
    if (typeof onChange === 'function') {
      widget.onChange(onChange)
    }
    if (typeof onUploadComplete === 'function') {
      widget.onUploadComplete(onUploadComplete)
    }
  }

  getInputAttributes() {
    return _.mapKeys(this.props.options, (value, key) => `data-${_.kebabCase(key)}`)
  }

  render() {
    const attributes = this.getInputAttributes()

    return <input type='hidden' ref={input => (this.uploader = input)} {...attributes} />
  }
}

export default Uploader
