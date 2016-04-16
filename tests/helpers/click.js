'use strict';

function click(el) {
    var event = document.createEvent('MouseEvent');

    el = (el.hasOwnProperty('selector')) ? el[0] : el;

    event.initMouseEvent('click', true, true, window, null, 0, 0, 0, 0, false, false, false, false, 0, null);

    el.dispatchEvent(event);
}

module.exports = click;
