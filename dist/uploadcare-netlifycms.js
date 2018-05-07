/**
 * uploadcare-netlifycms 1.0.0
 * 
 * https://github.com/uploadcare/uploadcare-netlifycms#readme
 * Date: 2018-05-07
 */

import React from 'react';
import CMS from 'netlify-cms';

function getScript(url) {
  return new Promise((resolve, reject) => {
    const head = document.getElementsByTagName('head')[0];
    const done = false;
    const script = document.createElement('script');
    script.src = url;

    script.onload = script.onreadystatechange = () => {
      if (!done && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
        done = true;
        resolve();
      } else {
        reject();
      }
    };

    script.onerror = () => reject();

    head.appendChild(script);
  });
}

function createEditorComponent() {
  return {
    id: 'uploadcare',
    label: 'Uploadcare',
    fields: [{
      label: 'Image',
      name: 'image',
      widget: 'image'
    }, {
      label: 'Alt Text',
      name: 'alt'
    }],
    pattern: /ucarecdn\.com/,
    fromBlock: match => match && {
      image: match[2],
      alt: match[1]
    },
    toBlock: data => `![${data.alt || ''}](${data.image || ''})`,
    toPreview: (data, getAsset) => React.createElement("img", {
      src: getAsset(data.image) || '',
      alt: data.alt || ''
    })
  };
}

function index () {
  const widgetSrc = 'https://ucarecdn.com/libs/widget/3.x/uploadcare.full.js';
  getScript(widgetSrc).then(() => console.log('widget loaded'));
  CMS.registerEditorComponent(createEditorComponent());
}

export default index;
