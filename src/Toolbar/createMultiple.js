import merge from 'merge-options'

export function createMultiple(options) {
  const widgetOptions = merge(options.widgetOptions, {multiple: true})

  return {
    id: 'Uploadcare Group',
    label: 'Uploadcare Group',
    fields: [
      {
        name: 'fileInfo',
        options: widgetOptions,
        label: 'Uploadcare',
        widget: 'uploadcare',
      },
    ],
    toBlock: toBlock,
  }
}

function toBlock({fileInfo}) {
  if (!fileInfo) {
    return
  }

  return `[${fileInfo.name || ''}](${fileInfo.cdnUrl})`
}
