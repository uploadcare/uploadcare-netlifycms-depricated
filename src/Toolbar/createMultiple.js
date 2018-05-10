import _ from 'lodash'

export function createMultiple(options) {
  const widgetOptions = _.merge(options.widgetOptions, {multiple: true})

  return {
    id: 'Uploadcare Group',
    label: 'Uploadcare Group',
    fields: [
      {
        name: 'fileInfo',
        options: widgetOptions,
        label: 'Uploadcare',
        widget: 'uploadcare_widget',
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
