import React from 'react'
import * as Widget from './Widget'

export function createEditorComponent() {
  return {
    id: 'uploadcare',
    label: 'Uploadcare Image',
    fields: [
      {
        label: 'Uploadcare Image',
        name: 'cdnUrl',
        widget: 'uploadcare_widget',
      },
    ],
    pattern: /^!\[(.*)\]\((.*)\)$/,
    fromBlock,
    toBlock,
    toPreview,
  }
}

function fromBlock(match) {
  const alt = match[1]
  const cdnUrl = match[2]

  return {
    cdnUrl,
    alt,
  }
}

function toBlock({cdnUrl, alt}) {
  if (!cdnUrl) {
    return
  }

  return `![${alt || ''}](${cdnUrl})`
}

function toPreview(data) {
  return <Widget.Preview {...data} />
}
