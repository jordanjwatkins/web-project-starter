'use strict';

module.exports = function (grunt) {
    grunt.registerTask('test', 'concurrent:test');
    grunt.registerTask('testBabelify', 'concurrent:testBabelify');
};
