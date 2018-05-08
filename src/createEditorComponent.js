import React from 'react'
import * as File from './File'

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
  return <File.Preview {...data} />
}

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
