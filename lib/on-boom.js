'use strict';

module.exports = function onBoom(cb, who) {

    return (request, reply) => {

        function isFrom(from) {
            return request.response.data ? request.response.data.from === from : false;
        }

        if (Boolean(request.response.isBoom) && isFrom(who)) {
            return cb(request, reply)
        }

        reply.continue();
    };
};