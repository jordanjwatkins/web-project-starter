'use strict';

var dom = require('./libs/dom.js'),
    app = require('./app.js');

dom.ready(init);

function init() {
    app();
}
