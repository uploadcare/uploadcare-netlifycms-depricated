import React from 'react'
import * as Image from './Image'

export function createEditorComponent() {
  return {
    id: 'uploadcare',
    label: 'Uploadcare',
    fields: [
      {
        label: 'Uploadcare file',
        name: 'cdnUrl',
        widget: 'uploadcare_file',
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
  return <Image.Preview {...data} />
}
