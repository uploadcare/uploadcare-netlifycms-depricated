# NetlifyCMS Uploadcare plugin

<a href="https://uploadcare.com/?utm_source=github&utm_campaign=uploadcare-netlifycms">
    <img align="right" width="64" height="64"
      src="https://ucarecdn.com/2f4864b7-ed0e-4411-965b-8148623aa680/uploadcare-logo-mark.svg"
      alt="">
    <img align="right" width="64" height="64"
      src="https://www.netlify.com/img/press/logos/logomark.svg"
      alt="">
</a>

This is Uploadcare plugin for [Netlify CMS]. It will allow
your users to upload files and images from local device, social networks, cloud
storages without any backend code that is usually required to handle uploads.

[![NPM version][npm-img]][npm-url]
[![GitHub release][badge-release-img]][badge-release-url]&nbsp;
[![Uploadcare stack on StackShare][badge-stack-img]][badge-stack-url]

# Demo

A demo based on [netlify-templates/one-click-hugo-cms][one-click-hugo-cms] can be found here: [Demo]

Registration is open but [Git Gateway] disabled so you can't publish your changes.

## Installation & configuration

1.  Install through NPM:

```bash
npm install uploadcare-netlifycms --save
```

2.  Import and initialize

```javascript
import uploadcare from "uploadcare-netlifycms";

uploadcare();
```

## Options

There is only one required option - your public API key. You can get that by creating an
account [Uploadcare]. You can use demo public key during dev stage, but note that
demo account files are removed every few hours.

```javascript
uploadcare({
  effectsTab: true,
  widgetOptions: {
    publickey: "yourpublickey"
  }
});
```

Property `effectsTab` specifies whether [Effects Tab] should be enabled.

Property `widgetOptions` is passed down to the widget. Please read Uploadcare [widget documentation] to learn more about possible widget options.

# Feedback

Your feedback or support requests are welcome at hello@uploadcare.com.

[netlify cms]: https://www.netlifycms.org/
[widget documentation]: https://uploadcare.com/docs/uploads/widget/config/
[uploadcare]: https://uploadcare.com
[badge-stack-img]: https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat
[badge-stack-url]: https://stackshare.io/uploadcare/stacks/
[badge-release-img]: https://img.shields.io/github/release/uploadcare/uploadcare-netlifycms.svg
[badge-release-url]: https://github.com/uploadcare/uploadcare-netlifycms/releases
[one-click-hugo-cms]: https://github.com/netlify-templates/one-click-hugo-cms
[demo]: https://quizzical-hawking-b6f8cb.netlify.com/admin/#/
[git gateway]: https://www.netlify.com/docs/git-gateway/
[effects tab]: https://uploadcare.com/features/effects_tab/
[npm-img]: http://img.shields.io/npm/v/uploadcare-netlifycms.svg
[npm-url]: https://www.npmjs.org/package/uploadcare-netlifycms
