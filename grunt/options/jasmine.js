'use strict';

module.exports = {
    all: {
        src: 'build/test_bundle.js',
        options: {
            keepRunner: true,
            vendor: [
                'http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js',
                'node_modules/jasmine-jquery/lib/jasmine-jquery.js'
            ]
        }
    }
};
