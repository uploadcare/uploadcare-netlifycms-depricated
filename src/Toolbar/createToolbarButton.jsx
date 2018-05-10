import React from 'react'
import * as Widget from '../Widget'

export function createToolbarButton(options) {
  return {
    id: 'uploadcare',
    label: 'Uploadcare',
    fields: [
      {
        name: 'fileInfo',
        options: options.widgetOptions,
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
