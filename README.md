# File Uploader by Uploadcare

**Depricated in favor of https://github.com/netlify/netlify-cms/tree/master/packages/netlify-cms-media-library-uploadcare. Read more on https://www.netlifycms.org/docs/uploadcare/.**

<a href="https://uploadcare.com/?utm_source=github&utm_campaign=uploadcare-netlifycms">
  <img align="right" width="64" height="64"
    src="https://ucarecdn.com/2f4864b7-ed0e-4411-965b-8148623aa680/uploadcare-logo-mark.svg"
    alt="">
</a>

This plugin powers your [NetlifyCMS][netlify-cms] with [Uploadcare][uc-home].
You will be able to:

* Upload any media via [Uploadcare Widget][uc-feature-widget].
* Edit images in any browser via [Effects Tab][uc-feature-fxtab].
* Deliver your media to 220k servers across 130+ countries via our smart CDN.
* Adjust your image content delivery via
  [Image Processing][uc-feature-image-processing].

[![NPM version][npm-img]][npm-url]
[![GitHub release][badge-release-img]][badge-release-url]&nbsp;
[![Uploadcare stack on StackShare][badge-stack-img]][badge-stack-url]

## Demo

Check out how it works via the [demo][demo] based on
[netlify-templates/one-click-hugo-cms][one-click-hugo-cms]. 

Just log in using the following credentials:

* Email: `demo@netlify.cms`
* Password: `demo`

The source code of our demo can be found [here][demo-sources].

## Install

This plugin can be installed via NPM:

```bash
npm install uploadcare-netlifycms --save
```

## Usage

Just import and initialize `uploadcare-netlifycms`:

```javascript
import CMS from "netlify-cms";
import uploadcare from "uploadcare-netlifycms";

uploadcare();
```

Note, `uploadcare-netlifycms` should be initialized after importing `netlify-cms`.

## Configuration

There is only one required option, your public [API key][uc-keys]. You can
get one by [signing up][uc-signup] for Uploadcare. Another option is using
`demopublickey` for testing purposes. But note, we are wiping out all files on
our demo account every few hours.

```javascript
uploadcare({
  effectsTab: true,
  widgetOptions: {
    publickey: "yourpublickey"
  }
});
```

The `effectsTab` property specifies whether in-browser image editing should be
enabled. `widgetOptions` get passed to the widget. Check out our
[widget docs][widget-options] to learn more about its options.

## Usage with your editor component

You can implement our widget in your [Editor Component][editor-comp] as a field:

```javascript
{
  fields: [
    {
      name: "fileInfo",
      options: {
        multiple: true
      },
      label: "Uploadcare",
      widget: "uploadcare"
    }
  ];
}
```

`uploadcare` stands for the widget type, it’s a constant.

`options` are passed to the widget. Learn more about options in the
[widget docs][widget-options].

`fileInfo` stands for the widget value name. It follows the widget’s
[`fileInfo`][file-info] structure. When restored from a markdown block, it
will at least contain the `cdnUrl` and `name` properties: they are used for
a preview.

## Security issues

If you think you ran into something in Uploadcare libraries which might have
security implications, please hit us up at [bugbounty@uploadcare.com][uc-email-bounty]
or Hackerone.

We'll contact you personally in a short time to fix an issue through co-op and
prior to any public disclosure.

## Feedback

Issues and PRs are welcome. You can provide your feedback or drop us a support
request at [hello@uploadcare.com][uc-email-hello].

[netlify-cms]: https://www.netlifycms.org/
[uc-home]: https://uploadcare.com
[uc-feature-widget]: https://uploadcare.com/features/widget/
[uc-feature-fxtab]: https://uploadcare.com/features/effects_tab/
[uc-feature-image-processing]: https://uploadcare.com/features/image_processing/
[demo]: https://uploadcare-demo.netlify.com/admin/#/
[one-click-hugo-cms]: https://github.com/netlify-templates/one-click-hugo-cms
[uc-keys]: https://uploadcare.com/docs/keys/#keys
[uc-signup]: https://uploadcare.com/accounts/signup/
[widget-options]: https://uploadcare.com/docs/uploads/widget/config/#options
[editor-comp]: https://www.netlifycms.org/docs/custom-widgets/#registereditorcomponent
[badge-stack-img]: https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat
[badge-stack-url]: https://stackshare.io/uploadcare/stacks/
[badge-release-img]: https://img.shields.io/github/release/uploadcare/uploadcare-netlifycms.svg
[badge-release-url]: https://github.com/uploadcare/uploadcare-netlifycms/releases
[git-gateway]: https://www.netlify.com/docs/git-gateway/
[npm-img]: http://img.shields.io/npm/v/uploadcare-netlifycms.svg
[npm-url]: https://www.npmjs.org/package/uploadcare-netlifycms
[file-info]: https://uploadcare.com/docs/api_reference/javascript/files_uploads/#file-info
[uc-feedback]: mailto:hello@uploadcare.com
[uc-email-bounty]: mailto:bugbounty@uploadcare.com
[uc-email-hello]: mailto:hello@uploadcare.com
[demo-sources]: https://github.com/uploadcare/uploadcare-netlifycms-demo-hugo
