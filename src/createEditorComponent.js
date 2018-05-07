import React from 'react'

export function createEditorComponent() {
  return {
    id: 'uploadcare',
    label: 'Uploadcare',
    fields: [
      {
        label: 'Image',
        name: 'image',
        widget: 'image',
      },
      {
        label: 'Alt Text',
        name: 'alt',
      },
    ],
    pattern: /ucarecdn\.com/,
    fromBlock: match =>
      match && {
        image: match[2],
        alt: match[1],
      },
    toBlock: data => `![${data.alt || ''}](${data.image || ''})`,
    toPreview: (data, getAsset) => <img src={getAsset(data.image) || ''} alt={data.alt || ''} />,
  }
}
