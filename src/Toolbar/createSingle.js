import React from 'react'
import * as Widget from '../Widget'
import _ from 'lodash'

export function createSingle(options) {
  const widgetOptions = _.merge(options.widgetOptions, {multiple: false})

  return {
    id: 'Uploadcare Single',
    label: 'Uploadcare Single',
    fields: [
      {
        name: 'fileInfo',
        options: widgetOptions,
        label: 'Uploadcare',
        widget: 'uploadcare_widget',
      },
      {
        name: 'customString',
        label: 'Custom string',
        widget: 'string',
      },
    ],
    pattern: /^!\[(.*)\]\((.*)\)$/,
    fromBlock: match => ({
      fileInfo: {
        cdnUrl: match[2],
        name: match[1],
        isImage: true,
      },
    }),
    toBlock: toBlock,
    toPreview: data => <Widget.Preview {...data} />,
  }
}

function toBlock({fileInfo, customString}) {
  if (!fileInfo) {
    return
  }

  const url = fileInfo.cdnUrl + (customString || '')

  return `${fileInfo.isImage ? '!' : ''}[${fileInfo.name || ''}](${url})`
}
