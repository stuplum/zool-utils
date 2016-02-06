'use strict';

const zoolLogger = require('../').ZoolLogger;

describe('zool-logger', function () {

    beforeEach(function () {
        sinon.spy(console, 'log');
        sinon.spy(console, 'error');
        sinon.spy(console, 'warn');
    });

    afterEach(function () {
        console.log.restore();
        console.error.restore();
        console.warn.restore();
    });

    it('log with colors', function () {

        // Given:
            const logger = zoolLogger('some-label');

        // When:
            logger.log('some-key', 'some-val');

        // Then:
            expect(console.log).to.have.been.calledWith(' some-label: ', '\u001b[90msome-key: \u001b[39m', '\u001b[36msome-val\u001b[39m');

    });

    it('log debug message with colors', function () {

        // Given:
            const logger = zoolLogger('some-debug-label');

        // When:
            logger.debug('some-debug-key', 'some-debug-val');

        // Then:
            expect(console.log).to.have.been.calledWith('\u001b[34m some-debug-label: \u001b[39m', '\u001b[90msome-debug-key: \u001b[39m', '\u001b[36msome-debug-val\u001b[39m' );

    });

    it('log error message with colors', function () {

        // Given:
            const logger = zoolLogger('some-error-label');

        // When:
            logger.error('some-error-key', 'some-error-val');

        // Then:
            expect(console.error).to.have.been.calledWith('\u001b[31m some-error-label: \u001b[39m', '\u001b[90msome-error-key: \u001b[39m', '\u001b[36msome-error-val\u001b[39m');

    });

    it('log warn message with colors', function () {

        // Given:
            const logger = zoolLogger('some-warn-label');

        // When:
            logger.warn('some-warn-key', 'some-warn-val');

        // Then:
            expect(console.warn).to.have.been.calledWith('\u001b[33m some-warn-label: \u001b[39m', '\u001b[90msome-warn-key: \u001b[39m', '\u001b[36msome-warn-val\u001b[39m');

    });

});
