# react-html5video

A simple customizeable HTML5 Video that uses the familiar HTML5 video markup but with added custom and configurable controls.

<img src="http://mderrick.github.io/react-html5video/example.png" align="center" height="262" width="633" />

View the [demo](http://mderrick.github.io/react-html5video/).

## Install

`npm install react-html5video --save`

Include `dist/ReactHtml5Video.css` if you do not want to build your own CSS. Alternatively require `src/assets/video.css` if you want to compile the CSS yourself with [css-loaders](https://github.com/webpack/css-loader) and [url-loaders](https://github.com/webpack/url-loader) etc. See the demo [Webpack config](https://github.com/mderrick/react-html5video/blob/master/demo/webpack.config.js) as an example.

### Peer Dependencies

This component uses ES2015 and needs to be transpiled using something like [babel-loader](https://github.com/babel/babel-loader). It depends on:
- `react@0.14.x`
- `react-dom@0.14.x`
- `react-addons-pure-render-mixin@0.14.x`
- `lodash.throttle@latest`.

### UMD

If using the UMD module it is already transpiled to ES5 and `lodash.throttle` is included. You can find this build in the `dist` directory:

```js
// Includes lodash.throttle and is transpiled already
var Video = require('react-html5video/dist/ReactHtml5Video');  
```

```js
// Exports to this global
var Video = window.ReactHtml5Video;
```

```js
// Requires es6 transpiling and all peer dependencies installed
import { Video as Default, Controls, Play, Mute, Seek, Fullscreen } from 'react-html5video';
```


## Usage

Use normal HTML5 `<video>` markup with all the standard [html attributes](https://developer.mozilla.org/en/docs/Web/HTML/Element/video) and configure the controls by adding, removing and shuffling them as you desire.

```js
import { Video as default, Controls, Mute, Play, Seek, Fullscreen } from 'react-html5video';
render() {
    return (
        <Video controls autoPlay loop muted poster="http://sourceposter.jpg">
            <source src="http://sourcefile.mp4" type="video/mp4" />
            <source src="http://sourcefile.webm" type="video/webm" />
            <h1>Optional HTML and components can be added too</h1>
            <CustomComponent />
            <Controls>
                <Play />
                <Seek />
                <Mute />
                <Fullscreen />
                <CustomControlComponent />
            </Controls>
        </Video>
    );
}
```

You can create your very own custom children components and controls that can interact with the video. All children components will receive [these props](#props-and-methods). Obviously you can still call methods and set properties on the HTML5 DOM element directly if you have access to it with `refs`.


## Props and Methods

All children components will receive the following properties via props:
- `duration`
- `currentTime`
- `buffered`
- `paused`
- `muted`
- `volume`
- `percentageBuffered`
- `percentagePlayed`

All children components receive the following methods via props:
- `play`
- `pause`
- `togglePlay`
- `mute`
- `unmute`
- `toggleMute`
- `seek`
- `fullscreen`
- `setVolume`


## License
MIT
