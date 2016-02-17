'use strict';

const onBoom = require('../').onBoom;

describe('on-boom', function () {

    let mockRequest;
    let mockReply;

    beforeEach(function () {
        mockRequest = { response: {} };
        mockReply = { continue: sinon.stub() };
    });

    it('should call callback if request has a Boom error and comes expected request', function () {

        // Given:
            const successStub = sinon.stub();
            const boomer = onBoom(successStub,'some-request');

        // And:
            mockRequest.response.isBoom = true;
            mockRequest.response.data = { from: 'some-request' };

        // When:
            boomer(mockRequest, mockReply);

        // Then:
            expect(successStub).to.have.been.calledWith(mockRequest, mockReply);

        // And:
            expect(mockReply.continue).not.to.have.been.called;

    });

    it('should not call callback if request has a Boom error but does not come expected request', function () {

        // Given:
            const successStub = sinon.stub();
            const boomer = onBoom(successStub,'some-request');

        // And:
            mockRequest.response.isBoom = true;
            mockRequest.response.data = { from: 'someone-else' };

        // When:
            boomer(mockRequest, mockReply);

        // Then:
            expect(successStub).not.to.have.been.called;

        // And:
            expect(mockReply.continue).to.have.been.called;

    });

    it('should not call callback if request has a Boom error but we don\'t know where it came from', function () {

        // Given:
            const successStub = sinon.stub();
            const boomer = onBoom(successStub,'some-request');

        // And:
            mockRequest.response.isBoom = true;

        // When:
            boomer(mockRequest, mockReply);

        // Then:
            expect(successStub).not.to.have.been.called;

        // And:
            expect(mockReply.continue).to.have.been.called;

    });

    it('should not call callback if request does not have a Boom error and comes from expected request', function () {

        // Given:
            const successStub = sinon.stub();
            const boomer = onBoom(successStub,'some-request');

        // And:
            mockRequest.response.isBoom = false;
            mockRequest.response.data = { from: 'some-request' };

        // When:
            boomer(mockRequest, mockReply);

        // Then:
            expect(successStub).not.to.have.been.called;

        // And:
            expect(mockReply.continue).to.have.been.called;

    });

    it('should not call callback if request does not have a Boom error and comes from some where else', function () {

        // Given:
            const successStub = sinon.stub();
            const boomer = onBoom(successStub,'some-request');

        // And:
            mockRequest.response.isBoom = false;
            mockRequest.response.data = { from: 'someone-else' };

        // When:
            boomer(mockRequest, mockReply);

        // Then:
            expect(successStub).not.to.have.been.called;

        // And:
            expect(mockReply.continue).to.have.been.called;

    });

    it('should not call callback if request does not have a Boom error but we don\'t know where it comes from ', function () {

        // Given:
            const successStub = sinon.stub();
            const boomer = onBoom(successStub,'some-request');

        // And:
            mockRequest.response.isBoom = false;

        // When:
            boomer(mockRequest, mockReply);

        // Then:
            expect(successStub).not.to.have.been.called;

        // And:
            expect(mockReply.continue).to.have.been.called;

    });

});
