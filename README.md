# vue-pwa-boilerplate

> A full-featured [PWA](https://developers.google.com/web/progressive-web-apps/) template with webpack, hot-reload, lint-on-save, unit testing & css extraction.

> This template is Vue 2.0 compatible.

> This is a fork of official pwa template. It adds a TypeScript option and allow building components with 
standard .js/.ts files using external .css and .html files. Developer still benefit of Hot Module Reload and 
scoped CSS though.

## Why using this fork ?

You should really consider using this fork if ...

- You have issues with `.vue` files in your favorite code editor.
- You want to stick to pure `.js`/`.ts` files for some reason.
- You don't want to put HTML, CSS & Script in a single file.

## Known issues with `.vue` files and TypeScript

- Intellij IDEA (and probably others) can't resolve TypeScript modules coming from `.vue` files, making navigation in a vue project really 
painfull.
- [tslint doesn't support `.vue` files](https://github.com/palantir/tslint/issues/2099).

Despite those issues exists, you can still import `.vue` [Single Files Components](https://vuejs.org/v2/guide/single-file-components.html) with this 
boilerplate from your own code or dependency.

## Documentation

- This template builds on top of the main webpack template, so please refer to the [webpack template docs](http://vuejs-templates.github.io/webpack).
- [For this template](http://toilal.github.io/vue-webpack-template): common questions specific to this template are answered and each part is described in greater detail
- Check out the [official Vue.js guide](http://vuejs.org/guide/) for general information about Vue that is not specific to this template.

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli). **It is recommended to use npm 3+ or [yarn](https://yarnpkg.com) for a more efficient dependency tree.**

``` bash
$ npm install -g vue-cli
$ vue init pwa my-project
$ cd my-project
$ npm install
$ npm run dev
```

If port 8080 is already in use on your machine you must change the port number in `/config/index.js`. Otherwise `npm run dev` will fail.

## What's Included

* Service Worker precaching of application shell + static assets (prod)
* Script (async chunk) preloading using `<link rel="preload">`
* Web Application Manifest + favicons
* Mobile-friendly meta-viewport
* Lighthouse score of 90+/100

- `npm run dev`: first-in-class development experience.
  - Webpack + `vue-template-loader` + `vue-hot-reload-loader` for Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with proper URLs to these generated assets.
  - Use `npm run build --report`to build with bundle size analytics.
  - Generates a Service Worker for offline caching your static assets using [sw-precache-webpack-plugin](https://www.npmjs.com/package/sw-precache-webpack-plugin)

- `npm run unit`: Unit tests run in PhantomJS with [Karma](http://karma-runner.github.io/0.13/index.html) + [Mocha](http://mochajs.org/) + [karma-webpack](https://github.com/webpack/karma-webpack).
  - Supports ES2015+ in test files.
  - Supports all webpack loaders.
  - Easy mock injection.

- `npm run e2e`: End-to-end tests with [Nightwatch](http://nightwatchjs.org/).
  - Run tests in multiple browsers in parallel.
  - Works with one command out of the box:
    - Selenium and chromedriver dependencies automatically handled.
    - Automatically spawns the Selenium server.

### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `vue-cli`:

``` bash
vue init username/repo my-project
```
