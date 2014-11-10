/*
 * grunt-cdn-static-assets
 * https://github.com/ebello/grunt-cdn-static-assets
 *
 * Copyright (c) 2014 Ernie Bello
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('cdn_static_assets', 'Prepends a CDN url to any url that matches a provided set of static assets', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      cdn: '',
      directory: '',
      staticAssetExtensions: ['css', 'js', 'ico', 'jpg', 'png', 'gif', 'svg']
    });

    // remove trailing slashes from end of cdn
    options.cdn = options.cdn.replace(/\/+$/, '');

    if (!grunt.file.isDir(options.directory)) {
      grunt.log.warn('Source  "' + options.directory + '" is not directory.');
      return false;
    }

    if (grunt.util.kindOf(options.staticAssetExtensions) !== 'array') {
      grunt.fatal('staticAssetExtensions must be an array of extensions. Ex: [\'css\', \'js\']');
    }

    var staticAssets = grunt.file.expand({cwd: options.directory, matchBase: true}, options.staticAssetExtensions.map(function(ext) {
      return '*.' + ext;
    }));

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      })[0];

      // prefix each static asset with the CDN
      staticAssets.forEach(function(asset) {
        var regex = new RegExp('/?(' + asset + ')', 'gim');
        src = src.replace(regex, options.cdn + '/' + '$1');
      });

      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
