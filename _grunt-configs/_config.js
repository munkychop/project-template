'use strict';

var _ = require('underscore');

module.exports = function (grunt) {

    var _sharedConfig = {
        srcDir : 'src/',
        distDir : 'dist/',
        tmpDir : 'tmp/'
    };

    var _jsTasks = require('./javascript')(grunt, _sharedConfig).tasks;
    var _cssTasks = require('./css')(grunt, _sharedConfig).tasks;
    var _imageTasks = require('./images')(grunt, _sharedConfig).tasks;
    var _watchTasks = require('./watch')(grunt, _sharedConfig).tasks;
    var _serverTasks = require('./server')(grunt, _sharedConfig).tasks;
    var _utilities = require('./utilities')(grunt, _sharedConfig).tasks;

    // console.log('_serverTasks:', _serverTasks);
    
    var _mergedTasks = _.extend(_sharedConfig, _jsTasks, _cssTasks, _imageTasks, _watchTasks, _serverTasks, _utilities);

    return _mergedTasks;
};