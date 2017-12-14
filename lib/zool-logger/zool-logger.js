'use strict';

const colors = require('colors');
const stringifyObject = require('stringify-object');

const theme = {
    log: 'white',
    info: 'green',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
};

colors.setTheme(theme);

function asString(val) {
    return typeof val === 'string' ? val : stringifyObject(val);
}

function toConsole(type, label, key, val) {
    console.log(`[${label}]`[theme[type]], `${key}: `.gray, asString(val).cyan);
}

class ZoolLogger {

    constructor(label) {
        this.label = label;
    }

    log(key, val) {
        toConsole('log', this.label, key, val);
    }

    debug(key, val) {
        toConsole('debug', this.label, key, val);
    }

    error(key, val) {
        toConsole('error', this.label, key, val);
    }

    warn(key, val) {
        toConsole('warn', this.label, key, val);
    }
}

module.exports = label => new ZoolLogger(label);
