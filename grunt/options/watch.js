'use strict';

module.exports = {
    livereload: {
        options: {
            livereload: true
        },
        files: [
            'build/index.js',
            'build/css/app.css'
        ]
    },

    postcss: {
        files: ['src/css/*.css'],
        tasks: ['postcss']
    },

    test: {
        files: 'build/test_bundle.js',
        tasks: ['jasmine']
    }
};
