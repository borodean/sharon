[![Sauce Test Status][saucelabs-badge]][saucelabs]

# ![Sharon][media-sharon]

A lightweight and modular social sharing library:

- a toolkit to build your own share buttons;
- supports 8 social networks;
- gzipped size is 1.15 KB;
- you can cherry-pick which social networks to use to make it even smaller.

Here how it looks when you want Sharon to open a tweet popup:

```js
sharon.twitter({
  title: 'One last quarter as defending champs!',
  hashtags: ['SuperBowl', 'DenverBroncos']
});
```

Or to get a Facebook share count for your page:

```js
sharon.facebook.count(function (err, count) {
  if (err) throw err;
  console.log('Whoa, we have ' + count + ' shares!');
});
```

## Table of contents

- [Setup](#setup)
  - [CommonJS](#commonjs)
  - [Browser](#browser)
- [API](#api)
  - [Supported social networks](#supported-social-networks)
  - [sharon.*network*(url = location.href, parameters = { title: document.title })](#sharonnetworkurl--locationhref-parameters---title-documenttitle-)
  - [sharon.*network*.href(url = location.href, parameters = { title: document.title })](#sharonnetworkhrefurl--locationhref-parameters---title-documenttitle-)
  - [sharon.*network*.count(url = location.href, callback)](#sharonnetworkcounturl--locationhref-callback)
  - [Share parameters](#share-parameters)
- [More examples](#more-examples)
  - [Poor man&apos;s tweet button](#poor-mans-tweet-button)
  - [Angular](#angular)
  - [React component](#react-component)

## Setup

### CommonJS

Install Sharon using npm:

```
npm install sharon --save
```

Load the whole library:

```js
var sharon = require('sharon');
```

Or cherry-pick networks for smaller Webpack, Browserify or Rollup bundles:

```js
var facebook = require('sharon/facebook');
var twitter = require('sharon/twitter');
```

### Browser

```html
<script src="dist/sharon.js"></script>
```

For the `sharon.js` file check the `dist` directory of the installed module or directly download it:

- [Production version][download] – 1.15 KB, minified and gzipped
- [Source map][download-map]

## API

### Supported social networks

Each social network has its own endpoint under the Sharon API:

| Social network | Endpoint           | Share count support | Share parameters              |
|----------------|--------------------|---------------------|-------------------------------|
| Buffer         | `sharon.buffer`    | Yes                 | [Reference][params-buffer]    |
| Facebook       | `sharon.facebook`  | Yes                 |                               |
| Google+        | `sharon.plus`      | Yes                 | [Reference][params-plus]      |
| LinkedIn       | `sharon.linkedin`  | Yes                 | [Reference][params-linkedin]  |
| Pinterest      | `sharon.pinterest` | Yes                 | [Reference][params-pinterest] |
| Tumblr         | `sharon.tumblr`    | Yes                 | [Reference][params-tumblr]    |
| Twitter        | `sharon.twitter`   |                     | [Reference][params-twitter]   |
| XING           | `sharon.xing`      |                     | [Reference][params-xing]      |

This table also shows which of the networks support retrieving share counts and links to the share parameters references.

### sharon.*network*(url = location.href, parameters = { title: document.title })

- `url` &lt;String&gt; The URL to share. Defaults to the current location.
- `parameters` &lt;Object&gt; [Share parameters](#share-parameters). Default to an object with the title property equal to the current page title.

Opens a share popup.

<details>
<summary>Examples</summary>
Share the current page:

```js
sharon.twitter();
```

With a custom title:

```js
sharon.twitter({title: 'Check it out'});
```

Share example.com:

```js
sharon.twitter('http://example.com');
```

Share example.com with a custom title:

```js
sharon.twitter('http://example.com', {title: 'Check it out'});
```
</details>

### sharon.*network*.href(url = location.href, parameters = { title: document.title })

- `url` &lt;String&gt; The URL to share. Defaults to the current location.
- `parameters` &lt;Object&gt; [Share parameters](#share-parameters). Default to an object with the title property equal to the current page title.
- Returns: &lt;String&gt;

Returns a share popup URL.

<details>
<summary>Examples</summary>
Get the share popup URL for the current page:

```js
var link = sharon.twitter.href();
```

With a custom title:

```js
var link = sharon.twitter.href({title: 'Check it out'});
```

For example.com:

```js
var link = sharon.twitter.href('http://example.com');
```

For example.com with a custom title:

```js
var link = sharon.twitter.href('http://example.com', {title: 'Check it out'});
```
</details>


### sharon.*network*.count(url = location.href, callback)

- `url` &lt;String&gt; The URL of which to retrive the share count. Defaults to the current location.
- `callback` &lt;Function(err, count)&gt; A callback function that receives the count.

Retrieves the share count of a URL.

<details>
<summary>Examples</summary>
Share count for the current page:

```js
sharon.facebook.count(function (err, count) {
  if (err) throw err;
  console.log(count);
});
```

For example.com:

```js
sharon.facebook.count('http://example.com', function (err, count) {
  if (err) throw err;
  console.log(count);
});
```
</details>


### Share parameters

When using <code>sharon.*network*</code> or <code>sharon.*network*.href</code> functions you can specify the share parameters by passing an object as the last argument. They are added to the query parameters of the share popup URL and are specifying additional features:

```js
sharon.twitter({
  title: 'One last quarter as defending champs!',
  hashtags: ['SuperBowl', 'DenverBroncos']
});
```

This produces a popup with a predefined title and hashtags:

![Example][media-example]

The set of the features is different for the most of the social networks. To find them out check their documentation, links to which are provided in the [Supported social networks](#supported-social-networks) table.

There is an inconsistency between different networks: for instance, Twitter expects the `text` parameter to contain a link title, while Pinterest expects the `description` one. Sharon normalizes this behavior: when you pass a `title` parameter it&apos;s automatically translated into a one that corresponds to a chosen network.

## More examples

### Poor man&apos;s tweet button

```html
<button type="button" onclick="sharon.twitter()">Tweet</button>
```

### Angular

```html
<a ng-click="share($event)" ng-href="{{href}}">Share on Facebook {{count}}</a>
```

```js
$scope.href = sharon.facebook.href();

$scope.share = function (event) {
  event.preventDefault();
  sharon.facebook();
};

sharon.facebook.count(function (err, count) {
  if (err) throw err;

  $scope.$apply(function () {
    $scope.count = count;
  });
});
```

### React component

```jsx
class LinkedInShareButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {href: sharon.linkedin.href()};

    sharon.linkedin.count((err, count) => {
      if (err) throw err;
      this.setState({count});
    });
  }

  share(event) {
    event.preventDefault();
    sharon.linkedin();
  }

  render() {
    return <a onClick={this.share} href={this.state.href}>Share on LinkedIn {this.state.count}</a>;
  }
}
```

![:heart:][media-heart]

[download]: https://github.com/borodean/sharon/releases/download/1.0.0/sharon-1.0.0.min.js
[download-map]: https://github.com/borodean/sharon/releases/download/1.0.0/sharon-1.0.0.min.js.map
[media-example]: media/example.png
[media-heart]: https://cdn.rawgit.com/borodean/sharon/1.0.0/media/heart.svg
[media-sharon]: https://cdn.rawgit.com/borodean/sharon/1.0.0/media/sharon.svg
[params-buffer]: https://buffer.com/extras/button
[params-linkedin]: https://developer.linkedin.com/docs/share-on-linkedin
[params-pinterest]: https://developers.pinterest.com/docs/widgets/save
[params-plus]: https://developers.google.com/+/web/share/#sharelink-endpoint
[params-tumblr]: https://www.tumblr.com/docs/en/share_button
[params-twitter]: https://dev.twitter.com/web/tweet-button/web-intent
[params-xing]: https://dev.xing.com/plugins/share_button/docs
[saucelabs]: https://saucelabs.com/u/borodean-sharon
[saucelabs-badge]: https://saucelabs.com/browser-matrix/borodean-sharon.svg
