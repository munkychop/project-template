'use strict';

require('modules/module-a');

var swiftclick = require('swiftclick');

document.addEventListener('DOMContentLoaded', init);

function init () {
    swiftclick.attach(document.body);
}