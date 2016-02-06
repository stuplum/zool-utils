'use strict';

const colors = require('colors');

colors.setTheme({
    info: 'green',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});

class ZoolLogger {

    constructor(label) {
        this.label = label;
    }

    log(key, val) {
        console.log(` ${this.label}: `, `${key}: `.gray, val.cyan);
    }

    debug(key, val) {
        console.log(` ${this.label}: `.debug, `${key}: `.gray, val.cyan);
    }

    error(key, val) {
        console.error(` ${this.label}: `.error, `${key}: `.gray, val.cyan);
    }

    warn(key, val) {
        console.warn(` ${this.label}: `.warn, `${key}: `.gray, val.cyan);
    }
}

module.exports = label => new ZoolLogger(label);
