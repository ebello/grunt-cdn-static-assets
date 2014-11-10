'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.cdn_static_assets = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(3);

    var actualjs = grunt.file.read('tmp/default_options/sample.js');
    var expectedjs = grunt.file.read('test/expected/sample.js');
    test.equal(actualjs, expectedjs, 'should add CDN for files referenced in JS files.');

    var actualcss = grunt.file.read('tmp/default_options/sample.css');
    var expectedcss = grunt.file.read('test/expected/sample.css');
    test.equal(actualcss, expectedcss, 'should add CDN for files referenced in CSS files.');

    var actualhtml = grunt.file.read('tmp/default_options/sample.html');
    var expectedhtml = grunt.file.read('test/expected/sample.html');
    test.equal(actualhtml, expectedhtml, 'should add CDN for files referenced in HTML files.');

    test.done();
  },
  trailing_slash: function(test) {
    test.expect(3);

    var actualjs = grunt.file.read('tmp/trailing_slash/sample.js');
    var expectedjs = grunt.file.read('test/expected/sample.js');
    test.equal(actualjs, expectedjs, 'should add CDN for files referenced in JS files.');

    var actualcss = grunt.file.read('tmp/trailing_slash/sample.css');
    var expectedcss = grunt.file.read('test/expected/sample.css');
    test.equal(actualcss, expectedcss, 'should add CDN for files referenced in CSS files.');

    var actualhtml = grunt.file.read('tmp/trailing_slash/sample.html');
    var expectedhtml = grunt.file.read('test/expected/sample.html');
    test.equal(actualhtml, expectedhtml, 'should add CDN for files referenced in HTML files.');


    test.done();
  },
  no_js_css: function(test) {
    test.expect(3);

    var actualjs = grunt.file.read('tmp/no_js_css/sample.js');
    var expectedjs = grunt.file.read('test/expected/no_js_css/sample.js');
    test.equal(actualjs, expectedjs, 'should add CDN for files referenced in JS files.');

    var actualcss = grunt.file.read('tmp/no_js_css/sample.css');
    var expectedcss = grunt.file.read('test/expected/sample.css');
    test.equal(actualcss, expectedcss, 'should add CDN for files referenced in CSS files.');

    var actualhtml = grunt.file.read('tmp/no_js_css/sample.html');
    var expectedhtml = grunt.file.read('test/expected/no_js_css/sample.html');
    test.equal(actualhtml, expectedhtml, 'should add CDN for files referenced in HTML files.');


    test.done();
  },
};
