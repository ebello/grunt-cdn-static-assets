/*
 * grunt-cdn-static-assets
 * https://github.com/ebello/grunt-cdn-static-assets
 *
 * Copyright (c) 2014 Ernie Bello
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    cdn_static_assets: {
      default_options: {
        options: {
          cdn: '//cdn.example.com',
          directory: 'test/fixtures',
        },
        files: [{
          expand: true,
          cwd: 'test/fixtures',
          src: '**/*.{css,js,html}',
          dest: 'tmp/default_options'
        }]
      },
      trailing_slash: {
        options: {
          cdn: '//cdn.example.com/',
          directory: '<%= cdn_static_assets.default_options.options.directory %>',
        },
        files: {
          'tmp/trailing_slash/sample.js': 'test/fixtures/sample.js',
          'tmp/trailing_slash/sample.css': 'test/fixtures/sample.css',
          'tmp/trailing_slash/sample.html': 'test/fixtures/sample.html'
        }
      },
      no_js_css: {
        options: {
          cdn: '//cdn.example.com',
          directory: 'test/fixtures',
          staticAssetExtensions: ['ico', 'jpg', 'png', 'gif', 'svg']
        },
        files: {
          'tmp/no_js_css/sample.js': 'test/fixtures/sample.js',
          'tmp/no_js_css/sample.css': 'test/fixtures/sample.css',
          'tmp/no_js_css/sample.html': 'test/fixtures/sample.html'
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'cdn_static_assets', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
