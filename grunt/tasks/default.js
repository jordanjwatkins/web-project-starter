'use strict';

module.exports = function (grunt) {
    grunt.registerTask('default', 'dev');

    grunt.registerTask('dev', [
        'postcss',
        'concurrent:dev'
    ]);

    grunt.registerTask('devBabelify', [
        'postcss',
        'concurrent:devBabelify'
    ]);

    grunt.registerTask('devBabelifyReact', [
        'postcss',
        'concurrent:devBabelifyReact'
    ]);
};
