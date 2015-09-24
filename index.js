var dir;

try {
    dir = require.resolve('beyond.js');
}
catch (exc) {
    dir = require('path').resolve(__dirname, '../../lib');
}

module.exports = dir;
