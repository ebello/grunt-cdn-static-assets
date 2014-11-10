# grunt-cdn-static-assets

> Prepends a CDN url to any url that matches a provided set of static assets

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-cdn-static-assets --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-cdn-static-assets');
```

## The "cdn_static_assets" task

### Overview
In your project's Gruntfile, add a section named `cdn_static_assets` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  cdn_static_assets: {
    options: {
      cdn: '//cdn.example.com', // CDN url
      directory: 'test/fixtures' // directory in your project to search for static assets
    },
    your_target: {
      // Files to search for static assets go here
    },
  },
});
```

### Options

#### options.cdn
Type: `String`
Default value: `''`

The CDN url where you are hosting your static assets.

#### options.directory
Type: `String`
Default value: `''`

The directory in your project to search for static assets.

#### options.staticAssetExtensions
Type: `Array`
Default value: `['css', 'js', 'ico', 'jpg', 'png', 'gif', 'svg']`

Files with these extensions found in `options.directory` will be considered a static asset. They will be prefixed with the CDN in the files to be searched.

### Usage Examples

#### Default Options
In this example, all static assets in the `build` directory will be prepended with the CDN url of `//cdn.example.com` across all CSS, JS, and HTML files in the `build` directory.

```js
grunt.initConfig({
  cdn_static_assets: {
    options: {
      cdn: '//cdn.example.com',
      directory: 'build'
    },
    files: [{
      expand: true,
      cwd: 'build',
      src: '**/*.{css,js,html}',
      dest: 'build'
    }]
  },
});
```

#### Custom Options
In this example, only JS and CSS files will be considered static assets.

```js
grunt.initConfig({
  cdn_static_assets: {
    options: {
      cdn: '//cdn.example.com',
      directory: 'build',
      staticAssetExtensions: ['css', 'js']
    },
    files: [{
      expand: true,
      cwd: 'build',
      src: '**/*.{css,js,html}',
      dest: 'build'
    }]
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* 2014-11-10   v1.0.0   First release
