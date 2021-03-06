'use strict';

module.exports = {
    options: {
        logConcurrentOutput: true
    },

    dev: {
        tasks: [
            'watch:livereload',
            'watch:postcss',
            'browserify:app',
            'connect'
        ]
    },

    devBabelify: {
        tasks: [
            'watch:livereload',
            'watch:postcss',
            'browserify:appBabelify',
            'connect'
        ]
    },

    devBabelifyReact: {
        tasks: [
            'watch:livereload',
            'watch:postcss',
            'browserify:appBabelifyReact',
            'connect'
        ]
    },

    test: {
        tasks: [
            'watch:test',
            'browserify:test'
        ]
    },

    testBabelify: {
        tasks: [
            'watch:test',
            'browserify:testBabelify'
        ]
    }
};
