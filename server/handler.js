'use strict';

module.exports.hello = async event => {
    const time = new Date()

    return {
        statusCode: 200,
        body: JSON.stringify({ time }),
    };
};
